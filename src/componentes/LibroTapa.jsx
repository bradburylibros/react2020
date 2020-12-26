import React from 'react'


export default function LibroTapa({imgPortada}) {

    const url=`http://drive.google.com/uc?export=view&id=${imgPortada}`
    
    return (
        <div>
            <img src={url} className='card-img p-2' alt='Portada' />

        </div>
    )
}
