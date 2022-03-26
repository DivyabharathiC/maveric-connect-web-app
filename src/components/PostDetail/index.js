import React from "react";
import PostDetailsPage from "../../pages/HomePage/PostDetailsPage";

import Footer from "../Footer";
import Header from "../Header";

function PostDetail() {
  return (
    <div className="PostDetail">
      <Header/>

     <PostDetailsPage />

      <br></br>

     <Footer/>
    </div>
  );
}

export default PostDetail;