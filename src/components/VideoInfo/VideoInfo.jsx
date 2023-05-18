

const VideoInfo = () => {
  return (
    <section className="v-info">
        <h1 className="v-info__head">{}</h1>
        <hr className="v-info__divider" />
        <div className="vcontain">
            <div className="vcontain">
                <p className="vcontain__by"></p>
                <p className="vcontain__date"></p>
            </div>
            <div className="vcontain">
                <p className="vcontain__views"><i></i></p>
                <p className="vcontain__likes"><i></i></p>
            </div>
        </div>
        <hr className="v-info__divider" />
        <p className="v-info__desc"></p>
    </section>
  )
}

export default VideoInfo