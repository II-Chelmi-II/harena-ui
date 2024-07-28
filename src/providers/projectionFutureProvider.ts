import { projectionFutureApi } from "./api";
import addIdField from "./utils";

const projectionFutureProvider = {

    getImpossibleFLux: async (resource: string, nomPatrimoine: string, debut: string, fin: string) => {
        if (resource === "projectionFuture") {
            try {
                const response = await projectionFutureApi.getPatrimoineFluxImpossibles(nomPatrimoine, debut, fin)
                const data = addIdField(response.data, "nomPatrimoine")

                return {
                    data
                }
            } catch (error) {
                console.log(`getImpossibleFlux error: ${error}`);
                throw error
            }
        } else {
            throw new Error(`Unsuported resource: ${resource}`)
        }
    }
}