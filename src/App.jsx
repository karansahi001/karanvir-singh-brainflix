import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Upload from './pages/Upload/Upload';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const videosListUrl = `http://localhost:8080/videos/`;
export const videoSingleUrl = `http://localhost:8080/videos/`;

function App() {

  const [videosList, setVideosList] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios.get(videosListUrl)
        .then((res) => {
          return (
            setVideosList(res.data))
        })
        .catch((err) => console.log(err))
    }
    fetchData();
  }, [videosListUrl])

  useEffect(() => {
    const videoGet = () => {
      selectedId.length > 0 ?
        axios.get(`${videoSingleUrl}${selectedId}`)
          .then((res) => {
            return setSelectedVideo(res.data)
          })
          .catch((err) => console.log(err))
        :
        <></>
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
                selectedVideo={selectedVideo && selectedVideo}
                setSelectedId={setSelectedId}
                selectedId={selectedId}
                setSelectedVideo={setSelectedVideo}
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
              <Homepage
                videosList={videosList}
                selectedVideo={selectedVideo}
                setSelectedId={setSelectedId}
                setSelectedVideo={setSelectedVideo}
                selectedId={selectedId}
              />}
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
