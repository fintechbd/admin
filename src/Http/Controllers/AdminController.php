<?php


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, string $uri = '')
    {
        return view("admin::app", compact('request', 'uri'));
    }
}
