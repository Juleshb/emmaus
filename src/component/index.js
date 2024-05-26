import Navigation from "./navigation";
import Slideshow from "./slide";
import Home from "./home";
import Restorent from "./restorent";
import Rooms from "./ourroom";
import Conferancehall from "./conferancehall";
import Facilities from "./facilities";
import Contact from "./contact";
import Footer from "./footer";
import Halls from "./ourhall";
//import Home from "./component/kiki";



function Index() {

  return (
    <div className="font-Poppins bg-colr2">
     
      <Navigation/>
      <Slideshow />
      <Home />
      
      <Rooms />
      <Facilities />
      <Restorent />
      <Conferancehall />
      <Halls />
      <Contact />
      <Footer />
     
     
      
      
      

      
    </div>
  );
}

export default Index;
