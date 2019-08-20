import React, { Component } from 'react';
import './Feed.css';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

export default class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Eduardo Quintino</span>
                            <span className="place">Brasília</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/green.jpg" alt="Mais" />

                    <footer>
                        <div className="actions" >
                            <img src={like} alt="like" />
                            <img src={comment} alt="comment" />
                            <img src={send} alt="send" />
                        </div>
                        <strong>3000 curtidas</strong>
                        <p>
                            Um post muito fd
                                <span>#hashtags</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Eduardo Quintino</span>
                            <span className="place">Brasília</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/green.jpg" alt="Mais" />

                    <footer>
                        <div className="actions" >
                            <img src={like} alt="like" />
                            <img src={comment} alt="comment" />
                            <img src={send} alt="send" />
                        </div>
                        <strong>3000 curtidas</strong>
                        <p>
                            Um post muito fd
                                <span>#hashtags</span>
                        </p>
                    </footer>
                </article>
                
            </section>
        )
    }
}