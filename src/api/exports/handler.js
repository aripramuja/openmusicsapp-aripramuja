const { serverError } = require("../../exceptions/ServerError");

class ExportsHandler {
  constructor(service, validator, playlistsService) {
    this._service = service;
    this._validator = validator;
    this._playlistsService = playlistsService;
    this.postExportPlaylistsHandler = this.postExportPlaylistsHandler.bind(this);
  }

  async postExportPlaylistsHandler(request, h) {
    try {
      this._validator.validateExportPlaylistsPayload(request.payload);

      const { playlistId } = request.params;
      const { id: userId } = request.auth.credentials;
      await this._playlistsService.verifyPlaylistAccess(playlistId, userId);

      const message = {
        userId: request.auth.credentials.id,
        targetEmail: request.payload.targetEmail,
      };

      await this._service.sendMessage("export:playlists", JSON.stringify(message));

      const response = h.response({
        status: "success",
        message: "Permintaan Anda sedang kami proses",
      });

      response.code(201);
      return response;
    } catch (error) {
      return serverError(error, h);
    }
  }
}

module.exports = ExportsHandler;
