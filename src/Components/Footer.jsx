import '../Styles/footer.css';


const Footer = () =>{
    return(
        <footer className='flex justify-around p-16 items-center'>
            <h4 className='text-gray-100'>Desenvolvido por Pedro Lucas👾</h4>

            <ul>
                <li className='mt-5'><a className='flex' href="https://www.instagram.com/pedrolucas.dev/" target="_blank" rel="noopener noreferrer"><img className='w-7' src="https://img.icons8.com/fluency/48/null/instagram-new.png"/><p className='pl-1 text-gray-300'>Instagram</p></a></li>
                <li className='mt-5'><a className='flex' href="https://github.com/PedroLuc-cpu" target="_blank" rel="noopener noreferrer"><img className='w-7' src="https://img.icons8.com/ios-filled/48/null/github.png"/><p className='pl-1 text-gray-300'>GitHub</p></a></li>
                <li className='mt-5'><a className='flex' href="https://www.linkedin.com/in/lucas-santos-5381b3212/" target="_blank" rel="noopener noreferrer"><img className='w-7' src="https://img.icons8.com/color/48/null/linkedin.png"/><p className='pl-1 text-gray-300'>Linkedin</p></a></li>
            </ul>
        </footer>
    )
}

export default Footer