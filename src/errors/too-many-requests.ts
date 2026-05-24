import { MetadataError } from '../metadata-error.js';

export class TooManyRequests extends MetadataError {
  constructor(
    detail = 'Too many requests.',
    title = 'Too Many Requests',
    instance = '/'
  ) {
    super('about:blank', 429, title, detail, instance);
  }
}
