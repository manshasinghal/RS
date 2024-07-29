import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from '@auth0/auth0-react'
import { redirect } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Auth0Provider
  domain="dev-803b2w1guzic5fih.us.auth0.com"
  clientId="xpHXhAtzyIJw24hxiMKjaw60tRvI09Ft"
  authorizationParams={
  {
    redirect_uri:"https://rs-neeq.vercel.app"
  }}
  audience="http://localhost:8000"
   scope="openid profile email">
  <App />
 </Auth0Provider>
   
  </React.StrictMode>
);
