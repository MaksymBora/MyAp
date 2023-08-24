import { MyVideos } from './MyVideos/MyVideo';
import { News } from './News/News';

import { StyledBlockOfMedia } from './Main.styled';

export const Main = () => {
  return (
    <section>
      <StyledBlockOfMedia>
        {/* <News /> */}
        <MyVideos />
      </StyledBlockOfMedia>
    </section>
  );
};
