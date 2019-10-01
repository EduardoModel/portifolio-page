import React, {useReducer} from 'react';
import PortifolioContext from './../context/portifolio-context'
import Menu from './Menu'
import MenuButton from './MenuButton';
import portifolioReducer from '../reducers/portifolioReducer';


const MainPage = () => {

    const [state, setState] = useReducer(portifolioReducer, {menuVisible: false, linguage: 'US'})

    return (
        <PortifolioContext.Provider value={{state, setState}}>
            <MenuButton/>
            <Menu visible={state.menuVisible}/>
        </PortifolioContext.Provider>
    )
}

export default MainPage