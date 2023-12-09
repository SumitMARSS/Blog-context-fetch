import { useContext } from "react";
import AppContextProvider, { AppContext } from "../context/AppContext";
import React from "react";
import Spinner from "./Spinner";
import Card from "./Card";
import "./Content.css"

function Content(){

    const {loading,posts} = useContext(AppContext);
    return(<div className="container">
        <div className="content">
        {
        loading ? (<Spinner/>) : 
        (
            posts.length === 0 ? 
            (
                <div><p>No posts exists</p></div>
            ) :
            ( posts.map( (post) => (<Card post={post}/>) ))
        )
        }
        </div>
    </div>)
}

export default Content;