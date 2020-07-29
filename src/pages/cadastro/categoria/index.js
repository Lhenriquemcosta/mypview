import React, { useState } from 'react'
import PageDefault from '../../../components/pageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
    const ValoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([])
    const [valores, setValores] = useState(ValoresIniciais)

    function setValue(chave, valor) {
        setValores({
            ...valores,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        )
    }

    return (
        <PageDefault>
            <h1> cadastro de Categoria : {valores.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault()
                setCategorias([
                    ...categorias,
                    valores
                ])

                setValores(ValoresIniciais)
            }}>
                <FormField
                    label=" nome da Categoria"
                    type="text"
                    name="nome"
                    value={valores.nome}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={valores.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <FormField
                    label=" cor"
                    type="color"
                    name="cor"
                    value={valores.nome}
                    onChange={handleChange}
                />
                <button>
                    Cadastrar
                 </button>
            </form>
            <ul>
                {categorias.map((categorias, indice) => {
                    return (
                        <li key={`${categorias}${indice}`}>
                            {categorias.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria