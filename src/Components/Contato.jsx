import { useState } from 'react';
import '../Styles/contato.css';



const Contato = () =>{
  const [nome, SetNome] = useState("")
  const [email, SetEmail] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    console.log(nome)
    SetNome(nome)
    SetEmail(email)
    console.log("Submit Success")
  }
  
  
  return(
        <section className="bg-slate-200 flex min-h-full items-center justify-evenly py-12 px-4 sm:px-6 lg:px-8">
            
        <div className="w-full max-w-md space-y-8 drop-shadow-2xl">
          <div>
            <img 
            className="mx-auto w-auto"
            alt="Your Company"
            src="https://img.icons8.com/color/144/000000/apple-mail.png"/>
            
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Contact 
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-cyan-700	 hover:text-cyan-800">
              Vamos trabalhar Juntos?
              </a>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className='py-1'>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-900	 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="current-name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-900	 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Nome"
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-sky-900 py-2 px-4 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:bg-sky-800	focus:ring-offset-2 hover:ease-out duration-300">
                Enviar
              </button>
            </div>
          </form>
        </div>

        <article className='flex'>
            <h2 className='text-2xl	 font-bold tracking-tight text-slate-900'>Crescer não é evoluir, crescer é ficar maior. Evoluir é ficar melhor.</h2> 
        </article>
      </section>
    )
}


export default Contato