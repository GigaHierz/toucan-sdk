export interface IfcNetworkAddresses {
  bct: string;
  nct: string;
  offsetHelper: string;
  swapper: string;
  weth: string;
  toucanContractRegistry: string;
}

export interface IfcAddresses {
  celo: IfcNetworkAddresses;
  alfajores: IfcNetworkAddresses;
  polygon: IfcNetworkAddresses;
  mumbai: IfcNetworkAddresses;
}

const addresses: IfcAddresses = {
  celo: {
    bct: "0x0CcB0071e8B8B716A2a5998aB4d97b83790873Fe",
    nct: "0x02De4766C272abc10Bc88c220D214A26960a7e92",
    offsetHelper: "0x9032d9D5Bc552427a698cDb021E6d1DfbbEd3e30",
    weth: "0x122013fd7dF1C6F636a5bb8f03108E876548b455",
    swapper: "0x7B99c68012F78f9D15BA9EA4121aB3e09914Be70",
    toucanContractRegistry: "0xa30589F50b9641dacCB98AA2B4A8F24739c5B007",
  },
  alfajores: {
    bct: "0x4c5f90C50Ca9F849bb75D93a393A4e1B6E68Accb",
    nct: "0xfb60a08855389F3c0A66b29aB9eFa911ed5cbCB5",
    offsetHelper: "0xAcf9FD890F06e6F200339193a64c0952a164Cb9d",
    weth: "",
    swapper: "0xa12A728656Fbc82dC25515b548b328E63B556572",
    toucanContractRegistry: "0x48E04110aa4691ec3E9493187e6e9A3dB613e6e4",
  },
  polygon: {
    bct: "0x2f800db0fdb5223b3c3f354886d907a671414a7f",
    nct: "0xd838290e877e0188a4a44700463419ed96c16107",
    offsetHelper: "0xbA4fD6aC755E3D4C0d39103b796e35117459dB19",
    swapper: "0x68DF99A11BD292cB91d3Fb07272062eF339d6dc1",
    weth: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    toucanContractRegistry: "0x263fa1c180889b3a3f46330f32a4a23287e99fc9",
  },
  mumbai: {
    bct: "0xf2438a14f668b1bba53408346288f3d7c71c10a1",
    nct: "0x7becba11618ca63ead5605de235f6dd3b25c530e",
    offsetHelper: "0x30dC279166DCFB69F52C91d6A3380dCa75D0fCa7",
    swapper: "0xDd052AcA9AC1492a8b4F1432B68f11989903dE4d",
    weth: "0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa",
    toucanContractRegistry: "0x6739d490670b2710dc7e79bb12e455de33ee1cb6",
  },
};

export default addresses;
