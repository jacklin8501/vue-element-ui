define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SecurityContextHolder;
    (function (SecurityContextHolder) {
        var resources;
        function setResources(resources) {
            this.resources = resources;
        }
        SecurityContextHolder.setResources = setResources;
        function getResources() {
            return this.resources;
        }
        SecurityContextHolder.getResources = getResources;
    })(SecurityContextHolder = exports.SecurityContextHolder || (exports.SecurityContextHolder = {}));
});
//# sourceMappingURL=securityContextHolder.js.map