import QuizAddonField from "./components/fieldtypes/QuizAddonField";
Statamic.booting(() => {
    Statamic.$components.register('quiz_addon_field-fieldtype', QuizAddonField);
});

