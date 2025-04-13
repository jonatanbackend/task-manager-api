// Middleware para manejar errores
const errorMiddleware = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    // Si el error es un objeto de validación, manejarlo de forma especial
    if (err.name === 'ValidationError') {
      res.status(400);
      res.json({
        success: false,
        message: 'Error de validación',
        details: err.errors,
      });
    } else {
      // Para cualquier otro tipo de error, simplemente devolver el mensaje de error
      res.status(statusCode);
      res.json({
        success: false,
        message: err.message || 'Error en el servidor',
      });
    }
  };
  
  module.exports = errorMiddleware;
  