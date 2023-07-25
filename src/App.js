import {HashRouter, Route, Routes} from 'react-router-dom'
import Favorite from './component/favorites/Favorite';
import Watch from './component/watchfav/Watch';
import Kdashboard from "./pages/kids/Kdashboard";
import Layout from "./pages/layout/Layout";


function App() {
  return (
    <HashRouter>
      
    <Routes>
      <Route path ="/" element={<Layout/>}>
          <Route index element={<Kdashboard/>}/>

          <Route path ="kdashboard/*" element={<Kdashboard/>}>
              <Route index element={<Watch/>}/>
              <Route path='favorite' element={<Favorite/>}/>
          </Route>
      </Route>
        
          {/* <Route path="*" element={<NotFound/>} */}
    
  </Routes>
</HashRouter>


  );
}

export default App;
