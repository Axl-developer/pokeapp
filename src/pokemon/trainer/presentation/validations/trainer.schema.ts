import * as yup from "yup";

export const trainerSchema = yup.object({
    sex: yup.boolean(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    birthDate: yup
    .date()
    .required()
    .test("min-age", "Debes ser mayor de 10 años", function (value) {
      if (!value) return false;

      const today = new Date();
      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - 10);

      return value <= minDate;
    }),
    city: yup.string().required(),
    region: yup.string().required(),
});