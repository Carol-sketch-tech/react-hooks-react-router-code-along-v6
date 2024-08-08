import React from "react"
import {Link} from "react-router-dom"

function UserCard({user}) {
  if(!user){
    return null;
  }
  return (
    <article>
        <h2>{user.name}</h2>
        <Link to={`/profile/${user.id}`}>View Profile</Link>
        {/* we have used string interpolation to update the to prop of our link component to include the idof the user corresponding to the link that was clicked. */}
    </article>
  );
};

export default UserCard;