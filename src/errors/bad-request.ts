import { MetadataError } from '../metadata-error.js';

export class BadRequest extends MetadataError {
  constructor(
    detail = 'The request is invalid.',
    title = 'Bad Request',
    instance = '/'
  ) {
    super('about:blank', 400, title, detail, instance);
  }
}
