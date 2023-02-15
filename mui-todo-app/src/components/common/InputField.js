import TextField from "@mui/material/TextField";

const InputField = ({ label, variant, value, onChange }) => {
  return (
    <TextField
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      fullWidth
    />
  );
};

export default InputField;
