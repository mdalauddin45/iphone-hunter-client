import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <h3>show me all the phone</h3>
      <h5>i got {phones.length}</h5>
      {phones.map((phone) => (
        <li>
          <Link to={`/phones/${phone.id}`} key={phone.id}>
            {phone.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Home;
