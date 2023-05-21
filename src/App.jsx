import './App.scss';
import Header from './components/Header/Header';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';
import Hero from './components/Hero/Hero';
import CommentSec from './components/CommentSec/CommentSec';
import NextVideosList from './components/NextVideosList/NextVideosList';
import Video from './components/Video/Video';

function App() {

  return (
    <>
      <Header />
      <Video videoDetails={videoDetails[0]} />
      <div className="main">
        <section className="main__left">
          <Hero videoDetails={videoDetails[0]} />
          <CommentSec videoDetails={videoDetails[0]} />
        </section>
        <section className="main__right">
          <NextVideosList videos={videos} />
        </section>
      </div>
    </>
  );
}

export default App;
