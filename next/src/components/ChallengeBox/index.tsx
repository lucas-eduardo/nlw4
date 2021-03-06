import { useContext } from 'react';

import { ChallengesContext } from 'contexts/ChallengesContext';
import { CountdownContext } from 'contexts/CountdownContext';

import { Container, WrapperActive, WrapperNotActive } from './styles';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  }

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <WrapperActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className="failed"
              onClick={handleChallengeFailed}
            >Falhei</button>

            <button
              type="button"
              className="succeeded"
              onClick={handleChallengeSucceeded}
            >Completei</button>
          </footer>
        </WrapperActive>
      ) : (
        <WrapperNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </WrapperNotActive>
      )}
    </Container>
  );
};

export { ChallengeBox };
