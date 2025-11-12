import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

const Landing: React.FC = () => {
  return (
    <>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Test Button" styles="bg-indigo-500" />
      <Card />
      <Button title="Test Button" styles="bg-indigo-500" />
    </>
  );
};

export default Landing;
