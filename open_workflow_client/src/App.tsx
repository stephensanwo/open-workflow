import { Route, Routes } from "react-router-dom";
import StyledHeader from "./components/StyledHeader";
import {
  Flow,
  FlowItem,
  Home,
  Node,
  NodeItem,
  Notifications,
  Settings,
  Layout,
  Error,
} from "./pages";
import "./App.scss";
import Workspace from "./pages/Workspace";
import MarketPlace from "./pages/MarketPlace";
import { SignIn, SignUp } from "./pages/Auth";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/flow" element={<Flow />} />
      <Route path="/node" element={<Node />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
      <Route exact path="/flow/:id" element={<FlowItem />} />
      <Route exact path="/node/:id" element={<NodeItem />} />
    </Route>
    <Route path="*" element={<Error />} />
  </Routes>
);

export default App;
