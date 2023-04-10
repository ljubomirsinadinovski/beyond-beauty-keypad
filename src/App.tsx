import './App.css';
import { KeypadHistroyProvider } from './context/KeypadHistoryContext';
import styled from 'styled-components';
import HistoryView from './components/HistoryView/HistoryView';
import KeypadGrid from './components/KeypadGrid/KeypadGrid';

const FlexWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  return (
    <KeypadHistroyProvider>
      <div className='App'>
        <FlexWrapper>
          <KeypadGrid />
          <HistoryView />
        </FlexWrapper>
      </div>
    </KeypadHistroyProvider>
  );
}

export default App;
