import web3 from "./web3";
import { ABI, Address } from './keySecrets';



export default new web3.eth.Contract(ABI, Address);
