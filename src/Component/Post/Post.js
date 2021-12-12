import React, { useEffect, useState } from 'react';

const Post = () => {
    const [posts,setPosts] =useState();

      useEffect(() => {
        fetch('https://gorest.co.in/public/v1/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
        
      },[])

         console.log(posts);
    return (
        <div>
            <h1>posts</h1>
         {
             posts?.data?.map((post,i) => <p>{post.title}</p>)
         }

        </div>
    );
};

export default Post;