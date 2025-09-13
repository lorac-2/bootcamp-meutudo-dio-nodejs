import prompt from "prompt";
import chalk from "chalk";

import promptSchemaWifi from "../../prompts-schema/prompt-schema-wifi.js";
import handle from "./handle.js";

async function createWifiQRCode() {
  prompt.start();
  prompt.get(promptSchemaWifi, (err, result) => {
    if (err) {
      console.log(chalk.red("Ocorreu um erro:"), err);
      return;
    }

    let encryptionType = "WPA"; // Default
    if (result.encryption === '2') encryptionType = "WEP";
    if (result.encryption === '3') encryptionType = "nopass";

    const wifiString = `WIFI:T:${encryptionType};S:${result.ssid};P:${result.password};;`;

    const handleResult = {
      link: wifiString,
      type: 1, // Normal size QR code
    };

    handle(null, handleResult);
  });
}

export default createWifiQRCode;
