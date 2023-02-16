import Button from "@mui/material/Button";
const ButtonField = ({ variant, onClick, text, className, type }) => {
  return (
    <Button
      variant={variant}
      type={type}
      className={className}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonField;
