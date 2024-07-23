import { Admin, Datagrid, DataProvider, List, Resource, TextField } from 'react-admin';
import patrimoineProvider from './providers/patrimoineProvider';

const PatrimoineList = () => (
  <List>
    <Datagrid>
      <TextField source="nom" label="Nom"/>
      <TextField source="possesseur.nom" label="Possesseur"/>
      <TextField source="t" label="Date"/>
      <TextField source="valeur_comptable" label="Valeur comptable"/>
    </Datagrid>
  </List>
);

function App() {
  return (
    <Admin dataProvider={patrimoineProvider as unknown as DataProvider}>
      <Resource name="patrimoines" list={PatrimoineList} />
    </Admin>
  )
}

export default App
