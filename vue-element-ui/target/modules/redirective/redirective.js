var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "vue", "../security/securityContextHolder"], function (require, exports, vue_1, securityContextHolder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    vue_1 = __importDefault(vue_1);
    var CgobalRedirect;
    (function (CgobalRedirect) {
        function initialize() {
            vue_1.default.directive('urlif', {
                inserted: function (el, binding) {
                    var httpMethod = binding.value[0];
                    var uri = binding.value[1];
                    var hasMatch = false;
                    var resources = securityContextHolder_1.SecurityContextHolder.getResources();
                    if (resources) {
                        for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
                            var resource = resources_1[_i];
                            var resourceMethod = resource.httpMethod;
                            var resourceUri = resource.uri;
                            if (resourceUri == uri && httpMethod == resourceMethod) {
                                hasMatch = true;
                                break;
                            }
                        }
                    }
                    if (!hasMatch) {
                        el.parentElement.removeChild(el);
                    }
                }
            });
        }
        CgobalRedirect.initialize = initialize;
    })(CgobalRedirect = exports.CgobalRedirect || (exports.CgobalRedirect = {}));
});
//# sourceMappingURL=redirective.js.map