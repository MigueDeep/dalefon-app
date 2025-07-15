import {
  Typography,
  Box,
  Stack,
  Container,
  Tooltip,
  IconButton,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { UserTable } from "../components/UserTable";
import { useRouterHandler } from "@hooks/useRouterHandler";
import { alertService } from "@services/alertService";

export const UserPage = () => {

  const goTo = useRouterHandler();

  const closeSession = async () => {
    const confirmed = await alertService.confirm(
      "Cerrar sesión",
      "¿Estás seguro de que quieres cerrar sesión?"
    );

    if (!confirmed) return;
    localStorage.removeItem("token");
    goTo("/login");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        mb={4}
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
          >
            Usuarios
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Aquí puedes ver y gestionar todos los usuarios registrados en el
            sistema.
          </Typography>
        </Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Tooltip title="Cerrar sesión">
            <IconButton color="default" onClick={closeSession}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
      <UserTable />
    </Container>
  );
};
