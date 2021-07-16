const ClientError = require("./ClientError");

function serverError(error, h) {
  if (error instanceof ClientError) {
    const response = h.response({
      status: "fail",
      message: error.message,
    });
    response.code(error.statusCode);
    return response;
  }

  // Server ERROR!
  const response = h.response({
    status: "error",
    message: "Maaf, terjadi kegagalan pada server kami.",
  });
  response.code(500);
  console.error(error);
  return response;
}

module.exports = { serverError };
