import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslintParser from '@typescript-eslint/parser';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

export default {
  // Asegúrate de que 'src' no esté en la lista de ignorados
  ignores: ['node_modules', 'dist', 'build'],

  // Configuración del parser para TypeScript
  parser: tsEslintParser,
  parserOptions: {
    ecmaVersion: 2020, // Permite el uso de las últimas características de ECMAScript
    sourceType: 'module', // Permite el uso de imports
    ecmaFeatures: {
      jsx: true, // Permite el uso de JSX
    },
  },

  env: {
    browser: true, // Define que el entorno es un navegador
    es2021: true,  // Define que usas ECMAScript 2021
  },

  // Extensiones recomendadas para ESLint
  extends: [
    js.configs.recommended,
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Asegura que Prettier se ejecute al final
    eslintConfigPrettier,
  ],

  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@typescript-eslint': tsEslintPlugin,
  },

  rules: {
    'prettier/prettier': 'error', // Muestra errores de Prettier como errores de ESLint
    '@typescript-eslint/no-unused-vars': 'warn', // Avisa sobre variables no utilizadas
    'react/react-in-jsx-scope': 'off', // No es necesario importar React en proyectos con Vite
    'react-hooks/rules-of-hooks': 'error', // Reglas de hooks de React
    'react-hooks/exhaustive-deps': 'warn', // Advertencias sobre dependencias exhaustivas en hooks
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },

  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
  },

  // Asegúrate de incluir los archivos correctos para el linting
  files: ['src/**/*.{js,jsx,ts,tsx}'],
};
