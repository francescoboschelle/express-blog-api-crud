export function errorHandler(err, req, res, next) {
  res.status(500).json({
    error: "Internal Error",
    message: "Il server ha generato un errore interno",
  });
}

export function routeNotFound(req, res, next) {
  res.status(404).json({
    error: "Not Found",
    message: "L'endpoint non esiste",
  });
}
