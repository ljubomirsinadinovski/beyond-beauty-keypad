import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  color: #2e2638;
  margin-bottom: 5px;
`;

export const HistoryEntry = styled.p`
  color: #2e2638;
`;

export const ResetBtn = styled.button`
  margin: 10px 0px;
  width: 100px;
  cursor: pointer;
  &:hover {
    filter: brightness(120%);
  }
`;
