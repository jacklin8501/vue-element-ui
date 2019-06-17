import {SecurityResource} from './securityResource';

export namespace SecurityContextHolder {
    let resources: Array<SecurityResource>;
    export function setResources(resources: Array<SecurityResource>): void {
        this.resources = resources;
    }

    export function getResources(): Array<SecurityResource> {
        return this.resources;
    }
}
