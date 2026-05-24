import { MetadataError } from '../metadata-error.js';

export class Conflict extends MetadataError {
  constructor(
    detail = 'The request conflicts with the current resource state.',
    title = 'Conflict',
    instance = '/'
  ) {
    super('about:blank', 409, title, detail, instance);
  }
}
