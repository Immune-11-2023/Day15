## Día 15

Hemos visto los siguientes métodos:

- setTimeout
  
  Este método ejecuta una función después de un tiempo determinado, en milisegundos.
  Como primer parámetro recibe una función y como segundo parámetro el tiempo en milisegundos. Si no se especifica el tiempo, por defecto es 0.

  ```javascript
  setTimeout(() => {
    console.log('Hola mundo');
  }, 1000);
  ```

- setInterval
  
    Este método ejecuta una función cada cierto tiempo, en milisegundos.
    Como primer parámetro recibe una función y como segundo parámetro el tiempo en milisegundos. Si no se especifica el tiempo, por defecto es 0.
    Recordar que setInterval se ejecuta indefinidamente, por lo que si queremos detenerlo debemos usar clearInterval.
  
    ```javascript
    setInterval(() => {
      console.log('Hola mundo');
    }, 1000);
    ```

- clearInterval

    Este método detiene la ejecución de un setInterval.
    Como primer parámetro recibe el identificador del setInterval que queremos detener.
    Para obtener el identificador del setInterval, debemos asignar el setInterval a una variable.

    ```javascript
    const interval = setInterval(() => {
      console.log('Hola mundo');
    }, 1000);

    clearInterval(interval);
    ```

Para poder controlar el código asíncrono, debemos usar las promesas.
Las promsesas son objetos que representan un valor que puede estar disponible ahora, en el futuro o nunca. Para controlar estos estados, las promesas tienen 3 métodos:

- then

    Este método se ejecuta cuando la promesa se resuelve satisfactoriamente.
    Como primer parámetro recibe una función que se ejecutará cuando la promesa se resuelva satisfactoriamente.
    Como segundo parámetro recibe una función que se ejecutará cuando la promesa se rechace.

    ```javascript
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hola mundo');
      }, 1000);
    });

    promise.then((message) => {
      console.log(message);
    }, (error) => {
      console.log(error);
    });
    ```

- catch

    Este método se ejecuta cuando la promesa se rechaza.
    Como primer parámetro recibe una función que se ejecutará cuando la promesa se rechace.

    ```javascript
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Hola mundo');
      }, 1000);
    });

    promise.catch((error) => {
      console.log(error);
    });
    ```

- finally

    Este método se ejecuta cuando la promesa se resuelve o se rechaza.
    Como primer parámetro recibe una función que se ejecutará cuando la promesa se resuelva o se rechace.

    ```javascript
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hola mundo');
      }, 1000);
    });

    promise.finally(() => {
      console.log('Se resolvió la promesa');
    });
    ```

EXTRA:

  Se tiene un ejercicio opcional para resolver un problema visto en clase en el archivo 'src/ejercicio.js'