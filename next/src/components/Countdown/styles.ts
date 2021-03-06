import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-family: Rajdhani;
  font-weight: 600;

  color: var(--title);
`;

export const WrapperTime = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: var(--white);

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  border-radius: 5px;

  font-size: 8.5rem;

  text-align: center;

  span {
    flex: 1;

    &:first-child {
      border-right: 1px solid #f0f1f3;
    }

    &:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`;

export const Separator = styled.span`
  font-size: 6.25rem;

  margin: 0 0.5rem;
`;


export const Button = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;

  border-right: 5px;

  background-color: var(--blue);

  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background-color: var(--blue-dark);
  }

  &.active {
    background-color: var(--white);

    color: var(--title);

    &:hover {
      background-color: var(--red);

      color: var(--white);
    }
  }

  &:disabled {
    background-color: var(--white);

    color: var(--text);

    cursor: not-allowed;
  }
`;
