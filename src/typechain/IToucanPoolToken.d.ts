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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IToucanPoolTokenInterface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "calculateRedeemFees(address[],uint256[])": FunctionFragment;
    "checkAttributeMatching(address)": FunctionFragment;
    "checkEligible(address)": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "getRemaining()": FunctionFragment;
    "getScoredTCO2s()": FunctionFragment;
    "redeemAuto(uint256)": FunctionFragment;
    "redeemAuto2(uint256)": FunctionFragment;
    "redeemMany(address[],uint256[])": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calculateRedeemFees",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "checkAttributeMatching",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkEligible",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemaining",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getScoredTCO2s",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAuto",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAuto2",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemMany",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateRedeemFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkAttributeMatching",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkEligible",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRemaining",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getScoredTCO2s",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeemAuto", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemAuto2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeemMany", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string;
    spender: string;
    value: BigNumber;
  }
>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; value: BigNumber }
>;

export class IToucanPoolToken extends BaseContract {
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

  interface: IToucanPoolTokenInterface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateRedeemFees(
      tco2s: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    checkAttributeMatching(
      erc20Addr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    checkEligible(
      erc20Addr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    deposit(
      erc20Addr: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRemaining(overrides?: CallOverrides): Promise<[BigNumber]>;

    getScoredTCO2s(overrides?: CallOverrides): Promise<[string[]]>;

    redeemAuto(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemAuto2(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemMany(
      tco2s: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  calculateRedeemFees(
    tco2s: string[],
    amounts: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  checkAttributeMatching(
    erc20Addr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  checkEligible(erc20Addr: string, overrides?: CallOverrides): Promise<boolean>;

  deposit(
    erc20Addr: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRemaining(overrides?: CallOverrides): Promise<BigNumber>;

  getScoredTCO2s(overrides?: CallOverrides): Promise<string[]>;

  redeemAuto(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemAuto2(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemMany(
    tco2s: string[],
    amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculateRedeemFees(
      tco2s: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkAttributeMatching(
      erc20Addr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    checkEligible(
      erc20Addr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deposit(
      erc20Addr: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRemaining(overrides?: CallOverrides): Promise<BigNumber>;

    getScoredTCO2s(overrides?: CallOverrides): Promise<string[]>;

    redeemAuto(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tco2s: string[]; amounts: BigNumber[] }
    >;

    redeemAuto2(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tco2s: string[]; amounts: BigNumber[] }
    >;

    redeemMany(
      tco2s: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculateRedeemFees(
      tco2s: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkAttributeMatching(
      erc20Addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkEligible(
      erc20Addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      erc20Addr: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRemaining(overrides?: CallOverrides): Promise<BigNumber>;

    getScoredTCO2s(overrides?: CallOverrides): Promise<BigNumber>;

    redeemAuto(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemAuto2(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemMany(
      tco2s: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateRedeemFees(
      tco2s: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkAttributeMatching(
      erc20Addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkEligible(
      erc20Addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      erc20Addr: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRemaining(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getScoredTCO2s(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemAuto(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemAuto2(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemMany(
      tco2s: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
