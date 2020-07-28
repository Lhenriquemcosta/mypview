import React from'react'
import PageDefault from '../../../components/pageDefault'
import { Link } from 'react-router-dom'


function CadastroVideo(){
    return(
        <PageDefault> 
            <h1> cadastro de video</h1>
            
            <Link to="/cadastro/categoria">
                cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo