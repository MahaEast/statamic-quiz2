<template>
    <div>
        <div class="main-options">
            <div class="hidden">
                <label>Json string</label>
                <text-input readonly id="json" :value="value" @input="update" placeholder="json string"
                            style="opacity:0.5;"/>
            </div>
            <div class="mt-2 mb-2">
                <label>Quiz title</label>
                <input id="quiz-title" type="text" placeholder="Quiz title" class="input-text"
                       v-on:keyup="title = $event.target.value">
            </div>
        </div>
        <div class="main-settings">
            <div class="mt-2 mb-2 flex">
                <input type="checkbox" id="quiz-checkbox-summary" v-model="summaryCheckbox" class="pr-2"/>
                <label for="quiz-checkbox-summary">Show user summary? (<i>{{ summaryCheckbox }}</i>)</label>
            </div>
            <div class="mt-2 mb-2 flex">
                <input type="checkbox" id="quiz-checkbox-usermail" v-model="usermailCheckbox" class="pr-2"/>
                <label for="checkbox">Require user email? (<i>{{ usermailCheckbox }}</i>)</label>
            </div>
            <div class="mt-2 mb-2">
                <div class="flex">
                    <input type="checkbox" id="quiz-checkbox-message" v-model="showmessageCheckbox" class="pr-2"/>
                    <label for="checkbox">Show specific message when quiz is done? (<i>{{
                            showmessageCheckbox
                        }}</i>)</label>
                </div>
                <div class="mt-2">
                    <label>Message</label>
                    <textarea id="quiz-message" class="input-text"
                              v-on:keyup="message = $event.target.value"></textarea>
                </div>
            </div>
        </div>
        <div v-for="(inputField, index) in inputFields" :key="index"
             class="quiz-elements-wrap border-2 rounded p-2 mt-2">
            <div>
                <div class="mt-2 mb-2">
                    <label><b>({{ index + 1 }})</b> Quiz question</label>
                    <input type="text" placeholder="Question" class="input-text" v-model="inputField.value">
                </div>

            </div>
            <div v-for="(subInputField, subIndex) in inputField.subInputFields" :key="subIndex">
                <div class="mt-2 mb-2 border-2 rounded p-2">
                    <label><b>({{ subIndex + 1 }})</b> Option</label>
                    <input
                        type="text"
                        class="quiz-element-option input-text"
                        placeholder="Option"
                        v-model="subInputField.text"
                    >
                </div>
            </div>
            <button class="btn btn-primary" @click="addSubInputField(index)">Add option</button>
            <div>
                <div class="mt-2 mb-2">
                    <label>Select correct answer</label>
                    <select v-model="inputField.selectedOption">
                        <option
                            v-for="(subInputField, subIndex) in inputField.subInputFields"
                            :value="subIndex"
                            :key="subIndex"
                        >
                            {{ subInputField.text }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <button class="btn btn-primary mt-2" @click="addInputField">Add section</button>
        <button @click="saveColletedData" type="button" class="btn btn-success mt-2">Update</button>
        <hr class="mt-2">
        <div>
            <h2 class="mt-2 mb-2 font-bold">Participants <i>({{answers.length}})</i></h2>
            <div><a href="#" @click="createTextFile" ><u>Download list with participant details</u></a></div>
        </div>

    </div>
</template>

<script>
export default {
    mixins: [Fieldtype],
    data() {
        return {
            title: "",
            summaryCheckbox: false,
            usermailCheckbox: false,
            showmessageCheckbox: false,
            message: "",
            inputFields: [
                {
                    value: '',
                    subInputFields: [{text: ''}],
                    selectedOption: null,
                },
            ],
            answers: [],
            collectedFieldsToData: [],
            optionsArray: [],
            downloadString:""
        };
    },
    mounted() {
        //const entryId = window.location.pathname.split('/')[2];
        const knownData = JSON.parse(this._props.value);
        if (knownData) {
            this.inputFields = [];
            for (let i = 0; i < knownData[0].length; i++) {
                this.appendKnownData(knownData[0][i], i);
            }
            for (let i = 0; i < knownData[1].length; i++) {
                this.appendKnownDataSettings(knownData[1][i], i);
            }
            for (let i = 0; i < knownData[2].length; i++) {
                this.answers.push(knownData[2][i])
                this.downloadString = this.downloadString +
                    knownData[2][i].usermail +  "\n" +
                    knownData[2][i].Date +  "\n" +
                    knownData[2][i].Device +  "\n" +
                    knownData[2][i].IP +  "\n" +
                    knownData[2][i].id +  "\n" +
                    knownData[2][i].answers+  "\n\n";
            }

        } else {
            this.inputFields = [];
        }
    },
    methods: {
        addInputField() {
            this.inputFields.push({
                value: "",
                subInputFields: [{text: ''}],
                selectedOption: null,
            });
        },
        addSubInputField(index) {
            const selectedOptionIndex = this.inputFields[index].selectedOption;
            const selectedOption = this.inputFields[index].subInputFields[selectedOptionIndex];
            this.inputFields[index].subInputFields.push({text: ''});
        },
        saveColletedData() {

            if (this.title && this.message) {
                this.optionsArray.push(this.title, this.message, this.summaryCheckbox, this.usermailCheckbox, this.showmessageCheckbox)
                this.collectedFieldsToData.push(this.inputFields);
                this.collectedFieldsToData.push(this.optionsArray);
                this.collectedFieldsToData.push(this.answers);

                /*axios.get("/save-a-quiz")
                    .then(response => this.totalVuePackages = response.data.total);*/

                const json = JSON.stringify(this.collectedFieldsToData);
                const jsonInput = document.getElementById('json');
                jsonInput.click();
                jsonInput.focus();
                jsonInput.value = json;
                jsonInput.dispatchEvent(new Event('input'));
                this.$toast.success('Updated quiz');
            } else {
                this.$toast.error('Required fields are missing content');
            }


        },
        appendKnownDataSettings(obj, i) {
            switch (i) {
                case 0:
                    // title
                    this.title = obj;
                    let a = document.getElementById('quiz-title');
                    a.click();
                    a.focus();
                    a.value = obj;
                    a.dispatchEvent(new Event('change'));
                    break;
                case 1:
                    // message
                    this.message = obj;
                    let b = document.getElementById('quiz-message');
                    b.click();
                    b.focus();
                    b.value = obj;
                    b.dispatchEvent(new Event('change'));
                    break;
                case 2:
                    this.summaryCheckbox = obj;
                    let c = document.getElementById('quiz-checkbox-summary');
                    c.checked = obj;
                    c.dispatchEvent(new Event('change'));
                    break;
                case 3:
                    // usermail
                    this.usermailCheckbox = obj;
                    let d = document.getElementById('quiz-checkbox-usermail');
                    d.checked = obj;
                    d.dispatchEvent(new Event('change'));
                    break;
                case 4:
                    //quiz-summary
                    this.showmessageCheckbox = obj;
                    let e = document.getElementById('quiz-checkbox-message');
                    e.checked = obj;
                    e.dispatchEvent(new Event('change'));
                    break;
                default:
                // code block
            }
        },
        appendKnownData(obj, i) {
            this.inputFields.push({
                value: obj.value,
                subInputFields: obj.subInputFields,
                selectedOption: obj.selectedOption
            });
        },
        createTextFile() {
            const text = this.downloadString;
            const filename = 'participants.txt';
            const blob = new Blob([text], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.click();
            window.URL.revokeObjectURL(url);
            this.$toast.success('Created file with quiz data');
        }
    }
};
</script>
