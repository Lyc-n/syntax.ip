"use client"

import * as motion from "motion/react-client";
import { toast } from "sonner";

const Buton = () => {
    return (
        <motion.button className="mt-10 w-full bg-black hover:bg-gray-800 absolute bottom-0 p-1.5 text-white rounded-lg" whileHover={{ scale: 0.9, background: "#fff", color: "#000000", border: "2px solid #000000", transition: { duration: 0.4 }}} whileTap={{scale: 0.8}} onClick={() => toast("sukses",{
              action: {
                onClick: ('/')
              }
          })}>
            Buy Now
          </motion.button>
    )
}

export default Buton