
//css file of react slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Routes,Route} from 'react-router-dom';

//pages
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import Plays from "./pages/plays";
function App() {
 
  return (
  <Routes>
    <Route path ="/" element={<Homepage></Homepage>}></Route>
    <Route path="/movie/:id" element={<Moviepage></Moviepage>}></Route>
   <Route path="/plays" element={<Plays></Plays>}></Route>
  </Routes>
  )
}

export default App;
