import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
   const [searchInput, setSearch] = useState("");
   const[addName, setName]= useState("");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
function setNewSearch(e){
 setSearch(e.target.value)
}
function newItem(e){
 return setName(e.target.value)
}
function handlesFormSubmit(event) {
  event.preventDefault();
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: {newItem},
    category: itemCategory,
  };
}
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={handlesFormSubmit}
      name={addName}
      onChange ={newItem}
      />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      search={searchInput} 
      onSearchChange ={setNewSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
