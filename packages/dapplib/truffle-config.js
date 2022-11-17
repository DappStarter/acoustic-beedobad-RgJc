require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remain erosion grace casino sudden seed'; 
let testAccounts = [
"0x5762f2a438754927a6a14dd4519c070562eb9023ec8d4cdf541dde8056b48186",
"0x958c29e10e3f32d80c727b2819752ae6d46b8e4f6e9285988fdaf6c289e7b01b",
"0x6789925dcd1e6fde9c1bf7558e283d79017a52b3b2dbdba2ba512fea6605f845",
"0x3c1c39ad5a5348dd7513b2b85bfeea900b21a44222f88a2a1e9267e48b050db8",
"0xfea009f6ba9e232befac4a49baa342f057b864bdbad06fa2bca80fa3a1f8cdfe",
"0xe408b3858cfd642c50a48773a402a73424f5da4e28e3741577571fd037837d49",
"0x6de4c27686a46825dab2b8da4af55d5b36ae0f0417612bbc085c325bd5c62728",
"0x07ee26ec58a30451d297b98e0d3144866297e5fba58c10f6207f815a91303474",
"0xfee90b3139aab7b763ccff5ac6bfe5c47355e7aa4932cd7f5020cc39d873559d",
"0xbca55137e5c708709e25588a29742cfda7b6350ce68c4ac3e24c130dfc65785d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

