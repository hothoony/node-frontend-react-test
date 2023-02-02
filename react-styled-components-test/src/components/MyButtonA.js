import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 25px;

    color: ${(props) => props.color || 'black'};
    background: ${props => props.background || 'gray'};
`;

function MyButtonA({ children, color, background }) {
    return (
        <StyledButton color={color} background={background}>
            {children}
        </StyledButton>
    );
}

export default MyButtonA;
