import chalk from "chalk";

const promptSchemaPassword = [
  {
    name: "passwordLength",
    description: chalk.yellow("Digite o tamanho da senha"),
    pattern: /^[0-9]+$/,
    message: chalk.red.italic("Por favor, digite apenas números"),
    required: true,
  },
  {
    name: "numbers",
    description: chalk.yellow("Deseja incluir números? (s/n)"),
    pattern: /^[sSnN]+$/,
    message: chalk.red.italic("Por favor, responda apenas com 's' ou 'n'"),
    required: true,
  },
  {
    name: "specialCharacters",
    description: chalk.yellow("Deseja incluir caracteres especiais? (s/n)"),
    pattern: /^[sSnN]+$/,
    message: chalk.red.italic("Por favor, responda apenas com 's' ou 'n'"),
    required: true,
  },
];

export default promptSchemaPassword;
