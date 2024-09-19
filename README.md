# Proyecto CRUD Laravel + React

Este proyecto es un CRUD sencillo que utiliza Laravel en el backend y React en el frontend. A continuación, te explico los pasos para instalar y ejecutar cada parte del proyecto por si deseas probarlo.

## Requisitos previos

Asegúrate de tener instalados en tu máquina:

- [Node.js](https://nodejs.org) (para el frontend con React)
- [Composer](https://getcomposer.org) (para el backend con Laravel)
- PHP y un servidor local (como [XAMPP](https://www.apachefriends.org) o [Laravel Valet](https://laravel.com/docs/valet))

## Instalación

### Clonar el repositorio

Primero, clona el repositorio desde GitHub:


git clone https://github.com/jn4varro/nombre-del-repositorio.git
cd nombre-del-repositorio

### Configuración del Backend (Laravel)

  1. Dirígete a la carpeta del backend:
      cd backend-crud
     
  2. Instala las dependencias de Laravel usando Composer:
         composer install

  3. Copia el archivo .env.example y renómbralo a .env: 
        cp .env.example .env

  4. Genera la clave de la aplicación Laravel:
          php artisan key:generate

  5. Configura tu base de datos en el archivo .env.
 
  6. Ejecuta las migraciones para crear las tablas necesarias en tu base de datos:
        php artisan migrate

   7. Inicia el servidor de desarrollo de Laravel:
        php artisan serve
      (El backend estará corriendo en http://127.0.0.1:8000.)

### Configuración del Frontend (React)

  1. En una nueva terminal, dirígete a la carpeta del frontend:
        cd crud-sencillito
     
  2. Instala las dependencias de Node.js:
        npm install

  3. Inicia el servidor de desarrollo de React:
        npm run dev
        (El frontend estará corriendo en http://localhost:5173)
    
    
### Conectar el frontend y el backend

El frontend de React realiza solicitudes HTTP al backend de Laravel.
Asegúrate de que ambos servidores (React y Laravel) estén ejecutándose y 
ajusta las URL de las solicitudes en el código de React si es necesario.



### Funcionalidades

-Ver notas: Listar todas las notas.
-Agregar nota: Crear una nueva nota.
-Actualizar nota: Editar una nota existente.
-Eliminar nota: Borrar una nota.



### Contacto
Si tienes alguna duda o sugerencia, no dudes en contactarme o crear un issue en el repositorio.












 

