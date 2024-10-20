import React, { useState } from 'react';
import CustomNavbar from './Components/Navbar';
import MenuContainer from './Components/MenuContainer';
import MenuItems from './Components/MenuItems';
import {items } from './Data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const allCategory = ["الكل", ...new Set(items.map((item) => item.category))];

  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setMenuItems(items);
    }else {
      // Filter items by category
      const newItems = items.filter((item) => item.category === cat);
      setMenuItems(newItems);
    }
  }

  const filterbySearch = (search) => {
    const newItems = items.filter((item) => item.name === search);
    setMenuItems(newItems);
  }



  return (
    <div>
      <CustomNavbar filterbySearch = {filterbySearch}/>
      <MenuContainer filterbyCategory ={filterbyCategory} allCategory = {allCategory} />
      <MenuItems menuItems = {menuItems}/>
      
    </div>
  );
}

export default App;
