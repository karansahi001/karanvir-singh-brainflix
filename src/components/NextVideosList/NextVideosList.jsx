import VideoCard from '../VideoCard/VideoCard';
import './NextVideosList.scss';

const NextVideosList = ({ videoDetails, setSelectedVideo, videosList, setVideosList }) => {

  const handleClick = (videoId) => {
    const selected = videoDetails.find((video) => video.id === videoId)
    const updatedList = videoDetails.filter((video) => video.id !== selected.id)
    setVideosList(updatedList);
    setSelectedVideo(selected);
  }

  return (
    <aside className="videos-list">
      <p className="videos-list__head">NEXT VIDEOS</p>
      <ul className="next-videos">
        {
          videosList.map((video) => {
            return (
              <li key={video.id} className="next-videos__item">
                <VideoCard
                  id={video.id}
                  image={video.image}
                  title={video.title}
                  name={video.channel}
                  handleClick={handleClick}
                />
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default NextVideosList