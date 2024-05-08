# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Proyecto de Tienda Online - Agilito's Store

Este documento proporciona una visión general del proyecto de tienda online Agilito's Store, desarrollado como parte del curso de React. A continuación, se detallan las funcionalidades, estructura y estilos personalizados utilizados en el proyecto.

## Estructura del Proyecto

El proyecto utiliza React para construir una interfaz de usuario interactiva y está estructurado en diferentes views, components y contexts, cada uno con una función específica.

### Views
- **Home:** Muestra todos los productos disponibles o los filtra por categoría si se selecciona una. Utiliza `ItemListContainer` para mostrar los productos.
- **Checkout:** Permite a los usuarios completar su compra, mostrando un resumen y un formulario para ingresar los detalles del pedido.
- **ProductDetail:** Muestra detalles específicos de un producto seleccionado.
- **Detail:** Muestra el resumen de una orden específica después de la compra.

### Components
- **NavBar:** Barra de navegación que incluye enlaces a las diferentes categorías de productos y al carrito de compras.
- **ItemListContainer:** Gestiona la lógica para obtener productos de Firebase y pasarlos a `ItemList`.
- **ItemList:** Recibe los productos y los muestra en forma de tarjetas.
- **ItemDetailContainer:** Recupera los detalles de un producto específico de Firebase.
- **CartWidget:** Muestra un resumen del carrito de compras en la NavBar.

### Contexts
- **CartContext:** Gestiona el estado del carrito de compras, incluyendo los productos añadidos, la cantidad total y las operaciones para modificar estos datos.
- **CategoryContext:** (Si está implementado) Administraría las categorías de productos para filtrar la vista en Home.

### FirebaseConfig
Este archivo configura Firebase y proporciona la conexión necesaria para acceder a Firestore, donde se almacenan los datos de los productos y las órdenes de compra.

### App.jsx
Define la estructura de rutas principales del proyecto y envuelve la aplicación en los contextos necesarios, asegurando que los datos del carrito y las categorías estén disponibles globalmente.

## Estilos
Los estilos específicos que difieren de los predeterminados por la plantilla de React Vite incluyen:
- Un tema oscuro general con colores de fondo `#121212` y texto en `#ffffff`.
- Estilos para `NavBar` con un fondo oscuro y enlaces destacados con un color púrpura `#646cff`.
- Botones y enlaces con un hover en color `#535bf2` para mejorar la interactividad visual.
- Las tarjetas de productos utilizan sombras sutiles y bordes redondeados para un aspecto moderno y elegante.
- Las imágenes dentro de las tarjetas son responsivas, manteniendo su aspecto proporcional.
- Los formularios tienen controles de entrada alineados verticalmente con etiquetas grandes y claras para mejorar la experiencia de usuario.
