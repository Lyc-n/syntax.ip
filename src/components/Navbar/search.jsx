import * as motion from "motion/react-client";
import { MdOutlineSearch } from "react-icons/md";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Search = ({ isActive }) => {
  const cari = useRef()
  const pindah = useRouter()

  const handleSubmit = (e) => {
    if(e.key === 'Enter' || e.type === 'click') {
    e.preventDefault()
    const keyword = cari.current.value
    pindah.push(`/search/keyword=${keyword}`)
  }}

  return (
    <>
      <motion.div
        className={`absolute w-65 -top-1 -right-2 ${isActive ? "" : "hidden"} bg-white rounded-lg shadow-lg items-center flex transition-all duration-300 ease-in-out`}
      >
        <input
          type="text"
          placeholder="search"
          className="w-full text-black text-sm bg-background pl-3 pe-8 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          ref={cari}
          onKeyDown={handleSubmit}
        />
        <motion.button className="absolute top-2 right-3 text-lg text-gray-500" whileTap={{scale: 0.7}} onClick={handleSubmit}><MdOutlineSearch/></motion.button>
      </motion.div>
    </>
  );
};

export default Search;
