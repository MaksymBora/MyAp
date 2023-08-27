import { MyVideos } from './MyVideos/Movies';
// import { News } from './News/News';
// import { Quotes } from '../Header/Quotes/Quotes';

import { StyledBlockOfMedia } from './Main.styled';
import { Recipes } from './Recipes/Recipes';

export const Main = () => {
  return (
    <>
      <section>
        <StyledBlockOfMedia>
          {/* <News /> */}
          <MyVideos />
          <Recipes />
        </StyledBlockOfMedia>
      </section>
    </>
  );
};
