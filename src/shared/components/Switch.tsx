import { Controller, FieldPath, FieldValues, useFormContext } from "react-hook-form";
import { Switch as RNSwitch, SwitchProps, Text, View } from "react-native";

interface Props<T extends FieldValues> extends SwitchProps {
    name: FieldPath<T>;
    label?: string;
    labelOff?: string;
}

export function SwitchInput<T extends FieldValues>({
    name,
    label,
    labelOff,
    ...switchProps
}: Props<T>) {
    const { control } = useFormContext<T>();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => (
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>


                    {label &&
                        <Text style={{ fontSize: 16, color: '#000' }}>
                            {value ? label : labelOff}
                        </Text>
                    }

                    <RNSwitch
                        value={!!value}
                        onValueChange={onChange}
                        {...switchProps}
                    />
                </View>
            )}
        />
    );
}