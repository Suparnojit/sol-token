import { ThirdwebSDK } from '@thirdweb-dev/sdk/solana';
import { config } from 'dotenv';
config();

const sdk= ThirdwebSDK.fromPrivateKey("devnet",process.env.PRIVATE_KEY);

const metadata={
    symbol:"SS",
    description:"Solana Token created by Suparnojit",
    name:"SPRNJT",
    initialSupply:500
};

const address=await sdk.deployer.createToken(metadata);

console.log('Address:',address);
console.log('Contract deployed successfully!');

const token=await sdk.getToken(address);
const supply=await token.totalSupply();

console.log('Supply:',supply);
