import { MyVideos } from './MyVideos/Videos';
import { News } from './News/News';

import { StyledBlockOfMedia } from './Main.styled';

export const Main = () => {
  return (
    <section>
      <StyledBlockOfMedia>
        <News />
        <MyVideos />
      </StyledBlockOfMedia>
    </section>
  );
};
