import { PiStarFill } from "react-icons/pi";

const Detail = ({ title, price, rate }) => {
  const harga = price * 16000;
  const formatPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(harga);

  return (
    <div className="gap-4 mt-2">
      <h2 className="text-sm text-nowrap overflow-hidden truncate cursor-pointer">
        {title}
      </h2>
      <h2 className="text-sm font-bold">{formatPrice}</h2>
      <div className="flex gap-2 items-center">
        <PiStarFill className="text-amber-400"/>
        <p className="text-[0.8rem] text-stone-400">{rate}</p>
      </div>
    </div>
  );
};

export default Detail;
