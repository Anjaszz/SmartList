/* eslint-disable react/prop-types */
function Footer({items}){
  if(items.length === 0) return  <footer className="stats bg-[#83B4FF] text-white text-center py-4 sm:py-6 text-base sm:text-lg md:text-xl font-bold">
  Daftar belanja masih kosong!!
</footer>
  
  
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);
  
  return (
    <footer className="stats bg-[#83B4FF] text-white text-center py-4 sm:py-6 text-base sm:text-lg md:text-xl font-bold">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)
    </footer>
  )
  
}
export default Footer;