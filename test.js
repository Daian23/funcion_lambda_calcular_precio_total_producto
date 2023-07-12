const assert = require('assert');
const { handler } = require('./index');

describe('Funcion Lambda', () => {
  it('retorna el valor del precio de un producto sumado el iva', async () => {

    const event ={
      precioProducto: 200
    }

    const respuesta = await handler(event);
    const esperado = 242;


    assert.strictEqual(respuesta.precioMasIva,esperado);
  });
});