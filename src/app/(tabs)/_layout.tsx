import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  return (
    <NativeTabs>

      <NativeTabs.Trigger name="pokemon">
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
        <NativeTabs.Trigger.Label>Pokemon</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
        <NativeTabs.Trigger.Label>Trainer</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}