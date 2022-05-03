

import React from "react";

function MenuBar({handleIsClicked, iconClicked}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <span className={(iconClicked === 'user large icon') ? 'item active' : 'item' }  onClick={e => handleIsClicked(e.target.childNodes[0].className)}>
        <i className="user large icon" />
      </span>

      <span className={(iconClicked === 'photo large icon') ? 'item active' : 'item' } onClick={e => handleIsClicked(e.target.childNodes[0].className)}>
        <i className="photo large icon" />
      </span>

      <span className={(iconClicked === 'cocktail large icon') ? 'item active' : 'item' } onClick={e => handleIsClicked(e.target.childNodes[0].className)}>
        <i className="cocktail large icon" />
      </span>

      <span className={(iconClicked === 'themeisle large icon') ? 'item active' : 'item' } onClick={e => handleIsClicked(e.target.childNodes[0].className)}>
        <i className="themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;



