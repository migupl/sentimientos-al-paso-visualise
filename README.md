# Visualiza 'sentimientos al paso'

Representación en un mapa de los resultados de '[sentimientos al paso](https://github.com/migupl/sentimientos-al-paso)[^1]' donde se explora el sentimiento asociado a los 'versos' que acompañan a los viandantes en muchos de los pasos de cebra de Madrid.

Se usará el Web Component [vanilla-js-web-component-leaflet-geojson ](https://github.com/migupl/vanilla-js-web-component-leaflet-geojson) y la carga de los puntos mediante la generación de [GeoJSON](https://geojson.org/) '[FeatureCollection](https://datatracker.ietf.org/doc/html/rfc7946#section-3.3)' por distrito.

Para la generación de las '[Feature](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2)' nos valdremos del cuaderno Jupyter '[Map visualisation](./docs/Map%20visualisation.pdf)' que transformará el fichero CSV [versosalpaso_sentiment_text-davinci-003_geo.csv](https://github.com/migupl/sentimientos-al-paso/raw/main/notebooks/output/versosalpaso_sentiment_text-davinci-003_geo.csv) [en un fichero JavaScript](./notebooks/output/sentiments_by_district_geo.js) con un objeto JSON distrito:FeatureCollection.

Se obtiene un mapa como el siguiente

![Mapa de 'sentimientos al paso' de Madrid](./docs/sentimientos-al-paso.jpg)

que permite interaccionar mostrando mayores niveles de detalle

![Villaverde Bajo - 'sentimientos al paso'](./docs/sentimientos-al-paso-detalle.jpg)

y muestra haciendo *click* en el corazón tanto el 'verso al paso' como su autor.

## Stack a utilizar para el cuaderno Jupyter

Para el análisis de sentimientos se utilizó un stack Python para la ejecución de Cuadernos Jupyter. Más concretamente la imagen [jupyter/minimal-notebook](https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html#jupyter-minimal-notebook) ejecutado como un contenedor con [Docker CLI](https://jupyter-docker-stacks.readthedocs.io/en/latest/using/running.html).

Para ejecutar el contenedor en modo interactivo[^2] se puede usar

```bash
$ docker run -it -p 8889:8888 --name jupy-sentimiento-versos-visualise -v "$PWD/notebooks":/home/jovyan jupyter/minimal-notebook:latest
Entered start.sh with args: jupyter lab
Executing the command: jupyter lab
...
    To access the server, open this file in a browser:
        file:///home/jovyan/.local/share/jupyter/runtime/jpserver-7-open.html
    Or copy and paste one of these URLs:
        http://8c9f88170ebf:8888/lab?token=cd4244c9cf09993eaf6edea2b65540e242db9444847dbbe4
        http://127.0.0.1:8888/lab?token=cd4244c9cf09993eaf6edea2b65540e242db9444847dbbe4

```

Se debe tener en cuenta que el mensaje disponbilidad del entorno **siempre muestra el puerto 8888** ya que este es el mensaje interno al contenedor. Para la interacción desde el navegador lo substituiremos por el definido en el arranque del contenedor que para este caso sería *http://127.0.0.1:**8889**/lab?token=cd4244c9cf09993eaf6edea2b65540e242db9444847dbbe4*.

Pulsando 'Ctrl-C' dos veces se para la ejecución del contenedor pero deja intacto este en disco para un posterior rearranque

```bash
$ docker start --attach jupy-sentimiento-versos-visualise
Entered start.sh with args: jupyter lab
Executing the command: jupyter lab
...
    To access the server, open this file in a browser:
        file:///home/jovyan/.local/share/jupyter/runtime/jpserver-7-open.html
    Or copy and paste one of these URLs:
        http://16630a0d866f:8888/lab?token=7b2f13ad3887d835b370097bdba7f8df125f58ee2a027b95
        http://127.0.0.1:8888/lab?token=7b2f13ad3887d835b370097bdba7f8df125f58ee2a027b95
```

o borrado permanente.

```bash
$ docker rm jupy-sentimiento-versos-visualise
jupy-sentimiento-versos
```


## Licencia

[MIT license](./LICENSE)


[^1]: '[sentimientos al paso](https://github.com/migupl/sentimientos-al-paso)' muestra el resultado de la interacción con la [API Completions](https://platform.openai.com/docs/guides/gpt/completions-api) de OpenAI sin valoración añadida.
[^2]: Se usa '*jupy-sentimiento-versos-visualise*' como nombre del contenedor para separar este experimento de cualquier otro. La imagen define *jovyan* como el usuario no 'root' (uid=1000, gid=100) con privilegios completos sobre los directorios */home/jovyan/* y */opt/conda*.
