// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { StrezlessMusickNexusMetadata } from '../client';

export abstract class APIResource {
  protected _client: StrezlessMusickNexusMetadata;

  constructor(client: StrezlessMusickNexusMetadata) {
    this._client = client;
  }
}
