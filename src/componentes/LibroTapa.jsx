import React from 'react'

export default function LibroTapa({ imgPortada }) {
	const url = `http://drive.google.com/uc?export=view&id=${imgPortada}`

	return (
		<div>
			<img src={url} height="350px" width="10px" className='card-img p-2' alt='Portada' />
		</div>
	)
}
