import React from "react";
import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleCatChange(e){
    setSelectedCategory(e.target.value)
  }

  const categoryToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){
      return true;
    } else {
        return item.category === selectedCategory;
    }
  }).map((item) => (<Item key={item.id} name={item.name} category={item.category}/>))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCatChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoryToDisplay}
      </ul>
    </div>
  );
}

export default ShoppingList;
