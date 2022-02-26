import './post.css';
import {MoreVert} from '@material-ui/icons';
import { Users } from '../../data';
import { useState } from "react";

function Post({post}) {

    const [like, setLike] = useState(post.likes); 
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };

    return (
        <div className='post'>
            <div className="postCover">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfilePic' src={Users.filter( u=> u.id === post?.userId[0].profilePicture)} alt="" />
                        <span className="postUsername">
                            {Users.filter( u=> u.id === post?.userId[0].username)}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postContent">{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='postLikeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className='postLikeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCount">{like} people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentCount">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;