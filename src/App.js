import "./App.css";
import "./presets.css";
import Home from "./routes/home/Home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import SignIn from "./routes/sign-in/Sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />{" "}
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* means if path ="/" by default render <Home/> <ith the navigation   */}
      </Route>
    </Routes>
  );
};

export default App;
