import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import "./Category.css";


function Category(){

    const nav = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (<div className="catt-whole">
        <Header/>
        <div className="catt-conatin">
            <div>
                <button onClick={ () => nav(-1) } >Back</button>
            </div>
            <div className="cmnt">
                Blogs On <span>{category}</span>
            </div>
        </div>
        <Content/>
        <Footer/>
    </div>)
}

export default Category;