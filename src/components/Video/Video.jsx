import './Video.scss'

const Video = ({ selectedVideo }) => {
    return (
        <div className="hero__video">
            <video className="video" poster={selectedVideo.image} controls>
                <source src={`${selectedVideo.video}?api_key='anything'`} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video