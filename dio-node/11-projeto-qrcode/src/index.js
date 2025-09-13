import inquirer from 'inquirer';
import createQRCode from "./services/qr-code/create.js";
import createPassword from './services/password/create.js';
import createWifiQRCode from './services/qr-code/create-wifi.js'; // Placeholder for the new file

async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                { name: 'Gerar um QR Code para um link', value: 'qrcode' },
                { name: 'Gerar QR Code para Wi-Fi', value: 'wifi' },
                { name: 'Criar uma nova senha', value: 'password' },
                { name: 'Sair', value: 'exit' },
            ],
        },
    ]);

    switch (answers.action) {
        case 'qrcode':
            await createQRCode();
            break;
        case 'wifi':
            await createWifiQRCode();
            break;
        case 'password':
            await createPassword();
            break;
        case 'exit':
            console.log('Até mais!');
            break;
    }
}

main();
