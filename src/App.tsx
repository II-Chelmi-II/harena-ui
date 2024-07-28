import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./providers/dataProvider";
import PossessionList from "./components/PossessionList";
import PatrimoineList from "./components/PatrimoineList";

// Logging
dataProvider
  .getList("patrimoines", { pagination: { page: 1, perPage: 10 } })
  .then((data: any) => console.log(data))
  .catch((error: any) => console.error(error));
dataProvider
  .getList("possessions", { pagination: { page: 1, perPage: 10 } })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

function App() {
  return (
    <Admin dataProvider={dataProvider as DataProvider}>
      <Resource name="patrimoines" list={PatrimoineList} />
      <Resource name="possessions" list={PossessionList} />
    </Admin>
  );
}

export default App;
