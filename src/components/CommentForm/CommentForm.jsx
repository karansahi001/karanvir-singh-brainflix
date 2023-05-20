import './CommentForm.scss'
import commentIcon from '../../assets/images/icons/add_comment.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'

const CommentForm = () => {
    return (
        <div classNameName="comment-form">
            <div className="comments-sec">
                <div className="comments-sec__profile">
                    <img className="profile__icon" src={avatar} alt="form profile avatar" />
                </div>
                <div className="comments-sec__form">
                    <form className="form" onSubmit={(e) => e.preventDefault()}>
                        <label className="form__comment" forHTML="comment">JOIN THE CONVERSATION</label>
                        <textarea className="form-input__comment" name="comment" id="comment" cols="30" rows="10" placeholder="Add a new comment"></textarea>
                        <div className="form-button">
                            <button type="submit" className="form-button__submit">
                               <i className="btn__icon">
                                <img src={commentIcon} alt="add comment" />
                               </i>
                                COMMENT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CommentForm