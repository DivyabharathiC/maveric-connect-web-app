import React, { useEffect,useState } from "react";
import axios from "axios";
import Endpoints from "../../../api/Endpoints.js";
import images from "../../../images/default-profile-pic.jpg";
import "./style.css";
import { Link, useParams } from "react-router-dom";

const PostDetailsPage = () => {
  let { id } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(id,"postId")
    
    getPost();
  }, []);

  const getPost = () => {
    axios
      .get(Endpoints.GET_COMMENTS_BY_POSTID_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="post-detail">
      <div className="container">
        <div className="text-center">
          <div class="d-flex w-150">
            <small>
              <img src={images} className="img-thumbnail" width={80} />
              <br />
              {users.postedBy}
            </small>
            {users.post}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetailsPage;