/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const InvariantError = require("../exceptions/InvariantError");
const { MusicPayloadSchema } = require("./schema");

const MusicsValidator = {
  validateMusicPayload: (payload) => {
    const validationResult = MusicPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = MusicsValidator;
