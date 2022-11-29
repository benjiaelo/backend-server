const express = require("express");
const handleRequest = (requestObject, responseObject) => {
  console.log("hello");
  const url = requestObject.url;
  responseObject.setHeader("content-type", "text/html");
  responseObject.write("<h1>404 PAGE NOT FOUND!</h1>");

  responseObject.end();
};
const handleHomeRequest = (req, res) => {
  res.send("<h1>welcome to home page</h1>");
};
const handleLoginRequest = (req, res) => {
  res.send("<h1>welcome to login page</h1>");
};
const handleSignupRequest = (req, res) => {
  res.send("<h1>welcome to signup page</h1>");
};
const handleProfileRequest = (req, res) => {
  res.send("<h1>welcome to profile page</h1>");
};
const handleErrorRequest = (req, res) => {
  res.send("<h1>Can you see properly?</h1>");
};

const server = express();
server.get("/login", handleLoginRequest);
server.put("/signup", handleSignupRequest);
server.delete("/profile", handleProfileRequest);
server.post("/", handleHomeRequest);
server.use("*", handleErrorRequest);
server.use(handleRequest);
server.listen(3000, "localhost", () => console.log("server is ready"));
