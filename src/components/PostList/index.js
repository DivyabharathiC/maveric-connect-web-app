import React from "react";
import PostListsPage from "../../pages/HomePage/PostListsPage";

import Footer from "../Footer";
import Header from "../Header";

function PostList() {
  return (
    <div className="PostList">
      <Header/>

     <PostListsPage/>

      <br></br>

     <Footer/>
    </div>
  );
}

export default PostList;

