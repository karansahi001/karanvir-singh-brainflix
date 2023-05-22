import VideoCard from '../VideoCard/VideoCard';
import './NextVideosList.scss';

const NextVideosList = ({ videosList, videoDetails, setSelectedVideo }) => {

  const handleClick = (videoId) => {
    const selected = videoDetails.find((video) => video.id === videoId)
    setSelectedVideo(selected);
  }

  const handleList = () => {

  }

  return (
    <div className="videos-list">
        <p className="videos-list__head">NEXT VIDEOS</p>
        {
            videosList.map((video) => {
               return(
                   <VideoCard 
                        key={video.id} 
                        id={video.id}
                        image= {video.image} 
                        title= {video.title} 
                        name= {video.channel} 
                        handleClick = { handleClick }
                    />
               ) 
            })
        }
    </div>
  )
}

export default NextVideosList