import React from "react";
import NotFound from "../not-found";
import { notFound } from "next/navigation";

const Page = () => {
  notFound(); //手动触发局部notfound示范
  return <div>TestPage</div>;
};

export default Page;
