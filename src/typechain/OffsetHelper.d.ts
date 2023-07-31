/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface OffsetHelperInterface extends ethers.utils.Interface {
  functions: {
    "addPath(string,address[])": FunctionFragment;
    "addPoolToken(address)": FunctionFragment;
    "autoOffsetExactInETH(address,address)": FunctionFragment;
    "autoOffsetExactInToken(address,address,uint256)": FunctionFragment;
    "autoOffsetExactOutETH(address,address,uint256)": FunctionFragment;
    "autoOffsetExactOutToken(address,address,uint256)": FunctionFragment;
    "autoOffsetPoolToken(address,uint256)": FunctionFragment;
    "autoRedeem(address,uint256)": FunctionFragment;
    "autoRetire(address[],uint256[])": FunctionFragment;
    "balances(address,address)": FunctionFragment;
    "calculateExpectedPoolTokenForETH(address,address,uint256)": FunctionFragment;
    "calculateExpectedPoolTokenForToken(address,address,uint256)": FunctionFragment;
    "calculateNeededETHAmount(address,address,uint256)": FunctionFragment;
    "calculateNeededTokenAmount(address,address,uint256)": FunctionFragment;
    "contractRegistryAddress()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "dexRouterAddress()": FunctionFragment;
    "eligibleSwapPaths(address,uint256)": FunctionFragment;
    "eligibleSwapPathsBySymbol(string,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removePath(string)": FunctionFragment;
    "removePoolToken(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setToucanContractRegistry(address)": FunctionFragment;
    "showEligiblePoolTokens()": FunctionFragment;
    "showEligibleTokens()": FunctionFragment;
    "swapExactInETH(address,address)": FunctionFragment;
    "swapExactInToken(address,address,uint256)": FunctionFragment;
    "swapExactOutETH(address,address,uint256)": FunctionFragment;
    "swapExactOutToken(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addPath",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addPoolToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "autoOffsetExactInETH",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "autoOffsetExactInToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "autoOffsetExactOutETH",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "autoOffsetExactOutToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "autoOffsetPoolToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "autoRedeem",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "autoRetire",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateExpectedPoolTokenForETH",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateExpectedPoolTokenForToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateNeededETHAmount",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateNeededTokenAmount",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contractRegistryAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dexRouterAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "eligibleSwapPaths",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "eligibleSwapPathsBySymbol",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "removePath", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removePoolToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setToucanContractRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "showEligiblePoolTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "showEligibleTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactInETH",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactInToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactOutETH",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactOutToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addPath", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addPoolToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "autoOffsetExactInETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "autoOffsetExactInToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "autoOffsetExactOutETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "autoOffsetExactOutToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "autoOffsetPoolToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "autoRedeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "autoRetire", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateExpectedPoolTokenForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateExpectedPoolTokenForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateNeededETHAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateNeededTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractRegistryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dexRouterAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eligibleSwapPaths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eligibleSwapPathsBySymbol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removePath", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removePoolToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setToucanContractRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "showEligiblePoolTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "showEligibleTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactInETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactInToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactOutETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactOutToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Redeemed(address,address,address[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RedeemedEvent = TypedEvent<
  [string, string, string[], BigNumber[]] & {
    sender: string;
    poolToken: string;
    tco2s: string[];
    amounts: BigNumber[];
  }
>;

export class OffsetHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: OffsetHelperInterface;

  functions: {
    addPath(
      _tokenSymbol: string,
      _path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPoolToken(
      _poolToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    autoOffsetExactInETH(
      _fromToken: string,
      _poolToken: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    autoOffsetExactInToken(
      _fromToken: string,
      _poolToken: string,
      _amountToSwap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    autoOffsetExactOutETH(
      _fromToken: string,
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    autoOffsetExactOutToken(
      _fromToken: string,
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    autoOffsetPoolToken(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    autoRedeem(
      _fromToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    autoRetire(
      _tco2s: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateExpectedPoolTokenForETH(
      _fromToken: string,
      _poolToken: string,
      _fromTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateExpectedPoolTokenForToken(
      _fromToken: string,
      _poolToken: string,
      _fromAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateNeededETHAmount(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateNeededTokenAmount(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    contractRegistryAddress(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dexRouterAddress(overrides?: CallOverrides): Promise<[string]>;

    eligibleSwapPaths(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    eligibleSwapPathsBySymbol(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removePath(
      _tokenSymbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removePoolToken(
      _poolToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setToucanContractRegistry(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    showEligiblePoolTokens(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _poolTokens: string[] }>;

    showEligibleTokens(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _tokens: string[] }>;

    swapExactInETH(
      _fromToken: string,
      _poolToken: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactInToken(
      _fromToken: string,
      _poolToken: string,
      _fromAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactOutETH(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactOutToken(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addPath(
    _tokenSymbol: string,
    _path: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPoolToken(
    _poolToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  autoOffsetExactInETH(
    _fromToken: string,
    _poolToken: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  autoOffsetExactInToken(
    _fromToken: string,
    _poolToken: string,
    _amountToSwap: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  autoOffsetExactOutETH(
    _fromToken: string,
    _poolToken: string,
    _amountToOffset: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  autoOffsetExactOutToken(
    _fromToken: string,
    _poolToken: string,
    _amountToOffset: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  autoOffsetPoolToken(
    _poolToken: string,
    _amountToOffset: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  autoRedeem(
    _fromToken: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  autoRetire(
    _tco2s: string[],
    _amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balances(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateExpectedPoolTokenForETH(
    _fromToken: string,
    _poolToken: string,
    _fromTokenAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateExpectedPoolTokenForToken(
    _fromToken: string,
    _poolToken: string,
    _fromAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateNeededETHAmount(
    _fromToken: string,
    _poolToken: string,
    _toAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateNeededTokenAmount(
    _fromToken: string,
    _poolToken: string,
    _toAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  contractRegistryAddress(overrides?: CallOverrides): Promise<string>;

  deposit(
    _erc20Addr: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dexRouterAddress(overrides?: CallOverrides): Promise<string>;

  eligibleSwapPaths(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  eligibleSwapPathsBySymbol(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  removePath(
    _tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removePoolToken(
    _poolToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setToucanContractRegistry(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  showEligiblePoolTokens(overrides?: CallOverrides): Promise<string[]>;

  showEligibleTokens(overrides?: CallOverrides): Promise<string[]>;

  swapExactInETH(
    _fromToken: string,
    _poolToken: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactInToken(
    _fromToken: string,
    _poolToken: string,
    _fromAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactOutETH(
    _fromToken: string,
    _poolToken: string,
    _toAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactOutToken(
    _fromToken: string,
    _poolToken: string,
    _toAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _erc20Addr: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addPath(
      _tokenSymbol: string,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addPoolToken(_poolToken: string, overrides?: CallOverrides): Promise<void>;

    autoOffsetExactInETH(
      _fromToken: string,
      _poolToken: string,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tco2s: string[]; amounts: BigNumber[] }
    >;

    autoOffsetExactInToken(
      _fromToken: string,
      _poolToken: string,
      _amountToSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tco2s: string[]; amounts: BigNumber[] }
    >;

    autoOffsetExactOutETH(
      _fromToken: string,
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tco2s: string[]; amounts: BigNumber[] }
    >;

    autoOffsetExactOutToken(
      _fromToken: string,
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tco2s: string[]; amounts: BigNumber[] }
    >;

    autoOffsetPoolToken(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tco2s: string[]; amounts: BigNumber[] }
    >;

    autoRedeem(
      _fromToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tco2s: string[]; amounts: BigNumber[] }
    >;

    autoRetire(
      _tco2s: string[],
      _amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    balances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateExpectedPoolTokenForETH(
      _fromToken: string,
      _poolToken: string,
      _fromTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateExpectedPoolTokenForToken(
      _fromToken: string,
      _poolToken: string,
      _fromAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateNeededETHAmount(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateNeededTokenAmount(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractRegistryAddress(overrides?: CallOverrides): Promise<string>;

    deposit(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    dexRouterAddress(overrides?: CallOverrides): Promise<string>;

    eligibleSwapPaths(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    eligibleSwapPathsBySymbol(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    removePath(_tokenSymbol: string, overrides?: CallOverrides): Promise<void>;

    removePoolToken(
      _poolToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setToucanContractRegistry(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    showEligiblePoolTokens(overrides?: CallOverrides): Promise<string[]>;

    showEligibleTokens(overrides?: CallOverrides): Promise<string[]>;

    swapExactInETH(
      _fromToken: string,
      _poolToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactInToken(
      _fromToken: string,
      _poolToken: string,
      _fromAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactOutETH(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactOutToken(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Redeemed(address,address,address[],uint256[])"(
      sender?: null,
      poolToken?: null,
      tco2s?: null,
      amounts?: null
    ): TypedEventFilter<
      [string, string, string[], BigNumber[]],
      {
        sender: string;
        poolToken: string;
        tco2s: string[];
        amounts: BigNumber[];
      }
    >;

    Redeemed(
      sender?: null,
      poolToken?: null,
      tco2s?: null,
      amounts?: null
    ): TypedEventFilter<
      [string, string, string[], BigNumber[]],
      {
        sender: string;
        poolToken: string;
        tco2s: string[];
        amounts: BigNumber[];
      }
    >;
  };

  estimateGas: {
    addPath(
      _tokenSymbol: string,
      _path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPoolToken(
      _poolToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    autoOffsetExactInETH(
      _fromToken: string,
      _poolToken: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    autoOffsetExactInToken(
      _fromToken: string,
      _poolToken: string,
      _amountToSwap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    autoOffsetExactOutETH(
      _fromToken: string,
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    autoOffsetExactOutToken(
      _fromToken: string,
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    autoOffsetPoolToken(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    autoRedeem(
      _fromToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    autoRetire(
      _tco2s: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateExpectedPoolTokenForETH(
      _fromToken: string,
      _poolToken: string,
      _fromTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateExpectedPoolTokenForToken(
      _fromToken: string,
      _poolToken: string,
      _fromAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateNeededETHAmount(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateNeededTokenAmount(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractRegistryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dexRouterAddress(overrides?: CallOverrides): Promise<BigNumber>;

    eligibleSwapPaths(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eligibleSwapPathsBySymbol(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removePath(
      _tokenSymbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removePoolToken(
      _poolToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setToucanContractRegistry(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    showEligiblePoolTokens(overrides?: CallOverrides): Promise<BigNumber>;

    showEligibleTokens(overrides?: CallOverrides): Promise<BigNumber>;

    swapExactInETH(
      _fromToken: string,
      _poolToken: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactInToken(
      _fromToken: string,
      _poolToken: string,
      _fromAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactOutETH(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactOutToken(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPath(
      _tokenSymbol: string,
      _path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPoolToken(
      _poolToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    autoOffsetExactInETH(
      _fromToken: string,
      _poolToken: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    autoOffsetExactInToken(
      _fromToken: string,
      _poolToken: string,
      _amountToSwap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    autoOffsetExactOutETH(
      _fromToken: string,
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    autoOffsetExactOutToken(
      _fromToken: string,
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    autoOffsetPoolToken(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    autoRedeem(
      _fromToken: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    autoRetire(
      _tco2s: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateExpectedPoolTokenForETH(
      _fromToken: string,
      _poolToken: string,
      _fromTokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateExpectedPoolTokenForToken(
      _fromToken: string,
      _poolToken: string,
      _fromAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateNeededETHAmount(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateNeededTokenAmount(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractRegistryAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dexRouterAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eligibleSwapPaths(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eligibleSwapPathsBySymbol(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removePath(
      _tokenSymbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removePoolToken(
      _poolToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setToucanContractRegistry(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    showEligiblePoolTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    showEligibleTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapExactInETH(
      _fromToken: string,
      _poolToken: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactInToken(
      _fromToken: string,
      _poolToken: string,
      _fromAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactOutETH(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactOutToken(
      _fromToken: string,
      _poolToken: string,
      _toAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
