import { Container, HistoryEntry, ResetBtn, Title } from './HistoryView.style';
import { useKeypadHistory } from '../../context/KeypadHistoryContext';

const HistoryView = () => {
  const { resetEntries, entries } = useKeypadHistory();

  return (
    <Container>
      <Title>History:</Title>
      <ResetBtn onClick={() => resetEntries()}>Reset</ResetBtn>
      {entries.map((entry, index) => (
        <HistoryEntry key={index}>{entry}</HistoryEntry>
      ))}
    </Container>
  );
};

export default HistoryView;
