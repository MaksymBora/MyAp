import { MyVideos } from './MyVideos/MyVideo';
import { News } from './News/News';

import { StyledBlockOfMedia } from './Main.styled';
import { Quotes } from './Quotes/Quotes';

export const Main = () => {
  return (
    <section>
      <StyledBlockOfMedia>
        <News />
        <Quotes />
        <MyVideos />
      </StyledBlockOfMedia>
    </section>
  );
};
