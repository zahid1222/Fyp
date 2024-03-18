<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormdController;
use App\Http\Controllers\SignupController;
use App\Http\Controllers\VenueDeatilsController;
use App\Http\Controllers\VenueownerController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\CancelBookingController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/submit-form', [FormdController::class, 'store']);
Route::post('/signup-form', [SignupController::class, 'store']);
Route::post('/signin-form', [SignupController::class, 'index']);
Route::post('/venueDetails-form', [VenueDeatilsController::class, 'store']);
Route::get('/Explore-Venue', [VenueDeatilsController::class, 'index']);
Route::post('/venueownerDetails-form', [VenueownerController::class, 'store']);
Route::get('/fetch-venueownerDetails', [VenueownerController::class, 'index']);
Route::post('/create-payment-intent', [PaymentController::class, 'createPaymentIntent']);
Route::post('/save-payment-intent', [PaymentController::class, 'store']);
Route::post('/save-Booking', [BookingController::class, 'store']);
Route::get('/get-Booking', [BookingController::class, 'index']);
Route::get('/types-Venue', [VenueDeatilsController::class, 'index']);
Route::get('/Cancel-Booking', [CancelBookingController::class, 'store']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
