import styled from "styled-components";
import { device } from "./media";

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-right: 3.5%;
  padding-left: 3.5%;
  padding-top: 40px;
  background-color: ${(props: any) => (props.dark ? "#161616" : "#f4f4f4")};
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const PageHeaderContainer = styled.h2`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderAction = styled.div`
  display: flex;
`;

export const MobileWarningDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  text-align: center;
  background-color: ${(props: any) => (props.dark ? "#161616" : "#f4f4f4")};
`;

export const MobileContainerDiv = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 40px;
  margin-bottom: 40px;
  background-color: ${(props: any) => (props.dark ? "#161616" : "#f4f4f4")};
  min-height: 100vh;
  @media ${device.laptop} {
    display: none;
  }
`;

export const Heading5 = styled.h5`
  color: ${(props: { theme: string }) =>
    props.theme === "dark" ? "#fff" : ""};
`;
