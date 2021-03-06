import styled from 'styled-components';

import { ICurrentExperiences, IProgress } from './IExperienceBar';

export const Container = styled.header`
  display: flex;
  align-items: center;

  margin-bottom: 2rem;
`;

export const Text = styled.span`
  font-size: 1rem;
`;

export const Line = styled.div`
  flex: 1;

  height: 4px;

  border-radius: 4px;

  background-color: var(--gray-line);

  margin: 0 1.5rem;

  position: relative;
`;

export const Progress = styled.div<IProgress>`
  width: ${({ porcentage }) => porcentage}%;
  height: 4px;

  transform: translateX();

  border-radius: 4px;

  background-color: var(--green);
`;

export const CurrentExperiences = styled(Text)<ICurrentExperiences>`
  position: absolute;

  top: 12px;
  left: ${({ porcentage }) => porcentage}%;

  transform: translateX(-50%);

  white-space: nowrap;
`;
