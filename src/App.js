import React, { useState } from "react";
import "./App.css";
// TODO: import the Item component
// TODO: import the Header component

function App() {
  // State Hook - `useState`
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);


  // Helper Functions

  /* TODO: Complete this method to add an item to the items array
          i.  item should be an object with this structure:
            {id: generate_a_random_number, value: newItem}
          ii. Make use of the setItems and setNewItems state methods.
  */

  function addItem() {
   
  }

  /* TODO: Complete this method to delete an item(with id) from the items array */
  function deleteItem(id) {
  }


  // Main part of app
  return (
    <div className="app">
      {/* TODO: Add the Header component */}

      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        // onChange={}  TODO: complete the onChange to call the setNewItem hook. 
      />

      {/* TODO: Add a button with onClick that calls the addItem() */}

        {/* TODO: Iterate through the items array, for each:
                a. Call the Item component with a property of 'item'
                b. Add a button that deletes the item (HINT this button onClick should call deleteItem() 
                    i. use ❌ as the content for your delete button 
                    ii. use className="delete-button" also */}
    </div>
  );
}

export default App;