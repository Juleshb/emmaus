import Navigation from "./component/navigation";
import Slideshow from "./component/slide";
import Home from "./component/home";
import Restorent from "./component/restorent";
import Rooms from "./component/ourroom";
import Conferancehall from "./component/conferancehall";
import Facilities from "./component/facilities";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Halls from "./component/ourhall";



function App() {

  return (
    <div className="font-Poppins bg-colr2">
     
      <Navigation/>
      <Slideshow />
      <Home />
      <Facilities />
      <Rooms />
     
      <Restorent />
      <Conferancehall />
      <Halls />
      <Contact />
      <Footer />
     
     
      
      
      

      
    </div>
  );
}

export default App;
