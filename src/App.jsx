import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Upload from './pages/Upload/Upload';
import SingleVideo from './pages/SingleVideo/SingleVideo';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [videosList, setVideosList] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const apiKey = "fff13bb4-110b-4db2-8522-81e36bd83ccf";
  const videosListUrl = `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
       await axios.get(videosListUrl)
        .then((res) => {
          return (
            setVideosList(res.data)),
            setSelectedId(res.data[0].id)
        })
        .catch((err) => console.log(err))
    }
    fetchData();
  }, [videosListUrl])

  useEffect(() => {
    const videoGet = async () => {
      selectedId.length > 0 ?
      await axios.get(`https://project-2-api.herokuapp.com/videos/${selectedId}?api_key=${apiKey}`)
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
              <SingleVideo
                videosList={videosList}
                selectedVideo={selectedVideo}
                setSelectedId={setSelectedId}
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
