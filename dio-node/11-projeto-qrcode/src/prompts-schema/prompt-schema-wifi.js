import chalk from "chalk";

const promptSchemaWifi = [
  {
    name: "ssid",
    description: chalk.yellow("Digite o nome da rede Wi-Fi (SSID)"),
    required: true,
  },
  {
    name: "password",
    description: chalk.yellow("Digite a senha da rede"),
    hidden: true,
  },
  {
    name: "encryption",
    description: chalk.yellow("Escolha o tipo de criptografia (1- WPA/WPA2, 2- WEP, 3- Nenhuma)"),
    pattern: /^[1-3]$/,
    message: chalk.red.italic("Escolha uma opção válida: 1, 2, ou 3"),
    required: true,
  },
];

export default promptSchemaWifi;
