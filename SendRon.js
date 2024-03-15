// npm install ethers@5.7.2
const { ethers } = require("ethers");

// Conectar ao provedor da Rede Ronin
const provider = new ethers.providers.JsonRpcProvider('https://api.roninchain.com/rpc');

// Substitua pelo método apropriado de segurança para suas chaves privadas
const privateKey = '';
const wallet = new ethers.Wallet(privateKey, provider);

// Lista de endereços das carteiras destinatárias
const addresses = [
  '',
  ''
  // Adicione mais endereços conforme necessário
];

// Função para enviar tokens
async function sendTokens() {
  const transactionAmount = ethers.utils.parseUnits('0.02', 'ether'); // 0.2 RON, ajuste conforme a unidade correta

  for (const address of addresses) {
    const tx = {
      to: address,
      value: transactionAmount
    };

    try {
      const txResponse = await wallet.sendTransaction(tx);
      console.log(`Transação enviada! Hash: ${txResponse.hash}`);
      // Aguarde a confirmação aqui, se necessário
    } catch (error) {
      console.error(`Erro ao enviar para ${address}: ${error}`);
    }
  }
}

sendTokens();
