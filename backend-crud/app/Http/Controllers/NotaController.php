<?php

namespace App\Http\Controllers;
use App\Models\Nota;
use Illuminate\Http\Request;

class NotaController extends Controller
{
    //Método Index (un SELECT para los humanos de a pie )
    public function index(){
        $notas = Nota::all();
        return response()->json($notas);
    }

    // Método Store (sería algo como un INSERT INTO)
    public function store(Request $request){
        $validateData = $request->validate([
            'nota' => 'required|string'
        ]);

        $nota = Nota::create($validateData);
        return response()->json($nota, 201);
    }

    // Método Update
    public function update(Request $request, $id){
        // Validar los datos
        $validateData = $request->validate([
            'nota' => 'required|string'
        ]);

        // Buscar la nota
        $nota = Nota::findOrFail($id);

        // Actualizar la nota
        $nota->update($validateData);
        return response()->json($nota);
    }   
    
    // Método Destroy que es un DELETE
    public function destroy($id){
        // Buscar la nota y lanzar error si no existe
        $nota = Nota::findOrFail($id);
        
        // Eliminar la nota
        $nota->delete();

        return response()->json(null, 204);
    }
}
