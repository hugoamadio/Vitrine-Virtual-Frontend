import Alert from "@mui/material/Alert/Alert";

interface AlertDefaultProps{
    severity?: "success" | "info" | "warning" | "error";
    content: string;
}

function AlertDefault({severity = "success", content}: AlertDefaultProps) {
  return (
    <Alert variant="filled" severity={severity} style={{position:'absolute', bottom: '20px', maxWidth: '70%', minWidth: '50%', justifySelf: 'center'}}>
      {content}
    </Alert>
  );
}

export default AlertDefault;
