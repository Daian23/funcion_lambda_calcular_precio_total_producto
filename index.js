exports.handler = async (event) => {
  try {

    var precio = event['precioProducto']
    var iva = 1.21

    const producto = {
      precio: 200,
      iva: iva,
      precioMasIva: precio*iva
    };
    return producto;
  } catch (error) {
    console.error(error);
    throw new Error('Algo salió mal.');
  }
};