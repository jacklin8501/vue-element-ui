define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StringUtils;
    (function (StringUtils) {
        function isEmpty(str) {
            return null == str || str.trim().length - 0 == 0;
        }
        StringUtils.isEmpty = isEmpty;
        function isNotEmpty(str) {
            return !isEmpty(str);
        }
        StringUtils.isNotEmpty = isNotEmpty;
        function startWidth(str, prefix) {
            if (isEmpty(str) || isEmpty(prefix) || str.length - prefix.length < 0) {
                return false;
            }
            return str.substring(0, prefix.length) == prefix;
        }
        StringUtils.startWidth = startWidth;
        function endWidth(str, sufix) {
            if (isEmpty(str) || isEmpty(sufix) || str.length - sufix.length < 0) {
                return false;
            }
            return str.substring(str.length - sufix.length) == sufix;
        }
        StringUtils.endWidth = endWidth;
    })(StringUtils = exports.StringUtils || (exports.StringUtils = {}));
});
//# sourceMappingURL=StringUtils.js.map