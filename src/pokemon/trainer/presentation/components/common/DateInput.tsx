import { type TrainerForm } from "@/pokemon/trainer/domain/entities/TrainerForm";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  name: keyof TrainerForm;
  placeholder?: string;
}

export function DateInput({
  name,
  placeholder = "Seleccionar fecha",
}: Props) {
  const [open, setOpen] = useState(false);

  const {
    control,
    formState: { errors },
  } = useFormContext<TrainerForm>();

  const error = errors[name];

  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <>
            <Pressable
              style={[
                style.input,
                error && style.error,
              ]}
              onPress={() => setOpen(true)}
            >
              <Text>
                {value instanceof Date
                  ? value.toLocaleDateString()
                  : placeholder}
              </Text>
            </Pressable>

            {open && (
              <DateTimePicker
                value={
                  value instanceof Date
                    ? value
                    : new Date()
                }
                mode="date"
                onChange={(event, date) => {
                  setOpen(false);

                  if (
                    event.type === "set" &&
                    date
                  ) {
                    onChange(date);
                  }
                }}
              />
            )}
          </>
        )}
      />

      {error && (
        <Text style={style.errorText}>
          {String(error.message)}
        </Text>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 25,
    marginBottom: 5,
    minHeight: 45,
    justifyContent: "center",
  },

  error: {
    borderColor: "red",
  },

  errorText: {
    color: "red",
    marginBottom: 10,
  },
});