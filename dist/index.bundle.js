module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst devConfig = {\n  MONGO_URL: \"mongodb://localhost/makeanodejsapi-dev\",\n  JWT_SECRET: \"thisisasecret\"\n};\nconst testConfig = {\n  MONGO_URL: \"mongodb://localhost/makeanodejsapi-test\"\n};\nconst prodConfig = {\n  MONGO_URL: \"mongodb://localhost/makeanodejsapi-prod\"\n};\nconst defaultConfig = {\n  PORT: process.env.PORT || 3000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case \"development\":\n      return devConfig;\n\n    case \"test\":\n      return testConfig;\n\n    default:\n      return prodConfig;\n  }\n}\n\nexports.default = _objectSpread(_objectSpread({}, defaultConfig), envConfig(\"development\"));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Remove the warning with Promise\n_mongoose2.default.Promise = global.Promise; // Connect the db with the url provide\n\ntry {\n  _mongoose2.default.connect(_constants2.default.MONGO_URL, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n} catch (err) {\n  _mongoose2.default.createConnection(_constants2.default.MONGO_URL, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n}\n\n_mongoose2.default.connection.once(\"open\", () => console.log(\"MongoDB Running\")).on(\"error\", e => {\n  throw e;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middlewares.js":
/*!***********************************!*\
  !*** ./src/config/middlewares.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst isDev = \"development\" === \"development\";\nconst isProd = \"development\" === \"production\";\n\nexports.default = app => {\n  if (isProd) {\n    app.use((0, _compression2.default)());\n    app.use((0, _helmet2.default)());\n  }\n\n  app.use((0, _cors2.default)({\n    origin: \"http://localhost:3000\"\n  }));\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({\n    extended: true\n  }));\n  app.use(_passport2.default.initialize());\n\n  if (isDev) {\n    app.use((0, _morgan2.default)(\"dev\"));\n  }\n};\n\n//# sourceURL=webpack:///./src/config/middlewares.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\n__webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar _middlewares = __webpack_require__(/*! ./config/middlewares */ \"./src/config/middlewares.js\");\n\nvar _middlewares2 = _interopRequireDefault(_middlewares);\n\nvar _modules = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(_constants2.default);\nconst app = (0, _express2.default)();\n(0, _middlewares2.default)(app);\napp.get(\"/\", (req, res) => {\n  res.send(\"Hello world\");\n});\n(0, _modules2.default)(app);\napp.listen(_constants2.default.PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    console.log(`\n      Server running on port: ${_constants2.default.PORT}\n      ---\n      Running on ${\"development\"}\n      ---\n      Make something great\n    `);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./users/user.routes */ \"./src/modules/users/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _post = __webpack_require__(/*! ./posts/post.routes */ \"./src/modules/posts/post.routes.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = app => {\n  app.use(\"/api/v1/users\", _user2.default);\n  app.use(\"/api/v1/posts\", _post2.default);\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/posts/post.controller.js":
/*!**********************************************!*\
  !*** ./src/modules/posts/post.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createPost = createPost;\nexports.getPostById = getPostById;\nexports.getPostsList = getPostsList;\nexports.updatePost = updatePost;\nexports.deletePost = deletePost;\nexports.favoritePost = favoritePost;\n\nvar _post = __webpack_require__(/*! ./post.model */ \"./src/modules/posts/post.model.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _user = __webpack_require__(/*! ../users/user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nasync function createPost(req, res) {\n  try {\n    const post = await _post2.default.createPost(req.body, req.user._id);\n    return res.status(_httpStatus2.default.CREATED).json(post);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getPostById(req, res) {\n  try {\n    const promise = await Promise.all([_user2.default.findById(req.user._id), _post2.default.findById(req.params.id).populate(\"user\")]);\n\n    const favorite = promise[0]._favorites.isPostIsFavorite(req.params.id);\n\n    const post = promise[1];\n    return res.status(_httpStatus2.default.OK).json(_objectSpread(_objectSpread({}, post.toJSON()), {}, {\n      favorite\n    }));\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getPostsList(req, res) {\n  const limit = parseInt(req.query.limit, 0);\n  const skip = parseInt(req.query.skip, 0);\n\n  try {\n    const promise = await Promise.all([_user2.default.findById(req.user._id), _post2.default.list({\n      limit,\n      skip\n    })]);\n    const posts = promise[1].reduce((arr, post) => {\n      const favorite = promise[0]._favorites.isPostIsFavorite(post._id);\n\n      arr.push(_objectSpread(_objectSpread({}, post.toJSON()), {}, {\n        favorite\n      }));\n      return arr;\n    }, []);\n    return res.status(_httpStatus2.default.OK).json(posts);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function updatePost(req, res) {\n  try {\n    const post = await _post2.default.findById(req.query.id);\n\n    if (!post.user.equals(req.user._id)) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    Object.keys(req.body).forEach(key => {\n      post[key] = req.body[key];\n    });\n    return res.status(_httpStatus2.default.OK).json(await post.save());\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function deletePost(req, res) {\n  try {\n    const post = await _post2.default.findById(req.params.id);\n\n    if (!post.user.equals(req.user._id)) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    await post.remove();\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function favoritePost(req, res) {\n  try {\n    const user = await _user2.default.findById(req.user._id);\n    await user._favorites.posts(req.params.id);\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/posts/post.controller.js?");

/***/ }),

/***/ "./src/modules/posts/post.model.js":
/*!*****************************************!*\
  !*** ./src/modules/posts/post.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _slug = __webpack_require__(/*! slug */ \"slug\");\n\nvar _slug2 = _interopRequireDefault(_slug);\n\nvar _mongooseUniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n\nvar _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst PostSchema = new _mongoose.Schema({\n  title: {\n    type: String,\n    trim: true,\n    required: [true, \"Title is required!\"],\n    minlength: [3, \"Title need to be longer!\"],\n    unique: true\n  },\n  text: {\n    type: String,\n    trim: true,\n    required: [true, \"Text is required!\"],\n    minlength: [10, \"Text need to be longer!\"]\n  },\n  slug: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  user: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: \"User\"\n  },\n  favoriteCount: {\n    type: Number,\n    default: 0\n  }\n}, {\n  timestamps: true\n});\nPostSchema.plugin(_mongooseUniqueValidator2.default, {\n  message: \"{VALUE} already taken!\"\n});\nPostSchema.pre(\"validate\", function (next) {\n  this._slugify();\n\n  next();\n});\nPostSchema.methods = {\n  _slugify() {\n    this.slug = (0, _slug2.default)(this.title);\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      title: this.title,\n      text: this.text,\n      createdAt: this.createdAt,\n      slug: this.slug,\n      user: this.user,\n      favoriteCount: this.favoriteCount\n    };\n  }\n\n};\nPostSchema.statics = {\n  createPost(args, user) {\n    return this.create(_objectSpread(_objectSpread({}, args), {}, {\n      user\n    }));\n  },\n\n  list({\n    skip = 0,\n    limit = 5\n  } = {}) {\n    return this.find().sort({\n      createdAt: -1\n    }).skip(skip).limit(limit).populate(\"user\");\n  },\n\n  incFavoriteCount(postId) {\n    return this.findByIdAndUpdate(postId, {\n      $inc: {\n        favoriteCount: 1\n      }\n    });\n  },\n\n  decFavoriteCount(postId) {\n    return this.findByIdAndUpdate(postId, {\n      $inc: {\n        favoriteCount: -1\n      }\n    });\n  }\n\n};\nexports.default = _mongoose2.default.model(\"Post\", PostSchema);\n\n//# sourceURL=webpack:///./src/modules/posts/post.model.js?");

/***/ }),

/***/ "./src/modules/posts/post.routes.js":
/*!******************************************!*\
  !*** ./src/modules/posts/post.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nvar _post = __webpack_require__(/*! ./post.controller */ \"./src/modules/posts/post.controller.js\");\n\nvar postController = _interopRequireWildcard(_post);\n\nvar _post2 = __webpack_require__(/*! ./post.validator */ \"./src/modules/posts/post.validator.js\");\n\nvar _post3 = _interopRequireDefault(_post2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst routes = new _express.Router();\nroutes.post(\"/\", _auth.authJwt, (0, _expressValidation.validate)(_post3.default.createPost), postController.createPost);\nroutes.get(\"/:id\", _auth.authJwt, postController.getPostById);\nroutes.get(\"/\", _auth.authJwt, postController.getPostsList);\nroutes.patch(\"/\", _auth.authJwt, (0, _expressValidation.validate)(_post3.default.updatePost), postController.updatePost);\nroutes.delete(\"/:id\", _auth.authJwt, postController.deletePost);\nroutes.post(\"/:id/favorite\", _auth.authJwt, postController.favoritePost);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/posts/post.routes.js?");

/***/ }),

/***/ "./src/modules/posts/post.validator.js":
/*!*********************************************!*\
  !*** ./src/modules/posts/post.validator.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nexports.default = {\n  createPost: {\n    body: _expressValidation.Joi.object({\n      title: _expressValidation.Joi.string().min(3).required(),\n      text: _expressValidation.Joi.string().min(10).required()\n    })\n  },\n  updatePost: {\n    body: _expressValidation.Joi.object({\n      title: _expressValidation.Joi.string().min(3),\n      text: _expressValidation.Joi.string().min(10)\n    })\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/posts/post.validator.js?");

/***/ }),

/***/ "./src/modules/users/user.controller.js":
/*!**********************************************!*\
  !*** ./src/modules/users/user.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = signUp;\nexports.login = login;\n\nvar _user = __webpack_require__(/*! ./user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function signUp(req, res) {\n  try {\n    const user = await _user2.default.create(req.body);\n    return res.status(_httpStatus2.default.CREATED).json(user.toAuthJSON());\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function login(req, res, next) {\n  res.status(_httpStatus2.default.OK).json(req.user.toAuthJSON());\n  return next();\n}\n\n//# sourceURL=webpack:///./src/modules/users/user.controller.js?");

/***/ }),

/***/ "./src/modules/users/user.model.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _user = __webpack_require__(/*! ./user.validator */ \"./src/modules/users/user.validator.js\");\n\nvar _bcryptjs = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _mongooseUniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n\nvar _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _post = __webpack_require__(/*! ../posts/post.model */ \"./src/modules/posts/post.model.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst UserSchema = new _mongoose.Schema({\n  email: {\n    type: String,\n    unique: true,\n    required: [true, \"Email is required!\"],\n    trim: true,\n    validate: {\n      validator(email) {\n        return _validator2.default.isEmail(email);\n      },\n\n      message: \"{VALUE} is not a valid email\"\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, \"FirstName is required!\"],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, \"LastName is required!\"],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, \"UserName is required!\"],\n    trim: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: [true, \"Password is required!\"],\n    trim: true,\n    minlength: [6, \"Password need to be longer!\"],\n    validate: {\n      validator(password) {\n        return _user.passwordReg.test(password);\n      },\n\n      message: \"{VALUE} is not a valid password!\"\n    }\n  },\n  favorites: {\n    posts: [{\n      type: _mongoose.Schema.Types.ObjectId,\n      ref: \"Post\"\n    }]\n  }\n}, {\n  timestamps: true\n});\nUserSchema.plugin(_mongooseUniqueValidator2.default, {\n  message: \"{VALUE} already taken!\"\n});\nUserSchema.pre(\"save\", function (next) {\n  if (this.isModified(\"password\")) {\n    this.password = this._hashPassword(this.password);\n  }\n\n  next();\n});\nUserSchema.methods = {\n  _hashPassword(password) {\n    return (0, _bcryptjs.hashSync)(password);\n  },\n\n  authenticateUser(password) {\n    return (0, _bcryptjs.compareSync)(password, this.password);\n  },\n\n  createToken() {\n    return _jsonwebtoken2.default.sign({\n      _id: this._id\n    }, _constants2.default.JWT_SECRET);\n  },\n\n  toAuthJSON() {\n    return {\n      _id: this.id,\n      userName: this.userName,\n      token: this.createToken()\n    };\n  },\n\n  toJSON() {\n    return {\n      _id: this.id,\n      userName: this.userName\n    };\n  },\n\n  _favorites: {\n    async posts(postId) {\n      if (this.favorites.posts.indexOf(postId) >= 0) {\n        this.favorites.posts.remove(postId);\n        await _post2.default.decFavoriteCount(postId);\n      } else {\n        this.favorites.posts.push(postId);\n        await _post2.default.incFavoriteCount(postId);\n      }\n\n      return this.save();\n    },\n\n    isPostIsFavorite(postId) {\n      if (this.favorites.posts.indexOf(postId) >= 0) {\n        return true;\n      }\n\n      return false;\n    }\n\n  }\n};\nmodule.exports = _mongoose2.default.model(\"User\", UserSchema);\n\n//# sourceURL=webpack:///./src/modules/users/user.model.js?");

/***/ }),

/***/ "./src/modules/users/user.routes.js":
/*!******************************************!*\
  !*** ./src/modules/users/user.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nvar _user = __webpack_require__(/*! ./user.controller */ \"./src/modules/users/user.controller.js\");\n\nvar userController = _interopRequireWildcard(_user);\n\nvar _user2 = __webpack_require__(/*! ./user.validator */ \"./src/modules/users/user.validator.js\");\n\nvar _user3 = _interopRequireDefault(_user2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst routes = new _express.Router();\nroutes.post(\"/signup\", (0, _expressValidation.validate)(_user3.default.signup), userController.signUp);\nroutes.post(\"/login\", _auth.authLocal, userController.login);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/users/user.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.validator.js":
/*!*********************************************!*\
  !*** ./src/modules/users/user.validator.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.passwordReg = undefined;\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nconst passwordReg = exports.passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nexports.default = {\n  signup: {\n    body: _expressValidation.Joi.object({\n      email: _expressValidation.Joi.string().email().required(),\n      password: _expressValidation.Joi.string().regex(passwordReg).required(),\n      firstName: _expressValidation.Joi.string().required(),\n      lastName: _expressValidation.Joi.string().required(),\n      userName: _expressValidation.Joi.string().required()\n    })\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/users/user.validator.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authJwt = exports.authLocal = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _user = __webpack_require__(/*! ../modules/users/user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Local strategy\nconst localOpts = {\n  usernameField: \"email\"\n};\nconst localStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {\n  try {\n    const user = await _user2.default.findOne({\n      email\n    });\n\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n}); // Jwt strategy\n\nconst jwtOpts = {\n  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),\n  secretOrKey: _constants2.default.JWT_SECRET\n};\nconst jwtStrategy = new _passportJwt.Strategy(jwtOpts, async (payload, done) => {\n  try {\n    const user = await _user2.default.findById(payload._id);\n\n    if (!user) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n_passport2.default.use(localStrategy);\n\n_passport2.default.use(jwtStrategy);\n\nconst authLocal = exports.authLocal = _passport2.default.authenticate(\"local\", {\n  session: false\n});\n\nconst authJwt = exports.authJwt = _passport2.default.authenticate(\"jwt\", {\n  session: false\n});\n\n//# sourceURL=webpack:///./src/services/auth.services.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-unique-validator\");\n\n//# sourceURL=webpack:///external_%22mongoose-unique-validator%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "slug":
/*!***********************!*\
  !*** external "slug" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"slug\");\n\n//# sourceURL=webpack:///external_%22slug%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });