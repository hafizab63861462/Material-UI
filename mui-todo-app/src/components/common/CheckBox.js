import Checkbox from "@mui/material/Checkbox";

const CheckBox = ({ onClick, checked }) => {
  return <Checkbox onClick={onClick} checked={checked} />;
};

export default CheckBox;
