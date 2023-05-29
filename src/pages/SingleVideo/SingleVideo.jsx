import { useParams } from "react-router-dom"
import videoDetails from '../../data/video-details.json';
import Hero from '../../components/Hero/Hero';
import CommentSec from '../../components/CommentSec/CommentSec';
import NextVideosList from '../../components/NextVideosList/NextVideosList';
import Video from '../../components/Video/Video';
import { useEffect, useState } from 'react';

const SingleVideo = ({ videosList, setVideosList, selectedVideo, setSelectedVideo, setSelectedId }) => {
  const { video } = useParams();
  useEffect(() => {
    setSelectedId(video);
  }, [setSelectedId, video])

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
            setSelectedVideo={setSelectedVideo}
            videosList={videosList}
            setVideosList={setVideosList}
            videoDetails={videoDetails}
          />
        </section>
      </main>
    </>
  )
}

export default SingleVideo