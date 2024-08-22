import { useState } from "react";

/* eslint-disable react/prop-types */
function Grocery({ items, onDelete, onChecked, onClear }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;
  
  if (sortBy === 'input') {
    sortedItems = items;
  }
  if (sortBy === 'name') {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === 'checked') {
    sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
  }

  return (
    <>
      <div className="list bg-[url('img/paper-bg.jpg')] bg-repeat-y bg-[155%] text-[#fefae0] py-9 flex flex-col items-center gap-8 overflow-y-scroll h-96 sm:h-[36rem]">
        <ul className="list-none w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col items-center mt-[-1rem]"> 
          {sortedItems.map((item) => (
            <Item item={item} key={item.id} onDelete={onDelete} onChecked={onChecked}/>
          ))}
        </ul>
      </div>

      <div className="actions bg-[#3572EF] w-full py-6 text-center">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-[#fefae0] font-inherit rounded-[3rem] py-3 px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-xl cursor-pointer mr-[0.8rem]">
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClear} className="bg-[#A1DD70] text-[#fefae0] font-bold rounded-[3rem] py-3 px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-xl cursor-pointer">
          Bersihkan Daftar
        </button>
      </div>
    </>
  );
}

function Item({ item, onDelete, onChecked }) {
  return (
    <li key={item.id} className="text-[#232323] text-xl sm:text-2xl md:text-3xl font-bold flex items-center mb-6 sm:mb-10 md:mb-14">
      <input type="checkbox" checked={item.checked} onChange={() => onChecked(item.id)} className="h-6 w-6 sm:h-8 sm:w-8 accent-[#A1DD70] mr-[1rem] sm:mr-[1.3rem]" />
      <span style={item.checked ? {textDecoration: 'line-through'} : {}}>{item.quantity}  {item.name}</span>
      <button onClick={() => onDelete(item.id)} className="flex items-center justify-center cursor-pointer text-lg sm:text-xl md:text-2xl p-0 ml-[1rem]">❌</button>
    </li>
  );
}

export default Grocery;
