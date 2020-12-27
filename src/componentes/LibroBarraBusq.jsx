import React from 'react'

export default function LibroBarraBusq({buscarTxt, handleChange}) {

    return (
        <div className='form-group'>
            <input 
            type='text'
            className='form-control'
            name='texto'
            value={buscarTxt.texto}
            onChange={handleChange}
            autoComplete='off'
            placeholder='ingresa texto (titulo, autor, etc)'
            />
            
        </div>
    )
}
