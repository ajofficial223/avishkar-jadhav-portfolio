// Placeholder file to satisfy imports
// This file can be safely removed once all imports are updated

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const useTheme = () => {
  return { theme: 'dark', toggleTheme: () => {} };
}; 