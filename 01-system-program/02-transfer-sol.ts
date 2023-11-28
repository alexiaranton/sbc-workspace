import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('5erhDEPwj6dpgbWd6uKWEFStmRWiK9LfMRi3XAnJNvJEMCwrbxTz8zbiZTfD3pg5mPh1yGnkkGpgobmL6jdAJhfD')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('H1G6371AJbpNhATkv5jYCHJJMXAoQEWEjm68n86K1Ujq');
    const publicKeyTo = new Web3.PublicKey('TdY8Zb5aaeakchRUi2BuCZLcQAZw4k83tL7USuHuZLV');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();