"use client";
import Image from "next/image";
import * as motion from "motion/react-client";
import Link from "next/link";
import Detail from "./detail";

const CardProduct = ({ api }) => {
  return (
    <>
      {api.products.map((data) => {
        return (
          <Link href={`/detailproduct/${data.id}`} key={data.id}>
            <motion.div className="rounded-2xl p-4 overflow-hidden">
              <div className="px-4 py-5 bg-gradient-to-b from-accent rounded-lg relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    className="drop-shadow-lg"
                    src={data.thumbnail}
                    alt="...."
                    width={600}
                    height={600}
                  />
                </motion.div>
                <Detail title={data.title} price={data.price} rate={data.rating} />
              </div>
            </motion.div>
          </Link>
        );
      })}
    </>
  );
};

export default CardProduct;
