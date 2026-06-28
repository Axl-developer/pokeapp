import { useState } from "react";
import { Controller, FieldPath, FieldValues, useFormContext } from "react-hook-form";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface Props<T extends FieldValues>
  extends TextInputProps {
  name: FieldPath<T>;
  label?: string;
}

export function Input<T extends FieldValues>({ name, label, ...props }: Props<T>) {
  const { control, formState: { errors } } = useFormContext<T>();
  const [focused, setFocused] = useState(false);
  const error = errors[name];

  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#CCC", "#789292"]
    ),
    borderWidth: 1 + progress.value,
    }));

    const handleFocus = () => progress.value = withTiming(1)

    const handleBlur = () => progress.value = withTiming(0)

  return (
    <View>
      {label && <Text>{label}</Text>}

      <Controller
        control={control}
        name={name}
        render={({
          field: {
            onChange,
            value,
          },
        }) => (
          <Animated.View style={[style.input, animatedStyle]}>
            <TextInput
              {...props}
              value={value?.toString() ?? ""}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={onChange}
              style={[
                focused && style.focused,
                error && style.error,
              ]}
            />
          </Animated.View>
        )}
      />

      {error && (
        <Text style={{ color: "red" }}>
          {String(error.message)}
        </Text>
      )}
    </View>
  );
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 25,
        marginBottom: 10
    },
    focused: {
      borderColor: "#789292",
      borderWidth: 2,
      shadowColor: "#789292",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
      error: {
      borderColor: "#EF4444",
    },
    errorText: {
        color: "#EF4444",
    },
})