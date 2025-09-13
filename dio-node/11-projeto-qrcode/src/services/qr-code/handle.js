import qr from 'qrcode-terminal';
import qrCode from 'qrcode';
import chalk from 'chalk';

async function handle (err,result){
    if (err) {
        console.log(chalk.red("Error on aplication:"), err);
        return;
    }
    const isSmall = result.type == 2;
    qr.generate(result.link,{small: isSmall}, (qrcode) => {
        console.log(chalk.green.bold("QR Code gerado com sucesso:
"));
        console.log(qrcode);
    });

    qrCode.toFile('./qrcode.png', result.link, (err) => {
        if (err) throw err;
        console.log(chalk.blue.bold("QR Code salvo com sucesso em qrcode.png"));
    });
}
export default handle;
