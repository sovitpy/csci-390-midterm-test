import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
// TODO: import the Item component
// TODO: import the Header component

function App() {
  // State Hook - `useState`
  const [newItem, setNewItem] = useState(null);
  const [items, setItems] = useState([]);

  // Helper Functions

  /* TODO: Complete this method to add an item to the items array
          i.  item should be an object with this structure:
            {id: generate_a_random_number, value: newItem}
          ii. Make use of the setItems and setNewItems state methods.
          iii. Clue: you can use "Math.floor(Math.random() * 100)" to generate a random number.
  */

  function addItem(e) {
    const newItemLen = newItem.length;
    if (newItemLen > 0) {
      const reminder = {
        id: Math.floor(Math.random() * 1000),
        reminder: newItem,
      };
      setItems((items) => [...items, reminder]);
      setNewItem('');
      console.log(items);
    }
  }

  /* TODO: Complete this method to delete an item(with id) from the items array */
  function deleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems([...newItems]);
  }

  // Main part of app
  return (
    <div className="app">
      <Header />
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={(e) => addItem(e)}>Add</button>

      {/* TODO: Iterate through the items array, for each:
                a. Call the Item component with a property of 'item'
                b. Add a button that deletes the item (HINT this button onClick should call deleteItem() 
                    i. use  as the content for your delete button 
                    ii. use className="delete-button" also */}
      {items.map((item) => (
        <ul>
          <Item reminder={item} deleteItem={deleteItem} />
        </ul>
      ))}
    </div>
  );
}

export default App;
