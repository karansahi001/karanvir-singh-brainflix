import './App.scss';
import Header from './components/Header/Header';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';
import Hero from './components/Hero/Hero';
import CommentSec from './components/CommentSec/CommentSec';

function App() {

  return (
    <>
     <Header />
     <Hero videoDetails = {videoDetails[0]} />
     <CommentSec videoDetails = {videoDetails[0]} />
    </>
  );
}

export default App;
