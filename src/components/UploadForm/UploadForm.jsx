import './UploadForm.scss';
import publish from '../../assets/images/icons/publish.svg'

const UploadForm = () => {

  const handleClick = (e) => {
    e.preventDefault();
    alert("Upload Complete")
    window.location.href = "/";

  }

  return (
    <form className="upload-form">
      <label className="upload-form__labels" htmlFor="title">TITLE YOUR VIDEO</label>
      <input
        className="upload-form__title"
        type="text"
        name="title"
        id="title"
        placeholder="Add a title to your video"
      />
      <label className="upload-form__labels" htmlFor="desc">ADD A VIDEO DESCRIPTION</label>
      <textarea
        className="upload-form__desc"
        name="desc"
        id="desc"
        cols="30"
        rows="10"
        placeholder="Add a description to your video">
      </textarea>
      <div className="upload-btns">
        <i className="upload-btns__publish-icon">
          <img src={publish} alt="upload" />
        </i>
        <button onClick={handleClick} type="submit" className="upload-btns__publish">PUBLISH</button>
        <p className="upload-btns__cancel">CANCEL</p>
      </div>
    </form>
  )
}

export default UploadForm