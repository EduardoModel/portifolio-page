const portifolioReducer = (state, action) => {
    switch(action.type){
        case 'MENU_BUTTON_CLICK':
            return {...state, menuVisible: !state.menuVisible}
        default:
            return state
    }
}

export {portifolioReducer as default}




/*

/* Rotate first bar *
.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
    transform: rotate(-45deg) translate(-9px, 6px) ;
    cursor: pointer;
  }
  
  /* Fade out the second bar *
  .change .bar2 {
    opacity: 0;
    cursor: pointer;
  }
  
  /* Rotate last bar *
  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
    transform: rotate(45deg) translate(-8px, -8px) ;
    cursor: pointer;
  }
*/