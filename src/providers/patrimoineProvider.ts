import { patrimoineApi } from "./api";
import { Patrimoine } from "./gen";
import addIdField from "./utils";

const patrimoineProvider = {
  getOne: async (resource: string, nom: string) => {
    if (resource === "patrimoines") {
      try {
        const response = await patrimoineApi.getPatrimoineByNom(nom);
        const data = addIdField(response.data, 'nom');
        return { data };
      } catch (error) {
        console.error('getOne error:', error);
        throw error;
      }
    }
    throw new Error(`Unsupported resource: ${resource}`);
  },
  getList: async (resource: string, page: number, pageSize: number) => {
    if (resource === "patrimoines") {
      try {
        const response = await patrimoineApi.getPatrimoines(page, pageSize);
        const data = addIdField(response.data.data, 'nom');
        return {
          data: data,
          total: data.length,
        };
      } catch (error) {
        console.error('getList error:', error);
        throw error;
      }
    }
    throw new Error(`Unsupported resource: ${resource}`);
  },
  saveOrUpdate: async (resource: string, payload: Patrimoine) => {
    if (resource === "patrimoines") {
      try {
        const response = await patrimoineApi.crupdatePatrimoines({ data: [payload] });
        const data = addIdField(response.data.data![0], 'nom');
        return { data };
      } catch (error) {
        console.error('saveOrUpdate error:', error);
        throw error;
      }
    }
    throw new Error(`Unsupported resource: ${resource}`);
  },
  delete: () => {
    throw new Error('Not Implemented');
  },
};

export default patrimoineProvider;