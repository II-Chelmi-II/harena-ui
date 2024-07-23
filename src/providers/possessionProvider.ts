import { possessionApi } from "./api";
import addIdField from "./utils";

const PossessionProvider = {
    getOne: async (resource: string, nomPatrimoine: string, nomPossession: string) => {
        if (resource === "possessions") {
            try {
                const response = await possessionApi.getPatrimoinePossessionByNom(nomPatrimoine, nomPossession);
                const data = addIdField(response.data, "nomPossession");
                return {
                    data
                };
            } catch (error) {
                console.log(`getOne error: ${error}`);
                throw error;
            }
        } else {
            throw new Error(`Unsupported ressource: ${resource}`);
        }
    },

    getList: async (resource: string, nomPatrimoine: string, page: number, pageSize: number) => {
        if (resource === "possessions") {
            try {
                const response = await possessionApi.getPatrimoinePossessions(nomPatrimoine, page, pageSize);
                const data = addIdField(response.data, "nomPossession");

                const total = data.length;

                return {
                    data: data,
                    total
                };
            } catch (error) {
                console.log(`getList error: ${error}`);
                throw error;
            }
        } else {
            throw new Error(`Unsupported resource: ${resource}`);
        }
    }
}




export default PossessionProvider;
