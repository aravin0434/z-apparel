import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sigin-in/sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>} >
        <Route index element={<Home/>} />
        <Route path="shop" element={<h1>Shop</h1>} />
        <Route path="sign-in" element={<SignIn/>} />
      </Route>
    </Routes>
  );
}

export default App;