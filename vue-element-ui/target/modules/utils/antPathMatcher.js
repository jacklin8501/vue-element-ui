define(["require", "exports", "./StringUtils"], function (require, exports, StringUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PathMatcher = /** @class */ (function () {
        function PathMatcher(pathSeparator) {
            if (!pathSeparator) {
                this.pathSeparator = '/';
            }
            else {
                this.pathSeparator = pathSeparator;
            }
        }
        PathMatcher.prototype.matcher = function (pattern, path) {
            if (StringUtils_1.StringUtils.isEmpty(pattern) || StringUtils_1.StringUtils.isEmpty(path)
                || !StringUtils_1.StringUtils.startWidth(pattern, this.pathSeparator) || !StringUtils_1.StringUtils.startWidth(path, this.pathSeparator)) {
                return false;
            }
            return pattern == path;
        };
        return PathMatcher;
    }());
    exports.PathMatcher = PathMatcher;
});
//# sourceMappingURL=AntPathMatcher.js.map