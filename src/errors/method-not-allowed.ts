import { MetadataError } from '../metadata-error.js';

export class MethodNotAllowed extends MetadataError {
  constructor(
    detail = 'The requested method is not allowed.',
    title = 'Method Not Allowed',
    instance = '/'
  ) {
    super('about:blank', 405, title, detail, instance);
  }
}
