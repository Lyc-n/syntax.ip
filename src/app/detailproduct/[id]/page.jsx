import Image from "next/image";
import { PiStarFill } from "react-icons/pi";
import Buton from "./buton";

const Page = async ({ params }) => {
  const awaitp = await params;

  const allProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${awaitp.id}`
  );
  console.log(awaitp.id);
  const allDatas = await allProducts.json();
  console.log(allDatas);

  const harga = allDatas.price * 16000;
  const formatPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(harga);
  return (
    <div className="p-8 w-full flex justify-center">
      <div className="bg-white rounded-2xl px-9 py-6 w-250 flex gap-8">
        <div className="overflow-hidden rounded-2xl w-fit">
          <Image
            src={allDatas.images[0]}
            width={600}
            height={600}
            alt="..."
            className="bg-accent bg-cover"
          />
        </div>
        <div className="w-full text-black relative">
          <p className="text-3xl font-bold">{allDatas.title}</p>
          <div className="flex items-center gap-3 mt-2">
            <PiStarFill className="text-yellow-400 text-lg" />
            <p className="text-gray-600">{allDatas.rating}</p>
          </div>
          <p className="text-2xl font-bold my-5">{formatPrice}</p>
          <p className="font-semibold mt-5">Description</p>
          <p className="text-sm w-[90%] text-justify">{allDatas.description}</p>
          <p className="text-xs mt-2">stock: {allDatas.stock} pcs</p>
          <p className="text-xs">{allDatas.availabilityStatus}</p>
          <Buton/>
        </div>
      </div>
    </div>
  );
};
export default Page;
