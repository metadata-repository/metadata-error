import { MetadataError } from '../metadata-error.js';

export class Forbidden extends MetadataError {
  constructor(
    detail = 'You are not allowed to perform this action.',
    title = 'Forbidden',
    instance = '/'
  ) {
    super('about:blank', 403, title, detail, instance);
  }
}
