import './Video.scss'

const Video = ({ selectedVideo }) => {

  const videoSelect = selectedVideo ? selectedVideo.video : "";

  return (
    <section className="hero__video">
      <video className="video" poster={selectedVideo && selectedVideo.image} controls>
        <source src={`${videoSelect}`} type="video/mp4" />
      </video>
    </section>
  )
}

export default Video