<?php

namespace App\Http\Controllers;

use App\Models\Signup;
use Illuminate\Http\Request;

class SignupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

$user = Signup::where('email', $email)
              ->where('password', $password)
              ->first();

if ($user) {
    return response()->json([
        'status' => 200,
        'message' => 'Login successful',
        'user' => $user
    ]);
} else {
    return response()->json([
        'status' => 401,
        'message' => 'Invalid credentials'
    ]);
}

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Signup=new Signup;
        $Signup->name=$request->input('name');
        $Signup->contact=$request->input('contact');
        $Signup->email=$request->input('email');
        $Signup->address=$request->input('address');
        $Signup->password=$request->input('password');
        $Signup->save();
        return response()->json([
            'status'=>200,
            'message'=>"Added sucessfully",
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Signup  $signup
     * @return \Illuminate\Http\Response
     */
    public function show(Signup $signup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Signup  $signup
     * @return \Illuminate\Http\Response
     */
    public function edit(Signup $signup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Signup  $signup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Signup $signup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Signup  $signup
     * @return \Illuminate\Http\Response
     */
    public function destroy(Signup $signup)
    {
        //
    }
}
