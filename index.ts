import { PublicKey, isSigner } from '@metaplex-foundation/js'
import * as Web3 from '@solana/web3.js'
import { Signer } from '@solana/web3.js';

//Program ID: BTJCe4JRUEgCAwPMSSz3SMRRGLFNEhM6bhSr2K9u7XP6

const publicKey = new PublicKey("BTJCe4JRUEgCAwPMSSz3SMRRGLFNEhM6bhSr2K9u7XP6");


async function main() {
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publicKey,
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: new PublicKey("BTJCe4JRUEgCAwPMSSz3SMRRGLFNEhM6bhSr2K9u7XP6"),
    });

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const transaction = new Web3.Transaction();
    transaction.add(instruction); // Add the instruction to the transaction
    const signers: Signer[];
    const signature = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        signers,
    );
    console.log('SIGNATURE', signature);
    
} Promise<Web3.TransactionSignature>;

main()
.then(() => process.exit(0))
.catch(err => {
    console.error(err)  
});