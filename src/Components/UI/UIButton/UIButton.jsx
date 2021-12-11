
import React from 'react'

export const Buscar = ({ PersonBuscar, setPersonBuscar }) => {
	const handleInput = ({ target }) => {
		setPersonBuscar(target.value)
	}

	return (
		<section className='filtrar'>
			<input
				type='text' placeholder='Nombre del personaje'name='buscarqueda'
				onChange={handleInput} value={PersonBuscar}/>
		</section>
	)
}