

import { useContext } from "react";
import "./Footer.css";
import { AppContext } from "../context/AppContext";

function Footer(){

    const {changeHandler, totalPage, page} = useContext(AppContext);


    return(<div className="foot">
        
        <div className="btn-container">
            {
                page > 1 &&
                <button onClick={() => changeHandler(page-1)}>Prev</button>
            }
            {   page < totalPage &&
                <button onClick={() => changeHandler(page+1)}>Next</button>
            }
        </div>

        <div className="page">
            <p>Page <span>{page}</span> of <span>{totalPage}</span></p>
        </div>
    </div>)
}

export default Footer;