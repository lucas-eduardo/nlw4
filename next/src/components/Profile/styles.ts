import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 5.5rem;
  height: 5.5rem;

  border-radius: 50%;
`;

export const WrapperInfo = styled.div`
  margin-left: 1.5rem;
`;

export const Name = styled.strong`
  font-size: 1.5rem;
  font-weight: 600;

  color: var(--title);
`;

export const Level = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 0.5rem;

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 0.5rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 1.7rem;

    border: 0;

    border-right: 5px;

    background-color: var(--red);

    color: var(--white);

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
