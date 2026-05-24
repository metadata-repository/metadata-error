import { MetadataError } from '../metadata-error.js';

export class UnprocessableEntity extends MetadataError {
  constructor(
    detail = 'The request could not be processed.',
    title = 'Unprocessable Entity',
    instance = '/'
  ) {
    super('about:blank', 422, title, detail, instance);
  }
}
