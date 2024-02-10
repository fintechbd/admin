<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="app-name" content="{{ config('app.name') }}">

    <link rel="shortcut icon" href="{{ asset('favicon.png') }}">
    <link rel="stylesheet" href="{{ mix('css/app.css', 'vendor/admin') }}">

    <script src="{{ mix('js/main.js', 'vendor/admin') }}"></script>

    @inertiaHead
</head>
<body>
<noscript>
    <h1>
        We're sorry but Fintech Admin doesn't work
        properly without JavaScript enabled.
        Please enable it to continue.
    </h1>
</noscript>
@inertia
</body>
</html>
