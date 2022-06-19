
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
import {useEffect} from 'react';
function App() {
  const scrollWithHash =() => {
		if (window.location.hash) {
			if (document.querySelector(window.location.hash)) {
				let header = document.getElementById('header');
				let offset = header.offsetHeight;
				let elementPos = document.querySelector(window.location.hash).offsetTop;
				if (!header.classList.contains('header-scrolled')) {
					offset -= 10;
				}

				window.scrollTo({
					top: elementPos - offset,
					behavior: 'smooth'
				});
			}
		}
	}

	useEffect(() => {
		var c = Array.from(document.getElementsByTagName('a'));
		c.forEach((element) => {
			element.addEventListener('click', () => {
				window.scroll(0, 0);
			});
		});

		const script = document.createElement('script');
		script.src = "/assets/js/main.js";
		// script.src="assets/vendor/purecounter/purecounter.js";
		script.async = true;
		
		document.body.appendChild(script);
		scrollWithHash();

		return () => {
			document.body.removeChild(script);
		}
	}, []);
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
