import React from "react"
import './../styles/_menu.scss'

const Menu = (props) => {

    return (
        <div className={props.visible?'menu__div-open' : 'menu__div-close'}>
            <nav>
                <ul className='ul__options'>
                    <li><a href="/">Inicio</a></li>
                    
                    <li><a href="/">Sobre</a></li>
                    
                    <li><a href="/">Contato</a></li>
                </ul>
            </nav>
            <br></br>
            <nav>
                <ul className='ul__languages'>
                    <button>US</button>
                    <button>DE</button>
                    <button>PT-BR</button>
                </ul>
            </nav>
        </div>
    )
}

export default Menu