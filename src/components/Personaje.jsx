import React from 'react'

const Personaje = ({arreglo=[]}) => {
    return (
        <div className='row '>
            {
                arreglo.map((item, index)=>(
                    <div key={index} className='col mb-4 col-md-4 '>
                        <div className='card'>                         
                            <div className='card-boby p-4 bg-light'>
                                <h4 className='card-title'>{item.name}</h4>
                                <hr />
                                <p>
                                   Altura: {item.height} cm
                                </p>
                                <p>
                                    Peso: {item.mass} kg
                                </p>
                                <p>
                                    Genero: {item.gender}
                                </p>
                                <p>
                                    Año de Nacimiento: {item.birth_year}
                                </p>

                            </div>

                        </div>

                    </div>

                ))
            }            
            
        </div>
    )
}



export default Personaje
