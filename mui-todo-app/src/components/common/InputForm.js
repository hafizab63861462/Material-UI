import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import ButtonField from "./ButtonField";
import TextField from "@mui/material/TextField";

const InputForm = ({
  id,
  defaultValue,
  label,
  variant,
  registerName,
  action,
  buttonVariant,
  buttonType,
  buttonText,
}) => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    let obj = {
      id,
      title: data[registerName],
    };
    action(obj);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} direction="row">
        <TextField
          label={label}
          variant={variant}
          defaultValue={defaultValue}
          {...register(registerName)}
          fullWidth
        />
        <ButtonField
          variant={buttonVariant}
          type={buttonType}
          text={buttonText}
        />
      </Stack>
    </form>
  );
};

export default InputForm;
