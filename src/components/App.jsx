
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Home from "Pages/Home";
import { MyVideos } from "./Main/MyVideos/Movies";
import SignInOutContainer from "./Header/Containers";


export const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MyVideos />} />

         
            <Route index element={ <Home /> } />
            <Route path="login" element={ <SignInOutContainer/>} />
            <Route path="movies" element={ <MyVideos /> } />
     
        </Route>
      </Routes>
    </div>
  );
};
