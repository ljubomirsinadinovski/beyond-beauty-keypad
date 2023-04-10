import React, { useEffect, useRef, useState } from 'react';
import KeypadButton from '../KeypadButton/KeypadButton';
import { KeypadGridDefinition } from '../../constants/KeypadGridDefinition';
import { Container, KeypadRow } from './KeypadGrid.style';
import { useKeypadHistory } from '../../context/KeypadHistoryContext';

const KeypadGrid = () => {
  const historyContext = useKeypadHistory();
  const [clickCounter, setClickCounter] = useState(1); // default is 1 because always invoked when click occured
  const timerRef = useRef<any>(null);

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, []);

  const clickHandler = (
    coordinates: string,
    rowIndex: number,
    columnIndex: number
  ) => {
    setClickCounter((current) => current + 1);

    if (clickCounter > 1) {
      // compared (default) to 1 because state hasn't been updated yet
      clearTimeout(timerRef.current);
    }

    let btnLabel;
    // wait for debouncing to see which label does the user wants
    timerRef.current = setTimeout(() => {
      // clickCounter -1 in order to find the correct label with mod %
      // %4 because there are only 4 options => main label + 3 secondary

      let keypadObj = KeypadGridDefinition[rowIndex][columnIndex];
      if (clickCounter === 1 || !keypadObj.secondaryLabel) {
        // the button doesn't access any secondaryLabels => go with the main
        btnLabel = keypadObj.mainLabel;
      } else {
        const secondayLabels = keypadObj.secondaryLabel.split('');
        const numberOfSecondaryEntries = secondayLabels.length;

        // if the numbers of clicks % number of label options === 0 => its reset to main label
        // clickCounter - 1, because we start counting from 1 already
        // numberOfSecondayEntries + 1 in order to find the total label potions per button
        if ((clickCounter - 1) % (numberOfSecondaryEntries + 1) === 0) {
          btnLabel = keypadObj.mainLabel;
        } else {
          // find the secondary label
          btnLabel =
            secondayLabels[
              ((clickCounter - 1) % (numberOfSecondaryEntries + 1)) - 1
            ];
        }
      }

      setClickCounter(1);
      const entry = `- ${Date().toString()}  User clicks on ${btnLabel}, the coordinates are ${coordinates}`;
      historyContext.addEntry(entry);
    }, 1000);
  };

  return (
    <Container>
      {KeypadGridDefinition.map((row, rowIndex) => {
        return (
          <KeypadRow key={rowIndex}>
            {row.map((button, columnIndex) => {
              const keyIndex = `[${rowIndex + 1}, ${columnIndex + 1}]`;
              return (
                <KeypadButton
                  key={keyIndex}
                  mainLabel={button.mainLabel}
                  secondaryLabel={button.secondaryLabel}
                  keypadClick={() =>
                    clickHandler(keyIndex, rowIndex, columnIndex)
                  }
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
