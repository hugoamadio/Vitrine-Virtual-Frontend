import styled from "styled-components";

const BtnStyled = styled.button`
    font-size: 14px;
    width: 330px;
    height: 43px;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    background-color: ${props => props.theme.colors.primary};
    transition: filter 0.3s ease;

    &:hover{
        cursor: pointer;
        filter: brightness(0.8)
    }
`

export default BtnStyled