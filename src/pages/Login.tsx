
function Login(){
    return(
        <div style={{
            height: '100vh',
            width: '100vw',
            backgroundImage: `url('/login-background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            boxShadow: "inset 0 0 200px rgba(0, 0, 0, 0.8)"
        }}>

            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <p className="title-login">Mais Que Roupas</p>
                <p className="title-login-second">CONCEITO</p>
            </div>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <form className="form-login">
                    <img src="./store-logo-sem-fundo.png" alt="Logotipo Store" />
                </form>
            </div>
        </div>
    )
}

export default Login