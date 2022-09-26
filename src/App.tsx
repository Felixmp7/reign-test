import styled from 'styled-components';
import Header from './components/Header';
import SelectFramework from './components/SelectFramework';
import GlobalStyles from './globalStyles';

const ContainerApp = styled.main`
    max-width: 1400px;
    margin: auto;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <ContainerApp>
                <Header />
                <SelectFramework />
            </ContainerApp>
        </>
    );
}

export default App;
