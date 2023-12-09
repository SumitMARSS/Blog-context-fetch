
import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();


function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [posts, setPosts] = useState([]);
    const nav = useNavigate();


    async function fetchBlogUrl(page=1, tag=null, category){
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        setLoading(true);
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setTotalPage(data.totalPages);
            setPosts(data.posts);
            setPage(data.page);
        } 
        catch (error) {
            console.log("error on url fetching");
        }
        setLoading(false);
    }

    function changeHandler(page){
        setPage(page);
        nav({ search: `?page=${page}`})
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        totalPage,
        setTotalPage,
        posts,
        setPosts,
        fetchBlogUrl,
        changeHandler
    }

    //make childre3n to be visible

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}



export default AppContextProvider;