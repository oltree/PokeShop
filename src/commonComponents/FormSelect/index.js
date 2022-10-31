import { memo } from "react";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FormSelect = ({
  name,
  errors,
  value,
  onFormikChange,
  onBlur,
  touched,
}) => (
  <FormControl variant="standard">
    <InputLabel
      id="gender-label"
      color={errors && touched ? "error" : "success"}
    >
      {errors || "Gender"}
    </InputLabel>
    <Select
      labelId="gender-label"
      name={name}
      value={value}
      onChange={onFormikChange}
      color={errors && touched ? "error" : "success"}
      onBlur={onBlur}
    >
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
    </Select>
  </FormControl>
);

export default memo(FormSelect);
