import { MetadataError } from '../metadata-error.js';

export class InternalServerError extends MetadataError {
  constructor(
    detail = 'An unexpected error occurred.',
    title = 'Internal Server Error',
    instance = '/'
  ) {
    super('about:blank', 500, title, detail, instance);
  }
}
