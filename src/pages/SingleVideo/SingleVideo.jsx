import { useParams } from "react-router-dom"
import Hero from '../../components/Hero/Hero';
import CommentSec from '../../components/CommentSec/CommentSec';
import NextVideosList from '../../components/NextVideosList/NextVideosList';
import Video from '../../components/Video/Video';
import { useEffect } from 'react';
import axios from 'axios';
import { apiKey, videoSingleUrl } from '../../App';
import './SingleVideo.scss'

const SingleVideo = ({ videosList, selectedVideo, setSelectedId, setSelectedVideo }) => {
  const { video } = useParams();

  useEffect(() => {
    const getData = async () => {
      await axios.get(`${videoSingleUrl}${video}${apiKey}`)
        .then((res) => setSelectedVideo(res.data))
        .catch((err) => console.log(err))
    }
    setSelectedId(video);
  }, [setSelectedId, video])

  const filteredList = videosList.filter(item => item.id !== video);

  return (
    <>
      <Video selectedVideo={selectedVideo} />
      <main className="main">
        <section className="main__left">
          <Hero selectedVideo={selectedVideo} />
          <CommentSec selectedVideo={selectedVideo} />
        </section>
        <section className="main__right">
          <NextVideosList
            videosList={filteredList}
          />
        </section>
      </main>
    </>
  )
}

export default SingleVideo