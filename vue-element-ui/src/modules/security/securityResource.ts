
export class SecurityResource {
    httpMethod:string;
    uri:string;
    constructor(httpMethod:string, uri:string) {
        this.httpMethod = httpMethod;
        this.uri = uri;
    }
}