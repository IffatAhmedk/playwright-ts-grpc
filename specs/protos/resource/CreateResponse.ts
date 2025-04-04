// Original file: proto/test.proto

import type { Resource as _resource_Resource, Resource__Output as _resource_Resource__Output } from '../resource/Resource';

export interface CreateResponse {
  'id'?: (string);
  'resource'?: (_resource_Resource | null);
}

export interface CreateResponse__Output {
  'id'?: (string);
  'resource'?: (_resource_Resource__Output);
}
