import "./App.css";
import "./presets.css";
import Home from "./routes/home/Home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import SignInForm from "./components/sign-in-form /Sign-in-form.component";
import SignUpForm from "./components/sign-up-form/Sign-up-form.component";
import Auth from "./routes/authForm/Auth.component";
import { Checkout } from "./routes/Checkout/Checkout.component";
import { Shop } from "./routes/shop/Shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* <Route index element={<Home />} />{" "} */}
        {/* <Route index element={<Home />} />{" "} */}
        {/* means if path ="/" by default render <Home/> <ith the navigation   */}
        <Route path="home" element={<Home />} />
        <Route path="auth" element={<Auth />}>
          <Route path="sign-in" element={<SignInForm />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="*" element={"izaan"} />
        </Route>

        <Route path="checkout" element={<Checkout />} />
        <Route path="shop/*" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
