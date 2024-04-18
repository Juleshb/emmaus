import Navigation from "./component/navigation";
import Slideshow from "./component/slide";
import Home from "./component/home";
import Restorent from "./component/restorent";



function App() {

  return (
    <div className="font-Poppins bg-white">
     
      <Navigation/>
      <Slideshow />
      <Home />
      <Restorent />

      
    </div>
  );
}

export default App;
