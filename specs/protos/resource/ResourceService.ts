// Original file: proto/test.proto

import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateRequest as _resource_CreateRequest, CreateRequest__Output as _resource_CreateRequest__Output } from '../resource/CreateRequest';
import type { CreateResponse as _resource_CreateResponse, CreateResponse__Output as _resource_CreateResponse__Output } from '../resource/CreateResponse';
import type { DeleteRequest as _resource_DeleteRequest, DeleteRequest__Output as _resource_DeleteRequest__Output } from '../resource/DeleteRequest';
import type { DeleteResponse as _resource_DeleteResponse, DeleteResponse__Output as _resource_DeleteResponse__Output } from '../resource/DeleteResponse';
import type { ReadRequest as _resource_ReadRequest, ReadRequest__Output as _resource_ReadRequest__Output } from '../resource/ReadRequest';
import type { ReadResponse as _resource_ReadResponse, ReadResponse__Output as _resource_ReadResponse__Output } from '../resource/ReadResponse';
import type { UpdateRequest as _resource_UpdateRequest, UpdateRequest__Output as _resource_UpdateRequest__Output } from '../resource/UpdateRequest';
import type { UpdateResponse as _resource_UpdateResponse, UpdateResponse__Output as _resource_UpdateResponse__Output } from '../resource/UpdateResponse';

export interface ResourceServiceDefinition {
  Create: MethodDefinition<_resource_CreateRequest, _resource_CreateResponse, _resource_CreateRequest__Output, _resource_CreateResponse__Output>
  Delete: MethodDefinition<_resource_DeleteRequest, _resource_DeleteResponse, _resource_DeleteRequest__Output, _resource_DeleteResponse__Output>
  Read: MethodDefinition<_resource_ReadRequest, _resource_ReadResponse, _resource_ReadRequest__Output, _resource_ReadResponse__Output>
  Update: MethodDefinition<_resource_UpdateRequest, _resource_UpdateResponse, _resource_UpdateRequest__Output, _resource_UpdateResponse__Output>
}
