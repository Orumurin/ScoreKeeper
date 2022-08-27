<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function login(LoginRequest $request): JsonResponse
    {
        try {
            return response()->json(
                AuthService::getUser($request->all())
            );
        }catch (\Exception $e) {
            return response()->json([
               'message' => $e->getMessage()
            ], 400);
        }
    }

    public function register(RegisterRequest $request): JsonResponse
    {
        return response()->json(
            AuthService::createUser($request->all())
        );
    }
}
