<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Signup extends Model
{
    protected $guarded=[];
    protected $fillable=[
        'name',
        'address',
        'contact',
        'password',
        'email',

        
    ];
    use HasFactory;
}
