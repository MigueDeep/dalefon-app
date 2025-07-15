import { SubmitHandler } from "react-hook-form";
import { CustomForm, CustomInput } from "@components/index";
import { LoginValues, schema } from "../models/loginModel";
import { useRouterHandler } from "@hooks/useRouterHandler";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import { mockUsers } from "../data/mockUsers";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const goTo = useRouterHandler();

  const handleLogin: SubmitHandler<LoginValues> = (data) => {
    
    setLoading(true);

    const user = mockUsers.find(
      (u) => u.email === data.email && u.password === data.password
    );

    setTimeout(() => {
      setLoading(false);

      if (!user) {
        toast.error("Credenciales inválidas");
        return;
      }

      localStorage.setItem("token", "fake-jwt-token");
      toast.success("Bienvenido " + user.name);
      goTo("/users");
    }, 1000);
  };

  return (
    <Card sx={{ maxWidth: 400, width: "100%", boxShadow: 4, p: 2 }}>
      <CardHeader
        title={<Typography variant="h5">Iniciar Sesión</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            Por favor, ingresa tus credenciales para acceder a tu cuenta.
          </Typography>
        }
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <CustomForm<LoginValues>
          btnTitle="Iniciar Sesión"
          schema={schema}
          method={handleLogin}
          defaultValues={{
            email: "",
            password: "",
          }}
          loading={loading}
        >
          <CustomInput<LoginValues>
            name="email"
            label="Correo"
            type="email"
            placeholder="Correo"
            icon={<EmailIcon sx={{ color: "#AFBACA" }} />}
          />
          <CustomInput<LoginValues>
            name="password"
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            icon={<LockIcon sx={{ color: "#AFBACA" }} />}
          />
        </CustomForm>
        {/* <Divider>O</Divider>
        <CardActions sx={{ justifyContent: "center", p: 0 }}>
          <Button
            fullWidth
            variant="text"
            startIcon={<PersonAddAltIcon />}
          >
            Registrarse
          </Button>
        </CardActions> */}
      </CardContent>
    </Card>
  );
};
