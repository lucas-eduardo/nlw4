import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;

  padding-bottom: 1rem;

  border-bottom: 1px solid #d7d8da;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 1.25rem;
`;

export const Total = styled(Title)`
  font-size: 1.5rem;
`;
