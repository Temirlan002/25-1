import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../../components/post/Post'
import PostSpinner from '../../components/post/PostSpinner'
import { getPosts } from '../../store/PostsSlice'

function PostPage() {

    const dispatch = useDispatch()

    const { posts, preloader, error } = useSelector(state => state.postsReducer)

    const getPostsFunc = () => {
        dispatch(getPosts())
    }

    useEffect(() => {
        getPostsFunc()
    }, [])

  return (
    <>
        <button onClick={getPostsFunc}>get posts</button>
        <button>delete all</button>
        {preloader ? <PostSpinner />
        : error ? <h3>{error}</h3> :
        posts.map(post => <Post key={post.id} postInfo={post} />)
        }
    </>
  )
}

export default PostPage