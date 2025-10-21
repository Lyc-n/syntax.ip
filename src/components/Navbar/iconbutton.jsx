import * as React from 'react';
import Link from 'next/link';
import * as motion from 'motion/react-client';

const IconButton = ({linkpage, icon, className}) => {
  return (
    <motion.div className={className} whileTap={{ scale: 0.7 }}>
      <Link href={linkpage} className="text-2xl text-white">
        {icon}
      </Link>
    </motion.div>
  );
};

export default IconButton
