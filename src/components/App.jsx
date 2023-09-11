
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Home from "Pages/Home";
import SignInOutContainer from "./Header/Containers";
import { MyVideos } from "./Main/MyVideos/Movies";


export const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={ <SignInOutContainer /> } />
          <Route path="movies" element={ <MyVideos /> } />
        </Route>
      </Routes>
    </div>
  );
};
