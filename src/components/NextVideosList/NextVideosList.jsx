import VideoCard from '../VideoCard/VideoCard';
import './NextVideosList.scss';

const NextVideosList = ({ videos }) => {
  return (
    <div className="videos-list">
        <p className="videos-list__head">NEXT VIDEOS</p>
        {
            videos.map((video) => {
               return(
                   <VideoCard 
                        key={video.id} 
                        image= {video.image} 
                        title= {video.title} 
                        name= {video.channel} 
                    />
               ) 
            })
        }
    </div>
  )
}

export default NextVideosList