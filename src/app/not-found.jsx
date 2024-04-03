import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <p>Not found page</p>
      <p>Sorry, the page you are looking for doesn't exist</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
