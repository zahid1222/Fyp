<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VenueDeatils extends Model
{
    protected $guarded=[];
    protected $fillable = [
        'name',
        'location',
        'parking',
        'price',
        'ownername',
        'theme',
        'menu',
        'type',
        'guest',
        'city',
        'lat',
        'long',
        'availability',
        'img'
    ];
    
    use HasFactory;
}
