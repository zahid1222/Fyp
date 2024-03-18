<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVenueDeatilsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('venue_deatils', function (Blueprint $table) {
            $table->id();
            $table->string('img')->nullable();
            
            $table->string('ownername');
            $table->string('name');
            $table->string('type');
            $table->string('city');
            $table->string('location');
            $table->string('parking')->nullable();
            $table->integer('price');
            $table->string('menu');
            $table->string('guest');
            $table->string('theme');
            $table->string('lat');
            $table->string('long');
            $table->date('availability');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('venue_deatils');
    }
}
