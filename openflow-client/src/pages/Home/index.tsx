import React, { useState } from "react";
import styled from "styled-components";
import SignedIn from "./SignedIn";
import NotSignedIn from "./NotSignedIn";

export const HomeDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-right: 3.5%;
  padding-left: 3.5%;
  padding-top: 40px;
  background-color: #161616;
`;

const Home = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(true);
  return <HomeDiv>{isSignedIn ? <SignedIn /> : <NotSignedIn />}</HomeDiv>;
};

export default Home;
