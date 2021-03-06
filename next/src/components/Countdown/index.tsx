import { useContext } from 'react';

import { CountdownContext } from 'contexts/CountdownContext';

import { Container, WrapperTime, Separator, Button } from './styles';

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <Container>
        <WrapperTime>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </WrapperTime>

        <Separator>:</Separator>

        <WrapperTime>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </WrapperTime>
      </Container>

      {hasFinished ? (
        <Button disabled>
          Ciclo encerrado
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button type="button" className="active" onClick={resetCountdown}>
              Abandonar ciclo
            </Button>
          ) : (
            <Button type="button" onClick={startCountdown}>
              Iniciar ciclo
            </Button>
          )}
        </>
      )}
    </>
  );
};

export { Countdown };
