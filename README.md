# funcion_lambda_calcular_precio_total_producto

Proyecto de la creación de una función lambda y testear en node.js y subirla a AWS

Requisitos previos:
Tener instalado node.js 
Tener instalado AWS CLI
Tener una cuenta en AWS y haber configurado credenciales en AWS


Se creo una carpeta para alojar el proyecto
Se abrió la carpeta creada anteriormente desde vsCode 
Se abrio la terminal de vsCode
Se inicializó un proyecto de node.js con el comando:
                npm init -y
Luego se instalo AWS SDK con el comando:
      npm install aws-sdk
Se creo un archivo index.js en el directorio raíz del proyecto
En index.js se creo la función lambda, función que recibe un objeto tipo json donde se obtiene el valor del precio y se almacena en una variable, se crea también la  variable iva con un valor ya 
designado. Se crea un objeto json producto con el precio, el iva y el precio total con el valor del precio multiplicado por el del iva y se retorna ese mismo objeto Producto 
esta función devuleve un objeto. Si algo sale mal con el código de la función se captura el error por medio del try-catch y se lanza una excepción. 

Hacer pruebas a la Función Lambda
Se instaló por consola el framework Mocha con el siguiente comando: 
                         npx mocha
Se creo el archivo test.js en el directorio raíz del proyecto 
Dentro de test.js se requirió del modulo 'assert' y del archivo index.js para utilizar la función lambda para testearla
Se crea una función para testear el código, donde se define un objeto event tipo json con el valor 200 del precio del producto
Invocamos la función Lambda pasandole como parámetro el objeto event y el valor que retorna los almacenamos en una constante llamada 'respuesta'
Luego se define e inicializa una constante llamada 'esperado' con el valor 242
Se utiliza el módulo assert, con assert.strictEquals podemos testear la función pasandole como primer parámetro el valor que nos devolvió la Función Lambda y como segundo parámetro el valor que se espera que devuelva
Para ejecutar la prueba usamos por consola el ccomando:
     npx mocha
Se ejecutará la prueba que se definió en test.js y dará el resultado del test

Subir la Función Lambda utilizando AWS SDK



Configurar las credenciales
Ejecutar el comando:
    aws configure --profile nombre-perfil-aws
    
Proporcionar las credenciales:
AWS Access Key ID: Ingresa tu Access Key ID de AWS.
AWS Secret Access Key: Ingresa tu Secret Access Key de AWS.
Default region name: Ingresa la región de AWS en la que deseas trabajar (por ejemplo, us-east-1).
Default output format: Puedes dejarlo en blanco o seleccionar un formato de salida predeterminado (JSON, text, table, etc.).

Configurar el perfil de AWS
Ejecutar el comando 
export AWS_PROFILE=perfil-aws

Empaquetar y subir la Función Lambda
Ejecutar la función con el siguiente comando:
zip -r function.zip index.js node_modules
aws lambda create-function \
  --function-name mi-funcion-lambda \
  --runtime nodejs14.x \
  --role mi-rol-lambda \
  --handler index.handler \
  --zip-file fileb://function.zip









