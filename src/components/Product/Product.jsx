import { useEffect, useState } from "react"
import { getProduct } from "../../api/getProduct"

const Product = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    await getProduct("https://demo-vite.onrender.com/data").then((res) => {
      setData(res?.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div className="w-[500px] m-auto overflow-x-auto">
        <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200" cellSpacing="0">
          <tbody>
            <tr>
              <th scope="col" className=" h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
            </tr>
            {data?.map((item) => {
              return (
                <tr key={item?.id}>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{item?.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Product
