## Instalacion

1. npm install

## Ejeccion 

1. En una terminal ejecutar _npm run build_ ejecutar un scrip para transpilar el codigo de ts en el directorio _build_
2. En otra terminal ejecutar _npm run dev_ para iniciar el servidor 

## Uso

1. _index.ts_ levanta una aplicacion de express y las rutas principales
2. _/build_ contiene el codigo js de salida
3. _/src_ contiene el codigo ts (directorio donde trabajamos)
4. _/controllers_ contiene los controladores de conexion a la bd
5. _/routes_ contiene las rutas a las cuales accedera
6. Archivos
    * _models_ contiene los modelados de los objetos a utilizar
    * _validations_ contiene las validaciones de campos de los modelos
    * _database_ contiene la conexion a la base de datos
    * _keys_ contiene las keys para conexion a la base de datos

## Ejemplo de archivo keys

```typescript
export default {
    database: {
        // TODO: Cambiar con los datos de la base de datos
        host: '0.0.0.0',
        user: '',
        password: '',
        database: ''
    }
};
```
