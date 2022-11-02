import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

import FormInput from "../../../../commonComponents/FormInput";
import FormSelect from "../../../../commonComponents/FormSelect";
import FormTooltip from "../../../../commonComponents/FormTooltip";
import FormInputPassword from "../../../../commonComponents/FormInputPassword";

import { HINT_TEXT } from "../../constants";
import { ROUTE_NAMES } from "../../../../routes/routeNames";

import styles from "./index.module.scss";

const RegistrationForm = ({
  values,
  errors,
  onChange,
  onBlur,
  touched,
  onSubmit,
}) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>CREATE AN ACCOUNT</h1>

    <form onSubmit={onSubmit} className={styles.form}>
      <FormInput
        name="email"
        type="email"
        errors={errors.email}
        value={values.email}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.email}
      />

      <FormTooltip title={HINT_TEXT.password}>
        <div className={styles.tooltip}>
          <FormInputPassword
            name="password"
            errors={errors.password}
            value={values.password}
            onFormikChange={onChange}
            onBlur={onBlur}
            touched={touched.password}
          />
        </div>
      </FormTooltip>

      <FormInput
        name="firstName"
        type="firstName"
        errors={errors.firstName}
        value={values.firstName}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.firstName}
      />

      <FormInput
        name="lastName"
        type="lastName"
        errors={errors.lastName}
        value={values.lastName}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.lastName}
      />

      <FormSelect
        name="gender"
        errors={errors.gender}
        value={values.gender}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.gender}
      />

      <FormTooltip title={HINT_TEXT.phone}>
        <div className={styles.tooltip}>
          <FormInput
            name="phone"
            type="phone"
            errors={errors.phone}
            value={values.phone}
            onFormikChange={onChange}
            onBlur={onBlur}
            touched={touched.phone}
          />
        </div>
      </FormTooltip>

      <div className={styles.buttons}>
        <div className={styles.account}>
          <p>Already a member?</p>
          <NavLink to={ROUTE_NAMES.SIGN_IN} className={styles.accountLink}>
            Sign in
          </NavLink>
        </div>

        <button className={styles.button} type="submit">
          SIGN UP
        </button>
      </div>
    </form>
  </div>
);

RegistrationForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;
