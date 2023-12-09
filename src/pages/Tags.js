import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import "./Tags.css";


function Tags(){

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
    return(<div className="tag-whole">
        <Header/>
        <div className="container-tagg">
            <div>
                <button onClick={() => navigation(-1)}>Back</button>
            </div>
            <div className="cmnt">
                Blogs Tagged <span> #{tag} </span>
            </div>
        </div>
        <Content/>
        <Footer/>
    </div>)
}

export default Tags;