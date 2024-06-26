const { ethers } = require('hardhat')
async function main() {
	console.log('Deploying smart contract...')
	const CrowdFunding = await ethers.getContractFactory('CrowdFunding')
	const crowdFunding = await CrowdFunding.deploy()
	await crowdFunding.deployed()
	console.log(`CrowdFunding is deployed in address ${crowdFunding.address}`)
}
main()
	.then(() => process.exit(0))
	.catch(error => {
		console.log(error)
		process.exit(1)
	})
