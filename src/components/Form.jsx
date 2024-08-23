/* eslint-disable react/prop-types */
import { useState } from "react";


function Form({onAddItem}) {
  const quantityNum=[...Array(20)].map((x,i) =>(
    <option key={i+1} value={i+1}>{i+1}</option>
    ))

    const [name,setName] = useState('');
    const [quantity,setQuantity] = useState(1);
    const [error, setError] = useState('');
    function handleSubmit(e){
      e.preventDefault();
      if (!name) {
        setError('Nama barang tidak boleh kosong');
        return;
      }
    
      if (name.length < 3) {
        setError('Nama barang harus terdiri dari minimal 3 karakter');
        return;
      }
    
      setError('');

      
     
      const newItem = { name:name, quantity:quantity, checked: false, id:Date.now() }
      onAddItem (newItem);
      console.log(newItem);
      setName('') ;
      setQuantity(1);
    }
    return(
      <form className="add-form bg-[#3572EF] py-4 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8" onSubmit={handleSubmit}>
      <h3 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-0 text-[#151515]">Hari ini belanja apa kita?</h3>
      <div className="w-full sm:w-auto my-4 sm:my-0">
        {error && <p className="text-[#C40C0C] mb-2 font-semibold">{error}</p>} {/* Menampilkan pesan error */}
        <select 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
          className="w-full sm:w-auto mr-0 sm:mr-4 bg-[#fefae0] font-inherit rounded-[3rem] py-2 px-4 sm:px-8 text-base sm:text-lg cursor-pointer"
        >
          {quantityNum}
        </select>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          type="text" 
          placeholder="nama barang..." 
          className="w-full sm:w-auto mt-4 sm:mt-0 bg-[#fefae0] font-inherit rounded-[3rem] py-2 px-4 sm:px-8 text-base sm:text-lg cursor-pointer"
        />
      </div>
      <button className="w-full sm:w-auto mt-4 sm:mt-0 bg-[#A1DD70] text-[#fefae0] font-bold rounded-3xl py-2 px-4 sm:px-8 text-lg sm:text-xl cursor-pointer">
        Tambah
      </button>
    </form>
    
    )
  }

export default Form;