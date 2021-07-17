const { serverError } = require("../../exceptions/ServerError");

class SongsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postSongHandler = this.postSongHandler.bind(this);
    this.getSongsHandler = this.getSongsHandler.bind(this);
    this.getSongByIdHandler = this.getSongByIdHandler.bind(this);
    this.putSongByIdHandler = this.putSongByIdHandler.bind(this);
    this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
  }

  async postSongHandler(request, h) {
    try {
      this._validator.validateMusicPayload(request.payload);
      const { title, year, performer, genre, duration } = request.payload;

      const songId = await this._service.addSongs({ title, year, performer, genre, duration });

      const response = h.response({
        status: "success",
        message: "Lagu berhasil ditambahkan",
        data: {
          songId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      return serverError(error, h);
    }
  }

  async getSongsHandler() {
    try {
      const songs = await this._service.getSongs();
      return {
        status: "success",
        data: {
          songs,
        },
      };
    } catch (error) {
      return serverError(error, h);
    }
  }

  async getSongByIdHandler(request, h) {
    try {
      const { id } = request.params;
      const song = await this._service.getSongById(id);
      return {
        status: "success",
        data: {
          song,
        },
      };
    } catch (error) {
      return serverError(error, h);
    }
  }

  async putSongByIdHandler(request, h) {
    try {
      this._validator.validateMusicPayload(request.payload);
      const { id } = request.params;
      await this._service.editSongById(id, request.payload);
      return {
        status: "success",
        message: "Lagu berhasil diperbarui",
      };
    } catch (error) {
      return serverError(error, h);
    }
  }

  async deleteSongByIdHandler(request, h) {
    try {
      const { id } = request.params;
      await this._service.deleteSongById(id);

      return {
        status: "success",
        message: "Lagu berhasil dihapus",
      };
    } catch (error) {
      return serverError(error, h);
    }
  }
}

module.exports = SongsHandler;
