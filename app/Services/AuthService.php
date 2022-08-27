<?php

namespace App\Services;

use App\Models\User;

class AuthService
{
    public static function createUser($fields): array
    {
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => self::encryptedPassword($fields['password']),
        ]);

        return [
            'user' => $user,
            'token' => self::createToken($user),
        ];
    }

    public static function getUser($fields): array
    {
        $user = User::where('email', $fields['email'])->first();

        if (!$user) {
            throw new \Exception('User doesn`t found!');
        }

        if(!self::comparePassword($user->password, $fields['password'])) {
            throw new \Exception('Password incorrect!');
        }

        return [
            'user' => $user,
            'token' => self::createToken($user),
        ];
    }

    public static function comparePassword(string $userPassword, string $password): bool
    {
        return self::encryptedPassword($password) === $userPassword;
    }

    public static function encryptedPassword(string $password): string
    {
        return crypt($password, env('APP_KEY'));
    }

    public static function createToken($user): string
    {
        return $user->createToken($user->name)->plainTextToken;
    }
}
