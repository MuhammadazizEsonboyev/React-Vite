import { useState } from "react"
import { postData } from "../../api/postData"



const Home = () => {

  const [name, setName] = useState("")
  const postDataUsers = () => {
    postData("http://localhost:3000/data", {
      name: name
    }).then((res) => {
      alert(res?.statusText);
      setName("")
    })
  }


  return (
    <>
      <div className="relative my-6 max-w-[400px] mx-auto my-[100px]">
        <input onChange={(e) => setName(e.target.value)} value={name} id="id-01" type="text" name="id-01" placeholder="your name" className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
        <label htmlFor="id-01" className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
          Your name
        </label>
        <button onClick={() => postDataUsers()} className="w-[400px] mt-4 inline-flex items-center justify-center h-10 gap-2 px-4 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
          <span>Elevated large</span>
        </button>
      </div>
    </>
  )
}

export default Home
