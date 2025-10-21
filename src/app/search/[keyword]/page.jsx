import CardProduct from "@/components/Card"


export default async function Section({params}) {
  const awaitp = await params
  const { keyword } = awaitp
  const decodedKeyword = decodeURIComponent(keyword)
  const part = decodedKeyword.split("=")
  const hasilq = part.pop()
  
  const allProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/search?q=${hasilq}`
  )
  const allDatas = await allProducts.json()
  console.log(allProducts)

  return (
    <section className="flex justify-center">
      <div className="w-120 sm:w-150 md:w-190 lg:w-250 xl:w-300">
        <h1 className="mb-3 mt-1 mx-2 text-xl">Hasil pencarian : {hasilq}</h1>
        <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 gap-1">
          <CardProduct api={allDatas}/>
        </div>
      </div>
    </section>
  );
}
