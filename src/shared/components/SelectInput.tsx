import { BlurView } from "expo-blur";
import { useState } from "react";
import { Controller, FieldPath, FieldValues, useFormContext } from "react-hook-form";
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { enableScreens } from "react-native-screens";

enableScreens(false);

type Option = {
  label: string;
  value: string;
};

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  placeholder?: string;
  options: Option[];
}

export function SelectInput<T extends FieldValues>({
  name,
  placeholder,
  options,
}: Props<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const [visible, setVisible] = useState(false);

  const progress = useSharedValue(0);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [300, 0]
        ),
      },
    ],
  }));

  const openModal = () => {
    setVisible(true);

    progress.value = withTiming(1, {
      duration: 250,
    });
  };

  const closeModal = () => {
    progress.value = withTiming(
      0,
      { duration: 250 },
      finished => {
        if (finished) {
          runOnJS(setVisible)(false);
        }
      }
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <>
          <Pressable
            style={[
              styles.input,
              errors[name] && styles.error,
            ]}
            onPress={openModal}
          >
            <Text>
              {options.find(
                option => option.value === value
              )?.label ?? placeholder}
            </Text>
          </Pressable>

          <Modal
            visible={visible}
            transparent
            statusBarTranslucent
          >
            <ScrollView>
              <Animated.View
                style={[
                    styles.backdrop,
                    backdropStyle,
                ]}
              >
                  <BlurView
                      intensity={40}
                      tint="dark"
                      style={[StyleSheet.absoluteFill]}
                  />
                  <Pressable
                      style={StyleSheet.absoluteFill}
                      onPress={closeModal}
                  />

                  <Animated.View
                      style={[
                      styles.sheet,
                      sheetStyle,
                      ]}
                  >
                  <View style={styles.handle} />

                  {options.map(option => (
                    <Pressable
                      key={option.value}
                      style={styles.option}
                      onPress={() => {
                        onChange(option.value);
                        closeModal();
                      }}
                    >
                      <Text style={styles.optionText}>
                        {option.label}
                      </Text>
                    </Pressable>
                  ))}
                  </Animated.View>
              </Animated.View>
            </ScrollView>
          </Modal>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 16,
    minHeight: 50,
    justifyContent: "center",
    marginBottom: 10,
  },

  error: {
    borderColor: "#EF4444",
  },

  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
  },

  sheet: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 10,
    minHeight: 250,
  },

  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#D1D5DB",
    alignSelf: "center",
    marginBottom: 20,
  },

  option: {
    paddingVertical: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E5E5",
  },

  optionText: {
    fontSize: 16,
  },
});