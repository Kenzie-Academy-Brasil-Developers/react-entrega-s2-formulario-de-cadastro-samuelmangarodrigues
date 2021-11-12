import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form } from "./style";
import { useHistory } from "react-router-dom";
const SingUp = ({ setDatas, datas }) => {
  const history = useHistory();
  const schema = yup.object.apply().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve conter pelo menos 8 dígitos")
      .required("Campo obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/,
        "Senha deve conter caracteres especiais, números,letras maiúsculas e minúsculas"
      ),
    passwordcofirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas distintas"),
  });
  const handleOnSubmit = (data) => {
    setDatas(data);
    history.push(`/${data.name}`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <>
      <Container>
        <h1>Cadastre-se</h1>
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <input {...register("name")} placeholder="Digite seu nome"></input>
          <span>{errors.name?.message}</span>
          <input {...register("email")} placeholder="Digite seu email"></input>
          <span>{errors.email?.message}</span>

          <input
            type="password"
            {...register("password")}
            placeholder="Digite sua senha"
          ></input>
          <span>{errors.password?.message}</span>

          <input
            type="password"
            {...register("passwordcofirm")}
            placeholder="Digite sua senha novamente"
          ></input>
          <span>{errors.passwordcofirm?.message}</span>
          <button type="submit">Cadastrar</button>
        </Form>
      </Container>
    </>
  );
};
export default SingUp;
