import React from 'react';
import axios from 'axios';


const Content = ({ datos, fetchNotas }) => {

    const API_URL = 'http://127.0.0.1:8000/api/notas';
    
    
    const deleteNota = (id) => {
        axios.delete(`${API_URL}/${id}`)
            .then(response => {
                console.log('Nota eliminada', response.data);
                fetchNotas();
            })
            .catch(error => {
                console.log('error al eliminar la nota:', error);
            });
    }
    
    const updateNota = (id) => {

        const nuevaNota = window.prompt('Modifica tu nota: ');
        
        if(nuevaNota !== null && typeof nuevaNota === 'string' && nuevaNota.trim() !== ''){
            console.log('Nota válida:', nuevaNota);

            axios.put(`${API_URL}/${id}`, {nota: nuevaNota})
            .then(response => {
                console.log('Nota actualizada', response.data);
                fetchNotas();
            })
            .catch(error => {
                console.log('error al actualizar la nota:', error);
            });
        }else {
            console.log('Nota no válida:', nuevaNota);
           alert('Introduce un dato válido');
        }   
    }
    
    
    return (
        <div>
            <h3>MIS NOTAS</h3>
            <table className='tablaNotas'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nota</th>

                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(datos) && datos.length > 0 ? (
                        datos.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nota}</td>
                                <td>
                                    <button onClick={ () =>updateNota(item.id)}>Actualizar</button>
                                    <button onClick={ () =>deleteNota(item.id)}>Borrar</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No hay datos disponibles</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Content;
