<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;

class UserExist
{
    public function handle(Request $request, Closure $next)
    {
        $user = User::where('email', $request->get('email'))->first();

        return $user ?
            response(['message' => 'This email registered!'], 400) :
            $next($request);
    }
}
