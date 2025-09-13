import permitedCaracters from "./utils/permited-characters.js";

async function handle(options) {
    let caracters = await permitedCaracters(options);
    let password = "";

    const passwordLength = options.passwordLength;
    
    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * caracters.length);
        password += caracters[index];
    }
    return password;
}

export default handle;
