import "./LinhaDoTempo.css";
import { Post } from "../PaginaFeed/Post";
import { AuthContext } from '../../../App';
import { listarPosts } from '../../../api/postAPI';
import { useContext, useEffect, useState } from 'react';

export default function LinhaDoTempo(props) {

    const { auth } = useContext(AuthContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        listarPosts(auth.token).then(
            (response) => {
                setPosts(response.data)
            }
        ).catch(
            (error => {
                console.log(error)
            })
        )
    }, [auth.token])

    return (
        <div className="linha-tempo">
            <Post posts = {posts} />
        </div>
    )
}