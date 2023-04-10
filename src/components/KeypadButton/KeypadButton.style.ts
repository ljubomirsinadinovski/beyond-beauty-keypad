import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 2px;
  background: linear-gradient(
    210deg,
    rgba(194, 180, 180, 1) 0%,
    rgba(255, 109, 109, 1) 67%
  );
  border-radius: 40% 40% 40% 40% / 30% 30% 30% 30%;
  box-shadow: 0px 0.2px 0.2px hsl(0deg 56% 25% / 0.89),
    0px 0.3px 0.2px -0.7px hsl(0deg 56% 25% / 0.78),
    -0.1px 1px 0.8px -1.4px hsl(0deg 56% 25% / 0.67),
    -0.3px 2.7px 2px -2.1px hsl(0deg 56% 25% / 0.56),
    -0.7px 6px 4.5px -2.9px hsl(0deg 56% 25% / 0.45),
    -1.4px 11.5px 8.7px -3.6px hsl(0deg 56% 25% / 0.33),
    -2.4px 19.7px 14.9px -4.3px hsl(0deg 56% 25% / 0.22),
    -3.8px 31.1px 23.5px -5px hsl(0deg 56% 25% / 0.11);

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  user-select: none;
`;

export const MainLabel = styled.p`
  color: black;
  font-size: 2.75rem;
`;

export const SecondLabel = styled.p`
  color: black;
  font-size: 1.25rem;
`;
