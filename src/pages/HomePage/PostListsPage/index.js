import React, { useState , useEffect } from "react";
import axios from "axios";
import Endpoints from "../../../api/Endpoints.js";
import images from "../../../images/default-profile-pic.jpg";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postList } from "../../../Test/postList";

const PostListsPage = () => {
     const [users, setUsers] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
      getPost();
    }, []);

    const getPost = () => {
      axios
        .get(Endpoints.GET_POSTS_URL)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <div className="post-list">
        <h3 className="text-center"></h3>
  
         {users.map((customer) => ( 
          <div key={customer.id} className="container">
            <div class="list-group">
              <a
                href="#"
                onClick={() => {
                  navigate(`/postdetailpage/${customer.id}`);
                }}
                class="list-group-item list-group-item-action"
              >
                <div class="d-flex w-150">
                  <small>
                    <img src={images} className="img-thumbnail" width={80} />
                    <br />
                    {customer.postedBy.email}
                  </small>
                  &nbsp; &nbsp; &nbsp;
                  <span>{customer.post}</span>
                </div>
  
                <div class="d-flex w-100 justify-content-between">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <small>{customer.likeCounts} Likes</small>
                  <small>{customer.commentCounts} Comments</small>
                  <div></div>
                </div>
              </a>
              <br />
            </div>
          </div>
        )
        )
        
        }
      </div>
    );
  };
export default PostListsPage;
