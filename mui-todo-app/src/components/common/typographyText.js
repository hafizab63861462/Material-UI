import { Typography } from "@material-ui/core";

const TypographyText = ({ className, variant, align, text }) => {
  return (
    <Typography className={className} variant={variant} align={align}>
      {text}
    </Typography>
  );
};

export default TypographyText;
