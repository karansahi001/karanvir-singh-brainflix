import './Video.scss'

const Video = ({ selectedVideo }) => {
   
    return (
        <section className="hero__video">
            <video className="video" poster={selectedVideo && selectedVideo.image} controls>
                <source src={`${selectedVideo && selectedVideo.video}?api_key='anything'`} type="video/mp4" />
            </video>
        </section>
    )
}

export default Video