import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Grocery from './components/Grocery';

function App() {
  // Load items from local storage if available, otherwise start with an empty list
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('groceryItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Save items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('groceryItems', JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckItem(id) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app w-7/10 h-full mx-auto grid grid-rows-[auto_auto_1fr_auto]">
      <Header />
      <Form onAddItem={handleAddItem} />
      <Grocery items={items} onDelete={handleDelete} onChecked={handleCheckItem} onClear={handleClearItems} />
      <Footer items={items} />
    </div>
  );
}

export default App;
