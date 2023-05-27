import './UploadForm.scss';

const UploadForm = () => {

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
    </form>
  )
}

export default UploadForm