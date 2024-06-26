import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div `
  display: flex;
  font-size: 30px;
  margin-left: 1%;
`

const LogoImage = styled.img`
  margin-right:10px ;
`

function Logo(){
    return(
        <LogoContainer>
          <LogoImage src={logo} alt='logo da alura book '/>
          <p><strong>alura</strong> books</p>
        </LogoContainer>
    )
}

export default Logo