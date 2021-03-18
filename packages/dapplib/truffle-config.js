require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name rate magic evil good entire metal gauge'; 
let testAccounts = [
"0x02a2ebd8d9b0658afd084a689567550655fb32ccf8f04b1890e09d5e87d31e39",
"0x041ead6d0c561f0d1dcaf38d68a70d7aa6198d3a8e3e0a414f242039003a9812",
"0x6118b7951d9e3d02b7cd8eb3ac2102b38cd2a72fc02e3eb474ca03f7fdb0690a",
"0xdf0c18b4fe61d0251d1afdc9b2274066ba48b5310697717a0287fa02139488dd",
"0x3a21963f13b2620cbcd230873b1292f74d347c7b275da3f85c6122e86c5a2b6b",
"0x7827d5d143db296b4b7db3390a2eb916ce4fb6fd8fd01ae59fdcb891c9bf35a6",
"0x385e8c810b140b66b0f2c22a35a9ec88bbf4ced67cf23fdeaef2cb44003ed7f9",
"0xf3d304372de5f26c2d2be3ad84ebcfe2b5c99f29323eb270980c79ec518545d7",
"0xb6b5b95eeb02bc1503e95bd265c54595074a366f6b63e6037bdfc0689e38b75e",
"0x164ca2aac6eba7d544c29db70d39a33eca4dd0f09faf5333886196aa791d54d1"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
