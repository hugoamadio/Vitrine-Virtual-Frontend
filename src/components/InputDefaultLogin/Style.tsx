import { TextField } from "@mui/material";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  width: 100%;

  & .MuiInputBase-root {
    color: #ffffff; // Cor do texto
    border-radius: 4px; // Arredondar os cantos do campo de entrada
    font-size: 20px;
  }

  & .MuiInputLabel-root {
    color: #ffffff; // Cor do label quando inativo
    transition: all 0.3s ease; // Adiciona transição suave para mudança de cor
  }

  & .MuiInputLabel-root.Mui-focused {
    color: #FF346A; // Cor do label quando focado
    font-size: 20px;
  }

  & .MuiInput-underline:before {
    border-bottom: 1px solid #ccc; // Cor da borda antes de focar
  }

  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid #FF346A; // Cor da borda ao passar o mouse
  }

  & .MuiInput-underline:after {
    border-bottom: 2px solid #ffffff; // Cor da borda ao focar
  }

  & input::placeholder { 
    color: #aaa; // Cor do placeholder
    opacity: 1; // Aumenta a visibilidade do placeholder
    /* font-size: 50px; */
  }
`;

export default StyledTextField;
