import Header from './Components/Header.jsx'
import Sobreme from './Components/Sobreme.jsx'
import Conhecimentos from './Components/Conhecimentos.jsx'
import Contato from './Components/Contato.jsx'
import Footer from './Components/Footer.jsx'
// import axios from 'axios'
// import { useEffect, useState } from 'react'



function App() {

//  const [getApi, SetGetApi] = useState([])


// useEffect(() => {
//   getPokemons()
// },[])


// const getPokemons = () =>{
//   var endpoinnts = []
//   for(var i = 1;i<50; i++){
//     endpoinnts.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//   }
//   console.log(endpoinnts)

//    var response = axios.all(endpoinnts.map(endpoinnt => axios.get(endpoinnt))).then((res)=> SetGetApi(res))
//     // axios.get('https://pokeapi.co/api/v2/pokemon/')
//     // .then((res)=> SetGetApi(res.data.results))
//     // .catch((err) => console.log(err))
//   }


  return (
   <>
      <Header/>
      <Sobreme/>
      <Conhecimentos/>
      <Contato/>
      <Footer/>
      
   </>
  )
}

export default App
