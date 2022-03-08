import './post.css';
import { MoreVert } from "@material-ui/icons";

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
            <span className="postUsername">Julia Emcy</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey It's my first post:)</span>
          <img className='postImg' src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom"></div>
      </div>
    </div>
  )
}
