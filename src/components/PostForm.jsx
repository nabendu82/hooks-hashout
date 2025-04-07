import axios from 'axios';
import React, { useState } from 'react'

const PostForm = () => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const url = 'https://jsonplaceholder.typicode.com/users';
        const user = await axios.post(url, { userId, title, body })
        console.log(user.data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='userId'>UserId </label>
                <input type='text' id='userId' name='userId' value={userId} onChange={e => setUserId(e.target.value)} />
            </div>
            <br />
            <div>
                <label htmlFor='title'>Title </label>
                <input type='text' id='title' name='title' value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <br />
            <div>
                <label htmlFor='body'>Body </label>
                <textarea id='body' name='body' value={body} onChange={e => setBody(e.target.value)}></textarea>
            </div>
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default PostForm