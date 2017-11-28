import styled from 'styled-components';

const ListWrapper = styled.div`
    display: flex;
    padding: 45px 86px 15px;

    @media (width: 900px) {
        padding: 0 20px;
        flex-direction: column;
    }
`

export default ListWrapper;
