import Button from "@mui/material/Button";
const ButtonField = ({ variant, onClick, text, id, className }) => {
  const handleClick = () => {
    if (id || id === 0) {
      onClick(id);
    } else {
      onClick();
    }
  };
  return (
    <Button variant={variant} onClick={handleClick} className={className}>
      {text}
    </Button>
  );
};

export default ButtonField;
