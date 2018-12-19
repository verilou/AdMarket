<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        
        return response()->json(compact('token'));
    }
    
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
            
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        
        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);
                
        $token = JWTAuth::fromUser($user);
        
        return response()->json(compact('user','token'),201);
    }

    public function Modify(Request $request) 
    {
        try {
            
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
            
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            
            return response()->json(['token_expired'], $e->getStatusCode());
            
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            
            return response()->json(['token_invalid'], $e->getStatusCode());
            
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            
            return response()->json(['token_absent'], $e->getStatusCode());
            
        }

        $updateUser = ["email" => $request->input('email'), "name" => $request->input('name')];
        
        $alterable = [
            "email" => $user->email,
            "name" => $user->name
        ];

        foreach ($alterable as $key => $value) {
            if (empty($updateUser[$key])) {
                $updateUser[$key] = $alterable[$key];
            }
        }
        
        $validator = Validator::make($updateUser, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        foreach ($updateUser as $key => $value) {
            $user->{$key} = $value;
        }

        $user->save();

        return response()->json(compact('user'), 201);
    }
            
    public function getAuthenticatedUser()
    {
        try {
            
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
            
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            
            return response()->json(['token_expired'], $e->getStatusCode());
            
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            
            return response()->json(['token_invalid'], $e->getStatusCode());
            
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            
            return response()->json(['token_absent'], $e->getStatusCode());
            
        }
        
        return response()->json(compact('user'));
    }
}