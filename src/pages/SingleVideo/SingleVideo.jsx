import { useParams } from "react-router-dom"
import Hero from '../../components/Hero/Hero';
import CommentSec from '../../components/CommentSec/CommentSec';
import NextVideosList from '../../components/NextVideosList/NextVideosList';
import Video from '../../components/Video/Video';
import { useEffect } from 'react';

const SingleVideo = ({ videosList, selectedVideo, setSelectedId, selectedId }) => {
  const { video } = useParams();

  useEffect(() => {
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