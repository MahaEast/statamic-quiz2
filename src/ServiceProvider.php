<?php

namespace Tv2east\Quizaddon;

use Statamic\Providers\AddonServiceProvider;
use Tv2east\Quizaddon\Fieldtypes\QuizAddonField;

class ServiceProvider extends AddonServiceProvider
{
    public function bootAddon()
    {
        //
    }
    protected $routes = [
        'cp' => __DIR__.'/../routes/cp.php',
    ];

    protected $actions = [
        QuizAddonField::class
    ];

    protected $fieldtypes = [
        QuizAddonField::class
    ];

    protected $scripts = [
        __DIR__ . '/../dist/js/QuizAddon.js',
    ];
}
