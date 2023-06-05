import axios from 'axios';
import { useState } from 'react';
import './UploadForm.scss';

const UploadForm = ({ handleSubmit }) => {

  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");

  return (
    <form id="form-upload" className="upload-form" onSubmit={handleSubmit}>
      <label className="upload-form__labels" htmlFor="title">TITLE YOUR VIDEO</label>
      <input
        className="upload-form__title"
        value={title}
        type="text"
        name="title"
        id="title"
        placeholder="Add a title to your video"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="upload-form__labels" htmlFor="desc">ADD A VIDEO DESCRIPTION</label>
      <textarea
        className="upload-form__desc"
        value={descr}
        name="desc"
        id="desc"
        cols="30"
        rows="10"
        placeholder="Add a description to your video"
        onChange={(e) => setDescr(e.target.value)}
      >
      </textarea>
    </form>
  )
}

export default UploadForm