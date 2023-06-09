<?php

namespace Tv2east\Quizaddon;

use Illuminate\Support\Facades\File;
use Statamic\Providers\AddonServiceProvider;
use Tv2east\Quizaddon\Fieldtypes\QuizAddonField;

class ServiceProvider extends AddonServiceProvider
{
    public function bootAddon()
    {
        $this->loadAntlers();
    }

    protected $actions = [
        QuizAddonField::class
    ];

    protected $fieldtypes = [
        QuizAddonField::class
    ];

    protected $scripts = [
        __DIR__ . '/../dist/js/QuizAddon.js',
    ];

    protected function loadAntlers() {
        $existingPath = $this->app->basePath('addons/tv2east/quizaddon/src/Antlers/quiz.antlers.html');
        $newPath = $this->app->basePath('resources/views/quiz.antlers.html');
        if (File::exists($existingPath) && !File::exists($newPath)) {
            File::copy($existingPath, $newPath);
        }
    }
}
