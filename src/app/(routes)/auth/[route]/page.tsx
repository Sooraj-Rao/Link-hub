import React from "react";
import Login from "../login";
import SignUp from "../signup";

const Page = ({ params: { route } }: { params: { route: string } }) => {
  const renderComponent = () => {
    switch (route) {
      case "signup":
        return <SignUp />;
      default:
        return <Login />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default Page;
