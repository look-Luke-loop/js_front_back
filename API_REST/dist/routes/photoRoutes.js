"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _photoController = require('../controllers/photoController'); var _photoController2 = _interopRequireDefault(_photoController);
var _LoginRequired = require('../middlewares/LoginRequired'); var _LoginRequired2 = _interopRequireDefault(_LoginRequired);

const router = new (0, _express.Router)();

router.post('/', _LoginRequired2.default, _photoController2.default.store);
exports. default = router;
