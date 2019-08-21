import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

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
        this.registerToSocket();
        const response = await api.get('posts');

        this.setState({ feed: response.data });
    }

    registerToSocket = () => {
        const socket = io('http://localhost:3333');

        socket.on('post', newPost => {
            this.setState({feed: [newPost, ...this.state.feed]});
        })
    }

    handleLike = id => {
        api.post(`/posts/${id}/like`);
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
                                {/* Para funções com parametros devo usar arrow function */}
                                {/* Sem arrow function, apenas executa função. Não passa a função como referencia. */}
                                <button type="button" onClick={() => this.handleLike(post.id)}>
                                    <img src={like} alt="like" />
                                </button>
                                <img src={comment} alt="comment" />
                                <img src={send} alt="send" />
                            </div>
                            <strong>{post.likes} curtidas</strong>
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