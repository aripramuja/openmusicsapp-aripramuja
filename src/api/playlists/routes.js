const routes = (handler) => [
  {
    method: "POST",
    path: "/playlists",
    handler: handler.postPlaylistHandler,
    options: {
      auth: "songs_jwt",
    },
  },
  {
    method: "GET",
    path: "/playlists",
    handler: handler.getPlaylistsHandler,
    options: {
      auth: "songs_jwt",
    },
  },
  {
    method: "DELETE",
    path: "/playlists/{id}",
    handler: handler.deletePlaylistByIdHandler,
    options: {
      auth: "songs_jwt",
    },
  },
  {
    method: "POST",
    path: "/playlists/{playlistId}/songs",
    handler: handler.postSongToPlaylistHandler,
    options: {
      auth: "songs_jwt",
    },
  },
  {
    method: "GET",
    path: "/playlists/{playlistId}/songs",
    handler: handler.getSongsFromPlaylistHandler,
    options: {
      auth: "songs_jwt",
    },
  },
  {
    method: "DELETE",
    path: "/playlists/{playlistId}/songs",
    handler: handler.deleteSongFromPlaylistByIdHandler,
    options: {
      auth: "songs_jwt",
    },
  },
  {
    method: "GET",
    path: "/users",
    handler: handler.getUsersByUsernameHandler,
  },
];

module.exports = routes;
