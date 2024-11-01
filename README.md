# Norebase Frontend Developer Task

![image](https://github.com/user-attachments/assets/2a9b5c3d-36bb-460b-a33d-7aed4b7adf27)

## Introduction

This project was built with:

- [Vite 5.4.1](https://vitejs.dev/)
- [React 18.3.1](https://react.dev/)
- [Typescript 5.5.3](https://www.typescriptlang.org/)
- [TailwindCSS 3.4.10](https://tailwindcss.com/)
- [Prettier 3.3.3](https://prettier.io/)
- [prettier-plugin-tailwind 0.6.6](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [ESLint 9.9.0](https://eslint.org/)

## Installation

Clone the repo and run `pnpm install` in the root directory

Bash:

```bash
git clone https://github.com/Jemeni11/Norebase-Frontend-Developer-Test.git Norebase && cd Norebase && pnpm install
```

Powershell:

```powershell
git clone https://github.com/Jemeni11/Norebase-Frontend-Developer-Test.git Norebase; cd Norebase; pnpm install
```

## Lighthouse

![image](https://github.com/user-attachments/assets/55eee92c-8389-4426-8110-57d3da0f6352)

## Credits

Hello there! I'm Emmanuel Jemeni, and I work as a Frontend Developer. You can find me on various platforms:

- [LinkedIn](https://www.linkedin.com/in/emmanuel-jemeni)
- [GitHub](https://github.com/Jemeni11)
- [Twitter/X](https://twitter.com/Jemeni11_)

## Vite-Specific Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
