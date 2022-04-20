import React, { useEffect,useState } from "react";
import axios from "axios";
import Endpoints from "../../../api/Endpoints.js";
import images from "../../../images/default-profile-pic.jpg";
import commentimg from "../../../images/comment-img.png";
import likeimg from "../../../images/like-img.png";
import "./style.css";
import { Link, useParams } from "react-router-dom";


const PostDetailsPage = () => {
  let { id } = useParams();
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    console.log(id,"postId")
    
    getPost();
    getComments();

  }, []);

  const getPost = () => {
    axios
      .get(Endpoints.GET_POSTS_URL + "/" + id)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getComments = () => {
    axios
      .get(Endpoints.GET_COMMENTS_BY_POSTID_URL + "/" + id + "/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="post-detail">
      <div className="container">
        <div className="text-center">
        <div class="list-group">
            
              <div class="list-group-item list-group-item" style={{ marginTop: "7px", width: "90%", marginLeft: "5%" }}>
              <div class="d-flex w-150">
                <p style={{ fontSize: "15px", color: "#224f8f", marginLeft: "1%" }}>
                  <img
                    src={images}
                    className="img-thumbnail"
                    style={{ width: "100%" }}
                  />
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#224f8f",
                      marginLeft: "-2%",
                    }}
                  >
                    {users.post?users.postedBy.firstName:"User not available"}
                  </p>
                </p>
                
                <p class="text-justify" style={{
                      fontSize: "15px",
                      color: "#224f8f",
                      marginLeft: "5%",
                      width: "130%"
                    }}>{users.post}</p>
              </div>
              </div>

          {comments.map((comm) => (
              <div class="list-group">
                <div
                  class="list-group-item list-group-item"
                  style={{ marginTop: "4px", width: "90%", marginLeft: "5%" }}
                >
                  <div class="d-flex w-150">
                    <small>
                      <img src={commentimg} className="img-thumbnail"  style={{ width: "30%", marginLeft: "-35%" }}/>
                      <br />
                      <p style={{ fontSize: "15px", color: "#224f8f", marginLeft: "-35%" }}>
                        {comm.commentedBy.firstName}      
                    
                      </p>
                    </small>
                    <span style={{ fontSize: "15px", marginLeft: "0%", color: "#224f8f" }}>{comm.comment}</span>
                    
                  </div>
                  <div class="d-flex w-100 justify-content-between">
                  <p style={{ fontSize: "12px", color: "#224f8f", marginLeft: "70%" }}>
                        <img src={likeimg} className="img-thumbnail"style={{ width: "12%"}} />
                     &nbsp; {comm.likesCount} Likes
                    </p>
                    </div>
                  </div>
                </div>
              
            
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
export default PostDetailsPage;