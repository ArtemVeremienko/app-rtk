import { IPost } from '../models/IPost'

interface PostProps {
    post: IPost
}

const Post = ({ post }: PostProps): JSX.Element => {
    return (
        <div className='post'>
            {post.id}. {post.title}
            <button>Delete</button>
        </div>
    )
}

export default Post
