/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const SongsHandler = require("./handler");
const routes = require("./routes");

module.exports = {
  name: "musics",
  version: "1.0.0",
  register: async (server, { service, validator }) => {
    const songsHandler = new SongsHandler(service, validator);
    server.route(routes(songsHandler));
  },
};
