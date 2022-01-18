import React, { useState, useEffect } from 'react'

const Index = () => {

    const [arrayNumero, setArrayNumero] = useState(Array(101));

    const ejecutar = () => {

        for (let i = 0; i < arrayNumero.length; i++) {
            arrayNumero[i] = i
            setArrayNumero([...arrayNumero])
        }
    }

    //para que carge los datos al entrar al sitio web
    useEffect(() => {
        ejecutar()
    }, []);

    return (
        <div className='container'>

            <h1 className='titulo'>Ejercicio 1-a</h1>
            <p>Desarrolla un algoritmo que imprima los números del 0 al 100. Adicionalmente debe
                imprimirse en la misma línea la palabra buzz en caso de que el número sea par. Sí el
                número es múltiplo de 5 debe imprimirse en la misma línea la palabra bazz.
            </p>
            <br />
            <h3>Listado de números:</h3>
            
            <br/>
            <ul>
                {
                    arrayNumero.map((item, index) => {//recorro el arreglo 
                        if (item % 2 === 0) {//si es par
                            return (
                                <li key={index}>
                                    {item} - {"buzz"}
                                </li>

                            )

                        }
                        else if (item % 5 === 0) {//si es múltiplo de 5
                            return (
                                <li key={index} >
                                    {item} - {"bazzz"}
                                </li>
                            )
                        }
                        else {//sino es ni par ni multimplo de 5
                            return (
                                <li key={index} >
                                    {item} -
                                </li>
                            )

                        }

                    })
                }
            </ul>
        </div>
    )
}

export default Index;






