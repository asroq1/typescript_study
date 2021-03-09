"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.index = index;
        this, (timestamp = timestamp);
    }
}
Block.calculateBlcokHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === 'number' &&
    typeof aBlock.hash === 'string' &&
    typeof aBlock.previousHash === 'string' &&
    typeof aBlock.timestamp === 'number' &&
    typeof aBlock.data === 'string';
const genesisBlock = new Block(0, '2020202020202', '', 'Hello', 123456);
let blockchain = [genesisBlock];
const getBlockChain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimeStamp = getNewTimeStamp();
    const newHash = Block.calculateBlcokHash(newIndex, previousBlock.hash, newTimeStamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
    adddBlock(newBlock);
    return newBlock;
};
const getHashForBlock = (aBlock) => Block.calculateBlcokHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
const isBlockValid = (candidatrBlock, previousBlock) => {
    if (Block.validateStructure(candidatrBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidatrBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidatrBlock.previousHash) {
        return false;
    }
    else if (getHashForBlock(candidatrBlock) !== candidatrBlock.hash) {
        return false;
    }
    else {
        return false;
    }
};
const adddBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
createNewBlock('sec block');
createNewBlock('fourth block');
createNewBlock('third block');
console.log(blockchain);
//# sourceMappingURL=index.js.map