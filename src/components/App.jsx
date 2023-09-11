import { Route, Routes } from "react-router-dom";
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Layout } from "./Layout/Layout";
import Home from "Pages/Home";
import { MyVideos } from "./Main/MyVideos/Movies";
import SignInSide from "./Header/Login/Login";
import SignUp from "./Header/SignUp/SignUp";
import SignInOutContainer from "./Header/Containers";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="login" element={ <SignInOutContainer/>} />
          <Route path="movies" element={ <MyVideos/>} />
        </Route>
         
      </Routes>
      
      {/* <Header />
      <Main /> */}
    </div>
  );
};
