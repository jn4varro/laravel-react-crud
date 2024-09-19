<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nota extends Model
{
    use HasFactory;

    protected $table = 'notas';// especificar el nombre de la tabla

    protected $fillable = [
        'nota' //definir la columna de la tabla que se puede manipular
    ];


}
