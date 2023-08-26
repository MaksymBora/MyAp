import { MyVideos } from './MyVideos/Movies';
import { News } from './News/News';
import { Quotes } from './Quotes/Quotes';

import { StyledBlockOfMedia, StyledSection } from './Main.styled';
import { Recipes } from './Recipes/Recipes';

export const Main = () => {
  return (
    <>
      {' '}
      <StyledSection>
        <Quotes />
      </StyledSection>
      <section>
        <StyledBlockOfMedia>
          <News />
          <MyVideos />
          <Recipes />
        </StyledBlockOfMedia>
      </section>
    </>
  );
};
