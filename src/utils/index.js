/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const mapDBToSongModel = ({ id, title, performer }) => ({
  id,
  title,
  performer,
});

const mapDBToSongDetailModel = ({ id, title, year, performer, genre, duration, inserted_at, updated_at }) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  insertedAt: inserted_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToSongModel, mapDBToSongDetailModel };
