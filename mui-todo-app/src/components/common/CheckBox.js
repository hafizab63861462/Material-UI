import Checkbox from "@mui/material/Checkbox";

const CheckBox = ({ onClick, id, checked }) => {
  return <Checkbox onClick={() => onClick(id)} checked={checked} />;
};

export default CheckBox;
