<?php

namespace App\Http\Controllers;

use App\Models\CancelBooking;
use Illuminate\Http\Request;
use Carbon\Carbon;
class CancelBookingController extends Controller
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
        $cancelBooking = new CancelBooking;
    $cancelBooking->reason = $request->input('reason');
    $cancelBooking->customer_id = $request->input('customer_id');
    $cancelBooking->date = Carbon::now()->toDateString(); // Assign the current date
    $cancelBooking->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CancelBooking  $cancelBooking
     * @return \Illuminate\Http\Response
     */
    public function show(CancelBooking $cancelBooking)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CancelBooking  $cancelBooking
     * @return \Illuminate\Http\Response
     */
    public function edit(CancelBooking $cancelBooking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CancelBooking  $cancelBooking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CancelBooking $cancelBooking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CancelBooking  $cancelBooking
     * @return \Illuminate\Http\Response
     */
    public function destroy(CancelBooking $cancelBooking)
    {
        //
    }
}
