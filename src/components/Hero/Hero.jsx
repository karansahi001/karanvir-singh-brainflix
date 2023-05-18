import Video from "../Video/Video"
import VideoInfo from "../VideoInfo/VideoInfo"


const Hero = ({ videoDetails }) => {
  return (
    <>
        <Video videoDetails={videoDetails} />
        <VideoInfo videoDetails={videoDetails} />
    </>
  )
}

export default Hero