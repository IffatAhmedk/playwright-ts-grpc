const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./specs/protos/resource.proto');
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const ResourceService = (protoDescriptor).resource.ResourceService;  // Access the ResourceService under the 'resource' package

const server = new grpc.Server();

server.addService(ResourceService.service, {
  Create: (call, callback) => {
    callback(null, { id: '123', resource: call.request.resource });
  },
  Read: (call, callback) => {
    callback(null, { resource: { id: '123', name: 'Test Resource', description: 'Description' } });
  },

  Update: (call, callback) => {
    callback(null, { success: true, resource: call.request.resource });
  },

  Delete: (call, callback) => {
    console.log(`Deleting resource with ID: ${call.request.id}`);
    callback(null, { success: true });
  },
});

const port = '50051';
server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
  if (error) {
    console.error(`Failed to bind server: ${error.message}`);
    return;
  }
  console.log(`Server running at http://127.0.0.1:${port}`);
});
