import Navigation from "./component/navigation";
import Slideshow from "./component/slide";
import Home from "./component/home";
import Restorent from "./component/restorent";
import Rooms from "./component/ourroom";



function App() {

  return (
    <div className="font-Poppins bg-white">
     
      <Navigation/>
      <Slideshow />
      <Home />
      <Rooms />
      <Restorent />

      
    </div>
  );
}

export default App;
