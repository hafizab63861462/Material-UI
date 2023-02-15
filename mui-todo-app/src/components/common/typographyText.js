import Typography from "@mui/material/Typography";

const TypographyText = ({ className, variant, align, text }) => {
  return (
    <Typography className={className} variant={variant} align={align}>
      {text}
    </Typography>
  );
};

export default TypographyText;
