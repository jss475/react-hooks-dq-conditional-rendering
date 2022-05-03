import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  const [iconClicked, setIconClicked] = useState('')

  let detailsToDisplay = <div>Hi, I'm a div!</div>;
  //making a callback for when the icon is clicked
  function handleIsClicked(icon){
    console.log(icon)
    setIconClicked(icon)
   
  }

  //if conditional on which icon has been chosen
  //we will display the chosen icon using detailsToDisplay
  if(iconClicked === 'user large icon'){
    detailsToDisplay = <Profile />
  }else if (iconClicked === 'photo large icon'){
    detailsToDisplay = <Photos />
  }else if (iconClicked === 'cocktail large icon'){
    detailsToDisplay = <Cocktails />
  }else if (iconClicked === 'themeisle large icon'){
    detailsToDisplay = <Pokemon />
  }
  

  return (
    <div>
      <MenuBar handleIsClicked = {handleIsClicked} iconClicked = {iconClicked}/>
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;