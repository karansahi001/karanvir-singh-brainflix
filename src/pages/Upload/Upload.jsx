import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { videosListUrl } from '../../App';
import UploadForm from '../../components/UploadForm/UploadForm';
import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/images/icons/publish.svg';
import './Upload.scss'

const Upload = () => {

  const handleClick = (e) => {
    e.preventDefault();
    axios.post(videosListUrl, { title: e.target.title.value, description: e.target.desc.value })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    window.location.href = "/";
  }

  return (
    <main className="upload-sec">
      <h1 className="upload-sec__head">Upload Video</h1>
      <section className="upload">
        <section className="upload-hero">
          <p className="upload-hero__label">VIDEO THUMBNAIL</p>
          <img className="upload-hero__img" src={uploadImage} alt="Upload video preview" />
        </section>
        <UploadForm handleSubmit={handleClick} />
      </section>
      <footer className="upload-btns">
        <i className="upload-btns__publish-icon">
          <img src={publish} alt="upload" />
        </i>
        <button form="form-upload" type="submit" className="upload-btns__publish">PUBLISH</button>
        <NavLink className="upload-btns__cancel" to="/">
          <p className="upload-btns__cancel" >
            CANCEL
          </p>
        </NavLink>
      </footer>
    </main>

  )
}

export default Upload