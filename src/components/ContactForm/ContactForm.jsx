import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";

const userId = nanoid();

export const ContactForm = ({ createUser }) => {
  const initialValues = { id: userId, name: "", number: "" };

  const handleSubmit = (values, actions) => {
    createUser(values.name, values.number);
    console.log(values.name);
    actions.resetForm();
  };

  return (
    <div className={s.form_box}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="name" />
          <Field type="text" name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
