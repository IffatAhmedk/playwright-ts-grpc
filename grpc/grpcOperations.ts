import { chromium, Browser, Page } from "@playwright/test";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { promisify } from "util";

export class GrpcApiClient {
  private client: any;

  constructor(protoPath: string, endpoint: string) {
    const packageDefinition = protoLoader.loadSync(protoPath);
    const protoDescriptor = grpc.loadPackageDefinition(
      packageDefinition
    ) as grpc.GrpcObject;

    const ResourceService = (protoDescriptor as any).resource
      .ResourceService as grpc.ServiceClientConstructor;

    this.client = new ResourceService(
      endpoint,
      grpc.credentials.createInsecure()
    );

    this.client.create = promisify(this.client.create).bind(this.client);
    this.client.read = promisify(this.client.read).bind(this.client);
    this.client.update = promisify(this.client.update).bind(this.client);
    this.client.delete = promisify(this.client.delete).bind(this.client);
  }

  async create(data: any): Promise<any> {
    try {
      console.log("Creating resource with data:", data);
      const response = await this.client.create({ resource: data });
      console.log("Create response:", response);

      return response;
    } catch (error) {
      console.error("Error in create operation:", error);
      throw error;
    }
  }

  async read(id: string): Promise<any> {
    try {
      console.log("Reading resource with ID:", id);
      const response = await this.client.read({ id });
      console.log("Read response:", response);

      return response;
    } catch (error) {
      console.error("Error in read operation:", error);
      throw error;
    }
  }

  async update(id: string, data: any): Promise<any> {
    try {
      console.log(`Updating resource with ID: ${data.id}, data:`, data);
      const response = await this.client.update({ id, resource: data });
      console.log("Update response:", response);
      return response;
    } catch (error) {
      console.error("Error in update operation:", error);
      throw error;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      console.log("Deleting resource with ID:", id);
      const response = await this.client.delete({ id });
      console.log("Delete response:", response);
      return response;
    } catch (error) {
      console.error("Error in delete operation:", error);
      throw error;
    }
  }
}
