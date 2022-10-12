import FormInput from "../../../../commonComponents/FormInput";
import FormTooltip from "../../../../commonComponents/FormTooltip";
import FormInputPassword from "../../../../commonComponents/FormInputPassword";
import FormSelect from "../../../../commonComponents/FormSelect";

import { hintTexts } from "../../constants";

import styles from "./index.module.scss";

const RegistrationForm = ({ formik }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>CREATE AN ACCOUNT</h1>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <FormInput
          name="email"
          type="email"
          errors={formik.errors.email}
          value={formik.values.email}
          onFormikChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.email}
        />

        <FormTooltip title={hintTexts.password}>
          <div className={styles.tooltip}>
            <FormInputPassword
              name="password"
              errors={formik.errors.password}
              value={formik.values.password}
              onFormikChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.password}
            />
          </div>
        </FormTooltip>

        <FormInput
          name="firstName"
          type="firstName"
          errors={formik.errors.firstName}
          value={formik.values.firstName}
          onFormikChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.firstName}
        />

        <FormInput
          name="lastName"
          type="lastName"
          errors={formik.errors.lastName}
          value={formik.values.lastName}
          onFormikChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.lastName}
        />

        <FormSelect
          name="gender"
          errors={formik.errors.gender}
          value={formik.values.gender}
          onFormikChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.gender}
        />

        <FormTooltip title={hintTexts.phone}>
          <div className={styles.tooltip}>
            <FormInput
              name="phone"
              type="phone"
              errors={formik.errors.phone}
              value={formik.values.phone}
              onFormikChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.phone}
            />
          </div>
        </FormTooltip>

        <button className={styles.button} type="submit">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
