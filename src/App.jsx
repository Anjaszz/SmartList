
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import Grocery from './components/Grocery'
import { useState } from 'react'

function App() {
  const [items,setItems] = useState([]);
  function handleAddItem(item) {
    setItems([...items, item]);
  }

 function handleDelete(id){
  setItems((items) => items.filter((item) =>item.id !== id));
  }
  function handleCheckItem(id){
    setItems((items) => items.map((item)  => item.id === id ? {...item,checked: !item.checked} : item))
  }

  function handleClearItems(){
    setItems([])
  }

  return (
    <div className="app w-7/10 h-full mx-auto grid grid-rows-[auto_auto_1fr_auto]">
      <Header />
      <Form onAddItem={handleAddItem}/>
  <Grocery items={items}  onDelete={handleDelete} onChecked={handleCheckItem} onClear={handleClearItems}/>
  <Footer items={items} />
  </div>
  
  )
};


export default App;
