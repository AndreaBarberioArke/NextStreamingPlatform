import React from "react";
import Link from "next/link";
export const HomePage = () => {
  return (
    <>
      <h1>This is the Home Page</h1>
      <p>Where The Network starts!</p>
      <ul>
        <li>
          <Link href="/manage">Manage Page</Link>
        </li>
        <li>
          <Link href="/search">Search Page</Link>
        </li>
      </ul>
    </>
  );
};
export default HomePage;
