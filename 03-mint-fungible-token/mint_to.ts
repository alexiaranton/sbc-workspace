import {
    Keypair,
    Connection,
    Commitment,
    clusterApiUrl,
    PublicKey,
} from "@solana/web3.js";
import bs58 from "bs58"
import "dotenv/config"
import { mintTo } from "@solana/spl-token";

const start = async () => {
    const COMMITMENT: Commitment = "finalized"
    const CONNECTION = new Connection(clusterApiUrl("devnet"), COMMITMENT)
    const PAYER = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""))
    const MINT_KEY = new PublicKey("8JuXZrJ68QeNCUFiLH52LBpuEfFHgX2VzKXSQUXj66fJ")
    const TOKEN_ACCOUNT_KEY = new PublicKey("4f4cdDnzHfZqA41CAxTYU2G1XSyMevzSshWxXHKkhnAX")
    const temp = await mintTo(CONNECTION, PAYER, MINT_KEY, TOKEN_ACCOUNT_KEY, PAYER.publicKey, 1)
    console.log(temp.toString());
}

start();