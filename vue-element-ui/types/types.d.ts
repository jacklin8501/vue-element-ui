declare let textCssTpl: string;

declare module 'text!*' {
    export = textCssTpl;
}

declare module 'css!*' {
    export = textCssTpl;
}

declare let elementui: any;
declare module 'ELEMENT' {
    export = elementui;
}

declare module 'Schema' {
    export = elementui;
}