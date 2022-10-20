import { memo } from "react";
import startCase from "lodash/startCase";

import TextField from "@mui/material/TextField";

const FormInput = ({
  name,
  type,
  errors,
  value,
  onFormikChange,
  onBlur,
  touched,
}) => (
  <TextField
    variant="standard"
    name={name}
    type={type}
    value={value}
    color={errors ? "error" : "success"}
    label={
      errors && touched ? `${startCase(name)}: ${errors}` : startCase(name)
    }
    onChange={onFormikChange}
    onBlur={onBlur}
  />
);
export default memo(FormInput);
