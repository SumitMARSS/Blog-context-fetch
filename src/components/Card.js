
import { NavLink } from "react-router-dom";
import "./Card.css"

function Card({post}){



    return (<div className="card">

        <NavLink to={`/blog/${post.id}`}>
            <h4>{post.title}</h4>
        </NavLink>
        <p>By <span className="aut">{post.author}</span> on  
        <NavLink to={`/category/${post.category.replaceAll(" ", "-")}`}>
            <span className="cat"> {post.category}</span>
        </NavLink> </p>
        <p>Posted On <span>{post.date}</span></p>
        <p>{post.content}</p>
        <div className="tages"> {post.tags.map( (tag) => ( 
            <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
                <span>#{tag}</span> 
            </NavLink>
        ))} </div>
    </div>)
}

export default Card;