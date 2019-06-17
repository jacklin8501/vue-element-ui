import  {StringUtils} from './StringUtils'

export class PathMatcher {
    pathSeparator: string;
    constructor(pathSeparator: string | '/') {
        if (!pathSeparator) {
            this.pathSeparator = '/';
        } else {
            this.pathSeparator = pathSeparator;
        }
    }
    matcher(pattern: string, path: string): boolean {
        if(StringUtils.isEmpty(pattern) || StringUtils.isEmpty(path) 
        || !StringUtils.startWidth(pattern, this.pathSeparator) || !StringUtils.startWidth(path, this.pathSeparator)) {
            return false;
        }
        return pattern == path;
    }
}