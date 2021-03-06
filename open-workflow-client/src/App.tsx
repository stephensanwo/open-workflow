import { Route, BrowserRouter, Routes } from "react-router-dom";
import StyledHeader from "./components/StyledHeader";
import {
  Flow,
  FlowItem,
  Home,
  Node,
  NodeItem,
  Notifications,
  Settings,
} from "./pages";
import "./App.scss";
import Workspace from "./pages/Workspace";
import MarketPlace from "./pages/MarketPlace";

const App = () => (
  <BrowserRouter>
    <div>
      <StyledHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flow" element={<Flow />} />
        <Route path="/node" element={<Node />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route exact path="/flow/:id" element={<FlowItem />} />
        <Route exact path="/node/:id" element={<NodeItem />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
