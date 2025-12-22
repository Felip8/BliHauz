import "./css/Login.css";
import logo from "./assets/logo.png";

export default function Login() {
  return (
    <>
      <div className="container-login">
        <div className="logo-login">
          <img className="logo-blihauz" src={logo} alt="Logo BliHauz" />
        </div>

        <div className="inputs-login">
          <div className="input-email">
            <p className="paragrafo">Email</p>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-senha">
            <p className="paragrafo">Senha</p>
            <input type="password" name="" id="" placeholder="Senha" />
          </div>
        </div>

        <div className="esqueci-senha">
          <a href="#">Esqueci minha senha</a>
        </div>
      </div>
    </>
  );
}
