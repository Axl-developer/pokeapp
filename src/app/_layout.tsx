import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient()
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="pokemon/[id]"
            options={{ title: "Detalle" }}
          />
        </Stack>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
