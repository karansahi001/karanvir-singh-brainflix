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
  const [selectedId, setSelectedId] = useState("c05b9a93-8682-4ab6-aff2-92ebb4bbfc14");
  // ("84e96018-4022-434e-80bf-000ce4cd12b8");
  const [selectedVideo, setSelectedVideo] = useState(null);


  const apiKey = "fff13bb4-110b-4db2-8522-81e36bd83ccf";
  const videosListUrl = `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`;
  const singleVideoUrl = `https://project-2-api.herokuapp.com/videos/${selectedId}?api_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
       await axios.get(videosListUrl)
        .then((res) => setVideosList(res.data))
        .catch((err) => console.log(err))
    }

    fetchData();
  }, [videosListUrl])

  useEffect(() => {
    const videoGet = () => {
     axios.get(singleVideoUrl)
      .then((res) => setSelectedVideo(res.data))
      .catch((err) => console.log(err))
    }
    videoGet();
  },[selectedId])

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
                setVideosList={setVideosList} 
                selectedVideo={selectedVideo}
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
                setVideosList={setVideosList} 
                selectedVideo={selectedVideo}
                setSelectedVideo={setSelectedVideo}
                setSelectedId={setSelectedId}
              />}
              >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
