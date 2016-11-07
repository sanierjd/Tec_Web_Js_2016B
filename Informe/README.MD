# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-11-07`
### Estudiante : `Santiago Xavier Loya Nasimba`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `3`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#diseñoweb">Diseño Web</a>
  * <a href="#calidadweb">Calidad Web</a>
  * <a href="#wai" >WAI</a>  
  * <a href="#validacionweb" >Validación Web</a>
  * <a href="#seo" >SEO Web</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Bootstrap`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Apender buenas prácticas que se deben tener al momento de realizar una página web
- Conocer Bootstrap para crear tablas

<a name="marco-teorico"></a>
## Marco Teorico


<a name="diseñoweb"></a>
### Diseño Web

#### Los usuarios son los scanners
Un visitante típico no va a leer todo el contenido de su página web. No importa la cantidad de información útil que puso en una página Web, el visitante sólo pasa unos segundos de barrido antes de que él/ella decida si dejar o quedarse.

Asegúrese de que su punto de la primera frase de la página! Después de eso, tratar de mantener al usuario ocupado con párrafos cortos, y las nuevas cabeceras final de la página.

#### Menos es más
Mantener los párrafos lo más corto posible.
Mantener las páginas lo más corto posible.
Mantener los capítulos lo más corto posible.
Usar un montón de espacio. Páginas sobrecargadas con el texto matarán a su público.
Si usted tiene mucho que decir, romper su información en trozos más pequeños y colocarlo en diferentes páginas.

#### Navegación
Crear una estructura de navegación consistente que es utilizado por todas las páginas de su sitio Web.
No utilice los hipervínculos dentro de cada párrafo, para enviar a los visitantes a cada página de su Web. Esto destruirá la sensación de una estructura de navegación consistente.

Si tiene que utilizar hipervínculos, añadirlos a la parte inferior de un párrafo, o al menú.

#### Velocidad de descarga
A veces los desarrolladores no son conscientes del hecho de que algunas páginas tardan mucho tiempo para descargar.
La mayoría de los visitantes saldrán de una página web que lleva más de 7 segundos para descargar.

Probar sus páginas web a través de una conexión de módem de baja velocidad. Si en las páginas tardan mucho tiempo para descargar, considerar la eliminación de contenido gráfico o multimedia.

#### Deje que su audiencia hable
La retroalimentación es una cosa muy buena!
Sus visitantes son sus "clientes". A menudo se le dará algunas pistas valiosas sobre lo que podría haber hecho mejor.

Proporcionar una forma sencilla de llegar a usted, y usted recibirá una gran cantidad de las aportaciones de las personas con diferentes habilidades y conocimientos.

#### Monitor del visitante
No todo el mundo en Internet tiene el mismo monitor que usted.

Si el diseño de un sitio Web que se muestra en un monitor con una resolución alta, los visitantes con monitores de baja resolución (800x600 similares) podrían tener problemas para leer sus páginas.

Asegúrese de probar su sitio web en los distintos monitores.

#### ¿Qué navegadores utilizan?
No se olvide de probar su sitio web en diferentes navegadores.
Los navegadores más populares hoy en día son Internet Explorer, Firefox y Google Chrome.

Una cosa sabia que hacer en el diseño de páginas Web es utilizar HTML correcto. codificación correcta ayudará a los navegadores para mostrar sus páginas correctamente.

#### ¿Qué plugins tienen?
Sonido, clips de vídeo, u otro contenido multimedia pueden requerir el uso de programas separados (plug-ins).

Asegúrese de que sus visitantes tengan acceso a los programas informáticos necesarios para acceder a ellos.

#### ¿Qué pasa con las discapacidades?
Algunas personas tienen la visión o audición discapacidades.
Podrían tratar de leer sus páginas con navegadores basados en voz. Siempre añadir texto alternativo para las imágenes y elementos gráficos.

(Fuente: [W3Schools](http://w3schools.bootcss.com/website/web_design.html))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="calidadweb"></a>
### Calidad Web

#### Usar HTML 5
Escribir sus páginas para el último estándar HTML5, te trae lo más cercano posible a la perfección.
Todas las páginas HTML deben contener un <! DOCTYPE> elemento para definir qué versión de HTML se ajusta a.

El DOCTYPE da información importante para su navegador para que pueda hacer que su página de forma más rápida y consistentemente.

#### Use los archivos separados CSS
Utilización de hojas de estilo en cascada (CSS) es la forma preferida de separar el contenido de estilo, en las páginas web de calidad.
El uso de CSS mejora la calidad de los sitios web y aumenta la legibilidad de muchos navegadores diferentes.

Estilos (tamaños, fuentes, colores y más) deben posicionarse fuera páginas web, en los archivos CSS separadas. El uso de un archivo CSS independiente también reducirá en gran medida sus costes de desarrollo de sitios web.

#### Validación de web
Un validador es un programa de software que se pueden ver sus páginas web en contra de los estándares web.

Cuando se utiliza un dispositivo de validación para comprobar los documentos HTML y CSS, el validador devuelve una lista de los errores encontrados, de acuerdo con el estándar elegido.

#### El elemento de título
El elemento `<title>` es uno de los elementos HTML más importantes. Su función principal es describir el contenido de una página web.
Incluso si el título no es una parte visible de su página web, es importante para la calidad de su sitio web porque:

- Será visible en las listas de los motores de búsqueda
- Es visible en la barra de título del navegador
- Que se mostrará en el marcador de usuario

#### Elementos de encabezamiento
El elemento `<h1>` se utiliza para describir la línea principal de una página web.

Debido a que algunos navegadores web muestran el elemento `<h1>` en una gran fuente por defecto, algunos desarrolladores web usarán el elemento `<h2>` en lugar del elemento `<h1>` para los títulos principales. Esto confundirá a la mayoría de los motores de búsqueda y otro software que tratarán de "comprender" la estructura de la página web.

#### Conjuntos de caracteres
Todos los estándares del W3C (desde 1996) define un conjunto de caracteres interno llamado Unicode (ISO 10646).
Todos los navegadores web modernos están utilizando este juego de caracteres internamente. La mayoría de los documentos transmitidos a través de Internet no utilizan el conjunto de caracteres Unicode.

Debido a esto, los navegadores y servidores deben tener una manera de llegar a un acuerdo sobre el conjunto de caracteres utilizado en la comunicación entre ellos.

#### Formatos de fecha
No utilizar fechas como "04/03/02".

La fecha anterior podría significar el 2 de marzo de 2004. También podría significar el 4 de marzo de 2002. O incluso el 3 de abril de 2002.

La Organización Internacional de Normalización (ISO) ha definido un formato internacional para fechas como "aaaa-mm-dd", donde aaaa es el año, MM es el mes y DD es el día.

(Fuente: [W3Schools](http://w3schools.bootcss.com/website/web_quality.html))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="wai"></a>
### WAI

#### WAI - La Iniciativa de Accesibilidad Web
WAI (W3C, 1997) es un conjunto de directrices destinadas a los desarrolladores y diseñadores web, acerca de cómo hacer la web accesible para personas con discapacidad.

El objetivo de estas directrices es la accesibilidad, sino que también ayudará a que los contenidos web a disposición de más navegadores (navegadores de voz, teléfonos celulares, dispositivos de mano) y al mayor número de usuarios que trabajan en entornos difíciles (manos libres, fuerte luz, la oscuridad, mala vista, el ruido pesado). 

#### Recuerde "alt"
El atributo alt le permite proporcionar un texto alternativo para una imagen.

A veces, un navegador web no mostrará las imágenes. La razón podría ser uno de muchos:

- El usuario ha desactivado la presentación de imágenes
- El navegador es un mini navegador sin visualización de la imagen
- El navegador es un navegador de voz

#### No utilizar Fuentes pequeñas
Algunos sitios web utilizan un tamaño pequeño texto sólo para "exprimir" más texto en cada página, o para hacer la página más "elegante".

Una vez más, los visitantes con diferentes equipos, las condiciones de visualización, o discapacidades podrían tener dificultades para leer el texto.

#### Evitar contrastes pobres de color
El texto negro sobre un fondo blanco, o texto en blanco sobre un fondo negro, es mejor para las personas con discapacidad que vean, y para su visualización en un equipo malo.

#### Siempre establecer un color de fondo
La mayoría de las páginas web utilizan colores para los diferentes elementos de texto. Ambas cabeceras y enlaces son a menudo en un color diferente del texto del cuerpo.

Como diseñador de páginas web, usted debe ser consciente del hecho de que sus visitantes son capaces de cambiar sus preferencias de color por defecto.

(Fuente: [W3Schools](http://w3schools.bootcss.com/website/web_wai.html))
<br>
<a href="#ncabecera">A la cabecera</a>

<a name="validacionweb"></a>
### Validación Web

#### Página Web Validador
Un validador es un programa de software que se pueden ver sus páginas web en contra de los estándares web.

Cuando se utiliza un dispositivo de validación para comprobar los documentos HTML, XHTML o CSS, el validador devuelve una lista de los errores encontrados, de acuerdo con el estándar elegido.

Con W3C se pueden validar archivos HTML, CSS, XHTML, XML.

Asegúrate de hacer un hábito para validar todas sus páginas web antes de publicar.

(Fuente: [W3Schools](http://w3schools.bootcss.com/website/web_validate.html))
<br>
<a href="#cabecera">A la cabecera</a>

<a name="seo"></a>
### SEO Web

#### SEO - Search Engine Optimization
Optimización de motores de búsqueda (SEO) es el proceso de mejorar el ranking (visibilidad) de un sitio web en los motores de búsqueda. El (o con mayor frecuencia) un sitio web más alta aparece en una lista de motores de búsqueda (como Google), más los visitantes que se espera recibir.

SEO considera cómo los motores de búsqueda de trabajo, lo que la gente busca, y qué términos de búsqueda (palabras) se escriben. Optimizar un sitio web puede implicar la edición del contenido para aumentar su relevancia para las palabras clave específicas. Promoción de un sitio para aumentar el número de enlaces, es otra de las tácticas de SEO. 

Optimización de motores de búsqueda eficaz puede requerir cambios en el código fuente HTML de un sitio y al contenido del sitio. Tácticas de SEO deben ser incorporados en la implementación del sitio y sobre todo en la estructura de menús y la navegación. 

(Fuente: [W3Schools](http://w3schools.bootcss.com/website/web_search.html))
<br>
<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe

### Etiquetas para diferentes tamaños

- small: hace el texto más pequeño y mas claro
- code: Hace que el texto se vea como código


    <h1>Mi titulo <small>este texto es mas claro</small> </h1>

    <h2>Mi ejemplo de codigo</h2>

    <p>El tag para describir imagenes es: <code>&lt;img&gt;</code></p>


<p align="center">
<img src="https://github.com/sanierjd/Tec_Web_Js_2016B/blob/03-Bootstrap/Informe/Imagenes/Tamaños.PNG?raw=true">
</p>

### Forms

    <div class="container">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <div class="input-group">
                            <div class="input-group-addon">yo</div>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                            <div class="input-group-addon">aq</div>
                        </div>
                        
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>

<p align="center">
<img src="https://github.com/sanierjd/Tec_Web_Js_2016B/blob/03-Bootstrap/Informe/Imagenes/Forms.PNG?raw=true"/>
</p>


### Tablas
    <table>
        <tr>
            <th>asfdasdf</th>
            <th>asdf</th>
            <th>asdf</th>
        </tr>
        <tr>
            <td>asf</td>
            <td>asdf</td>
            <td>asdf</td>
        </tr>
        <tr>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
        </tr>
    </table>
    
    
<p align="center">
<img src="https://github.com/sanierjd/Tec_Web_Js_2016B/blob/03-Bootstrap/Informe/Imagenes/Tablas.PNG?raw=true"/>
</p>

### Tablas con Bootstrap
    <table class="table table-condensed ">
        <!--   TABLE ROW    -->
        <tr class="active">
            <!--   TABLE HEADER    -->
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <!--   TABLE ROW    -->
        <tr class="warning">
            <!--   TABLE DETAIL    -->
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr class="success">
            <!--   TABLE DETAIL    -->
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr class="info">
            <!--   TABLE DETAIL    -->
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr class="danger">
            <!--   TABLE DETAIL    -->
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr>
            <!--   TABLE DETAIL    -->
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr>
            <!--   TABLE DETAIL    -->
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr>
            <!--   TABLE DETAIL    -->
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr>
            <!--   TABLE DETAIL    -->
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr>
            <!--   TABLE DETAIL    -->
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr>
            <!--   TABLE DETAIL    -->
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
    </table>
    
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