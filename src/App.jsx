import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Upload from './pages/Upload/Upload';
import SingleVideo from './pages/SingleVideo/SingleVideo';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path= "/" element={ <Homepage /> }></Route>
          <Route path= "/upload" element={ <Upload /> }></Route>
          <Route path= "/:video" element={ <SingleVideo /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
