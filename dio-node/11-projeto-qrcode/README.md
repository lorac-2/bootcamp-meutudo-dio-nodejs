# Kit de Ferramentas para E-commerce

Este projeto é uma ferramenta de linha de comando (CLI) desenvolvida em Node.js, que oferece um conjunto de utilitários práticos, como a geração de QR Codes e senhas seguras.

## ✨ Funcionalidades

O projeto conta com um menu interativo que permite ao usuário escolher entre as seguintes funcionalidades:

- **Gerador de QR Code para Links:**
  - Cria um QR Code a partir de qualquer link ou texto.
  - Exibe o QR Code diretamente no terminal.
  - Salva o QR Code como um arquivo de imagem (`qrcode.png`) na raiz do projeto.

- **Gerador de QR Code para Wi-Fi:**
  - Facilita a conexão a redes Wi-Fi.
  - Solicita o nome da rede (SSID), a senha e o tipo de criptografia.
  - Gera um QR Code que, ao ser escaneado, conecta o dispositivo à rede Wi-Fi informada.

- **Gerador de Senhas Seguras:**
  - Cria senhas aleatórias e personalizadas.
  - Permite ao usuário definir o comprimento da senha.
  - Permite escolher se a senha deve incluir números e/ou caracteres especiais.

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Inquirer](https://www.npmjs.com/package/inquirer) - Para a criação do menu interativo.
- [QR Code](https://www.npmjs.com/package/qrcode) - Para salvar os QR Codes como arquivos de imagem.
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) - Para exibir os QR Codes no terminal.
- [Prompt](https://www.npmjs.com/package/prompt) - Para capturar as entradas do usuário.
- [Chalk](https://www.npmjs.com/package/chalk) - Para estilizar as saídas no terminal com cores.

## 🚀 Como Usar

### Pré-requisitos

- É necessário ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) instalado em sua máquina.

### Instalação

1. Clone este repositório ou baixe os arquivos do projeto.
2. Abra o terminal na pasta raiz do projeto.
3. Instale as dependências com o comando:
   ```bash
   npm install
   ```

### Execução

1. Após a instalação, execute o programa com o seguinte comando:
   ```bash
   npm start
   ```
2. Um menu interativo aparecerá. Use as setas para navegar e a tecla Enter para selecionar a opção desejada.
