import { MetadataError } from '../metadata-error.js';

export class NotFound extends MetadataError {
  constructor(
    detail = 'The requested resource could not be found.',
    title = 'Not Found',
    instance = '/'
  ) {
    super('about:blank', 404, title, detail, instance);
  }
}
