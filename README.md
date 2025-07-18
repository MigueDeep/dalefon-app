# 🧪 CRUD de Usuarios con API REST + Login Simulado

Este proyecto es una aplicación React que implementa un sistema **CRUD (Crear, Leer, Actualizar, Eliminar)** de usuarios con una interfaz moderna usando **Material UI (MUI)** y validaciones robustas con **React Hook Form + Zod**.

> 💡 Este proyecto fue desarrollado como parte de un examen práctico para evaluar habilidades de integración con APIs, manejo de formularios, diseño de UI y control de autenticación.

---

## 📁 Estructura del proyecto

<pre lang="markdown"> ``` src/ ├── components/ │ ├── LoginForm.tsx │ ├── UserModal.tsx │ ├── UserTable.tsx ├── models/ │ ├── userModel.ts │ └── loginModel.ts ├── service/ │ └── userService.ts ├── mocks/ │ └── mockUsers.ts ✅ (aquí están las credenciales simuladas) ├── router/ │ └── AppRouter.tsx ├── hooks/ │ └── useRouterHandler.ts ├── services/ │ └── swalService.ts ├── App.tsx └── index.tsx ``` </pre>

---

## 🚀 Funcionalidades

- ✅ **Login** con validación de credenciales usando un JSON simulado.
- ✅ **Listado de usuarios** en una tabla responsiva con buscador por nombre y correo.
- ✅ **Agregar usuario** mediante un modal con validación de datos.
- ✅ **Editar usuario existente** desde el modal reutilizable.
- ✅ **Eliminar usuario** con confirmación y alerta.
- ✅ Interfaz limpia, responsive y con notificaciones interactivas.

---

## 🛠 Tecnologías utilizadas

- **React 19**
- **Material UI v7**
- **React Hook Form** + **Zod**
- **Axios** (con interceptores para alertas)
- **React Router v7**
- **React Toastify** (notificaciones)
- **Simulación de Login y Datos con JSON local**

---


## ⚙️ Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MigueDeep/dalefon-app.git
   cd dalefon-app

   npm install

   npm run dev

---

🔐 Login simulado
La validación del login se hace con datos simulados en el archivo: src/mocks/mockUsers.ts

⚠️ Este login no usa backend real. Sólo compara los valores ingresados con una lista de usuarios precargados.

Ejemplo de usuario para login:

{
  "email": "admin@example.com",
  "password": "admin1234"
}

---

🔄 Limitaciones conocidas
El API https://jsonplaceholder.typicode.com/users no guarda cambios reales.

Sólo los usuarios que vienen desde el GET original pueden ser actualizados con PUT.

Los usuarios creados con POST no se persisten en el backend falso, por lo que un PUT sobre ellos devolverá error.

El CRUD se mantiene funcional en el frontend gracias al estado (useState), simulando persistencia.




