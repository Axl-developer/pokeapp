import * as yup from "yup";

export const trainerSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().min(10),
    birthDate: yup.date(),
    city: yup.string().required(),
});