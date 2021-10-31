import { postAPI } from '../services/PostService'
import Post from './Post'

const PostContainer = () => {
    const { data: posts, isLoading, error, refetch } = postAPI.useFetchAllPostsQuery(5)
    const [createPost, { isLoading: isCreatingPost }] = postAPI.useCreatePostMutation()
    const [updatePost, { isLoading: isUpdatingPost }] = postAPI.useUpdatePostMutation()
    const [deletePost, { isLoading: isDeletingPost }] = postAPI.useDeletePostMutation()

    const handleCreatePost = () => {
        const title = prompt('Type post title:')
        if (title) {
            createPost({ title, body: title })
        }
    }

    return (
        <div>
            <button onClick={() => handleCreatePost()}>
                {isCreatingPost ? 'Creating' : 'Add new post'}
            </button>
            <button onClick={() => refetch()}>Refetch</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error: {error}</h1>}
            {posts?.map((post) => (
                <Post post={post} key={post.id} onUpdate={updatePost} onRemove={deletePost} />
            ))}
            {isUpdatingPost && <p>Post updating...</p>}
            {isDeletingPost && <p>Post deleting...</p>}
        </div>
    )
}

export default PostContainer
