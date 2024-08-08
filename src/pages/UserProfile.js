import React from "react"
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import UserCard from "../components/UserCard";

function UserProfile() {
  const { id } = useParams();  

  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>User Profile for {id}</h1>
      </main>
      <UserCard/>
     
    </>
  );
};

export default UserProfile;