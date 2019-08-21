import React, { Component } from 'react';
import api from '../services/api';

import './Feed.css';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

export default class Feed extends Component {

    // Quando necessário armazenar uma informação dentro de um componente devo usar um estado
    // Quando as alterações necessitem ser refletidas no html, uso o estado
    state = {
        feed: [],
    };

    // Quando o componente for montado
    async componentDidMount() {
        const response = await api.get('posts');

        this.setState({ feed: response.data });
    }

    render() {
        return (
            <section id="post-list">
                {this.state.feed.map(post => (
                    <article key={post.id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>

                            <img src={more} alt="Mais" />
                        </header>
                        <img src={`http://localhost:3333/files/${post.image}`} alt="Mais" />

                        <footer>
                            <div className="actions" >
                                <img src={like} alt="like" />
                                <img src={comment} alt="comment" />
                                <img src={send} alt="send" />
                            </div>
                            <strong>{post.likes}</strong>
                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>
                        </footer>
                    </article>
                ))}
            </section>
        )
    }
}