import { MetadataError } from '../metadata-error.js';

export class Unauthorized extends MetadataError {
  constructor(
    detail = 'Authentication is required.',
    title = 'Unauthorized',
    instance = '/'
  ) {
    super('about:blank', 401, title, detail, instance);
  }
}
