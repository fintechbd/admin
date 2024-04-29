<?php

namespace Fintech\Admin;

use Fintech\Admin\Commands\AdminCommand;
use Fintech\Admin\Commands\InstallCommand;
use Fintech\Core\Traits\RegisterPackageTrait;
use Illuminate\Support\ServiceProvider;

class AdminServiceProvider extends ServiceProvider
{
    use RegisterPackageTrait;

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->packageCode = 'admin';

        $this->mergeConfigFrom(
            __DIR__.'/../config/admin.php', 'fintech.admin'
        );

        $this->app->register(\Fintech\Admin\Providers\RouteServiceProvider::class);
        $this->app->register(\Fintech\Admin\Providers\RepositoryServiceProvider::class);
    }

    /**
     * Bootstrap any package services.
     */
    public function boot(): void
    {
        $this->injectOnConfig();

        $this->publishes([
            __DIR__.'/../config/admin.php' => config_path('fintech/admin.php'),
        ]);

        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        $this->loadTranslationsFrom(__DIR__.'/../lang', 'admin');

        $this->publishes([
            __DIR__.'/../lang' => $this->app->langPath('vendor/admin'),
        ]);

        $this->loadViewsFrom(__DIR__.'/../resources/views', 'admin');

        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views/vendor/admin'),
        ]);

        if ($this->app->runningInConsole()) {
            $this->commands([
                InstallCommand::class,
                AdminCommand::class,
            ]);
        }
    }
}
