import React,{Component} from 'react'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component{
    render(){
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Jabes</span>
                            <span className="´lace"> Joao Pessoa</span>
                        </div>
                        <img src={more} alt="Mais"></img>
                    </header>
                    <img src="http:localhost:333/files/arqivo.png"></img>
                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>900 curtidas</strong>
                        <p>
                            Um post muito massa!!!
                            <span>#react #ommistack #top</span>
                        </p>
                    </footer>
                </article>
            </section>
           
        );
    }
}

export default Feed;