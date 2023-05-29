import videoDetails from '../../data/video-details.json';
import Hero from '../../components/Hero/Hero';
import CommentSec from '../../components/CommentSec/CommentSec';
import NextVideosList from '../../components/NextVideosList/NextVideosList';
import Video from '../../components/Video/Video';
import { useState } from 'react';

const Homepage = ({ videosList, setVideosList, selectedVideo, setSelectedVideo }) => {

    // const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

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

export default Homepage