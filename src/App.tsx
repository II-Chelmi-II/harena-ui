import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./providers/dataProvider";
import PatrimoineList from "./operations/PatrimoineList";
import PossessionList from "./operations/PossessionList";
import ProjectionFutureList from "./operations/ProjectionFutureList";
import Dashboard from "./operations/Dashboard";

// Logging
dataProvider
  .getList("patrimoines", { pagination: { page: 1, perPage: 10 } })
  .then((data: any) => console.log(data))
  .catch((error: any) => console.error(error));
dataProvider
  .getList("possessions", { pagination: { page: 1, perPage: 10 } })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
dataProvider
  .getList("projectionFuture", {
    pagination: { page: 1, perPage: 10 },
    nom_possesseur: "string",
    debut: "2015-07-01",
    fin: "2025-07-02",
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

function App() {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider as DataProvider}>
      <Resource name="patrimoines" list={PatrimoineList} />
      <Resource name="possessions" list={PossessionList} />
      <Resource name="projectionFuture" list={ProjectionFutureList} />
    </Admin>
  );
}

export default App;
