import styled, { css } from "styled-components";

const StyledButton = styled.button`
    font-size: 30px;

    color: ${props => props.color || 'white'};
    background: ${props => props.background || 'gray'};

    ${(props) => 
        props.primary &&
        css`
            color: white;
            background: blue;
        `
    }

    ${(props) => 
        props.secondary &&
        css`
            color: yellow;
            background: green;
        `
    }
`;

function MyButtonB({ children, ...props }) {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
}

export default MyButtonB;
