import { Route, Routes } from "react-router-dom";
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Layout } from "./Layout/Layout";
import Home from "Pages/Home";
import { MyVideos } from "./Main/MyVideos/Movies";
import SignInSide from "./Header/Login/Login";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          
          <Route path="movies" element={ <MyVideos/>} />
        </Route>
        <Route path="login" element={ <SignInSide/>} />
      </Routes>
      {/* <Header />
      <Main /> */}
    </div>
  );
};
