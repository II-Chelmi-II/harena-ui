import { patrimoineProvider, possessionProvider, projectionFutureProvider } from './harenaProvider';

const getProvider = (resource: string) => {
  switch (resource) {
    case 'patrimoines':
      return patrimoineProvider;
    case 'possessions':
      return possessionProvider;
    case 'projectionFuture':
      return projectionFutureProvider;
    default:
      throw new Error('Unknown resource type');
  }
};

const dataProvider = {
  create: async (resource: string, params: { data: any; }) => {
    const response = await getProvider(resource).saveOrUpdate(params.data);
    return { data: response };
  },
  update: async (resource: string, params: { data: any; }) => {
    const response = await getProvider(resource).saveOrUpdate(params.data);
    return { data: response };
  },
  getList: async (resource: string, params: { pagination: { page: any; perPage: any; }; }) => {
    const { page, perPage } = params.pagination;
    const response = await getProvider(resource).getList(resource, page, perPage);
    return {
      data: response.data,
      total: response.total,
    };
  },
  getOne: async (resource: string, params: { id: any; }) => {
    const response = await getProvider(resource).getOne(resource, params.id);
    return { data: response.data };
  },
  delete: async (resource, params) => {
    const response = await getProvider(resource).delete(resource, params.id);
    return { data: response };
  },
  deleteMany: () => {
    throw new Error('Not Implemented');
  },
  getMany: () => {
    throw new Error('Not Implemented');
  },
  getManyReference: () => {
    throw new Error('Not Implemented');
  },
  updateMany: () => {
    throw new Error('Not Implemented');
  },
};

export default dataProvider;