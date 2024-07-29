import { patrimoineApi, possessionApi, projectionFutureApi } from "./api";
import addIdField from "./utils";

const patrimoineProvider = {
  getOne: async (resource: string, ...args: string[]) => {
    try {
      if (resource === "patrimoines") {
        const [nom] = args;
        const response = await patrimoineApi.getPatrimoineByNom(nom);
        const data = addIdField(response.data, 'nom');
        return { data };
      }
    } catch (error) {
      console.error(`getOne error for ${resource}:`, error);
      throw error;
    }
    throw new Error(`Unsupported resource: ${resource}`);
  },
  getList: async (resource: string, ...args: any[]) => {
    try {
      if (resource === "patrimoines") {
        const [page, pageSize] = args;
        const response = await patrimoineApi.getPatrimoines(page, pageSize);
        const data = addIdField(response.data.data, 'nom');
        return { data, total: data.length };
      }
    } catch (error) {
      console.error(`getList error for ${resource}:`, error);
      throw error;
    }
    throw new Error(`Unsupported resource: ${resource}`);
  },
  saveOrUpdate: async (resource: string, ...args: any[]) => {
    try {
      if (resource === "patrimoines") {
        const [payload] = args;
        const response = await patrimoineApi.crupdatePatrimoines({ data: [payload] });
        const data = addIdField(response.data.data![0], 'nom');
        return { data };
      }
    } catch (error) {
      console.error(`saveOrUpdate error for ${resource}:`, error);
      throw error;
    }
    throw new Error(`Unsupported resource: ${resource}`);
  },
  delete: () => {
    throw new Error('Not Implemented');
  }
};

const possessionProvider = {
  getOne: async (resource: string, ...args: string[]) => {
    try {
      if (resource === "possessions") {
        const [nomPatrimoine, nomPossession] = args;
        const response = await possessionApi.getPatrimoinePossessionByNom(nomPatrimoine, nomPossession);
        const data = addIdField(response.data, 'nom');
        return { data };
      }
    } catch (error) {
      console.error(`getOne error for ${resource}:`, error);
      throw error;
    }
    throw new Error(`Unsupported resource: ${resource}`);
  },
  getList: async (resource: string, ...args: any[]) => {
    try {
      if (resource === "possessions") {
        const [nomPatrimoine, page, pageSize] = args;
        const response = await possessionApi.getPatrimoinePossessions(nomPatrimoine, page, pageSize);
        const data = addIdField(response.data.data, 'nom');
        return { data, total: data.length };
      }
    } catch (error) {
      console.error(`getList error for ${resource}:`, error);
      throw error;
    }
    throw new Error(`Unsupported resource: ${resource}`);
  },
  saveOrUpdate: async (resource: string, ...args: any[]) => {
    try {
      if (resource === "possessions") {
        const [nomPatrimoine, payload, page, pageSize] = args;
        const response = await possessionApi.crupdatePatrimoinePossessions(nomPatrimoine, page, pageSize, { data: [payload] });
        const data = addIdField(response.data.data, 'nom');
        return { data };
      }
    } catch (error) {
      console.error(`saveOrUpdate error for ${resource}:`, error);
      throw error;
    }
    throw new Error(`Unsupported resource: ${resource}`);
  },
  delete: async (resource: string, ...args: string[]) => {
    try {
      if (resource === "possessions") {
        const [nomPatrimoine, nomPossession] = args;
        await possessionApi.deletePatrimoinePossessionByNom(nomPatrimoine, nomPossession);
        return { success: true };
      }
    } catch (error) {
      console.error(`delete error for ${resource}:`, error);
      throw error;
    }
    throw new Error(`Unsupported resource: ${resource}`);
  }
};

const projectionFutureProvider = {
  getList: async (resource: string, ...args: any[]) => {
    try {
      if (resource === "projectionFuture") {
        const [nomPatrimoine, debut, fin] = args;
        const response = await projectionFutureApi.getPatrimoineFluxImpossibles(nomPatrimoine, debut, fin);
        const data = addIdField(response.data, 'nom');
        return { data };
      }
    } catch (error) {
      console.error(`getImpossibleFlux error for ${resource}:`, error);
      throw error;
    }
    throw new Error(`Unsupported resource: ${resource}`);
  },
  getPatrimoineGraph: async (resource: string, ...args: string[]) => {
    try {
      if (resource === "projectionFuture") {
        const [nomPatrimoine, debut, fin] = args;
        const response = await projectionFutureApi.getPatrimoineGraph(nomPatrimoine, debut, fin);
        if (response.status === 200 && response.headers['content-type'] === 'image/png') {
          return response.data;
        }
      }
    } catch (error) {
      console.error(`getPatrimoineGraph error for ${resource}:`, error);
      throw error;
    }
    throw new Error(`Unsupported resource: ${resource}`);
  }
};

export { patrimoineProvider, possessionProvider, projectionFutureProvider };
