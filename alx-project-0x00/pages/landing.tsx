import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

const Landing: React.FC = () => {
  return (
    <>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small Button 1" styles="rounded-sm" />
      <Card />
      <Button title="Medium Button 2" styles="rounded-lg" />
      <Card />
      <Button title="Large Button 3" styles="rounded-full" />
    </>
  );
};

export default Landing;
