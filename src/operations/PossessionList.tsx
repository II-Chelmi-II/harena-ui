import { Datagrid, DateField, List, NumberField, TextField } from "react-admin";

const ArgentList = () => (
  <List resource="possessions" filter={{ type: 'ARGENT' }}>
    <Datagrid>
      <TextField source="type" label="Type" />
      <TextField source="argent.nom" label="Nom Argent" />
      <DateField source="argent.t" label="Date" />
      <NumberField source="argent.valeur_comptable" label="Valeur Comptable" />
      <TextField source="argent.devise.nom" label="Devise" />
      <TextField source="argent.devise.code" label="Code Devise" />
    </Datagrid>
  </List>
);

const MaterielList = () => (
  <List resource="possessions" filter={{ type: 'MATERIEL' }}>
    <Datagrid>
      <TextField source="type" label="Type" />
      <TextField source="materiel.nom" label="Nom Materiel" />
      <DateField source="materiel.t" label="Date" />
      <NumberField source="materiel.valeur_comptable" label="Valeur Comptable" />
      <TextField source="materiel.devise.nom" label="Devise" />
      <NumberField source="materiel.taux_dappreciation_annuel" label="Taux d'Appréciation Annuel" />
      <DateField source="materiel.date_d_acquisition" label="Date d'Acquisition" />
      <TextField source="materiel.devise.code" label="Code Devise" />
    </Datagrid>
  </List>
);

const FluxArgentList = () => (
  <List resource="possessions" filter={{ type: 'FLUXARGENT' }}>
    <Datagrid>
      <TextField source="type" label="Type" />
      <TextField source="flux_argent.nom" label="Nom Flux Argent" />
      <DateField source="flux_argent.t" label="Date" />
      <NumberField source="flux_argent.valeur_comptable" label="Valeur Comptable" />
      <TextField source="flux_argent.devise.nom" label="Devise" />
    </Datagrid>
  </List>
);

const PossessionList = () => (
  <>
    <ArgentList />
    <MaterielList />
    <FluxArgentList />
  </>
);

export default PossessionList;
