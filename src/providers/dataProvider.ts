import {
  patrimoineProvider,
  possessionProvider,
  projectionFutureProvider,
} from "./harenaProvider";

const getProvider = (resource: string) => {
  switch (resource) {
    case "patrimoines":
      return patrimoineProvider;
    case "possessions":
      return possessionProvider;
    case "projectionFuture":
      return projectionFutureProvider;
    default:
      throw new Error("Unknown resource type");
  }
};

const hasSaveOrUpdate = (
  provider: any
): provider is { saveOrUpdate: (data: any) => Promise<any> } => {
  return typeof provider.saveOrUpdate === "function";
};

const hasGetOne = (
  provider: any
): provider is { getOne: (resource: string, id: any) => Promise<any> } => {
  return typeof provider.getOne === "function";
};

const hasDelete = (
  provider: any
): provider is { delete: (resource: string, id: any) => Promise<any> } => {
  return typeof provider.delete === "function";
};

const dataProvider = {
  create: async (resource: string, params: { data: any }) => {
    const provider = getProvider(resource);
    if (hasSaveOrUpdate(provider)) {
      const response = await provider.saveOrUpdate(params.data);
      return { data: response };
    }
    throw new Error("Provider does not support create operation");
  },
  update: async (resource: string, params: { data: any }) => {
    const provider = getProvider(resource);
    if (hasSaveOrUpdate(provider)) {
      const response = await provider.saveOrUpdate(params.data);
      return { data: response };
    }
    throw new Error("Provider does not support update operation");
  },
  getList: async (resource: string, params: {
    pagination?: {
      page: number;
      perPage: number;
    };
    [key: string]: any;
  }) => {
    const { page = 1, perPage = 10, ...restParams } = params;
    const response = await getProvider(resource).getList(
      resource,
      page,
      perPage,
      restParams
    );
    const data = Array.isArray(response.data) ? response.data : [response.data];

    return {
      data,
      total: data.length,
    };
  },
  getOne: async (resource: string, params: { id: any }) => {
    const provider = getProvider(resource);
    if (hasGetOne(provider)) {
      const response = await provider.getOne(resource, params.id);
      return { data: response.data };
    }
    throw new Error("Provider does not support getOne operation");
  },
  delete: async (resource: string, params: { id: any }) => {
    const provider = getProvider(resource);
    if (hasDelete(provider)) {
      const response = await provider.delete(resource, params.id);
      return { data: response };
    }
    throw new Error("Provider does not support delete operation");
  },
  deleteMany: () => {
    throw new Error("Not Implemented");
  },
  getMany: () => {
    throw new Error("Not Implemented");
  },
  getManyReference: () => {
    throw new Error("Not Implemented");
  },
  updateMany: () => {
    throw new Error("Not Implemented");
  },
};

export default dataProvider;
