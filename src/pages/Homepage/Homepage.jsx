import videos from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';
import Hero from '../../components/Hero/Hero';
import CommentSec from '../../components/CommentSec/CommentSec';
import NextVideosList from '../../components/NextVideosList/NextVideosList';
import Video from '../../components/Video/Video';
import { useState } from 'react';

const Homepage = () => {

    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
    const [videosList, setVideosList] = useState(videos.slice(1));

    return (
        <>
            <Video selectedVideo={selectedVideo} />
            <div className="main">
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
            </div>
        </>
    )
}

export default Homepage