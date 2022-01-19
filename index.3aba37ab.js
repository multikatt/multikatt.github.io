// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"af9k4":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "faba85f43aba37ab";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"kNdr8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _game = require("./Game");
var _gameDefault = parcelHelpers.interopDefault(_game);
const game = new _gameDefault.default();
game.start();

},{"./Game":"fJoK3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fJoK3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Game
);
var _block = require("./Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _board = require("./Board");
var _boardDefault = parcelHelpers.interopDefault(_board);
var _tetromino = require("./Tetromino");
var _tetrominoDefault = parcelHelpers.interopDefault(_tetromino);
class Game {
    constructor(){
        this.prev_time = 0;
        this.score = 0;
        this.level = 0;
        this.total_rows_cleared = 0;
        this.size = {
            w: 12,
            h: 22
        };
        this.game_state = "running";
        this.update = (timestamp)=>{
            let elapsed = timestamp - this.prev_time;
            if (elapsed > this.speed) {
                this.prev_time = timestamp;
                if (this.check_collision("down")) this.board.active_tetromino.move("down");
                else if (this.board.active_tetromino.pos_y === 1) this.game_state = "stopped";
                else {
                    if (!this.contains_full_rows()) this.board.add_to_occupied_blocks(this.board.active_tetromino);
                    this.spawn_tetromino();
                }
                // Fixed-goal leveling:
                this.level = Math.floor(this.total_rows_cleared / 10);
                this.set_speed();
                this.draw_game();
            }
            if (this.game_state === "running") window.requestAnimationFrame(this.update);
        };
        this.set_speed();
        this.canvas = document.getElementById("Game");
        this.ctx = this.canvas.getContext("2d");
        this.board = new _boardDefault.default();
        this.create_border(this.size.w, this.size.h);
    }
    start() {
        window.requestAnimationFrame(this.update);
        this.spawn_tetromino();
        this.draw_game();
        this.input();
    }
    spawn_tetromino() {
        this.board.active_tetromino = this.board.next_tetromino === undefined ? new _tetrominoDefault.default() : this.board.next_tetromino;
        this.board.next_tetromino = new _tetrominoDefault.default();
        if (this.board.next_tetromino.type == "O") this.board.next_tetromino.pos_x = 15;
        else if (this.board.next_tetromino.type == "I") this.board.next_tetromino.pos_x = 14;
        else this.board.next_tetromino.pos_x = 14.5;
        this.board.next_tetromino.update_tetromino();
        this.board.active_tetromino.pos_x = 4;
        this.board.active_tetromino.update_tetromino();
    }
    set_speed() {
        // From formula on https://harddrop.com/wiki/Tetris_Worlds
        // (0.8-((Level-1)*0.007))^(Level-1)
        this.speed = Math.pow(0.8 - this.level * 0.007, this.level) * 1000;
    }
    create_border(width, height) {
        for(let ix = 0; ix < width; ix++){
            for(let iy = 0; iy < height; iy++)if (iy == 0 || iy == height - 1 || ix == 0 || ix == width - 1) this.board.occupied_blocks.push(new _blockDefault.default({
                x: ix,
                y: iy
            }, "grey", true));
        }
    }
    contains_full_rows() {
        let full_rows = [];
        // filter out one block per row:
        let single_block_per_row = this.board.active_tetromino.blocks.filter((b, i, o)=>o.map((b)=>b.pos.y
            ).indexOf(b.pos.y) == i
        );
        // check the single block for each row:
        single_block_per_row.forEach((block)=>{
            // count number of blocks occupied by current tetro on current row
            let current_t = this.board.active_tetromino.blocks.filter((t)=>t.pos.y === block.pos.y
            );
            // count number of other blocks
            let current_row = this.board.occupied_blocks.filter((bb)=>bb.pos.y == block.pos.y
            );
            let full_row = current_t.length + current_row.length == this.size.w;
            if (full_row) full_rows.push(block.pos.y);
        });
        if (full_rows.length > 0) {
            // add current tetro so that blocks not on a full row doesn't disappear
            this.board.add_to_occupied_blocks(this.board.active_tetromino);
            // filter out full rows
            full_rows.forEach((r)=>{
                this.board.occupied_blocks = this.board.occupied_blocks.filter((b)=>b.pos.y != r || b.border_block == true
                );
                this.board.occupied_blocks.filter((b)=>b.pos.y < r && b.border_block == false
                ).forEach((b)=>{
                    b.pos.y += 1;
                });
            });
            // Using original Nintendo scoring system
            let score_per_line = [
                40,
                100,
                300,
                1200
            ];
            this.score += score_per_line[full_rows.length - 1] * (this.level + 1);
            this.total_rows_cleared += full_rows.length;
            return true;
        }
        return false;
    }
    check_collision(dir) {
        let current_t = this.board.active_tetromino;
        let can_move = true;
        let can_move_down = (blockpos)=>{
            this.board.occupied_blocks.forEach((b)=>{
                if (b.pos.x == blockpos.x && b.pos.y == blockpos.y + 1) can_move = false;
            });
            return can_move;
        };
        let can_move_sideways = (blockpos, dir)=>{
            this.board.occupied_blocks.forEach((b)=>{
                if (dir == "left") {
                    if (b.pos.y == blockpos.y && b.pos.x == blockpos.x - 1) can_move = false;
                } else if (dir == "right") {
                    if (b.pos.y == blockpos.y && b.pos.x == blockpos.x + 1) can_move = false;
                }
            });
            return can_move;
        };
        current_t.shape.forEach((row, irow)=>{
            row.forEach((block, iblock)=>{
                if (block === 1) {
                    let blockpos = {
                        x: iblock + current_t.pos_x,
                        y: irow + current_t.pos_y
                    };
                    if (dir == "left" && !can_move_sideways(blockpos, "left")) can_move = false;
                    else if (dir == "right" && !can_move_sideways(blockpos, "right")) can_move = false;
                    else if (dir == "down" && !can_move_down(blockpos)) can_move = false;
                }
            });
        });
        return can_move;
    }
    draw_game() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw_tetrominos();
        let score_el = document.getElementById("Score");
        score_el.innerHTML = this.score.toString();
        let level_el = document.getElementById("Level");
        level_el.innerHTML = this.level.toString();
    }
    draw_tetrominos() {
        this.board.active_tetromino.blocks.forEach((b)=>this.draw_block(b)
        );
        this.board.occupied_blocks.forEach((b)=>this.draw_block(b)
        );
        this.board.next_tetromino.blocks.forEach((b)=>this.draw_block(b)
        );
    }
    draw_block(block) {
        this.ctx.fillStyle = block.color;
        this.ctx.fillRect(block.pos.x * (block.size + block.margin), block.pos.y * (block.size + block.margin), block.size, block.size);
    }
    input() {
        window.addEventListener("keyup", (key)=>{
            if (this.game_state == "running") switch(key.code){
                case "ArrowLeft":
                    if (this.check_collision("left")) this.board.active_tetromino.move("left");
                    this.draw_game();
                    break;
                case "ArrowRight":
                    if (this.check_collision("right")) this.board.active_tetromino.move("right");
                    this.draw_game();
                    break;
                case "Space":
                case "ArrowUp":
                case "KeyX":
                    this.board.active_tetromino.rotate("right", this.board.occupied_blocks);
                    this.draw_game();
                    break;
                case "KeyZ":
                    this.board.active_tetromino.rotate("left", this.board.occupied_blocks);
                    this.draw_game();
                    break;
                case "ArrowDown":
                    while(this.check_collision("down"))this.board.active_tetromino.move("down");
                    this.draw_game();
                    break;
                default:
                    break;
            }
        });
    }
}

},{"./Block":"gB0Hc","./Board":"96NbG","./Tetromino":"g3Xvv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gB0Hc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Block
);
class Block {
    constructor(pos, color, border_block){
        this.pos = pos;
        this.color = color;
        this.border_block = false;
        this.size = 20;
        this.margin = 2;
        if (border_block) this.border_block = border_block;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"96NbG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Board
);
class Board {
    constructor(occupied_blocks = []){
        this.occupied_blocks = occupied_blocks;
    }
    add_to_occupied_blocks(tetro) {
        tetro.blocks.forEach((block)=>{
            this.occupied_blocks.push(block);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g3Xvv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Tetromino
);
var _block = require("./Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _tetrominoData = require("./Tetromino_data");
class Tetromino {
    get_random_tetro() {
        let shapes = [
            "I",
            "J",
            "L",
            "O",
            "S",
            "T",
            "Z"
        ];
        return shapes[Math.floor(Math.random() * shapes.length)];
    }
    constructor(type){
        this.rotation_state = 0;
        this.pos_x = 4;
        this.pos_y = 1;
        if (!type) type = this.get_random_tetro();
        this.blocks = [];
        this.shape = [
            ..._tetrominoData.shape_data[type].shape
        ];
        this.color = _tetrominoData.shape_data[type].color;
        this.type = type;
    }
    update_tetromino() {
        this.blocks = [];
        this.shape.forEach((row, irow)=>{
            row.forEach((col, icol)=>{
                if (col === 1) this.blocks.push(new _blockDefault.default({
                    x: this.pos_x + icol,
                    y: this.pos_y + irow
                }, this.color));
            });
        });
    }
    move(dir) {
        if (dir == "left") this.pos_x -= 1;
        if (dir == "right") this.pos_x += 1;
        if (dir == "down") this.pos_y += 1;
        this.update_tetromino();
    }
    rotate(dir = "right", occupied_blocks) {
        let check_collision = (wanted_state, tmp_shape)=>{
            let found_solution = false;
            let testtype;
            if (this.type == "I") testtype = "I";
            else testtype = "nonI";
            _tetrominoData.rotation_tests[testtype][this.rotation_state][wanted_state].some((rot)=>{
                let found_hit = false;
                tmp_shape.forEach((row, irow)=>{
                    row.forEach((block, iblock)=>{
                        if (block === 1) {
                            let blockpos = {
                                x: iblock + this.pos_x,
                                y: irow + this.pos_y
                            };
                            if (occupied_blocks) {
                                if (occupied_blocks.find((b)=>b.pos.x == blockpos.x + rot[0] && b.pos.y == blockpos.y + rot[1]
                                ) != null) found_hit = true;
                            }
                        }
                    });
                });
                if (found_hit == false) {
                    found_solution = rot;
                    return true;
                }
            });
            if (found_solution) return found_solution;
            else return false;
        };
        let wanted_state;
        let tmp_shape;
        if (dir == "left") {
            wanted_state = (this.rotation_state + 3) % 4;
            tmp_shape = this.shape.map((_x, i, s)=>s.map((y)=>y[i]
                )
            ).reverse();
        } else {
            wanted_state = (this.rotation_state + 1) % 4;
            tmp_shape = this.shape.reverse().map((_x, i, s)=>s.map((_y)=>_y[i]
                )
            );
        }
        let found_solution = check_collision(wanted_state, tmp_shape);
        if (found_solution != false && Array.isArray(found_solution)) {
            this.pos_x += found_solution[0];
            this.pos_y += found_solution[1];
            this.shape = tmp_shape;
            this.rotation_state = wanted_state;
        }
        this.update_tetromino();
    }
}

},{"./Block":"gB0Hc","./Tetromino_data":"bGFcM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bGFcM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rotation_tests", ()=>rotation_tests
);
parcelHelpers.export(exports, "shape_data", ()=>shape_data
);
const rotation_tests = {
    nonI: {
        0: {
            1: [
                [
                    0,
                    0
                ],
                [
                    -1,
                    0
                ],
                [
                    -1,
                    -1
                ],
                [
                    0,
                    2
                ],
                [
                    -1,
                    2
                ], 
            ],
            3: [
                [
                    0,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    1,
                    -1
                ],
                [
                    0,
                    2
                ],
                [
                    1,
                    2
                ], 
            ]
        },
        1: {
            0: [
                [
                    0,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    1,
                    1
                ],
                [
                    0,
                    -2
                ],
                [
                    1,
                    -2
                ], 
            ],
            2: [
                [
                    0,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    1,
                    1
                ],
                [
                    0,
                    -2
                ],
                [
                    1,
                    -2
                ], 
            ]
        },
        2: {
            1: [
                [
                    0,
                    0
                ],
                [
                    -1,
                    0
                ],
                [
                    -1,
                    -1
                ],
                [
                    0,
                    2
                ],
                [
                    -1,
                    2
                ], 
            ],
            3: [
                [
                    0,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    1,
                    -1
                ],
                [
                    0,
                    2
                ],
                [
                    1,
                    2
                ], 
            ]
        },
        3: {
            2: [
                [
                    0,
                    0
                ],
                [
                    -1,
                    0
                ],
                [
                    -1,
                    1
                ],
                [
                    0,
                    -2
                ],
                [
                    -1,
                    -2
                ], 
            ],
            0: [
                [
                    0,
                    0
                ],
                [
                    -1,
                    0
                ],
                [
                    -1,
                    1
                ],
                [
                    0,
                    -2
                ],
                [
                    -1,
                    -2
                ], 
            ]
        }
    },
    I: {
        0: {
            1: [
                [
                    0,
                    0
                ],
                [
                    -2,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    -2,
                    -1
                ],
                [
                    1,
                    -2
                ], 
            ],
            3: [
                [
                    0,
                    0
                ],
                [
                    -1,
                    0
                ],
                [
                    2,
                    0
                ],
                [
                    -1,
                    -2
                ],
                [
                    2,
                    1
                ], 
            ]
        },
        1: {
            0: [
                [
                    0,
                    0
                ],
                [
                    2,
                    0
                ],
                [
                    -1,
                    0
                ],
                [
                    2,
                    -1
                ],
                [
                    -1,
                    2
                ], 
            ],
            2: [
                [
                    0,
                    0
                ],
                [
                    -1,
                    0
                ],
                [
                    2,
                    0
                ],
                [
                    -1,
                    2
                ],
                [
                    2,
                    1
                ], 
            ]
        },
        2: {
            1: [
                [
                    0,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    -2,
                    0
                ],
                [
                    1,
                    2
                ],
                [
                    -2,
                    -1
                ], 
            ],
            3: [
                [
                    0,
                    0
                ],
                [
                    2,
                    0
                ],
                [
                    -1,
                    0
                ],
                [
                    2,
                    -1
                ],
                [
                    -1,
                    2
                ], 
            ]
        },
        3: {
            2: [
                [
                    0,
                    0
                ],
                [
                    -2,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    -2,
                    1
                ],
                [
                    1,
                    -2
                ], 
            ],
            0: [
                [
                    0,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    -2,
                    0
                ],
                [
                    1,
                    2
                ],
                [
                    -2,
                    -1
                ], 
            ]
        }
    }
};
const shape_data = {
    I: {
        shape: [
            [
                0,
                0,
                0,
                0
            ],
            [
                1,
                1,
                1,
                1
            ],
            [
                0,
                0,
                0,
                0
            ],
            [
                0,
                0,
                0,
                0
            ], 
        ],
        color: "#0DDCE5"
    },
    J: {
        shape: [
            [
                1,
                0,
                0,
                0
            ],
            [
                1,
                1,
                1,
                0
            ],
            [
                0,
                0,
                0,
                0
            ], 
        ],
        color: "#1F77F7"
    },
    L: {
        shape: [
            [
                0,
                0,
                1,
                0
            ],
            [
                1,
                1,
                1,
                0
            ],
            [
                0,
                0,
                0,
                0
            ], 
        ],
        color: "#E9800F"
    },
    O: {
        shape: [
            [
                1,
                1
            ],
            [
                1,
                1
            ], 
        ],
        color: "#F9EC23"
    },
    S: {
        shape: [
            [
                0,
                1,
                1,
                0
            ],
            [
                1,
                1,
                0,
                0
            ],
            [
                0,
                0,
                0,
                0
            ], 
        ],
        color: "#01D705"
    },
    T: {
        shape: [
            [
                0,
                1,
                0,
                0
            ],
            [
                1,
                1,
                1,
                0
            ],
            [
                0,
                0,
                0,
                0
            ], 
        ],
        color: "#FC59FE"
    },
    Z: {
        shape: [
            [
                1,
                1,
                0,
                0
            ],
            [
                0,
                1,
                1,
                0
            ],
            [
                0,
                0,
                0,
                0
            ], 
        ],
        color: "#E83B40"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["af9k4","kNdr8"], "kNdr8", "parcelRequire685b")

//# sourceMappingURL=index.3aba37ab.js.map
