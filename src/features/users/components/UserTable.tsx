import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { User, UserValues } from "../models/userModel";
import UserService from "../service/userService";
import { UserModal } from "./UserModal";

export const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  const getUsers = async () => {
    try {
      const response = await UserService.getAllUsers();
      if (response) {
        setUsers(response);
        setFilteredUsers(response);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await UserService.deleteUserById(id);
      const updated = users.filter((user) => user.id !== id);
      setUsers(updated);
      setFilteredUsers(updated);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const generateFakeId = () => Math.floor(Math.random() * 900) + 100;

  const handleSaveUser = async (data: UserValues) => {
    if (userToEdit) {
      const updated = users.map((u) =>
        u.id === userToEdit.id
          ? {
              ...u,
              name: data.fullname,
              username: data.username,
              email: data.email,
            }
          : u
      );
      await UserService.updateUser(userToEdit);

      setUsers(updated);
      setFilteredUsers(updated);
    } else {
      const newUser: User = {
        id: generateFakeId(),
        name: data.fullname,
        username: data.username,
        email: data.email,
        phone: "+52 555-123-4567",
        address: {
          street: "Av. Siempre Viva",
          suite: "Depto. 101",
          city: "Ciudad de México",
          zipcode: "01000",
          geo: {
            lat: "19.4326",
            lng: "-99.1332",
          },
        },
        website: "www.dalefon.com",
        company: {
          name: "DaleFon",
          catchPhrase: "Code smarter, not harder",
          bs: "innovating scalable tech",
        },
      };

      const updated = [...users, newUser];
      await UserService.createUser(newUser);
      setUsers(updated);
      setFilteredUsers(updated);
    }
  };

  const handleEdit = (user: User) => {
    setUserToEdit(user);
    setOpenModal(true);
  };

  const handleCreate = () => {
    setUserToEdit(null);
    setOpenModal(true);
  };

  const handleClose = () => {
    setUserToEdit(null);
    setOpenModal(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        gap={2}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <TextField
          label="Buscar por nombre o correo"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flexGrow: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleCreate}
          sx={{ whiteSpace: "nowrap", minWidth: 160 }}
        >
          Agregar Usuario
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          overflowX: "auto",
        }}
      >
        <Table
          aria-label="user table"
          sx={{
            minWidth: 650,
          }}
        >
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <strong>Nombre</strong>
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                <strong>Correo</strong>
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                <strong>Teléfono</strong>
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                <strong>Dirección</strong>
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                <strong>Acciones</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  {user.address.city}, {user.address.street}
                </TableCell>
                <TableCell>
                  <Tooltip title="Editar usuario">
                    <IconButton
                      color="warning"
                      onClick={() => handleEdit(user)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Eliminar usuario">
                    <IconButton
                      color="error"
                      onClick={() => deleteUser(user.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <UserModal
        open={openModal}
        onClose={handleClose}
        user={userToEdit}
        onSave={handleSaveUser}
      />
    </>
  );
};
