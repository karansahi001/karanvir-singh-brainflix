import './App.scss';
import Header from './components/Header/Header';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';
import Video from './components/Video/Video';
import Hero from './components/Hero/Hero';

function App() {

  return (
    <>
     <Header />
     <Hero videoDetails = {videoDetails[0]} />
    </>
  );
}

export default App;
