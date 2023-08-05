import React from 'react'

function Post({postInfo}) {
  return (
    <>
        <h1>{postInfo.title}</h1>
        <button>more info</button>
        <p>-------------------</p>
    </>
  )
}

export default Post