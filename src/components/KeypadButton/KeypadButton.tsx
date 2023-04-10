import { Container, MainLabel, SecondLabel } from './KeypadButton.style';
import { KeypadInterface } from '../../interfaces/KeypadInterface';

interface KeypadButtonProps extends KeypadInterface {
  keypadClick: () => void;
}

const KeypadButton = ({
  mainLabel,
  secondaryLabel,
  keypadClick,
}: KeypadButtonProps) => {
  return (
    <Container onClick={() => keypadClick()}>
      {secondaryLabel && <SecondLabel>{secondaryLabel}</SecondLabel>}
      <MainLabel>{mainLabel}</MainLabel>
    </Container>
  );
};

export default KeypadButton;
