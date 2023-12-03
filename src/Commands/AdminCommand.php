<?php

namespace Fintech\Admin\Commands;

use Illuminate\Console\Command;

class AdminCommand extends Command
{
    public $signature = 'admin';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
