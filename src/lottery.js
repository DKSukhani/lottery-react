import web3 from "./web3";
import ContractAddress from './keySecrets';
import ContractABI from './keySecrets';


export default new web3.eth.Contract(ContractABI, ContractAddress);
