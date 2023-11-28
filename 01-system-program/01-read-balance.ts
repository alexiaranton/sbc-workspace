// @solana/web3.js
import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('H1G6371AJbpNhATkv5jYCHJJMXAoQEWEjm68n86K1Ujq');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main()