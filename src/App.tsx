import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import MainFilter from './components/MainFilter';
import SelectFramework from './components/SelectFramework';
import { globalTheme } from './globalStyles';

const ContainerApp = styled.main`
    max-width: 1400px;
    margin: auto;
`;

function App() {
    return (
        <ThemeProvider theme={globalTheme}>
            <ContainerApp>
                <Header />
                <MainFilter />
                <SelectFramework />
            </ContainerApp>
        </ThemeProvider>
    );
}

export default App;
