import Vue from 'vue';
import { HttpMethod } from '../security/httpMethod';
import { SecurityResource } from '../security/securityResource';
import { SecurityContextHolder } from '../security/securityContextHolder';

export namespace CgobalRedirect {
    export function initialize() {
        Vue.directive('urlif', {
            inserted: function (el, binding) {
                let httpMethod: string = binding.value[0];
                let uri: string = binding.value[1];
                let hasMatch: boolean = false;
                let resources: Array<SecurityResource> = SecurityContextHolder.getResources();
                if (resources) {
                    for (let resource of resources) {
                        let resourceMethod: string = resource.httpMethod;
                        let resourceUri: string = resource.uri;
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
}