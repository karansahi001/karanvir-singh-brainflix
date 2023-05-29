import Hero from '../../components/Hero/Hero';
import CommentSec from '../../components/CommentSec/CommentSec';
import NextVideosList from '../../components/NextVideosList/NextVideosList';
import Video from '../../components/Video/Video';
import { useEffect } from 'react';
import axios from 'axios';
import { apiKey, videosListUrl } from '../../App';

const Homepage = ({ videosList, selectedVideo, setSelectedId, selectedId }) => {

    useEffect(() => {
        const defaultData = async () => {
            await axios.get(videosListUrl)
                .then((res) => setSelectedId(res.data[0].id))
                .catch((err) => console.log(err))
        }
        defaultData();
    }, [setSelectedId, videosListUrl])

    const filteredList = videosList.filter(item => item.id !== selectedId);

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

export default Homepage