import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Upload from './pages/Upload/Upload';
import SingleVideo from './pages/SingleVideo/SingleVideo';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const videosListUrl = `http://localhost:8080/videos/`;
export const videoSingleUrl = `http://localhost:8080/videos/`

function App() {

  const [videosList, setVideosList] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(videosListUrl)
        .then((res) => {
          return (
            setVideosList(res.data))
        })
        .catch((err) => console.log(err))
    }
    fetchData();
  }, [videosListUrl])

  useEffect(() => {
    const videoGet = async () => {
      selectedId.length > 0 ?
        await axios.get(`${videoSingleUrl}${selectedId}`)
          .then((res) => {
            return setSelectedVideo(res.data)
          })
          .catch((err) => console.log(err))
        : <></>
    }
    videoGet();
  }, [selectedId, videosList])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                videosList={videosList}
                selectedVideo={selectedVideo}
                setSelectedId={setSelectedId}
                selectedId={selectedId}
              />
            }>
          </Route>
          <Route
            path="/upload"
            element={<Upload />}>
          </Route>
          <Route
            path="/:video"
            element={
              <SingleVideo
                videosList={videosList}
                selectedVideo={selectedVideo}
                setSelectedId={setSelectedId}
                setSelectedVideo={setSelectedVideo}
              />}
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
