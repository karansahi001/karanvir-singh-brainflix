import Hero from '../../components/Hero/Hero';
import CommentSec from '../../components/CommentSec/CommentSec';
import NextVideosList from '../../components/NextVideosList/NextVideosList';
import Video from '../../components/Video/Video';
import { useEffect } from 'react';
import axios from 'axios';

const Homepage = ({ videosList, selectedVideo, setSelectedId, selectedId, setSelectedVideo }) => {

    // const defaultVideo = "84e96018-4022-434e-80bf-000ce4cd12b8";
    const apiKey = "fff13bb4-110b-4db2-8522-81e36bd83ccf";
    const videosListUrl = `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`;

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