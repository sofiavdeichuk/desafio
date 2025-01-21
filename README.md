# Desafío Técnico 1

Este proyecto fue creado con el fin de demostrar habilidades técnicas.

## ---- Descripción ----

La aplicación permite obtener información de los empleados y consultar individualmente mediante su ID. Los datos se almacenan en una base de datos de MongoDB.

### `npm start`
Ejecuta la app que podrá ser visualizada mediante el navegador.

## ---- Endpoints ----

- *[http://localhost:8080/empleados]* Devuelve la lista de empleados en formato JSON, con sus respectivos datos de ID único, ,ombre, puesto y salario.

- *[http://localhost:8080/empleados/:id]* Devuelve los detalles de un empleado específico cuyo id debe colocarse en lugar de **:id**

- *[http://localhost:8080/generate]* Devuelve un botón que ejecuta el script que genera 10 empleados ficticios y los agrega a la base de datos.

- *[http://localhost:8080/generate?count=N]* Devuelve un botón que ejecuta el script que genera N número de empleados ficticios.
