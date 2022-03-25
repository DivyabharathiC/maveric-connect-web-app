import React from "react";
import images from "../../../images/default-profile-pic.jpg"

const PostListsPage = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            class="mr-3"
            src={images}
            alt="Generic placeholder image"
            width="64"
            height="64"
          />
        </div>
        <div class="col-6">
          <div class="media-body">
            <h5 class="mt-0 mb-1">List-based media object</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
        <div class="col">
          <img class="mr-1" ssrc="Like.jpg" width="64" height="64" alt="" />
          Like
          <img class="mr-1" src="comment.png" width="64" height="64" alt="" />
          Comment
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img
            class="mr-3"
            src={images}
            alt="Generic placeholder image"
            width="64"
            height="64"
          />
        </div>
        <div class="col-6">
          <div class="media-body">
            <h5 class="mt-0 mb-1">List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
        <div class="col">
          <img class="mr-1" ssrc="Like.jpg" width="64" height="64" alt="" />
          2 Like
          <img class="mr-1" src="comment.png" width="64" height="64" alt="" />
          Comment
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img
            class="mr-3"
            src={images}
            alt="Generic placeholder image"
            width="64"
            height="64"
          />
        </div>
        <div class="col-6">
          <div class="media-body">
            <h5 class="mt-0 mb-1">List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
        <div class="col">
          <img class="mr-1" ssrc="Like.jpg" width="64" height="64" alt="" />
          Like
          <img class="mr-1" src="comment.png" width="64" height="64" alt="" />
          Comment
        </div>
        {/* <div class="row">
          <div class="col-8 col-sm-6">Comment </div>

          <div class="col-4 col-sm-6">5 Likes</div>
        </div> */}
      </div>
    </div>
  );
};

export default PostListsPage;
