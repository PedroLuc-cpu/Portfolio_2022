import '../Styles/skill.css';

const Conhecimentos = () =>{
    let Skill = [
        {Header:"React",
         Img:"https://img.icons8.com/plasticine/512/react.png",
         Footer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, sit."},
         
         {Header:"Javascript",
         Img:"https://img.icons8.com/color/512/javascript.png",
         Footer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, sit."},

         {Header:"CSS3",
         Img:"https://img.icons8.com/color/512/css3.png",
         Footer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, sit."},

         {Header:"HTML5",
         Img:"https://img.icons8.com/color/512/html-5.png",
         Footer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, sit."},

         {Header:"Tailwindcss",
         Img:"https://img.icons8.com/color/512/tailwindcss.png",
         Footer:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, sit."},

    ]


    return(
        <section className="section-main py-40 text-center text-sky-50 text-3xl font-semibold ">
            <h3 className='mt-5'>Minhas Skill e Certificados</h3>
          <section className='flex p-4 justify-around items-center'>
            <article className='skill-items flex gap-8 mt-10 justify-center md:flex flex-wrap'>
                    {
                                Skill.map((skill)=>(
                                    <div className='w-60'>
                                        <header className='py-8'>{skill.Header}</header>
                                        <img className='w-16 m-auto hover:scale-125 hover:ease-out duration-300' src={skill.Img}></img>
                                        <footer className='py-6'><p className='font-thin text-lg'>{skill.Footer}</p></footer>
                                        
                                   </div>
                                ))
                    }
           
    
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




// {
//    
// } 