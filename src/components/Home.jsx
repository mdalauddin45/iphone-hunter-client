import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h3>show me all the phone</h3>
      <h5>i got {users.length}</h5>
    </div>
  );
};

export default Home;
