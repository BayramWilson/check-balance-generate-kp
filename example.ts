// just connection to the devnet cluster
/* import { Connection, clusterApiUrl } from "@solana/web3.js";
 
const connection = new Connection(clusterApiUrl("devnet"));
console.log(`✅ Connected!`); */

import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
 
const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;
 
console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
console.log(`✅ Finished!`);

// show with sol as balance