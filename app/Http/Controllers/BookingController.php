<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookings = Booking::all();
        
        return response()->json($bookings);
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
        

        try {
            // Validate the request data
            $validatedData = $request->validate([
                'booking.date' => 'required',
                'booking.guest' => 'required',
                'booking.venueName' => 'required',
                'booking.venueId' => 'required',
                'booking.shift' => 'required',
                'paymentid' => 'required',
                'userId' => 'required',
            ]);
        
            // Create a new booking instance
            $booking = Booking::create($validatedData['booking'] + [
                'paymentid' => $validatedData['paymentid'],
                'userId' => $validatedData['userId'],
            ]);
        
            // Return a success response
            return response()->json(['message' => 'Booking created successfully'], 200);
        } catch (\Exception $e) {
            // Return an error response with the error message
            return response()->json(['message' => 'Failed to create booking', 'error' => $e->getMessage()], 500);
        }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $booking)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking)
    {
        //
    }
}
