import './Video.scss'

const Video = ({ videoDetails }) => {
    return (
        <div className="hero__video">
            <video className="video" poster={videoDetails.image} controls>
                <source src={`${videoDetails.video}?api_key='anything'`} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video