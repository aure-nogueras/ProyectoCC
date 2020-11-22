# LGTBClub

Proyecto de desarrollo de un sistema de divulgación de información del colectivo LGTB :rainbow_flag:.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Build Status](https://travis-ci.org/aure-nogueras/LGTBClub.svg?branch=main)](https://travis-ci.org/github/aure-nogueras/LGTBClub)

La descripción del problema se puede consultar [aquí](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).


## Elección correcta y justificada del contenedor base

En primer lugar, pensé en usar *node*. Sin embargo, después de leer [esta página](https://blog.webbylab.com/minimal_size_docker_image_for_your_nodejs_app/), me di cuenta de que era poco recomendable. *Node* instala un número significativo de herramientas que no se van a usar, ocupando un tamaño innecesariamente grande. 

Como la simplicidad es una de las buenas prácticas que pueden seguirse en la virtualización ligera, finalmente he optado por *alpine*. Se trata de una imagen base de tamaño bastante reducido, lo que implica que sea rápida de cargar. Además, permite disfrutar de toda la funcionalidad necesaria sin consumir más espacio del requerido por el proyecto. 

## Dockerfile

Una vez seleccionado *alpine*, he creado la [primera versión](https://github.com/aure-nogueras/LGTBClub/commit/8650c8295a859ed535930b7ec9c6b37223b75f55) del *Dockerfile*. Para ello, he accedido a [esta página](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/). Siguiendo las recomendaciones, también he creado un archivo *.dockerignore*. Esto permite no incluir ciertos archivos en el *build context*, ahorrando espacio. [Aquí](https://codefresh.io/docker-tutorial/not-ignore-dockerignore-2/) se explica la importancia de incluir un *.dockerignore*. Además, he concatenado todos los *RUN* en uno para evitar crear capas de más y ocupar más tamaño del necesario.

A continuación, he leído sobre las buenas prácticas. Estas son algunas de las páginas que he consultado:

- [Reducir el tamaño de la imagen de *Docker* para tu aplicación con *nodejs*](https://blog.webbylab.com/minimal_size_docker_image_for_your_nodejs_app/).
- [Mejores prácticas con *Docker* y *nodejs*](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md).

Así, he creado una [segunda versión] del *Dockerfile* cambiando algunos de los comandos. Por ejemplo, en lugar de copiar el directorio del proyecto por completo, solo he copiado las carpetas necesarias para la ejecución de los tests.

Por último, he añadido un usuario para que el contenedor se ejecute en modo no privilegiado. [Aquí](https://medium.com/redbubble/running-a-docker-container-as-a-non-root-user-7d2e00f8ee15) se explica la importancia de hacer esto. De este modo, nos aseguramos de que los archivos que se instalen no pertenezcan al *root* y puedan ser modificados por el usuario.

[Este](https://github.com/aure-nogueras/LGTBClub/blob/main/Dockerfile) es el *Dockerfile* final. Dado que solo se instalan las dependencias requeridas para la ejecución de los tests y únicamente se copian los archivos necesarios, se ha conseguido una buena optimización de la imagen. De este modo, se trata de una imagen ligera y rápida.

## Docker Hub



## GitHub Container Registry

https://docs.github.com/es/free-pro-team@latest/packages/getting-started-with-github-container-registry/about-github-container-registry

https://docs.github.com/es/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages#authenticating-to-paquetes-de-github

https://docs.github.com/es/free-pro-team@latest/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages

https://docs.github.com/es/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token

https://github.com/aure-nogueras/LGTBClub/packages/512900

## Avance del proyecto

https://github.com/containers/podman

Se han tenido en cuenta los errores previos con respecto a enlazar demasiadas HUs en el mismo commit y se ha reducido el tamaño de los mensajes siguiendo el estándar 50/80.

- GitHub Actions.
- Avance código.



## Documentación

La documentación se ubicará en el directorio [docs](https://github.com/aure-nogueras/ProyectoCC/tree/main/docs). 
- [Arquitectura elegida](https://aure-nogueras.github.io/LGTBClub/docs/arquitectura).
- [Planificación del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/planificacion).
- [Configuración inicial del entorno para comenzar el desarrollo del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/configuracion_entorno).
- [Elección de herramientas](https://aure-nogueras.github.io/LGTBClub/docs/eleccion_herramientas).
- [Descripción del problema](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).
- [Creación de las primeras clases](https://aure-nogueras.github.io/LGTBClub/docs/primeras_clases).


