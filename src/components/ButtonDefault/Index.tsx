import BtnStyled from "./Style";

interface ButtonDefaultProps{
    content: string;
    actionSubmit?: () => void;
    actionClick?: () => void;
}

function ButtonDefault({content, actionClick, actionSubmit}: ButtonDefaultProps){
    return(
        <BtnStyled onClick={actionClick} onSubmit={actionSubmit}>{content}</BtnStyled>
    )
}

export default ButtonDefault