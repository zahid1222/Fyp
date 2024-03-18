<?php

namespace App\Http\Controllers;

use App\Models\Venueowner;
use Illuminate\Http\Request;

class VenueownerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Venueowner::all();
    
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
        $Venueowner=new Venueowner;
        $Venueowner->name=$request->input('name');
        $Venueowner->Venueid=$request->input('Venueid');
        $Venueowner->ownerid=$request->input('ownerid');
        $Venueowner->phonenumber=$request->input('phonenumber');
        $Venueowner->deatils=$request->input('deatils');
        $Venueowner->email=$request->input('email');
        $Venueowner->address=$request->input('address');
        $Venueowner->save();

        return response()->json([
            'status'=>200,
            'message'=>"Added sucessfully",
        ]);
    

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Venueowner  $venueowner
     * @return \Illuminate\Http\Response
     */
    public function show(Venueowner $venueowner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Venueowner  $venueowner
     * @return \Illuminate\Http\Response
     */
    public function edit(Venueowner $venueowner)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Venueowner  $venueowner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Venueowner $venueowner)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Venueowner  $venueowner
     * @return \Illuminate\Http\Response
     */
    public function destroy(Venueowner $venueowner)
    {
        //
    }
}
