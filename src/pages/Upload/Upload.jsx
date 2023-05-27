import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import UploadForm from '../../components/UploadForm/UploadForm';
import './Upload.scss'

const Upload = () => {
  return (
    <>
      <main className="upload">
        <section className="upload-hero">
          <h1 className="upload-hero__head">Upload Video</h1>
          <p className="upload-hero__label">VIDEO THUMBNAIL</p>
          <img className="upload-hero__img" src={ uploadImage } alt="Upload video preview" />
        </section>
        <section>
          <UploadForm />
        </section>
      </main>
    </>
  )
}

export default Upload