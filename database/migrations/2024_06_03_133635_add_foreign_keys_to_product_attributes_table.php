<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('product_attributes', function (Blueprint $table) {
            $table->foreign(['product_id'], 'product_attributes_ibfk_1')->references(['id'])->on('products')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign(['attributes_id'], 'product_attributes_ibfk_2')->references(['id'])->on('attributes')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product_attributes', function (Blueprint $table) {
            $table->dropForeign('product_attributes_ibfk_1');
            $table->dropForeign('product_attributes_ibfk_2');
        });
    }
};