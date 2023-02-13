import Checkbox from "@material-ui/core/Checkbox";
const CommonCheckBox = ({ onClick, id, checked }) => {
  return <Checkbox onClick={() => onClick(id)} checked={checked} />;
};

export default CommonCheckBox;
