import { CommonStyles } from "@/components/commonStyles";
import { validationBase } from "@/consts/yup";
import { dateMoment } from "@/helpers/date";
import { colors, gender, top100Films } from "@/mocks";
import { makeStyles } from "@mui/styles";
import { Field, Formik } from "formik";

const useStyles = makeStyles(() => {
  return {
    boxField: {
      marginBottom: "12px",
    },
  };
});

const Form = () => {
  const classes = useStyles();

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          color: "",
          character: "",
          date: dateMoment.currentDate(),
          checkbox: false,
          gender: "male",
        }}
        onSubmit={() => {}}
        validationSchema={validationBase}
      >
        {(props) => {
          console.log(props.values);

          return (
            <div className="" style={{ width: "100%" }}>
              <div className={classes.boxField}>
                <CommonStyles.Label title={"Input"} htmlFor={"name"} required />
                <Field component={CommonStyles.InputField} {...props.getFieldProps("name")} placeholder={"Input"} />
              </div>
              <div className={classes.boxField}>
                <CommonStyles.Label title={"Select"} htmlFor={"color"} required />
                <Field component={CommonStyles.SelectField} {...props.getFieldProps("color")} options={colors} placeholder={"Select"} />
              </div>
              <div className={classes.boxField}>
                <CommonStyles.Label title={"Search and select"} htmlFor={"character"} required />
                <Field
                  component={CommonStyles.AutocompleteField}
                  options={top100Films}
                  {...props.getFieldProps("character")}
                  placeholder={"Search input and select"}
                />
              </div>
              <div className={classes.boxField}>
                <CommonStyles.Label title={"Datepicker"} htmlFor={"date"} required />
                <Field component={CommonStyles.DatePickerField} {...props.getFieldProps("date")} />
              </div>
              <div className={classes.boxField}>
                <CommonStyles.Label title={"Checkbox"} />
                <Field component={CommonStyles.CheckboxField} {...props.getFieldProps("checkbox")} />
              </div>
              <div className={classes.boxField}>
                <CommonStyles.Label title={"Gender"} />
                <div className="">
                  <Field component={CommonStyles.RadioGroupField} {...props.getFieldProps("gender")} options={gender} />
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
