<?php

namespace Fintech\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, string $uri = '')
    {
        return view('admin::app', compact('request', 'uri'));
    }
}
