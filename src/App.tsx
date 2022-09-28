import Pagination from 'components/Pagination';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import MainFilter from './components/MainFilter';
import News from './components/News';
import FiltersContextProvider from './contexts/FiltersContext';
import { globalTheme } from './globalStyles';

const Main = styled.main`
    max-width: 71.25rem;
    margin: auto;

    > .main-filter-position {
        text-align: center;
        margin-top: 4.375rem;
        margin-bottom: 3.938rem;
    }
    > .pagination-position {
        margin-top: 4.375rem;
        text-align: center;
    }
`;

const App = () => (
    <FiltersContextProvider>
        <ThemeProvider theme={globalTheme}>
            <Header />
            <Main>
                <div className="main-filter-position">
                    <MainFilter />
                </div>
                <News />
                <div className="pagination-position">
                    <Pagination />
                </div>
            </Main>
        </ThemeProvider>
    </FiltersContextProvider>
);

export default App;
