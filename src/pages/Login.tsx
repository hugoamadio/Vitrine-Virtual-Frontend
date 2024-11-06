import { FormEvent, useState } from "react";
import ButtonDefault from "../components/ButtonDefault/Index";
import InputDefaultLogin from "../components/InputDefaultLogin/Index";
import { api } from "../services/api";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import AlertDefault from "../components/AlertDefault/Index";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertContent, setAlertContent] = useState<string>("");
  const [severity, setSeverity] = useState<
    "success" | "info" | "warning" | "error" | undefined
  >(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(true);

  function closeAlert() {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  function showAlert(
    content: string,
    severity: "success" | "info" | "warning" | "error" | undefined
  ) {
    setAlertContent(content);
    setSeverity(severity);
    setAlert(true);
    closeAlert();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await api.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        setLoading(false);
        showAlert("Usuário logado com sucesso", "success");
        console.log("Login realizado com sucesso");
      }
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        switch (err.response.status) {
          case 401:
            setLoading(false);
            console.log("Credenciais inválidas");
            break;

          case 404:
            setLoading(false);
            console.log("Usuário não encontrado");
            break;
        }
      } else {
        setLoading(false);
        console.error("Erro na requisição:", err);
      }
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url('/login-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "row",
        position: "relative",
        boxShadow: "inset 0 0 200px rgba(0, 0, 0, 0.8)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p className="title-login">Mais Que Moda</p>
        <p className="title-login-second">CONCEITO</p>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form className="form-login" onSubmit={handleSubmit}>
          <img src="./store-logo-sem-fundo.png" alt="Logotipo Store" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              gap: "15px",
            }}
          >
            <InputDefaultLogin
              label="Email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputDefaultLogin
              label="Senha"
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ marginTop: "50px" }}>
              {loading ? (
                <CircularProgress />
              ) : (
                <ButtonDefault content="Entrar" />
              )}
            </div>
            <p style={{ color: "white" }}>
              Não tem conta?{" "}
              <a
                href=""
                style={{
                  color: "white",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Registrar
              </a>
            </p>
          </div>
        </form>
      </div>
        {alert && <AlertDefault content={alertContent} severity={severity} />}
    </div>
  );
}

export default Login;
