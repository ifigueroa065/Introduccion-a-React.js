# Curso de Introducción a React.js  :smiling_imp::blue_heart:
¡Aprendiendo React.js, la librería más popular de JavaScript para crear aplicaciones web interactivas! 

# Objetivos :rocket:
 
* Crear mi primer webapp interactiva con React.js
* Comprender la diferencia entre componentes, elementos y etiquetas
* Disparar eventos para reaccionar a las interacciones de los usuarios
* Descubrir las ventajas de manejar el estado con React Hooks

## :star:¿Qué es React.js? :star:
React es una herramienta de JavaScript en el front end que nos ayuda a construir la parte visual de nuestras aplicaciones web, las interfaces con las que van a interactuar nuestros usuarios.

React es una librería progresiva, esto porque puedes hacer desde una página sencilla hasta poder desarrollar aplicaciones gigantes, y llegar a convertirse en un framework en conjunto de muchas herramientas que existen a su alrededor.



## React App :atom_symbol:

        npx create-react-app nombre-del-proyecto
        
### :open_file_folder: cd nombre-del-proyecto
         npm start

## Styling and CSS  :sunglasses::fire:

        https://reactjs.org/docs/faq-styling.html


## :blue_book: DOM Elements - React 
        https://reactjs.org/docs/dom-elements.html#style


## DEPLOY  :rocket:
Existen varias maneras para hacer deploy de nuestras aplicaciones, una de las más populares es GitHub Pages.


Para inicializar nuestro proyecto con Create React App, utilizamos el comando npm start, lo que hace este comando, es que iniciar un servidor de node.js para poder compilar nuestro código de React a JavaScript, también para poder estar al pendiente por cambios y refrescar automáticamente nuestro proyecto al hacer algún cambio, entre muchas otras cosas.

La principal desventaja de GitHub Pages, es que no podemos correr un servidor de node.js, solamente soporta archivos estáticos:

* HTML
* CSS
* JavaScript
* Imágenes

Para hacer el deploy de nuestra aplicación, necesitaremos hacer lo siguiente:

- Instalar la dependencia gh-pages con npm.
- Modificar un poco el package.json
- Y utilizaremos otros comandos de Create React App para construir una versión de producción de nuestro proyecto.

### Instalar gh-pages
Para instalar esta dependencia en nuestro proyecto, necesitamos ejecutar este comando en la terminal, dentro de la carpeta root en la que está nuestro proyecto: 

        npm i -D gh-pages


