import React from 'react';

function Item({ reminder, deleteItem }) {
  return (
    <li key={reminder.id}>
      {reminder.reminder}
      <button onClick={() => deleteItem(reminder.id)} className="delete-button">
        ❌
      </button>
    </li>
    // TODO: Add a span. element to display each item's value
  );
}

export default Item;
