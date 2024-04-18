import { livros } from './DadosUltimosLacamentos'
import { Titulo } from '../Titulo/Index'
import imagenslivro from '../../imagens/livro2.png'
import CardRecomenda from '../CardRecomenda'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo cor="#000"
                    tamanhoFonte="36px"
                    alinhamento="center"
                    >Últimos lançamentos</Titulo>
            <NovosLivrosContainer>{livros.map (livro => (<img src={livro.src}/>))}</NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez vc se interesse por"
                subtitulo="angular 11"
                descricao="contruindo uma aplicação google"
                img={imagenslivro}
            />
        </UltimosLancamentosContainer>    
    )
}

export default UltimosLancamentos