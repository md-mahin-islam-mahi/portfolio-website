import React, { useEffect, useState } from 'react';
import ShowBlogs from './ShowBlogs';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://md-mahin-portfolio-server.vercel.app/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div id='blog' className='flex flex-col justify-center items-center'>
            {
                blogs.map(blog => <ShowBlogs
                        key={blog._id}
                        blog={blog}
                     />)
            }
        </div>
    );
};

export default Blog;