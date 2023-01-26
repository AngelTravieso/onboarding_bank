import { MenuItem, TextField } from '@mui/material';

const currencies = [
  {
    value: '1',
    label: 'Venezolano',
  },
  {
    value: '2',
    label: 'Extranjero',
  },
];

export const UserTypeSelect = () => {
  return (
    <TextField
      select
      defaultValue='1'
      label='Tipo de Documento'
      variant='standard'
      fullWidth
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
