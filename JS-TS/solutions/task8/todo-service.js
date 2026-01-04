"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
// solutions/todo-service.ts
var refactored_todo_api_1 = require("../task7/refactored-todo-api");
var types_1 = require("../task1/types");
var TodoService = /** @class */ (function () {
    function TodoService(api) {
        if (!api) {
            throw new Error("TodoApi instance is required");
        }
        this.api = api;
    }
    TodoService.prototype.create = function (title, description) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!title || title.trim().length === 0) {
                    throw new Error("Title is required to create a todo");
                }
                return [2 /*return*/, this.api.add({
                        title: title.trim(),
                        description: description,
                        status: types_1.ToDoStatus.PENDING
                    })];
            });
        });
    };
    TodoService.prototype.toggleStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var todo, newStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof id !== "number" || id <= 0) {
                            throw new Error("Valid todo id is required");
                        }
                        return [4 /*yield*/, this.api.getAll().then(function (todos) { return todos.find(function (t) { return t.id === id; }); })];
                    case 1:
                        todo = _a.sent();
                        if (!todo) {
                            throw new refactored_todo_api_1.ToDoNotFoundError(id);
                        }
                        newStatus = todo.status === types_1.ToDoStatus.PENDING ? types_1.ToDoStatus.COMPLETED : types_1.ToDoStatus.PENDING;
                        return [2 /*return*/, this.api.update(id, { status: newStatus })];
                }
            });
        });
    };
    TodoService.prototype.search = function (keyword) {
        return __awaiter(this, void 0, void 0, function () {
            var lower, todos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!keyword || keyword.trim().length === 0) {
                            throw new Error("Keyword is required for search");
                        }
                        lower = keyword.toLowerCase();
                        return [4 /*yield*/, this.api.getAll()];
                    case 1:
                        todos = _a.sent();
                        return [2 /*return*/, todos.filter(function (t) {
                                var _a;
                                return t.title.toLowerCase().includes(lower) ||
                                    ((_a = t.description) !== null && _a !== void 0 ? _a : "").toLowerCase().includes(lower);
                            })];
                }
            });
        });
    };
    return TodoService;
}());
exports.TodoService = TodoService;
