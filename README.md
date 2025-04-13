# 📝 Task Manager API

API RESTful para la gestión de tareas, con autenticación de usuarios mediante JWT y documentación automática con Swagger.

## 🚀 Características

- Registro e inicio de sesión de usuarios
- Autenticación con JSON Web Tokens (JWT)
- Operaciones CRUD para tareas
- Middleware de autenticación protegido
- Documentación con Swagger UI
- Uso de MongoDB como base de datos
- Manejo centralizado de errores
- Buenas prácticas con arquitectura modular

## 🧠 Tecnologías utilizadas

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** para autenticación
- **dotenv** para variables de entorno
- **Swagger** para documentación
- **Helmet**, **CORS** y middlewares personalizados

## 📁 Estructura del proyecto

task-manager-api/ ├── config/ │ └── db.js # Conexión a MongoDB ├── controllers/ │ ├── taskController.js │ └── userController.js ├── middleware/ │ ├── authMiddleware.js │ └── errorMiddleware.js ├── models/ │ ├── Task.js │ └── User.js ├── routes/ │ ├── taskRoutes.js │ └── userRoutes.js ├── swagger/ │ └── swagger.js # Configuración Swagger ├── .env # Variables de entorno ├── .gitignore ├── index.js # Archivo principal ├── package.json └── README.md

markdown

## 📄 Endpoints principales

### 🔐 Autenticación

- `POST /api/users/register` - Registro de usuario
- `POST /api/users/login` - Login y obtención de token
- `GET /api/users/profile` - Obtener datos del usuario (requiere token)

### ✅ Tareas (protegidas con JWT)

- `GET /api/tasks` - Obtener todas las tareas
- `POST /api/tasks` - Crear nueva tarea
- `GET /api/tasks/:id` - Obtener tarea por ID
- `PUT /api/tasks/:id` - Actualizar tarea
- `DELETE /api/tasks/:id` - Eliminar tarea

## 📘 Documentación Swagger

Una vez que tu servidor esté corriendo, accede a la documentación Swagger en:

http://localhost:5000/api-docs

bash


## 🛠️ Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/task-manager-api.git
cd task-manager-api
Instala las dependencias:

bash

npm install
Crea un archivo .env con este contenido:

env
Copiar
Editar
PORT=5000
MONGO_URI=tu_cadena_de_conexion_mongodb
JWT_SECRET=un_secreto_seguro
Ejecuta el servidor:

bash
npm run dev
✅ Ejemplo de JSON para crear tarea
json
Copiar
Editar
{
  "title": "Aprender Node.js",
  "description": "Estudiar fundamentos y crear APIs",
  "status": "pendiente"
}
📦 Scripts útiles
npm run dev – Inicia el servidor en modo desarrollo con Nodemon

npm start – Inicia el servidor en modo producción

📌 Requisitos
Node.js >= 14

MongoDB Atlas o local

Postman o Swagger para probar endpoints

🤝 Autor
Jonatan

GitHub: @jonatan_diaz

¡Este backend está listo para integrarse con cualquier frontend o app móvil! 🚀

