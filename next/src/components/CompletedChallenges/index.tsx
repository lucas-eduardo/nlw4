import { useContext } from 'react';

import { ChallengesContext } from 'contexts/ChallengesContext';

import { Container, Title, Total } from './styles';

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <Title>Desafios completos</Title>
      <Total>{challengesCompleted}</Total>
    </Container>
  );
};

export { CompletedChallenges };
