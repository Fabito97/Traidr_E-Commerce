import Hiro from './Hiro'
import './Home.css'
import Main from './Main'
import Products from './Products'

const Home = () => {
  return (
    <div className="container">
      <Hiro />
      <Main />
      <Products />
   </div> 
  )
}

export default Home