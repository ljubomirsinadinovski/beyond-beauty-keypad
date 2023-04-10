import KeypadButton from '../KeypadButton/KeypadButton';
import { KeypadGridDefinition } from '../../constants/KeypadGridDefinition';
import { Container, KeypadRow } from './KeypadGrid.style';

const KeypadGrid = () => {

  return (
    <Container>
      {KeypadGridDefinition.map((row, rowIndex) => {
        return (
          <KeypadRow key={rowIndex}>
            {row.map((button, columnIndex) => {
              return (
                <KeypadButton
                  key={columnIndex}
                  mainLabel={button.mainLabel}
                  secondaryLabel={button.secondaryLabel}
                  rowIndex={rowIndex}
                  columnIndex={columnIndex}
                />
              );
            })}
          </KeypadRow>
        );
      })}
    </Container>
  );
};

export default KeypadGrid;
