import { memo } from "react";
import { PropTypes } from "prop-types";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const FormSelect = ({
  name,
  value,
  errors,
  touched,
  onBlur,
  onFormikChange,
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

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.string,
  value: PropTypes.string.isRequired,
  onFormikChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool,
};

FormSelect.defaultProps = {
  errors: undefined,
  touched: undefined,
};

export default memo(FormSelect);
