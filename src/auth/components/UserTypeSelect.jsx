import { MenuItem, TextField } from '@mui/material';


export const UserTypeSelect = ({ handleChange, itemList, initialValue }) => {
  return (
    <TextField
      name='userType'
      select
      defaultValue={initialValue}
      label='Tipo de Documento'
      variant='standard'
      onChange={ handleChange }
      fullWidth
    >
      {itemList.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};
