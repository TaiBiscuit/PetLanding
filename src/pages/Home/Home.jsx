import { Navbar, Carousel, Contact, Info, ProductSection } from '../../components/index';
import './Home.css';

export const Home = () =>{
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductSection />
      <Info />
      <Contact />
    </>
  )
}