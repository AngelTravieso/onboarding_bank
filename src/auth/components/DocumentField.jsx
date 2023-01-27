import TextField from "@mui/material/TextField";

export const DocumentField = ({ document, handleChange }) => {
  return (
    <TextField
      name="document"
      variant="standard"
      label="Documento de Identidad"
      margin="none"
      autoFocus={true}
      value={document}
      onChange={handleChange}
      required
      fullWidth
    />
  );
};
