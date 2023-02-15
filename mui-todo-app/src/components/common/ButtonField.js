import Button from "@mui/material/Button";
const ButtonField = ({ variant, onClick, text, className, type }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Button
      variant={variant}
      type={type}
      className={className}
      onClick={onClick && handleClick}
    >
      {text}
    </Button>
  );
};

export default ButtonField;
