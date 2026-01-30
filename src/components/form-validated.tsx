import { useFormik } from "formik";
import type { Developer } from "../types/developer";
import * as yup from "yup";

interface formValidatedProps {
  onSubmit?: (output: Developer) => void;
}

export const FormValidated = ({ onSubmit }: formValidatedProps) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      age: 1,
      role: "",
    },
    validationSchema: yup.object({
      fullName: yup.string().label("Full Name").required(),
      email: yup.string().email("Invalid email").required(),
      age: yup.number().label("Age").min(10).max(99).required(),
      role: yup
        .string()
        .label("Role")
        .oneOf(["frontend", "backend", "designer"])
        .required(),
    }),
    onSubmit: (values) => {
      onSubmit?.({
        uuid: crypto.randomUUID(),
        fullname: values.fullName,
        email: values.email,
        age: values.age,
        role: values.role,
      });
    },
  });

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        style={{ marginLeft: "1rem", marginTop: "1rem" }}
        value={formik.values.fullName}
        onChange={formik.handleChange}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        style={{ marginLeft: "1rem", marginTop: "1rem" }}
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <br />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        name="age"
        id="age"
        style={{ marginLeft: "1rem", marginTop: "1rem" }}
        value={formik.values.age}
        onChange={formik.handleChange}
      />
      <br />
      <label htmlFor="role">Role</label>
      <select
        name="role"
        id="role"
        style={{ marginLeft: "1rem", marginTop: "1rem" }}
        value={formik.values.role}
        onChange={formik.handleChange}
      >
        <option value="">Select Role</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="designer">Designer</option>
      </select>
      <br />
      <button type="submit" style={{ marginTop: "1rem" }}>
        Submit
      </button>
      {formik.errors.fullName && <h4>{formik.errors.fullName}</h4>}
      {formik.errors.email && <h4>{formik.errors.email}</h4>}
      {formik.errors.age && <h4>{formik.errors.age}</h4>}
      {formik.errors.role && <h4>{formik.errors.role}</h4>}
    </form>
  );
};
