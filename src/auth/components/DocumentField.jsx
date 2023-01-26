import { TextField } from '@mui/material/TextField';

export const DocumentField = () => {
  return (
    <TextField
      variant='standard'
      label='Documento de Identidad'
      margin='none'
      autoFocus={true}
      required
      fullWidth
    />
  );
};
