import React, { useState, useEffect } from 'react'

const Parte1_a = () => {

    const [listaPokemon] = useState(
          ["audino","bagon", "baltoy", "banette", "bidoof", "braviary", "bronzor", "carracosta", "charmeleon",
          "cresselia", "croagunk", "darmanitan", "deino", "emboar", "emolga", "exeggcute", "gabite", "girafarig",
          "gulpin", "haxorus", "heatmor", "heatran", "ivysaur", "jellicent", "jumpluff", "kangaskhan", "kricketune",
          "landorus", "ledyba", "loudred", "lumineon", "lunatone", "machamp", "magnezone", "mamoswine",
          "nosepass", "petilil","pidgeotto", "pikachu", "pinsir", "poliwrath", "poochyena", "porygon2", "porygonz",
          "registeel", "relicanth", "remoraid", "rufflet", "sableye", "scolipede", "scrafty", "seaking", "sealeo", "silcoon",
          "simisear", "snivy", "snorlax", "spoink", "starly", "tirtouga", "trapinch", "treecko", "tyrogue", "vigoroth", "vulpix",
          "wailord", "wartortle", "whismur", "wingull", "yamask"]
          );
    //const [listaPokemon] = useState(["raquel", "orlando", "orlando", "ruby", "maria", "omar", "omar", "yolanda"]);// debe imprimir: orlando,omar, ruby, yolanda

    const [listaSecuencia, setListaSecuencia] = useState([]);
    const [listaUltimaLetra, setListaUltimaLetra] = useState([]); //[o,n,r,a,o,o,o]
    const [listaAuxiliar, setListaAuxiliar] = useState([]);

    const auxiliar = () => {

        for (let j = 0; j < listaUltimaLetra.length; j++) {

            for (let i = 1; i < listaAuxiliar.length; i++) {
                let cadena = listaAuxiliar[i];
                let primeraLetra = cadena.charAt(0);

                if (listaUltimaLetra[j] === primeraLetra) {
                    listaSecuencia[i] = listaAuxiliar[i]//si encuentra la palabra la guarda en el arreglo listaSecuencia
                }
            }
        }

    }

    const ejecutar = () => {

        for (let i = 0; i < listaPokemon.length; i++) {
            let cadena = listaPokemon[i];//capturo el nombre del pokemon
            listaAuxiliar[i] = cadena
            listaUltimaLetra[i] = cadena.split("")[cadena.length - 1]; //y luego capturo la ultima letra            
            setListaUltimaLetra([...listaUltimaLetra])
            setListaAuxiliar([...listaAuxiliar]);

        }

        auxiliar()

    };

    //quitar los elemento repetidos
    const secuenciaFinal = listaSecuencia.filter((item, index) => {
        return listaSecuencia.indexOf(item) === index;
    })

    //para que carge los datos al entrar al sitio web
    useEffect(() => {


        ejecutar()
    }, []);


    return (
        <div className='container'>
            <h1>Ejercicio 1-b</h1>
            <p>(English) Your task in this exercise is as follows: Take the following selection of 70
                English Pokemon names (extracted from Wikipedia's list of Pokemon), and generate
                the/a sequence with the highest possible number of Pokemon names where the
                subsequent name starts with the final letter of the preceding name. not pokemon
                name is to be repeated.
            </p>

            <br />
            <h3>Listado de Nombres:</h3>
            <br />           

            <ul>
                {
                    secuenciaFinal.map((item, index) => {

                        return (
                            <li key={index}>
                                {item}
                            </li>

                        )

                    })
                }
            </ul>

        </div>
    )
}

export default Parte1_a;
