# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`


### Tema : `Sails.js - Assets - Views - Controllers - Pipeline` 
### Fecha : `2017-01-05`
### Estudiante : `Santiago Xavier Loya Nasimba`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `5`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
  * <a href="#sailsjs">Sails.js</a>
  * <a href="#assets">Assets</a>
  * <a href="#views" >Views</a>  
  * <a href="#controlers" >Controlers</a>
  * <a href="#pipeline" >Pipeline</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Sails.js - Assets - Views - Controllers - Pipeline`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Entender el uso de sails para el desarrollo web utilizando javascript
- Apender buenas prácticas en el uso de vistas
- Conocer el uso de controladores

<a name="marco-teorico"></a>
## Marco Teórico


<a name="sailsjs"></a>
### Sails.js

SailsJS, entre otras cosas, facilita en gran medida el desarrollo de APIs REST, servidores de archivos, seguridad y websockets. Está creado con la filosofía “Convención sobre Configuración” o CoC, por sus siglas en inglés; esto significa que nos permite enfocarnos en el desarrollo de la idea, ahorrándonos mucho tiempo en configuración inicial y es un complemento ideal para frameworks como AngularJS, BackboneJS o ReactJS.

Está diseñado para emular el patrón MVC familiar de marcos como Ruby on Rails, pero con soporte para los requisitos de las aplicaciones modernas: API orientadas a datos con una arquitectura escalable y orientada al servicio. 


(Fuente: [Platzi](https://platzi.com/blog/introduccion-sailsjs/))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="assets"></a>
### Assets

Los activos se refieren a los archivos estáticos (JS, CSS, imágenes, etc) en su servidor que se desea que sean accesibles al mundo exterior. En Velas, estos archivos se colocan en la assets/carpeta. Al levantar su aplicación, añadir archivos a la assets/carpeta, o cambiar los activos existentes, los procesos de tuberías de activos incorporados en las velas "y sincroniza los archivos en una carpeta oculta ( .tmp/public/).

Este paso intermedio (mover archivos de assets/dentro .tmp/public/) permite comprobar la validez de las velas de procesos activos para su uso en el cliente - cosas como, CoffeeScript, Sass, spritesheets, plantillas MENOS Jade, etc.
El contenido de esta .tmp/publiccarpeta son los que en realidad sirve Sails en tiempo de ejecución. Esto es aproximadamente equivalente a la carpeta "público" en el expreso , o la www/carpeta que podría estar familiarizado con los de otros servidores web como Apache.

(Fuente: [Assets](http://sailsjs.com/documentation/concepts/assets))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="views"></a>
### Views

En Sails, las vistas son plantillas de marcado que se compilan en el servidor en páginas HTML. En la mayoría de los casos, las vistas se utilizan como respuesta a una solicitud HTTP entrante, p. Para servir su página de inicio.

De forma alternativa, una vista puede ser compilada directamente en una cadena HTML para usarla en el código del backend. Por ejemplo, puede usar este enfoque para enviar correos electrónicos HTML o para construir grandes cadenas XML para usar con un API heredada.

(Fuente: [Views](http://sailsjs.com/documentation/concepts/views))
<br>
<a href="#ncabecera">A la cabecera</a>

<a name="controlers"></a>
### Controlers

Los controladores (el C en MVC) son los principales objetos de la aplicación Sails que son responsables de responder a las solicitudes de un navegador web, una aplicación móvil o cualquier otro sistema capaz de comunicarse con un servidor. A menudo actúan como intermediarios entre sus modelos y puntos de vista. Para muchas aplicaciones, los controladores contendrán la mayor parte de la lógica de negocio de su proyecto.

(Fuente: [Controlers](http://sailsjs.com/documentation/concepts/controllers))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="pipeline"></a>
### Pipeline

El archivo pipeline.js en la aplicación Sails determina el orden en que sus hojas de estilo, JavaScript y los archivos de plantilla del lado del cliente deben ser compilados y enlazados como etiquetas `<script>` o `<link>`.

(Fuente: [Pipeline](http://sailsjs.com/documentation/anatomy/tasks/pipeline.js))
<br>
<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe

### Instalación de sails.js

Ejecutamos el siguiente comando en la consola
> npm insall -g sails

<p align="center">
<img src="https://github.com/sanierjd/Tec_Web_Js_2016B/blob/11-sails-02/Informe/Imagenes/Inst.PNG?raw=true"/>
</p>

<p align="center">
<img src="https://github.com/sanierjd/Tec_Web_Js_2016B/blob/11-sails-02/Informe/Imagenes/Insta.PNG?raw=true"/>
</p>

### Creación de un proyecto

<p align="center">
<img src="https://github.com/sanierjd/Tec_Web_Js_2016B/blob/11-sails-02/Informe/Imagenes/Mascotas.PNG?raw=true"/>
</p>


### Levantar el servidor

Ejecutamos el comando
> sails lift

<p align="center">
<img src="https://github.com/sanierjd/Tec_Web_Js_2016B/blob/11-sails-02/Informe/Imagenes/Levantar.PNG?raw=true"/>
</p>

<p align="center">
<img src="https://github.com/sanierjd/Tec_Web_Js_2016B/blob/11-sails-02/Informe/Imagenes/Levan.PNG?raw=true"/>
</p>

### Tablas con Bootstrap

    
<p align="center">
<img src="https://github.com/sanierjd/Tec_Web_Js_2016B/blob/03-Bootstrap/Informe/Imagenes/Bootstrap.PNG?raw=true"/>
</p>

<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Podemos crear buenas páginas web siguiendo estándares recomendados para un diseño adecuado.
- Bootstrap nos permite usar varios estilos visuales que aumenta la calidad ed nuestras páginas web.
- SEO es el proceso de mejorar el ranking (visibilidad) de un sitio web en los motores de búsqueda.

<br>
<a href="#cabecera">A la cabecera</a>