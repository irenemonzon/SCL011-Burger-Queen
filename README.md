
# **Proyecto Burguer Queen**


## **Índice**

* [1.-Resumen del proyecto](Resumen%20del%20proyecto)
* [2.-Objetivo de la Aplicación](Objetivo%20de%20la%20Aplicaci%C3%B3n)
* [3.-Historias de usuario](Historias%20de%20Usuario)
* [4.-Planificación](Planificaci%C3%B3n)
* [5.-Flujo](Flujo)
* [6.-Prototipo de Baja Fidelidad](Prototipo%20de%20Dise%C3%B1o))
* [7.-Producto final](Producto%20final)


## Resumen del Proyecto

Es un proyecto 100% por encargo, de un pequeño restaurante de    hamburguesas, que está creciendo, necesita una interfaz en la que    puedan tomar pedidos usando una  _tablet_, y enviarlos a la cocina   para que se preparen ordenada y eficientemente.

El restaurante cuenta con 2 menus:

**Desayuno**

 - Café americano- 500 $ 
 -  Café con leche- 700 $
 -   Sandwich de jamón y queso - 1000 $
 -  Jugo de frutas natural- 700$

**Almuerzo**

 - Hamburguesa simple- 1000$
 -  Hamburguesa doble- 1500$ 
 -  Papas fritas- 500$
 -   Aros de cebolla- 500$

 *Para tomar*

 - Agua 500ml- 500 $ 
 - Agua 750ml- 700 $ 
 - Bebida/gaseosa 500ml- 700$ 
 - Bebida/gaseosa 750ml-1000$

**Importante:**  Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana. Además, por $ 100 adicional, pueden agregarle queso o huevo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno con todos sus  _productos_. El usuario debe poder ir eligiendo qué  _productos_  agregar y la interfaz debe ir mostrando el  _resumen del pedido_  con el costo total.


## Objetivo de la Aplicación

  El objetivo principal de es aprender a construir una  _interfaz web_  usando   React  e ir   actualizando la lista del pedido y el total, ademas de ser  PWAs (_Progressive Web Apps_) y ser diseñada para tables.

## Historias de Usuario


#### [](https://github.com/Laboratoria/SCL011-Burger-Queen#historia-de-usuario-1-meseroa-debe-poder-tomar-pedido-de-cliente)[Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

##### [](https://github.com/Laboratoria/SCL011-Burger-Queen#criterios-de-aceptaci%C3%B3n)Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

-   Anotar nombre de cliente.
-   Agregar productos al pedido.
-   Eliminar productos.
-   Ver resumen y el total de la compra.
-   Enviar pedido a cocina (guardar en alguna base de datos).
-   Se ve y funciona bien en una  _tablet_

##### [](https://github.com/Laboratoria/SCL011-Burger-Queen#definici%C3%B3n-de-terminado)Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

-   Debes haber recibido  _code review_  de al menos una compañera.
-   Haces  _test_  unitarios y, además, has testeado tu producto manualmente.
-   Hiciste  _tests_  de usabilidad e incorporaste el  _feedback_  del usuario.
-   Desplegaste tu aplicación y has etiquetado tu versión (git tag).

----------

#### [](https://github.com/Laboratoria/SCL011-Burger-Queen#historia-de-usuario-2-jefe-de-cocina-debe-ver-los-pedidos)[Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un cliente.

##### [](https://github.com/Laboratoria/SCL011-Burger-Queen#criterios-de-aceptaci%C3%B3n-1)Criterios de aceptación

-   Ver los pedidos ordenados según se van haciendo.
-   Marcar los pedidos que se han preparado y están listos para servirse.
-   Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se marcó como completado.

##### [](https://github.com/Laboratoria/SCL011-Burger-Queen#definici%C3%B3n-de-terminado-1)Definición de terminado

-   Debes haber recibido  _code review_  de al menos una compañera.
-   Haces  _test_  unitarios y, además, has testeado tu producto manualmente.
-   Hiciste  _tests_  de usabilidad e incorporaste el  _feedback_  del usuario.
-   Desplegaste tu aplicación y has etiquetado tu versión (git tag).

----------

#### [](https://github.com/Laboratoria/SCL011-Burger-Queen#historia-de-usuario-3-meserx-debe-ver-pedidos-listos-para-servir)[Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos rápidamente a los clientes que las hicieron.

##### [](https://github.com/Laboratoria/SCL011-Burger-Queen#criterios-de-aceptaci%C3%B3n-2)Criterios de aceptación

-   Ver listado de pedido listos para servir.
-   Marcar pedidos que han sido entregados.

##### [](https://github.com/Laboratoria/SCL011-Burger-Queen#definici%C3%B3n-de-terminado-2)Definición de terminado

-   Debes haber recibido  _code review_  de al menos una compañera.
-   Haces  _test_  unitarios y, además, has testeado tu producto manualmente.
-   Hiciste  _tests_  de usabilidad e incorporaste el  _feedback_  del usuario.
-   Desplegaste tu aplicación y has etiquetado tu versión (git tag).
-   Los datos se deben mantener íntegros, incluso después de que un pedido ha terminado. Todo esto para poder tener estadísticas en el futuro.


## Planificación

La planificación del proyecto se realizó en Trello. Visualizar aquí [https://trello.com/b/Kt7dxNze/bq](https://trello.com/b/Kt7dxNze/bq)

## Flujo

Se realizo un flujo de iteración de la aplicación. Visualizar 
[enter link description here](https://ibb.co/1s0ZzR8)

## Prototipo de Baja Fidelidad

Se realizo un prototipo de diseño de la aplicación en Figma. Visualizar aqui: [enter link description here](https://www.figma.com/file/Q3cbqiIpPscdjEk9G9afZT/Burger-Queen?node-id=0:1) 


## Producto final.

Visualizar aquí: [enter link description here](https://scl011-burger-queen.firebaseapp.com/navigation/waiter/breakfast)


