import { Modal, Box, Typography } from "@mui/material";
import { User, userSchema, UserValues } from "../models/userModel";
import { CustomForm, CustomInput } from "@components/index";

interface UserModalProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
  onSave: (data: UserValues) => void; // <- nueva prop
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 500 },
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 6,
  p: 3,
};

export const UserModal = ({ open, onClose, user, onSave }: UserModalProps) => {
  const handleSave = (data: UserValues) => {
    onSave(data); // Llama al padre (UserTable)
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          {user ? "Editar Usuario" : "Agregar Usuario"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user
            ? "Edita la información del usuario."
            : "Completa el formulario para registrar un nuevo usuario."}
        </Typography>
        <Box mt={2}>
          <CustomForm<UserValues>
            btnTitle={user ? "Actualizar" : "Registrar"}
            schema={userSchema}
            method={handleSave}
            defaultValues={{
              fullname: user?.name || "",
              username: user?.username || "",
              email: user?.email || "",
            }}
          >
            <CustomInput<UserValues>
              name="fullname"
              label="Nombre completo"
              placeholder="Nombre completo"
            />
            <CustomInput<UserValues>
              name="username"
              label="Usuario"
              placeholder="Nombre de usuario"
            />
            <CustomInput<UserValues>
              name="email"
              label="Correo"
              type="email"
              placeholder="Correo electrónico"
            />
          </CustomForm>
        </Box>
      </Box>
    </Modal>
  );
};
