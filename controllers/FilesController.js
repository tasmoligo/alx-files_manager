#!/usr/bin/node

const dbClient = require('../utils/db');
const redisClient = require('../utils/redis');
const { getAuthzHeader, getToken, pwdHashed } = require('../utils/utils');
const { decodeToken, getCredentials } = require('../utils/utils');

class FilesController {
  static async postUpload(req, res) {
    const { name, type, parentId, isPublic=false } = res.body;
  }
}

module.exports = FilesController;