# Proyecto Final React Native - Desarrollo de Aplicaciones

- Comisión: 62900
- Alumna: Natalia Jaimes

## Contenido
E-commerce especializado en venta de productos de diversos Trading Card Games o TCGs desarrollado con React Native.

## Funcionalidades Principales
### Autenticación
La aplicación permite al usuario Iniciar Sesión en una cuenta que se debe crear en el primer acceso a la misma. 
Se utiliza el sistema de Autenticación de Firebase para la gestión del acceso.
Con esta cuenta, el usuario va a poder visualizar las ordenes de compras generadas en el pasado.

### Categorías de items
En la primer pantalla al acceder a la cuenta se puede visualizar una sección de categorías listadas.
Si se selecciona una de las categorías, la aplicación filtra el listado de materiales y permite visualizar los items que correspondan con la categoría elegida.

### Listado de items filtrados
Los items listados se visualizan en tarjetas individuales que permiten ver una imagen de muestra, el nombre del item, el precio y el stock disponible del mismo.
En la parte superior se cuenta con un buscador que permite filtrar por el nombre de los productos.

### Detalle de los items
Al seleccionar un producto, se puede visualizar los siguientes datos sobre el mismo:
- **Imagen de tamaño grande**
- **Nombre**
- **Descripción**
- **Precio unitario**
Tambien cuenta con un contador que permite aumentar o disminuir la cantidad a comprar y el botón correspondiente para agregar esos items al carrito de compras.

### Carrito de compras
En el carrito de compras, se verán listados el/los material/es elegidos previamente. En la parte inferior de la sección se puede visualizar el valor total del carrito, que implica la suma del precio de los items multiplicado por la cantidad solicitada.
El botón Finalizar Compra al final de la pagina permite guardar la Orden de Compra en la base de datos.

### Sección Ordenes
En la sección de Ordenes podremos visualizar el dato de la fecha y hora y el total del valor de cada orden de compra realizada.

### Perfil de Usuario
En la sección del Perfil el usuario podrá cargar una foto de perfil a partir de las imagenes almacenadas en la galeria del dispositivo o activando la camara del mismo.
Tambien puede almacenar su información de localización, asi como ver la ultima dirección almacenada.

### Navegación
La aplicación posee un navegador inferior que permite al usuario trasladarse por las 4 pestañas principales:
- **Tienda**
- **Carrito**
- **Ordenes**
- **Perfil**
En la parte superior de la aplicación, se ubican el nombre de la sección en la que uno se encuentra, junto con un botón para volver a la sección anterior y el botón para cerrar sesión.


## Instalación

1. Clona el repositorio: `git clone https://github.com/NatiJaimes/ecommerce-proyectoFinal-JaimesNatalia.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`

## Contacto

nataliamijaimes@gmail.com