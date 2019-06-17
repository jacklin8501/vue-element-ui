
export namespace StringUtils {
    export function isEmpty(str: string): boolean {
        return null == str || str.trim().length - 0 == 0;
    }

    export function isNotEmpty(str: string): boolean {
        return !isEmpty(str);
    }

    export function startWidth(str: string, prefix: string): boolean {
        if (isEmpty(str) || isEmpty(prefix) || str.length - prefix.length < 0) {
            return false;
        }
        return str.substring(0, prefix.length) == prefix;
    }

    export function endWidth(str: string, sufix: string): boolean {
        if (isEmpty(str) || isEmpty(sufix) || str.length - sufix.length < 0) {
            return false;
        }
        return str.substring(str.length - sufix.length) == sufix;
    }
}