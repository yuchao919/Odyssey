"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Create Express server
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('hello word');
});
app.listen(9999, () => {
    console.log(`express服务已经启动:localhost:9999`);
});
//# sourceMappingURL=index.js.map