import React, { useState } from 'react';

// Define the allowed values for better type safety
type ThemeOption = "light" | "dark" | "system";

export const ThemeSelector = () => {
  const [theme, setTheme] = useState<ThemeOption>("light");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // We cast the value to ThemeOption to satisfy TypeScript
    setTheme(e.target.value as ThemeOption);
  };

  return (
    <fieldset>
      <legend>Select UI Theme</legend>

      <label>
        <input
          type="radio"
          name="theme-group" // Same name links them together
          value="light"
          checked={theme === "light"}
          onChange={handleChange}
        />
        Light Mode
      </label>

      <label>
        <input
          type="radio"
          name="theme-group"
          value="dark"
          checked={theme === "dark"}
          onChange={handleChange}
        />
        Dark Mode
      </label>

      <label>
        <input
          type="radio"
          name="theme-group"
          value="system"
          checked={theme === "system"}
          onChange={handleChange}
        />
        System Default
      </label>
    </fieldset>
  );
};