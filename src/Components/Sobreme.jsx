import '../Styles/sobreme.css';
 

const Sobreme = () =>{
    return(
    <section className="pt-32 sobreme">
    <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between">
    <article>
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-5">
      <span className="block">PedroLucas/<span className="block">Portifolio-Junior-Front-End</span></span>
      <p className="subtext block text-2xl">coding portfolio as I start my journey as junior front-end developer.
      </p>
    </h2>

    <p className='sobremeTexto'>
    <code>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quae, molestias vel rerum possimus ullam ab architecto fuga nihil,
    doloremque deleniti aperiam, ipsam expedita quam sapiente cum repellat quis reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis, recusandae aperiam ratione nam, omnis accusantium consectetur earum consequuntur voluptas illo,
    explicabo laborum labore saepe dolores officia quam eum dignissimos.</code>
    </p>
    </article>

    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 px-10">
      <div className='sobreme-perfil'>
        {/* <a href="#"><img className="img-note rounded-lg h-5/6 shadow" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="rounded-lg" /></a> */}
      </div>
     
    </div>
  </div>
</section>
    )
}


export default Sobreme