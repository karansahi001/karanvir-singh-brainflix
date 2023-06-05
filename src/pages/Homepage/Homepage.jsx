import Hero from '../../components/Hero/Hero';
import CommentSec from '../../components/CommentSec/CommentSec';
import NextVideosList from '../../components/NextVideosList/NextVideosList';
import Video from '../../components/Video/Video';
import { useEffect } from 'react';
import axios from 'axios';
import { videoSingleUrl, videosListUrl } from '../../App';
import './Homepage.scss'
import { useParams } from 'react-router-dom';

const Homepage = ({ videosList, selectedVideo, setSelectedId, selectedId, setSelectedVideo }) => {

  const { video } = useParams();
  
  useEffect(() => {
    if (video) {
      const getData = async () => {
        await axios.get(`${videoSingleUrl}${video}`)
            .then((res) => setSelectedVideo(res.data))
            .catch((err) => console.log(err))
      }
        setSelectedId(video)
      } else {
          const defaultData = () => {
            axios.get(videosListUrl)
            .then((res) => setSelectedId(res.data[0].id))
            .catch((err) => console.log(err))
          }
          defaultData()
        }

    }, [setSelectedVideo, setSelectedId, video])

  const filteredList = videosList.filter(item => item.id !== selectedId);

  return (
    <>
        {selectedVideo
            ?
            <Video selectedVideo={selectedVideo} />
            :
            <p>Loading...</p>}
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

export default Homepage