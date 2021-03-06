import { useContext, useMemo } from 'react';

import { ChallengesContext } from 'contexts/ChallengesContext';

import { Container, Text, Line, Progress, CurrentExperiences } from './styles';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;

  return (
    <Container>
      <Text>0 xp</Text>
      <Line>
        <Progress porcentage={percentToNextLevel} />

        {percentToNextLevel > 0 && percentToNextLevel < 100 && (
          <CurrentExperiences porcentage={percentToNextLevel}>
            {currentExperience} xp
          </CurrentExperiences>
        )}
      </Line>
      <Text>{experienceToNextLevel} xp</Text>
    </Container>
  );
};

export { ExperienceBar };
