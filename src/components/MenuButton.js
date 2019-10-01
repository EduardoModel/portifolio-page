import React,{useContext} from "react"
import portifolioContext from "../context/portifolio-context";
import './../styles/_menuButton.scss'
import {useState} from 'react'

const MenuButton = () => {
    const {setState} = useContext(portifolioContext)
    const [clicked, setClicked] = useState(false)


    const buttonClick = () => {
        setState({type: 'MENU_BUTTON_CLICK'})
        setClicked(!clicked)
    }

    return(
        <div className={clicked ? 'change' : 'container'} onClick={buttonClick}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
        </div>
    )
}

export default MenuButton


/*
<React.Fragment>
        <button className='menuButton' onClick={() => setState({type: 'MENU_BUTTON_CLICK'})}></button>
    </React.Fragment>
*/