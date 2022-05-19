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
    "autoOffsetUsingETH(address,uint256)": FunctionFragment;
    "autoOffsetUsingPoolToken(address,uint256)": FunctionFragment;
    "autoOffsetUsingToken(address,address,uint256)": FunctionFragment;
    "autoRedeem(address,uint256)": FunctionFragment;
    "autoRetire(address[],uint256[])": FunctionFragment;
    "balances(address,address)": FunctionFragment;
    "calculateNeededETHAmount(address,uint256)": FunctionFragment;
    "calculateNeededTokenAmount(address,address,uint256)": FunctionFragment;
    "contractRegistryAddress()": FunctionFragment;
    "deleteEligibleTokenAddress(string)": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "eligibleTokenAddresses(string)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setEligibleTokenAddress(string,address)": FunctionFragment;
    "setToucanContractRegistry(address)": FunctionFragment;
    "sushiRouterAddress()": FunctionFragment;
    "swap(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "autoOffsetUsingETH",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "autoOffsetUsingPoolToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "autoOffsetUsingToken",
    values: [string, string, BigNumberish]
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
    functionFragment: "calculateNeededETHAmount",
    values: [string, BigNumberish]
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
    functionFragment: "deleteEligibleTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "eligibleTokenAddresses",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setEligibleTokenAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setToucanContractRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "sushiRouterAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "autoOffsetUsingETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "autoOffsetUsingPoolToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "autoOffsetUsingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "autoRedeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "autoRetire", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
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
  decodeFunctionResult(
    functionFragment: "deleteEligibleTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eligibleTokenAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEligibleTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setToucanContractRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sushiRouterAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
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
    who: string;
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
    autoOffsetUsingETH(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    autoOffsetUsingPoolToken(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    autoOffsetUsingToken(
      _depositedToken: string,
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

    calculateNeededETHAmount(
      _toToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateNeededTokenAmount(
      _fromToken: string,
      _toToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    contractRegistryAddress(overrides?: CallOverrides): Promise<[string]>;

    deleteEligibleTokenAddress(
      _tokenSymbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    eligibleTokenAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEligibleTokenAddress(
      _tokenSymbol: string,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setToucanContractRegistry(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sushiRouterAddress(overrides?: CallOverrides): Promise<[string]>;

    "swap(address,uint256)"(
      _toToken: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "swap(address,address,uint256)"(
      _fromToken: string,
      _toToken: string,
      _amount: BigNumberish,
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

  autoOffsetUsingETH(
    _poolToken: string,
    _amountToOffset: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  autoOffsetUsingPoolToken(
    _poolToken: string,
    _amountToOffset: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  autoOffsetUsingToken(
    _depositedToken: string,
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

  calculateNeededETHAmount(
    _toToken: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateNeededTokenAmount(
    _fromToken: string,
    _toToken: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  contractRegistryAddress(overrides?: CallOverrides): Promise<string>;

  deleteEligibleTokenAddress(
    _tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _erc20Addr: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  eligibleTokenAddresses(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEligibleTokenAddress(
    _tokenSymbol: string,
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setToucanContractRegistry(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sushiRouterAddress(overrides?: CallOverrides): Promise<string>;

  "swap(address,uint256)"(
    _toToken: string,
    _amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "swap(address,address,uint256)"(
    _fromToken: string,
    _toToken: string,
    _amount: BigNumberish,
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
    autoOffsetUsingETH(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tco2s: string[]; amounts: BigNumber[] }
    >;

    autoOffsetUsingPoolToken(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tco2s: string[]; amounts: BigNumber[] }
    >;

    autoOffsetUsingToken(
      _depositedToken: string,
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

    calculateNeededETHAmount(
      _toToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateNeededTokenAmount(
      _fromToken: string,
      _toToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractRegistryAddress(overrides?: CallOverrides): Promise<string>;

    deleteEligibleTokenAddress(
      _tokenSymbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    eligibleTokenAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setEligibleTokenAddress(
      _tokenSymbol: string,
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setToucanContractRegistry(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sushiRouterAddress(overrides?: CallOverrides): Promise<string>;

    "swap(address,uint256)"(
      _toToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swap(address,address,uint256)"(
      _fromToken: string,
      _toToken: string,
      _amount: BigNumberish,
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
      who?: null,
      poolToken?: null,
      tco2s?: null,
      amounts?: null
    ): TypedEventFilter<
      [string, string, string[], BigNumber[]],
      { who: string; poolToken: string; tco2s: string[]; amounts: BigNumber[] }
    >;

    Redeemed(
      who?: null,
      poolToken?: null,
      tco2s?: null,
      amounts?: null
    ): TypedEventFilter<
      [string, string, string[], BigNumber[]],
      { who: string; poolToken: string; tco2s: string[]; amounts: BigNumber[] }
    >;
  };

  estimateGas: {
    autoOffsetUsingETH(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    autoOffsetUsingPoolToken(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    autoOffsetUsingToken(
      _depositedToken: string,
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

    calculateNeededETHAmount(
      _toToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateNeededTokenAmount(
      _fromToken: string,
      _toToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractRegistryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    deleteEligibleTokenAddress(
      _tokenSymbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    eligibleTokenAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEligibleTokenAddress(
      _tokenSymbol: string,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setToucanContractRegistry(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sushiRouterAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "swap(address,uint256)"(
      _toToken: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "swap(address,address,uint256)"(
      _fromToken: string,
      _toToken: string,
      _amount: BigNumberish,
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
    autoOffsetUsingETH(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    autoOffsetUsingPoolToken(
      _poolToken: string,
      _amountToOffset: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    autoOffsetUsingToken(
      _depositedToken: string,
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

    calculateNeededETHAmount(
      _toToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateNeededTokenAmount(
      _fromToken: string,
      _toToken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractRegistryAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deleteEligibleTokenAddress(
      _tokenSymbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _erc20Addr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    eligibleTokenAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEligibleTokenAddress(
      _tokenSymbol: string,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setToucanContractRegistry(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sushiRouterAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "swap(address,uint256)"(
      _toToken: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "swap(address,address,uint256)"(
      _fromToken: string,
      _toToken: string,
      _amount: BigNumberish,
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
