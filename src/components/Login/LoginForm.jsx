import React from "react";
import { Link, json } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Form/Button.module.css";
import Head from "../Helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if ((username.validate(), password.validate())) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <>
      <section className="anime-left">
        <form className={styles.form} onSubmit={handleSubmit}>
          <Head title={'Login'}/>
          <h1 className="title">Login</h1>
          <Input
            type={"text"}
            name={"username"}
            label={"Usuário"}
            {...username}
          />
          <Input
            type={"password"}
            name={"password"}
            label={"Senha"}
            {...password}
          />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Error error={error && 'Dados incorretos'} />
        </form>
      </section>
      <Link className={styles.perdeu} to={"/login/perdeu"}>Perdeu a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={stylesBtn.button} to={"/login/criar"}>Cadastro</Link>
      </div>
    </>
  );
};

export default LoginForm;
