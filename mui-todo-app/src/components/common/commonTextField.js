import TextField from "@mui/material/TextField";

const CommonTextField = ({ label, variant, value, onChange }) => {
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

export default CommonTextField;
