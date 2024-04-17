import styled from 'styled-components'

const textoOpcoes= ['CATEGORIA','MINHA ESTANTE','FAVORITO']

const Opcao = styled.li `
    font-size: 16px ;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const Opicoes = styled.ul `
    display: flex;
`

function OpcoesHeader(){
    return(
        <Opicoes> 
          { textoOpcoes.map( (texto) => (
              <Opcao><p> {texto}</p></Opcao>
            ) ) }
        </Opicoes>
    )
}

export default OpcoesHeader