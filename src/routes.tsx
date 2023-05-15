import { BrowserRouter, Routes, Route as ReactRoute } from "react-router-dom";
import App from './pages/init/App';
import Panel from './pages/panel-game/panel-game';
import War from "./pages/war/war";

function AppRoutes(){

  return(
    <BrowserRouter>
        <Routes>
          <ReactRoute path="/" element={<App/>}></ReactRoute>
          <ReactRoute path='/panel-game' element={<Panel/>}></ReactRoute>
          <ReactRoute path='/war' element={<War/>}></ReactRoute>
        </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
