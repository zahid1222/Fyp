<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Stripe\Stripe;
class PaymentController extends Controller
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
        Stripe::setApiKey('your_stripe_secret_key');
        
        // Create a payment intent
        $paymentIntent = \Stripe\Payment::create([
            'amount' => 1000, // Payment amount in cents
            'currency' => 'usd',
        ]);
        
        return response()->json([
            'clientSecret' => $paymentIntent->client_secret,
        ]);
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
            // Save the payment details to the database
            $payment = new Payment();
          
            $payment->cardholdername = $request->input('cardholderName');
            $payment->amount = $request->input('amount');
           
            $payment->userId= $request->input('userId');
            $payment->save();
            $paymentId = $payment->id;
            return response()->json(['message' => 'Payment details saved successfully','paymentId' => $paymentId], 200);
        } catch (\Exception $e) {
            // Add this line for debugging
            return response()->json(['message' => 'Failed to save payment details'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        //
    }
    public function createPaymentIntent(Request $request)
    {
        $amount = $request->input('amount');
        $cardholderName = $request->input('cardholderName');
        // $Payment=new Payment;
        // $Payment->amount = $amount;
        // $Payment->cardholderName = $cardholderName;
        // $Payment->save();
        // Set your Stripe secret key
        Stripe::setApiKey('sk_test_51NGzwrHZts8xIA3zp1iQj4e52qAc3EzzA0oRdQ0TaUntzkE8BUdrH0VxfiXrwqZ9WUKnDv6xh3mN1SilVIzlmpkQ00IeA6k2G5');
        // Create a payment intent
        $paymentIntent = \Stripe\PaymentIntent::create([
            // Payment amount in cents
            'amount' => $amount,
            'currency' => 'usd',
            'description' => 'Payment for XYZ',
        ]);
        
        return response()->json([
            'clientSecret' => $paymentIntent->client_secret,
        ]);
    }
}