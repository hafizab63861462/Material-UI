import Button from "@mui/material/Button";
const CommonButton = ({ variant, onClick, text, id, className }) => {
  const clickHandler = () => {
    if (id !== undefined) {
      onClick(id);
    } else {
      onClick();
    }
  };
  return (
    <Button variant={variant} onClick={clickHandler} className={className}>
      {text}
    </Button>
  );
};

export default CommonButton;
