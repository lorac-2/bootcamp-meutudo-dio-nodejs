import chalk from"chalk";

const PromptSchemaQRCode=[
    {name: "link",
    description: chalk.yellow.bold("Digite o link que deseja transformar em QR Code"),
    },
    { 
        name:"type",
        description: chalk.yellow.bold("Escolha entre o tipo de QRCODE (1-NORMAL ou (2-TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true, 
    },
       
];

export default PromptSchemaQRCode;