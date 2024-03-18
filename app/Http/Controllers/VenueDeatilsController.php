<?php

namespace App\Http\Controllers;

use App\Models\VenueDeatils;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class VenueDeatilsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $availability = $request->input('availability');
        $city = $request->input('city');
        $type = $request->input('type');

        $query = VenueDeatils::query();

        if ($availability) {
            $query->where('availability', $availability);
        }

        if ($city) {
            $query->where('city', $city);
        }

        if ($type) {
            $query->where('type', $type);
        }

        $data = $query->get();

        return response()->json($data);

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
            $venueDetails = new VenueDeatils;
        
            // Handle the image upload
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
                $venueDetails->img = $imageName;
            } else {
                return response()->json([
                    'status' => 500,
                    'message' => "Image file not found in the request.",
                ]);
            }
        
            // Assign other input values to the model
            $venueDetails->name = $request->input('name');
            $venueDetails->location = $request->input('location');
            $venueDetails->parking = $request->input('parking');
            $venueDetails->price = $request->input('price');
            $venueDetails->ownername = $request->input('ownername');
            $venueDetails->theme = $request->input('theme');
            $venueDetails->menu = $request->input('menu');
            $venueDetails->type = $request->input('type');
            $venueDetails->guest = $request->input('guest');
            $venueDetails->city = $request->input('city');
            $venueDetails->lat = $request->input('lat');
            $venueDetails->long = $request->input('long');
            $venueDetails->availability = $request->input('availability');
            $venueDetails->save();
        
            return response()->json([
                'status' => 200,
                'message' => "Image uploaded and data added successfully",
            ]);
        } catch (\Exception $e) {
            // Log the error for debugging purposes
            Log::error($e->getMessage());
        
            return response()->json([
                'status' => 500,
                'message' => "Error uploading the image file or saving the data.",$venueDetails->img,
            ]);
        }
        
        
}

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VenueDeatils  $venueDeatils
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, VenueDetails $venueDetails)
    {
        $type = $request->input('type');
    
        // Retrieve data based on the dynamic type parameter
        $data = VenueDetails::where('type', $type)->get();
        
        // You can then pass the data to your view or perform any other operations
        return view('your-view', ['data' => $data]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VenueDeatils  $venueDeatils
     * @return \Illuminate\Http\Response
     */
    public function edit(VenueDeatils $venueDeatils)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\VenueDeatils  $venueDeatils
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VenueDeatils $venueDeatils)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VenueDeatils  $venueDeatils
     * @return \Illuminate\Http\Response
     */
    public function destroy(VenueDeatils $venueDeatils)
    {
        //
    }
}
