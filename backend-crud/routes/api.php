<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NotaController;


Route::get('notas', [NotaController::class, 'index']);
Route::post('notas', [NotaController::class, 'store']);
Route::put('notas/{id}', [NotaController::class, 'update']);
Route::delete('notas/{id}', [NotaController::class, 'destroy']);
