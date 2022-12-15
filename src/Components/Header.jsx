import { useState } from 'react'
import '../Styles/header.css'

const Header = () =>{
  let Links =[
    {nome:"Sobreme",link:"/"},
    {nome:"Skills",link:"/"},
    {nome:"Contato",link:"/"}
  ]

  let [open, SetOpen] = useState(false)

  return(
    <header className="header shadow-md w-full fixed top-0 left-0">
      <nav className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
          <div className='font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-slate-50'>
            Portfolio            
          </div>
          <div onClick={()=> SetOpen(!open)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>{open ? 'close': "|||"}</div>

          <ul className={`nav-list md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' :'top-[-490px]'} md:opacity-100 opacity-0`}>
        {Links.map((Link)=>(
          <li key={Link.nome} className="md:ml-8 text-xl md:my-0 my-7">
            <a href={Link.link} className="text-slate-50 hover:text-green-500	 duration-150">{Link.nome}</a>
          </li>
        ))}
      </ul>
      </nav>
    

    </header>
  )
}


export default Header