// Type definitions for jju 1.3.0
// Project: https://www.npmjs.com/package/jju
// Definitions by: pgonzal

interface IJjuParseOptions {
  reserved_keys? : 'ignore' | 'throw' | 'replace';
  null_prototype?: boolean;
  reviver?: (key: any, value: any) => any;
  mode?: 'json';
}

interface IJjuStringifyOptions {
  ascii?: boolean;
  indent?: string | number | boolean;
  quote_keys?: boolean;
  sort_keys?: boolean;
  replacer?: (key: string, value: any) => any;
  no_trailing_comma?: boolean;
  mode?: string | 'json';
}

declare module 'jju' {
  export function parse(text: string, options?: IJjuParseOptions): any;
  export function stringify(value: any, options?: IJjuStringifyOptions): string;
}
