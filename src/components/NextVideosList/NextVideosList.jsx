import VideoCard from '../VideoCard/VideoCard';
import './NextVideosList.scss';

const NextVideosList = ({ videoDetails, selectedVideo, setSelectedVideo, videosList, setVideosList }) => {

  const handleClick = (videoId) => {
    const selected = videoDetails.find((video) => video.id === videoId)
    const updatedList = videoDetails.filter((video) => video.id !== selected.id)
    setVideosList(updatedList);
    setSelectedVideo(selected);
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