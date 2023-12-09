import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import "./Bloogs.css"

function Bloogs(){


    const nav = useNavigate();
    const location = useLocation();

    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    const {loading, setLoading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    async function fetchRelatedBlogs(){
        setLoading(true);
        const url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } 
        catch (error) {
            console.log("error in fetching related blog link");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname]) 

    return(<div className="bloogs">
        <Header/>
        <div className="bloogs-content">
            <div className="butt">
                <button onClick={ ()=> nav(-1) } >
                    Back
                </button>
            </div>
            <div className="spinn-posts">
                {loading ? (
                        <Spinner />
                    ) : (
                        blog ? (
                            <div>
                                <Card post={blog} />
                                <h3>Related Blogs</h3>
                                {relatedBlogs.map((blog) => (
                                    <div key={blog.id}>
                                        <Card post={blog} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No Blog exists</p>
                        )
                    )}
            </div>
        </div>
    </div>)
}

export default Bloogs;