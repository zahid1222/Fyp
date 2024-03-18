<?php

namespace App\Http\Controllers;

use App\Models\Formd;
use Illuminate\Http\Request;

class FormdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $Formd=new Formd;
        $Formd->search=$request->input('search');
        $Formd->area=$request->input('area');
        $Formd->date=$request->input('date');
        $Formd->save();

        return response()->json([
            'status'=>200,
            'message'=>"Added sucessfully",
        ]);

        // Perform any necessary actions, such as storing the data in the database
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Formd  $formd
     * @return \Illuminate\Http\Response
     */
    public function show(Formd $formd)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Formd  $formd
     * @return \Illuminate\Http\Response
     */
    public function edit(Formd $formd)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Formd  $formd
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Formd $formd)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Formd  $formd
     * @return \Illuminate\Http\Response
     */
    public function destroy(Formd $formd)
    {
        //
    }
}
