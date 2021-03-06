import * as CryptoJS from 'crypto-js'

class Block {
	public index: number
	public hash: string
	public previousHash: string
	public data: string
	public timestamp: number

	static calculateBlcokHash = (
		index: number,
		previousHash: string,
		timestamp: number,
		data: string
	): string =>
		CryptoJS.SHA256(index + previousHash + timestamp + data).toString()

	static validateStructure = (aBlock: Block): boolean =>
		typeof aBlock.index === 'number' &&
		typeof aBlock.hash === 'string' &&
		typeof aBlock.previousHash === 'string' &&
		typeof aBlock.timestamp === 'number' &&
		typeof aBlock.data === 'string'

	constructor(
		index: number,
		hash: string,
		previousHash: string,
		data: string,
		timestamp: number
	) {
		this.index = index
		this.hash = hash
		this.previousHash = previousHash
		this.data = data
		this.index = index
		this, (timestamp = timestamp)
	}
}

const genesisBlock: Block = new Block(0, '2020202020202', '', 'Hello', 123456)

let blockchain: [Block] = [genesisBlock]

const getBlockChain = (): Block[] => blockchain

const getLatestBlock = (): Block => blockchain[blockchain.length - 1]

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000)

const createNewBlock = (data: string): Block => {
	const previousBlock: Block = getLatestBlock()
	const newIndex: number = previousBlock.index + 1
	const newTimeStamp: number = getNewTimeStamp()
	const newHash: string = Block.calculateBlcokHash(
		newIndex,
		previousBlock.hash,
		newTimeStamp,
		data
	)

	const newBlock: Block = new Block(
		newIndex,
		newHash,
		previousBlock.hash,
		data,
		newTimeStamp
	)
	adddBlock(newBlock)
	return newBlock
}

const getHashForBlock = (aBlock: Block): string =>
	Block.calculateBlcokHash(
		aBlock.index,
		aBlock.previousHash,
		aBlock.timestamp,
		aBlock.data
	)
const isBlockValid = (candidatrBlock: Block, previousBlock: Block): boolean => {
	if (Block.validateStructure(candidatrBlock)) {
		return false
	} else if (previousBlock.index + 1 !== candidatrBlock.index) {
		return false
	} else if (previousBlock.hash !== candidatrBlock.previousHash) {
		return false
	} else if (getHashForBlock(candidatrBlock) !== candidatrBlock.hash) {
		return false
	} else {
		return false
	}
}

const adddBlock = (candidateBlock: Block): void => {
	if (isBlockValid(candidateBlock, getLatestBlock())) {
		blockchain.push(candidateBlock)
	}
}

createNewBlock('sec block')
createNewBlock('fourth block')
createNewBlock('third block')

console.log(blockchain)
export {}
