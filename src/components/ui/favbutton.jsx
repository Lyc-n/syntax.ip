"use client"
import {useState} from 'react';
import {IoCart, IoCartOutline} from 'react-icons/io5';

import * as React from 'react';
import * as motion from 'motion/react-client';

const FavButton = ({className}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavClick = () => {
    setIsFav(!isFav);

    if (isFav){
      console.log("Added to favorites");
    } else {
      console.log("Removed from favorites");
    }
  };

  const icon = isFav ? <IoCart className='text-2xl text-rose-600'/> : <IoCartOutline className='text-2xl text-black'/>;

  return (
    <motion.div className={className} whileTap={{ scale: 0.7 }} onClick={handleFavClick} aria-label={isFav?"tambah ke keranjang" : "hapus dari keranjang"}>
      <div className="text-2xl text-white">
        {icon}
      </div>
    </motion.div>
  );
};

export default FavButton
