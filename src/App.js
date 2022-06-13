
import './App.css';
import Home from './pages/home';
import Top from './pages/top';
import Navbar from './pages/navbar';
import About from './pages/about';
import Promotion from './pages/promotion';
import Video from './pages/video';
import Carousel from './carousel';
import Service from './pages/services';
import Protiforio from './pages/portiforio';
import Product from './pages/product';
import Team from './pages/team';
import Testimony from './testimony';
import Footer from './pages/footer';
function App() {
  return (<>
    <Top />
    <Navbar />
    <Carousel />
    <About />
    <Promotion />
 <Video />
 <Service />
 <Protiforio />
 <Product />
 <Team />
 <Testimony />
 <Footer/>
   
   </>
  );
}

export default App;
