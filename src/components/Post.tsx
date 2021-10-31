import React from 'react'
import { IPost } from '../models/IPost'

interface PostProps {
    post: IPost
    onUpdate: (post: IPost) => void
    onRemove: (id: IPost['id']) => void
}

const Post = ({ post, onUpdate, onRemove }: PostProps): JSX.Element => {
    const handleUpdate = () => {
        const title = prompt('Type new post title:', post.title)

        if (title) {
            onUpdate({ ...post, title })
        }
    }

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation()
        onRemove(post.id)
    }

    return (
        <div className='post' onClick={handleUpdate}>
            {post.id}. {post.title}
            <button onClick={handleRemove}>Delete</button>
        </div>
    )
}

export default Post
