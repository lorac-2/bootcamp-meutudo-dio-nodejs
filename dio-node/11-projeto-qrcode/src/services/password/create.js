import chalk from "chalk";
import prompt from "prompt";

import promptSchemaPassword from "../../prompts-schema/prompt-schema-password.js";
import handle from "./handle.js";

async function createPassword() {
  prompt.start();

  prompt.get(promptSchemaPassword, async (err, result) => {
    if (err) {
      console.log(chalk.red("Ocorreu um erro:"), err);
      return;
    }

    const password = await handle(result);
    console.log(chalk.green.bold("Senha gerada com sucesso:\n senha : " + password));
  });
}

export default createPassword;
