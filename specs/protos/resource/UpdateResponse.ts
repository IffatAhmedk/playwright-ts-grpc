// Original file: proto/test.proto

import type { Resource as _resource_Resource, Resource__Output as _resource_Resource__Output } from '../resource/Resource';

export interface UpdateResponse {
  'success'?: (boolean);
  'resource'?: (_resource_Resource | null);
}

export interface UpdateResponse__Output {
  'success'?: (boolean);
  'resource'?: (_resource_Resource__Output);
}
