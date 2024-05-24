import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import { PASSWORD_RESET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState(null);
  const [key, setKey] = React.useState(null);
  const password = useForm();
  const { error, loading, data, request } = useFetch();
  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    if(password.validate()){
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if(response.ok) navigate('/login')
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);
  return (
    <section className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <Head title="Resete a senha"/>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Nova senha"}
          type={"password"}
          name={"password"}
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar senha</Button>
        )}
      </form>
    </section>
  );
};

export default LoginPasswordReset;
