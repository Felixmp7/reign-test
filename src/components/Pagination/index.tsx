import styled from 'styled-components';

const PaginationNavButton = styled.button`
    width: 2rem;
    height: 2rem;
    padding: 0.563rem;
    border-radius: 6px;
    border: solid 1px #d9d9d9;
    background-color: #fff;
`;

const Pagination = () => (
    <div>
        <PaginationNavButton type="button">
            1
        </PaginationNavButton>
    </div>
);

export default Pagination;
