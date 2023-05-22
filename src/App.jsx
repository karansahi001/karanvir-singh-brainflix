import './App.scss';
import Header from './components/Header/Header';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';
import Hero from './components/Hero/Hero';
import CommentSec from './components/CommentSec/CommentSec';
import NextVideosList from './components/NextVideosList/NextVideosList';
import Video from './components/Video/Video';
import { useState } from 'react';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  const [videosList, setVideosList] = useState(videos);


  return (
    <>
      <Header />
      <Video videoDetails = { selectedVideo } />
      <div className="main">
        <section className="main__left">
          <Hero videoDetails = { selectedVideo } />
          <CommentSec videoDetails = { selectedVideo } />
        </section>
        <section className="main__right">
          <NextVideosList 
            selectedVideo = { selectedVideo }
            setSelectedVideo = { setSelectedVideo } 
            videosList = { videosList } 
            videoDetails = { videoDetails }
            />
        </section>
      </div>
    </>
  );
}

export default App;
