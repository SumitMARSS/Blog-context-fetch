

import "./App.css"
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Tags from "./pages/Tags";
import Bloogs from "./pages/Bloogs";

export default function App() {

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();




  const {fetchBlogUrl} = useContext(AppContext);
  

  useEffect(()=> {
    // fetchBlogUrl();
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      //iska matbal tag wala page show kar bhai
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogUrl(Number(page),tag);
    }
    else if (location.pathname.includes("category")) {
      //category page
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogUrl(Number(page),null,category);
    }
    else{
      fetchBlogUrl(Number(page));
    }

  },[location.pathname, location.search]);


  return (<div className="newdiv">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogID" element={<Bloogs/>} />
      <Route path="/tags/:tag" element={<Tags/>} />
      <Route path="/category/:category" element={<Category/>} />
    </Routes>
    
  </div>);
}
