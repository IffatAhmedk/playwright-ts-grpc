import { test, expect } from '@playwright/test';
import { GrpcApiClient } from '../grpc/grpcOperations';
import * as path from 'path';

const protoPath = path.resolve(__dirname, './protos/resource.proto');
const endpoint = 'localhost:50051';

test.describe('gRPC API CRUD Operations', () => {
  let apiClient: GrpcApiClient;

  test.beforeAll(async () => {
    apiClient = new GrpcApiClient(protoPath, endpoint);
  });

  test('Create operation', async () => {
    const newResource = {
      name: 'Test Resource',
      description: 'This is a test resource created via gRPC',
      status: 'active'
    };

    const response = await apiClient.create(newResource);
    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
    expect(response.resource.name).toBe('Test Resource');
    expect(response.resource.description).toBe('This is a test resource created via gRPC');
    expect(response.resource.status).toBe('active');

    test.info().annotations.push({
      type: 'resourceId',
      description: response.id
    });
  });

  test('Read operation', async ({ page }) => {
    const resourceId = test.info().annotations.find(a => a.type === 'resourceId')?.description;
    
    const response = await apiClient.read(resourceId as string);
    expect(response).toBeDefined();
    expect(response.resource).toBeDefined();
    expect(response.resource.name).toBe('Test Resource');
    expect(response.resource.description).toBe('Description');
  });

  test('Update operation', async ({ page }) => {
    const resourceId = test.info().annotations.find(a => a.type === 'resourceId')?.description;
    const updatedResource = {
      name: 'Updated Test Resource',
      description: 'This resource has been updated via gRPC',
      status: 'updated'
    };

    const response = await apiClient.update(resourceId as string, updatedResource);
    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(response.resource.name).toBe('Updated Test Resource');
    expect(response.resource.description).toBe('This resource has been updated via gRPC');
    expect(response.resource.status).toBe('updated');
  });

  test('Delete operation', async ({ page }) => {
    const resourceId = test.info().annotations.find(a => a.type === 'resourceId')?.description;
    
    const response = await apiClient.delete(resourceId as string);
    expect(response).toBeDefined();
    expect(response.success).toBe(true);
  });
});