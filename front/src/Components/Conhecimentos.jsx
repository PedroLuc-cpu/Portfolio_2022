import '../Styles/skill.css';

const Conhecimentos = (pops) =>{
    return(
        <section className="py-40 text-center text-sky-50 text-3xl font-semibold ">
            <h3 className='mt-5'>Minhas Skill e Certificados</h3>
          <section className='flex justify-around items-center'>
          <article className='gap-8 mt-20 ml-10 flex justify-start'>
                <div className='w-60'>
                    <header className='py-8'><h5 className='text-lg'>React</h5></header>
                    <img className='w-16 m-auto hover:scale-125 hover:ease-out duration-300' src="https://img.icons8.com/plasticine/512/react.png" alt="" />
                    <footer className='py-6'><p className='font-thin text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, sit.</p></footer>
                </div>

                <div className='w-60'>
                    <header className='py-8'><h5 className='text-lg'>Javascript</h5></header>
                    <img className='w-16 m-auto hover:scale-125 hover:ease-out duration-300' src="https://img.icons8.com/color/512/javascript.png" alt="" />
                    <footer className='py-6'><p className='font-thin text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, sit.</p></footer>

                </div>

                <div className='w-60'>
                    <header className='py-8'><h5 className='text-lg'>CSS3</h5></header>
                    <img className='w-16 m-auto hover:scale-125 hover:ease-out duration-300' src="https://img.icons8.com/color/512/css3.png" alt="" />
                    <footer className='py-6'><p className='font-thin text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, sit.</p></footer>

                </div>

                <div className='w-60'>
                    <header className='py-8'><h5 className='text-lg'>HTML</h5></header>
                    <img className='w-16 m-auto hover:scale-125 hover:ease-out duration-300' src="https://img.icons8.com/color/512/html-5.png" alt="" />
                    <footer className='py-6'><p className='font-thin text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, sit.</p></footer>

                </div>

                <div className='w-80'>
                    <header className='py-8'><h5>Tailwindcss</h5></header>
                    <img className='w-16 m-auto hover:scale-125 hover:ease-out duration-300' src="https://img.icons8.com/color/512/tailwindcss.png" alt="" />
                    <footer className='py-6'><p className='font-thin text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, sit.</p></footer>

                </div>
            </article>
            {/* <aside className='mt-20 w-96 '>
                <h3 className='py-5'>{String(props.texto)}</h3>
                <p className='text-left font-thin text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos delectus alias eaque, quo deserunt perspiciatis consequatur nobis, excepturi blanditiis dolore reiciendis facilis. Magni numquam, quia reprehenderit illum rerum eligendi laboriosam!</p>
                            
            </aside> */}
          </section>
        </section>
    )
}


export default Conhecimentos