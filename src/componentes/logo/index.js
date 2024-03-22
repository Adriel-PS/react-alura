import logo from '../../imagens/logo.svg'
import './estilo.css'

function Logo(){
    return(
        <div className='logo'>
          <img src={logo} alt='logo da alura book ' className='logo-img'></img>
          <p><strong>alura</strong> books</p>
        </div>
    )
}

export default Logo