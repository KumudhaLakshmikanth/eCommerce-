import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Category from './components/category/Category';
import Products from './components/products/Products';
import Features from './components/features/Features';
import Earn from './components/earn/Earn';
import Explore from './components/explore/Explore';
import Offer from './components/offer/Offer';
import Sellers from './components/sellers/Sellers';
import Missout from './components/missout/Missout';
import Blogs from './components/blogs/Blogs';


function App() {
  return (
    <div>
     <Navigation/>
     <Hero/>
     <Category/>
     <Products/>
     <Features/>
     <Earn/>
     <Explore/>
     <Offer/>
     <Sellers/>
     <Missout/>
     <Blogs/>
    </div>
  );
}

export default App;
