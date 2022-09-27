import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function addItem(e) {
    const newItemLen = newItem.length;
    if (newItemLen > 0) {
      const reminder = {
        id: Math.floor(Math.random() * 1000),
        reminder: newItem,
      };
      setItems((items) => [...items, reminder]);
      setNewItem('');
    }
  }

  function deleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems([...newItems]);
  }

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
      <ul>
        {items.map((item) => (
          <Item key={item.id} reminder={item} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default App;
