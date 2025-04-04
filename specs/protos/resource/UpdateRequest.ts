// Original file: proto/test.proto

import type { Resource as _resource_Resource, Resource__Output as _resource_Resource__Output } from './Resource';

export interface UpdateRequest {
  'id'?: (string);
  'resource'?: (_resource_Resource | null);
}

export interface UpdateRequest__Output {
  'id'?: (string);
  'resource'?: (_resource_Resource__Output);
}
