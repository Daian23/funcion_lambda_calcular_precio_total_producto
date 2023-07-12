# funcion_lambda_calcular_precio_total_producto

## Proyecto de la creación de una función lambda y testear en node.js y subirla a AWS
-----------------------------------------------------------------------

**Requisitos previos:**

• Tener instalado node.js 

• Tener instalado AWS CLI

• Tener una cuenta en AWS y haber configurado credenciales en AWS

-----------------------------------------------------------------------



Se creó una carpeta para alojar el proyecto

Se abrió la carpeta creada anteriormente desde vsCode 

Se abrió la terminal de vsCode

Se inicializó un proyecto de node.js con el comando:

                `npm init -y`
                
Luego se instaló AWS SDK con el comando:

      `npm install aws-sdk`
      
Se creó un archivo index.js en el directorio raíz del proyecto

En index.js se creó la Función Lambda, función que recibe un objeto tipo json donde se obtiene el valor del precio y se almacena en una variable, también se creó la  variable IVA con un valor ya 
designado, y un objeto json producto con el precio, el IVA y el precio total con el valor del precio multiplicado por el del IVA y se retorna ese mismo objeto 'producto'.
Esta función devuelve un objeto. Si algo sale mal con el código de la función se captura el error por medio del try-catch y se lanza una excepción, el cual si falla mostrará un mensaje de error.

### Hacer pruebas a la Función Lambda**

Se instaló por consola el framework Mocha con el siguiente comando: 

                         `npx mocha`
                         
Se creó el archivo test.js en el directorio raíz del proyecto 

Dentro de test.js se requirió del modulo 'assert' y del archivo index.js para utilizar la Función Lambda para testear

Ademas se creó una función para testear el código, donde se definió un objeto event tipo json con el valor 200 del precio del producto

Se invocó la Función Lambda pasandole como parámetro el objeto event y el valor que retorna, se almacenó en una constante llamada 'respuesta'

Luego se definió e inicializó una constante llamada 'esperado' con el valor 242

Se utilizó el módulo assert, con assert.strictEquals se testeó la función pasandole como primer parámetro el valor que nos devolvió la Función Lambda, y como segundo parámetro el valor que se espera que devuelva

Se ejecutó la prueba usando por consola el comando:

     `npx mocha`
     
Se ejecutó la prueba que se definió en el test.js y se dió el resultado del test, que este pasó con éxito

### Subir la Función Lambda utilizando AWS SDK


**Configurar las credenciales** 

 Se ejecutó el comando:
    `aws configure --profile nombre-perfil-aws`
    
**Proporcionar las credenciales:** 

`AWS Access Key ID:` Se ingresó el Access Key ID de AWS
`AWS Secret Access Key:` Se ingresó el Secret Access Key de AWS
`Default region name:` Se ingresó  la región de AWS en la que deseas trabajar (por ejemplo, us-east-1)
`Default output format:`No se ingresó ningun formato(se dejó en blanco)

**Configurar el perfil de AWS** 

Se ejecutó el comando: 

`export AWS_PROFILE=perfil-aws`

**Empaquetar y subir la Función Lambda** 

Se ejecutó la función con el siguiente comando:

`zip -r function.zip index.js node_modules
aws lambda create-function \
  --function-name mi-funcion-lambda \
  --runtime nodejs14.x \
  --role mi-rol-lambda \
  --handler index.handler \
  --zip-file fileb://function.zip`









