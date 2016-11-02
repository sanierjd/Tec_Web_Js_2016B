# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a CSS` 
### Fecha : `2016-11-01`
### Estudiante : `Santiago Xavier Loya Nasimba`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#cssboxmodel">CSS Box Model</a>
  * <a href="#csscombinators">CSS Combinators</a>
  * <a href="#csspseudoclasses" >CSS Pseudo-classes</a>  
  * <a href="#csspseudoelements" >CSS Pseudo-elements</a>
  * <a href="#cssforms" >CSS Forms</a>
  * <a href="#csscounters" >CSS Counters</a>
  * <a href="#css32dtransforms" >CSS3 2D Transforms</a>
  * <a href="#css33dtransforms" >CSS3 3D Transforms</a>
  * <a href="#css3transitions" >CSS3 Transitions</a>
  * <a href="#css3animations" >CSS3 Animations</a>
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
## Marco Teórico
<a name="cssboxmodel"></a>
### El modelo de caja CSS
Todos los elementos HTML pueden ser considerados como cajas. En CSS, el término "modelo de caja" se usa cuando se habla de diseño y el diseño.

El modelo de caja CSS es esencialmente una caja que envuelve cada elemento HTML. Se compone de: márgenes, bordes, el relleno y el contenido real. 

(Fuente: [W3Schools](http://www.w3schools.com/css/css_boxmodel.asp))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="csscombinators"></a>
### CSS Combinators

Un selector de CSS puede contener más de un selector simple. Entre los selectores simples, podemos incluir un combinador.

Hay cuatro combinadores diferentes en CSS3: 

- Selector descendente (espacio).
- Selector de hijo (>).
- Selector de hermano adyacente (+).
- Selector de hermano general (~).

(Fuente: [W3Schools](http://www.w3schools.com/css/css_combinators.asp))

<br>
<a href="#cabecera">A la cabecera</a>

<a name="csspseudoclasses"></a>
### CSS Pseudo-classes

Un pseudo-clase se utiliza para definir un estado especial de un elemento.

Por ejemplo, se puede utilizar para:

- Estilo un elemento cuando se coloca el ratón sobre ella
- Estilo visitados y no visitados enlaces de manera diferente
- Estilo un elemento cuando se pone el foco 

(Fuente: [W3Schools](http://www.w3schools.com/css/css_pseudo_classes.asp))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="csspseudoelements"></a>
### CSS Pseudo-elements
Un pseudo-elemento CSS se utiliza para estilo especificado partes de un elemento.

Por ejemplo, se puede utilizar para:

- Estilo de la primera letra o línea, de un elemento
- Insertar contenido antes de, o después de, el contenido de un elemento

(Fuente: [W3Schools](http://www.w3schools.com/css/css_pseudo_elements.asp))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="cssforms"></a>
### CSS Forms
El aspecto de un formulario HTML puede ser mejorado con CSS

(Fuente: [W3Schools](http://www.w3schools.com/css/css_form.asp))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="csscounters"></a>
### CSS Counters
contadores de CSS son "variables" que mantiene CSS cuyos valores pueden ser incrementado por las reglas CSS (para realizar un seguimiento de la cantidad de veces que se utilizan). Los contadores permiten ajustar la apariencia de contenido en función de su ubicación en el documento.

contadores de CSS son como "variables". Los valores de las variables se pueden incrementar por reglas CSS (que hará un seguimiento de la cantidad de veces que se utilizan).

Para trabajar con contadores de CSS usaremos las siguientes propiedades:

- counter-reset - Crea o restablece un contador
- counter-increment - Incrementa un valor de contador
- content - Inserta contenido generado
- counter()o counters()la función - Suma el valor de un contador a un elemento

(Fuente: [w3schools](http://www.w3schools.com/css/css_counters.asp))

<a href="#cabecera">A la cabecera</a>

<a name="css32dtransforms"></a>
### CSS3 2D Transforms
Las transiciones CSS3 le permite cambiar los valores de propiedad sin problemas (de un valor a otro), durante un periodo determinado.

Para crear un efecto de transición, debe especificar dos cosas:

- La propiedad CSS que desea añadir un efecto a
- La duración del efecto

La transition-timing-functionpropiedad especifica la curva de velocidad del efecto de transición.

La propiedad-tiempo-función de transición puede tener los siguientes valores:

- ease - Especifica un efecto de transición con un comienzo lento, luego rápido, y luego terminar lentamente (esto es por defecto)
- linear - Especifica un efecto de transición con la misma velocidad de principio a fin
- ease-in - Especifica un efecto de transición con un comienzo lento
- ease-out - Especifica un efecto de transición con un extremo lenta
- ease-in-out - Especifica un efecto de transición con un lento comienzo y el final
- cubic-bezier(n,n,n,n) - Le permite definir sus propios valores de una función cúbica-Bezier

(Fuente: [W3Schools](http://www.w3schools.com/css/css3_2dtransforms.asp))

<a href="#cabecera">A la cabecera</a>

<a name="css33dtransforms"></a>
### CSS3 3D Transforms
CSS3 permite dar formato a los elementos que utilizan transformaciones 3D.

Existen los siguientes métodos de transformación 3D:

- rotateX()
- rotateY()
- rotateZ()

(Fuente: [W3Schools](http://www.w3schools.com/css/css3_3dtransforms.asp))

<a href="#cabecera">A la cabecera</a>

<a name="css3transitions"></a>
### CSS3 Transitions
Las transiciones CSS3 le permite cambiar los valores de propiedad sin problemas (de un valor a otro), durante un periodo determinado.

Para crear un efecto de transición, debe especificar dos cosas:

- La propiedad CSS que desea añadir un efecto a
- La duración del efecto

(Fuente: [W3Schools](http://www.w3schools.com/css/css3_transitions.asp))

<a href="#cabecera">A la cabecera</a>

<a name="css3animations"></a>
### CSS3 Animations
Las animaciones CSS3 permiten la animación de la mayoría de los elementos HTML sin necesidad de utilizar JavaScript o Flash!

Una animación permite a un elemento de cambiar gradualmente de un estilo a otro.

Se puede cambiar tantas propiedades CSS que desee, como muchas veces que desee.

Para utilizar la animación CSS3, primero debe especificar algunos fotogramas clave para la animación.

Los fotogramas clave mantener lo estilos el elemento tendrá en determinados momentos.

(Fuente: [W3Schools](http://www.w3schools.com/css/css3_animations.asp))

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe

### CSS

Se puede agregar estilos en la cabecera de nuestro documento HTML, especificando los elementos html a los cuales aplicaremos dichos estilos.

 h1{
            background-color: azure;
        }
        p{
            background-color: red;
        }
        
        .nombreClaseAmarillo{
            background-color: yellow;
        }
        .nombreClaseAzul{
            background-color: blue;
        }
        .nombreClaseRojo{
            background-color: red;
        }
        

        
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
