import { postAPI } from '../services/PostService'
import Post from './Post'

const PostContainer = () => {
    const { data: posts, isLoading, error, refetch } = postAPI.useFetchAllPostsQuery(5)

    return (
        <div>
            <button onClick={() => refetch()}>Refetch</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error: {error}</h1>}
            {posts?.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default PostContainer
