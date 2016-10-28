# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-10-28`
### Estudiante : `Santiago Xavier Loya Nasimba`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#httpmethods">HTTP Methods</a>
  * <a href="#codigoshttp">Codigos HTTP</a>
  * <a href="#navegador" >Navegador</a>  
  * <a href="#www" >WWW</a>
  * <a href="#w3c" >W3C</a>
  * <a href="#w3cschool" >W3C Schools</a>
  * <a href="#doctype" >Doctype</a>
  * <a href="#html" >HTML</a>
  * <a href="#estiloscss" >Estilos CSS</a>
  * <a href="#herramientainspeccionar" >Herramienta Inspeccionar</a>
  * <a href="#postman" >Postman</a>
  * <a href="#nmp" >NPM (Node Package Manager)</a>
  * <a href="#xml" >XML</a>
  * <a href="#tags" >Tags</a>
    * <a href="#h1" >h1</a>
    * <a href="#h2" >h2</a>
    * <a href="#p" >p</a>
    * <a href="#ul" >ul</a>
    * <a href="#ol" >ol</a>
    * <a href="#li" >li</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a la Web`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Aprender el uso de lenguaje HTML CSS

<a name="marco-teorico"></a>
## Marco Teorico
<a name="httpmethods"></a>
### HTTP Methods

Son tipos de solicitudes que hacen en el comunicaciondel protcolo HTTP, estas peticiones son acciones a realizar, cada peticion tiene ya definido su accion a hacer. La comunicación del HTTP se da en Request/Response se podria decir que en estos dos pasos, estos pasos son el de petición y respuesta en la comunicación. 

(Fuente: [Scribd](https://es.scribd.com/document/32102506/Metodos-HTTP))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="codigoshttp"></a>
### Códigos HTTP

El código de respuesta o retorno es un número que indica que ha pasado con la petición. El resto del contenido de la respuesta dependerá del valor de este código. El sistema es flexible y de hecho la lista de códigos ha ido aumentando para así adaptarse a los cambios e identificar nuevas situaciones. Cada código tiene un significado concreto. Sin embargo el número de los códigos están elegidos de tal forma que según si pertenece a una centena u otra se pueda identificar el tipo de respuesta que ha dado el servidor: 

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol#C.C3.B3digos_de_respuesta))

- Códigos con formato 1xx: Respuestas informativas. Indica que la petición ha sido recibida y se está procesando.
- Códigos con formato 2xx: Respuestas correctas. Indica que la petición ha sido procesada correctamente.
- Códigos con formato 3xx: Respuestas de redirección. Indica que el cliente necesita realizar más acciones para finalizar la petición.
- Códigos con formato 4xx: Errores causados por el cliente. Indica que ha habido un error en el procesado de la petición a causa de que el cliente ha hecho algo mal.
- Códigos con formato 5xx: Errores causados por el servidor. Indica que ha habido un error en el procesado de la petición a causa de un fallo en el servidor.
<br>
<a href="#cabecera">A la cabecera</a>

<a name="navegador"></a>
### Navegador

El navegador web o navegador de internet es el instrumento que permite a los usuarios de internet navegar o surfear entre las distintas páginas de sus sitios webs preferidos. Se trata de un software que posee una interfaz gráfica compuesta básicamente de: botones de navegación, una barra de dirección, una barra de estado (generalmente, en la parte inferior de la ventana) y la mayor parte, en el centro, que sirve para mostrar las páginas web a las que se accede. 

(Fuente: [InformaticaHoy](http://www.informatica-hoy.com.ar/aprender-informatica/Que-es-un-navegador-web.php))
<br>
<a href="#ncabecera">A la cabecera</a>

<a name="www"></a>
### WWW
En informática, la World Wide Web (WWW) o red informática mundial es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web))

<a href="#cabecera">A la cabecera</a>

<a name="w3c"></a>
### W3C
El Consorcio WWW, en inglés: World Wide Web Consortium (W3C), es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo.

Este consorcio fue creado en octubre de 1994, y está dirigido por Tim Berners-Lee, el creador original del URL (Uniform Resource Locator, Localizador Uniforme de Recursos), del HTTP (HyperText Transfer Protocol, Protocolo de Transferencia de HiperTexto) y del HTML (Hyper Text Markup Language, Lenguaje de Marcado de HiperTexto), que son las principales tecnologías sobre las que se basa la Web.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium))

<a href="#cabecera">A la cabecera</a>

<a name="w3cschools"></a>
### W3C Schools
W3Schools es un sitio de desarrolladores web, con tutoriales y referencias sobre lenguajes de desarrollo web como HTML, CSS, JavaScript, PHP, SQL y Bootstrap, que cubre la mayoría de los aspectos de la programación web.

(Fuente: [w3schools](http://www.w3schools.com/about/))

<a href="#cabecera">A la cabecera</a>

<a name="doctype"></a>
### Doctype
El Doctype o “Declaración del tipo de documento” es una instrucción especial que va al inicio de nuestro documento HTML y que permite al navegador entender qué versión de HTML estamos utilizando. Esta información determinará la manera en la que el navegador procesará el documento, un DOCTYPE distinto podría implicar hasta una visualización diferente del sitio web dentro del mismo navegador.

(Fuente: [devcode](https://devcode.la/tutoriales/doctype-que-es-y-para-que-sirve/))

<a href="#cabecera">A la cabecera</a>

<a name="html"></a>
### HTML
HTML, que significa Lenguaje de Marcado para Hipertextos (HyperText Markup Language) es el elemento de construcción más básico de una página web y se usa para crear y representar visualmente una página web. Determina el contenido de la página web, pero no su funcionalidad.

(Fuente: [MDN](https://developer.mozilla.org/es/docs/Web/HTML))

<a href="#cabecera">A la cabecera</a>

<a name="estiloscss"></a>
### Estilos CSS
Hojas de Estilo en Cascada (Cascading Style Sheets), es un mecanismo simple que describe cómo se va a mostrar un documento en la pantalla, o cómo se va a imprimir, o incluso cómo va a ser pronunciada la información presente en ese documento a través de un dispositivo de lectura. Esta forma de descripción de estilos ofrece a los desarrolladores el control total sobre estilo y formato de sus documentos.

(Fuente: [Guía Breve de CSS](http://www.w3c.es/Divulgacion/GuiasBreves/ejemplos/CSS/EjemploCSS2))

<a href="#cabecera">A la cabecera</a>

<a name="herramientainspeccionar"></a>
### Herramienta Inspeccionar
Chrome Inspector es una herramienta complementaria de desarrollo web que se usa específicamente para solucionar problemas de código de páginas web en el navegador Chrome.

(Fuente: [Google](https://support.google.com/richmedia/answer/6062390?hl=es))

<a href="#cabecera">A la cabecera</a>

<a name="postman"></a>
### Postman
La idea surgió de cartero mientras que los fundadores estaban trabajando juntos, y estaban frustrados con las herramientas existentes para las pruebas de API. Se sentía que tenía que haber una lengua mejor para los desarrolladores para comunicarse sobre las API. Esto condujo a la creación de cartero. Cartero le ayuda a construir, las API de prueba, y de documentos más rápido.

Postma incluye:

- Historia de las solicitudes enviadas
- Crear peticiones rápidamente
- Reproducir y organizar
- Cambio de contexto rápidamente
- Función de ayudantes de autenticación
- Personalizar con guiones
- Robusto marco de pruebas
- Automatizar colecciones

(Fuente: [Google](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop))

<a href="#cabecera">A la cabecera</a>

<a name="tags"></a>
### Tags
<a name="h1"></a>
#### h1
Las etiquetas h1 a h6 son usadas para definir títulos HTML.

<a name="p"></a>
#### p
La etiqueta p define un párrafo. Los navegadores automáticamente agregan algo de espacio (margin) antes y después de cada elemento p. Los margenes pueden ser modificados con CSS (con las propiedades de margen).

<a name="ul"></a>
#### ul
La etiqueta ul define una lista no ordenada (bulleted). Se usa la etiqueta ul junto con la etiqueta li para crear un lista no ordenada.

<a name="ol"></a>
#### ol
La etiqueta ol define una lista ordenada,puede ser numérica o alfabética. Se usa la etiqueta li para definir una lista de elementos.

<a name="li"></a>
#### li
La etiqueta li define un elemento de una lista, se usada para una lista ordenada ol, lista no ordenada ul.

(Fuente: [w3schools](http://www.w3schools.com/tags/))

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe

### Esquema general HTML
Creamos un documento html con los elementos básicos como las cabeceras y el cuerpo de un HTML.
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Esquema%20HTML.JPG"/>
</p>

### Títulos h1
Con h1 colocamos títulos principales
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Header.JPG"/>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/T%C3%ADtulo.JPG"/>
</p>

### Parrafos
Con el tag p colocamos parrafos y con estilos CSS podemos darle un fondo de un color de nuestra elección
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/P%C3%A1rrafo.JPG"/>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/P%C3%A1rrafo%20fondo%20violeta.JPG"/>
</p>

### Imágenes
Podemos colocar imágenes usando la URL del la imagen
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Codigo%20Imagen.JPG"/>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Imagenes.JPG"/>
</p>

### Enlaces
Podemos colocar enlaces usando la URL del sitio web al que queremos redireccionar 
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Codigo%20Enlaces.JPG"/>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Enlaces.JPG"/>
</p>

### Listas desordenadas
Mediante el tag ul colocamos listas desordenadas
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Codigo%20lista%20desordenada.JPG"/>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Lista%20desordenada.JPG"/>
</p>

### Listas Ordenadas
Mediante el tag ol colocamos listas ordenadas
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Codigo%20Lista%20Ordenada.JPG"/>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Lista%20Ordenada.JPG"/>
</p>

### Inspector
Podemos observar cada uno de los elementos del sitio web mediante el uso del inspector
<p align="center">
<img src="https://raw.githubusercontent.com/sanierjd/Tec_Web_Js_2016B/01-HTML/Im%C3%A1genes/Inspector.JPG"/>
</p>

<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Con un navegador web, un usuario puede visualizar sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia
- El protocolo HTTP (The Hypertext Transfer Protocol) trabaja como un protocolo de pedido-respuesta entre el cliente y servidor.
- Se aprendió el uso de HTML con Markdown
- Conocimos herramientas de desarrollo web como postman e inspector web
- Desarrollamos conocimientos de introducción Web

<br>
<a href="#cabecera">A la cabecera</a>
