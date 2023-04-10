import { Container, HistoryEntry, Title } from './HistoryView.style';
import { useKeypadHistory } from '../../context/KeypadHistoryContext';

const HistoryView = () => {
  const historyContext = useKeypadHistory();

  return (
    <Container>
      <Title>History:</Title>
      {historyContext.entries.map((entry, index) => (
        <HistoryEntry key={index}>{entry}</HistoryEntry>
      ))}
    </Container>
  );
};

export default HistoryView;
