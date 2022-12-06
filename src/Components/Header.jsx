import '../Styles/header.css'

const Header = () =>{
  return(
    <header className="flex items-center justify-around p-5 fixed w-full drop-shadow-2xl">
      <a className="mx-8 text-4xl font-semibold text-slate-200	" href="">Portfólio</a>

        <nav className="flex">
          <li className="text-slate-200	text-lg list-none px-10  hover:bg-slate-500 hover:text-slate-50 hover:rounded-md hover:transition-all">Sobreme</li>
          <li className="text-slate-200	text-lg list-none px-10  hover:bg-slate-500 hover:text-slate-50 hover:rounded-md hover:transition-all	">Skills</li>
          <li className="text-slate-200	text-lg list-none px-10  hover:bg-slate-500 hover:text-slate-50 hover:rounded-md hover:transition-all">Contato</li>
        </nav>

    </header>
  )
}


export default Header