"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _alunoController = require('../controllers/alunoController'); var _alunoController2 = _interopRequireDefault(_alunoController);
var _LoginRequired = require('../middlewares/LoginRequired'); var _LoginRequired2 = _interopRequireDefault(_LoginRequired);

const router = new (0, _express.Router)();

router.get('/', _alunoController2.default.index);
router.post('/', _LoginRequired2.default, _alunoController2.default.store);
router.put('/:id', _LoginRequired2.default, _alunoController2.default.update);
router.get('/:id', _LoginRequired2.default, _alunoController2.default.show);
router.delete('/:id', _LoginRequired2.default, _alunoController2.default.delete);
exports. default = router;



