import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Any scalar. DO NOT USE except in extremely rare cases where it is unavoidable to do so */
  Any: any;
  /** DateTime scalar */
  DateTime: any;
  /** JSON scalar */
  Json: any;
  /** Long type */
  Long: any;
};




























export type AccessToken = {
  __typename?: 'AccessToken';
  hypi?: Maybe<Hypi>;
  sessionToken?: Maybe<Scalars['String']>;
  sessionExpires?: Maybe<Scalars['Long']>;
  errorCode?: Maybe<Scalars['String']>;
  errorMsg?: Maybe<Scalars['String']>;
};

export type AccessTokenAggs = {
  __typename?: 'AccessTokenAggs';
  sessionToken?: Maybe<AggOtherScalar>;
  sessionExpires?: Maybe<AggOtherScalar>;
  errorCode?: Maybe<AggOtherScalar>;
  errorMsg?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by AccessToken */
export enum AccessTokenFields {
  Hypi = 'hypi',
  SessionToken = 'sessionToken',
  SessionExpires = 'sessionExpires',
  ErrorCode = 'errorCode',
  ErrorMsg = 'errorMsg',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type AccessTokenGroupByOptions = {
  /** The field by which to to group the matching data */
  field: AccessTokenScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type AccessTokenInput = {
  hypi?: Maybe<HypiInput>;
  sessionToken?: Maybe<Scalars['String']>;
  sessionExpires?: Maybe<Scalars['Long']>;
  errorCode?: Maybe<Scalars['String']>;
  errorMsg?: Maybe<Scalars['String']>;
};

export type AccessTokenInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  sessionToken?: Maybe<Scalars['String']>;
  sessionExpires?: Maybe<Scalars['Long']>;
  errorCode?: Maybe<Scalars['String']>;
  errorMsg?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by AccessToken */
export enum AccessTokenScalarFields {
  SessionToken = 'sessionToken',
  SessionExpires = 'sessionExpires',
  ErrorCode = 'errorCode',
  ErrorMsg = 'errorMsg',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Account = {
  __typename?: 'Account';
  hypi?: Maybe<Hypi>;
  verified?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  username: Scalars['String'];
  password: Password;
  owner?: Maybe<Person>;
  emails?: Maybe<Array<Email>>;
  phones?: Maybe<Array<Phone>>;
  groups?: Maybe<Array<Group>>;
  roles?: Maybe<Array<Role>>;
  attempts?: Maybe<Array<LoginAttempt>>;
  remoteLogins?: Maybe<Array<RemoteLogin>>;
};


export type AccountEmailsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type AccountPhonesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type AccountGroupsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type AccountRolesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type AccountAttemptsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type AccountRemoteLoginsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type AccountAggs = {
  __typename?: 'AccountAggs';
  verified?: Maybe<AggOtherScalar>;
  enabled?: Maybe<AggOtherScalar>;
  username?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Account */
export enum AccountFields {
  Hypi = 'hypi',
  Verified = 'verified',
  Enabled = 'enabled',
  Username = 'username',
  Password = 'password',
  Owner = 'owner',
  Emails = 'emails',
  Phones = 'phones',
  Groups = 'groups',
  Roles = 'roles',
  Attempts = 'attempts',
  RemoteLogins = 'remoteLogins',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type AccountGroupByOptions = {
  /** The field by which to to group the matching data */
  field: AccountScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type AccountInput = {
  hypi?: Maybe<HypiInput>;
  emails?: Maybe<Array<EmailInput>>;
  verified?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  phones?: Maybe<Array<PhoneInput>>;
  username: Scalars['String'];
  password: PasswordInput;
  owner?: Maybe<PersonInput>;
  groups?: Maybe<Array<GroupInput>>;
  roles?: Maybe<Array<RoleInput>>;
  attempts?: Maybe<Array<LoginAttemptInput>>;
  remoteLogins?: Maybe<Array<RemoteLoginInput>>;
};

export type AccountInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  emails?: Maybe<Array<Maybe<EmailInputOpt>>>;
  verified?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  phones?: Maybe<Array<Maybe<PhoneInputOpt>>>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordInputOpt>;
  owner?: Maybe<PersonInputOpt>;
  groups?: Maybe<Array<Maybe<GroupInputOpt>>>;
  roles?: Maybe<Array<Maybe<RoleInputOpt>>>;
  attempts?: Maybe<Array<Maybe<LoginAttemptInputOpt>>>;
  remoteLogins?: Maybe<Array<Maybe<RemoteLoginInputOpt>>>;
};

export type AccountPolicy = Policy & {
  __typename?: 'AccountPolicy';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  /** Positive` or `Negative */
  logic?: Maybe<AuthLogic>;
  accounts?: Maybe<Array<Account>>;
};


export type AccountPolicyAccountsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type AccountPolicyAggs = {
  __typename?: 'AccountPolicyAggs';
  name?: Maybe<AggOtherScalar>;
  logic?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by AccountPolicy */
export enum AccountPolicyFields {
  Hypi = 'hypi',
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  Accounts = 'accounts',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type AccountPolicyGroupByOptions = {
  /** The field by which to to group the matching data */
  field: AccountPolicyScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type AccountPolicyInput = {
  hypi?: Maybe<HypiInput>;
  accounts?: Maybe<Array<AccountInput>>;
  name: Scalars['String'];
  logic?: Maybe<AuthLogic>;
};

export type AccountPolicyInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  accounts?: Maybe<Array<Maybe<AccountInputOpt>>>;
  name?: Maybe<Scalars['String']>;
  logic?: Maybe<AuthLogic>;
};

/** Scalar fields defined by AccountPolicy */
export enum AccountPolicyScalarFields {
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Scalar fields defined by Account */
export enum AccountScalarFields {
  Verified = 'verified',
  Enabled = 'enabled',
  Username = 'username',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Address = {
  __typename?: 'Address';
  hypi?: Maybe<Hypi>;
  door?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  postCode?: Maybe<Scalars['String']>;
  /**   country: Country */
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

export type AddressAggs = {
  __typename?: 'AddressAggs';
  door?: Maybe<AggOtherScalar>;
  street?: Maybe<AggOtherScalar>;
  town?: Maybe<AggOtherScalar>;
  county?: Maybe<AggOtherScalar>;
  city?: Maybe<AggOtherScalar>;
  postCode?: Maybe<AggOtherScalar>;
  from?: Maybe<AggOtherScalar>;
  to?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Address */
export enum AddressFields {
  Hypi = 'hypi',
  Door = 'door',
  Street = 'street',
  Town = 'town',
  County = 'county',
  City = 'city',
  Country = 'country',
  PostCode = 'postCode',
  /**   country: Country */
  From = 'from',
  To = 'to',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type AddressGroupByOptions = {
  /** The field by which to to group the matching data */
  field: AddressScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type AddressInput = {
  hypi?: Maybe<HypiInput>;
  door?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<CountryInput>;
  postCode?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

export type AddressInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  door?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<CountryInputOpt>;
  postCode?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

/** Scalar fields defined by Address */
export enum AddressScalarFields {
  Door = 'door',
  Street = 'street',
  Town = 'town',
  County = 'county',
  City = 'city',
  PostCode = 'postCode',
  /**   country: Country */
  From = 'from',
  To = 'to',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type AggFloat = {
  __typename?: 'AggFloat';
  hypi?: Maybe<Hypi>;
  /** The value of the aggregated field for each group */
  groupValues?: Maybe<Array<Maybe<Pair>>>;
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};


export type AggFloatAvgArgs = {
  distinct?: Maybe<Scalars['Boolean']>;
};


export type AggFloatCountArgs = {
  distinct?: Maybe<Scalars['Boolean']>;
};


export type AggFloatSumArgs = {
  distinct?: Maybe<Scalars['Boolean']>;
};

/** All fields defined by AggFloat */
export enum AggFloatFields {
  Hypi = 'hypi',
  /** The value of the aggregated field for each group */
  GroupValues = 'groupValues',
  Avg = 'avg',
  Count = 'count',
  Max = 'max',
  Min = 'min',
  Sum = 'sum',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /** The value of the aggregated field for each group */
  GroupValuesHypi = 'groupValues_hypi',
  /** The value of the aggregated field for each group */
  GroupValuesKey = 'groupValues_key',
  /** The value of the aggregated field for each group */
  GroupValuesValue = 'groupValues_value'
}

/** Scalar fields defined by AggFloat */
export enum AggFloatScalarFields {
  Avg = 'avg',
  Count = 'count',
  Max = 'max',
  Min = 'min',
  Sum = 'sum',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /** The value of the aggregated field for each group */
  GroupValuesKey = 'groupValues_key',
  /** The value of the aggregated field for each group */
  GroupValuesValue = 'groupValues_value'
}

export type AggInt = {
  __typename?: 'AggInt';
  hypi?: Maybe<Hypi>;
  /** The value of the aggregated field for each group */
  groupValues?: Maybe<Array<Maybe<Pair>>>;
  avg?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Int']>;
};


export type AggIntAvgArgs = {
  distinct?: Maybe<Scalars['Boolean']>;
};


export type AggIntCountArgs = {
  distinct?: Maybe<Scalars['Boolean']>;
};


export type AggIntSumArgs = {
  distinct?: Maybe<Scalars['Boolean']>;
};

/** All fields defined by AggInt */
export enum AggIntFields {
  Hypi = 'hypi',
  /** The value of the aggregated field for each group */
  GroupValues = 'groupValues',
  Avg = 'avg',
  Count = 'count',
  Max = 'max',
  Min = 'min',
  Sum = 'sum',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /** The value of the aggregated field for each group */
  GroupValuesHypi = 'groupValues_hypi',
  /** The value of the aggregated field for each group */
  GroupValuesKey = 'groupValues_key',
  /** The value of the aggregated field for each group */
  GroupValuesValue = 'groupValues_value'
}

/** Scalar fields defined by AggInt */
export enum AggIntScalarFields {
  Avg = 'avg',
  Count = 'count',
  Max = 'max',
  Min = 'min',
  Sum = 'sum',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /** The value of the aggregated field for each group */
  GroupValuesKey = 'groupValues_key',
  /** The value of the aggregated field for each group */
  GroupValuesValue = 'groupValues_value'
}

export enum AggOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type AggOtherScalar = {
  __typename?: 'AggOtherScalar';
  hypi?: Maybe<Hypi>;
  /** The value of the aggregated field for each group */
  groupValues?: Maybe<Array<Maybe<Pair>>>;
  count?: Maybe<Scalars['Int']>;
};


export type AggOtherScalarCountArgs = {
  distinct?: Maybe<Scalars['Boolean']>;
};

/** All fields defined by AggOtherScalar */
export enum AggOtherScalarFields {
  Hypi = 'hypi',
  /** The value of the aggregated field for each group */
  GroupValues = 'groupValues',
  Count = 'count',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /** The value of the aggregated field for each group */
  GroupValuesHypi = 'groupValues_hypi',
  /** The value of the aggregated field for each group */
  GroupValuesKey = 'groupValues_key',
  /** The value of the aggregated field for each group */
  GroupValuesValue = 'groupValues_value'
}

/** Scalar fields defined by AggOtherScalar */
export enum AggOtherScalarScalarFields {
  Count = 'count',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /** The value of the aggregated field for each group */
  GroupValuesKey = 'groupValues_key',
  /** The value of the aggregated field for each group */
  GroupValuesValue = 'groupValues_value'
}

export type AggregatedPolicy = Policy & {
  __typename?: 'AggregatedPolicy';
  hypi?: Maybe<Hypi>;
  /** defines how the policy arrives at a decision, the options are: */
  decisionStrategy?: Maybe<DecisionStrategy>;
  name: Scalars['String'];
  /** Positive` or `Negative */
  logic?: Maybe<AuthLogic>;
  policies: Array<Policy>;
};


export type AggregatedPolicyPoliciesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type AggregatedPolicyAggs = {
  __typename?: 'AggregatedPolicyAggs';
  decisionStrategy?: Maybe<AggOtherScalar>;
  name?: Maybe<AggOtherScalar>;
  logic?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by AggregatedPolicy */
export enum AggregatedPolicyFields {
  Hypi = 'hypi',
  /** defines how the policy arrives at a decision, the options are: */
  DecisionStrategy = 'decisionStrategy',
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  Policies = 'policies',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type AggregatedPolicyGroupByOptions = {
  /** The field by which to to group the matching data */
  field: AggregatedPolicyScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type AggregatedPolicyInput = {
  hypi?: Maybe<HypiInput>;
  policies: Array<PolicyInput>;
  decisionStrategy?: Maybe<DecisionStrategy>;
  name: Scalars['String'];
  logic?: Maybe<AuthLogic>;
};

export type AggregatedPolicyInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  policies?: Maybe<Array<Maybe<PolicyInputOpt>>>;
  decisionStrategy?: Maybe<DecisionStrategy>;
  name?: Maybe<Scalars['String']>;
  logic?: Maybe<AuthLogic>;
};

/** Scalar fields defined by AggregatedPolicy */
export enum AggregatedPolicyScalarFields {
  /** defines how the policy arrives at a decision, the options are: */
  DecisionStrategy = 'decisionStrategy',
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}


/**
 * A client defines an agent that acts on behalf of a user/subject.
 * Currently implicitly created by Hypi.
 */
export type AuthClient = {
  __typename?: 'AuthClient';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  secret: Scalars['String'];
};

export type AuthClientAggs = {
  __typename?: 'AuthClientAggs';
  name?: Maybe<AggOtherScalar>;
  secret?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by AuthClient */
export enum AuthClientFields {
  Hypi = 'hypi',
  Name = 'name',
  Secret = 'secret',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type AuthClientGroupByOptions = {
  /** The field by which to to group the matching data */
  field: AuthClientScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type AuthClientInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  secret: Scalars['String'];
};

export type AuthClientInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by AuthClient */
export enum AuthClientScalarFields {
  Name = 'name',
  Secret = 'secret',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export enum AuthLogic {
  /** Access will be granted */
  Positive = 'Positive',
  /** Access will be denied */
  Negative = 'Negative'
}

export enum AuthenticationMethod {
  Header = 'header',
  Form = 'form',
  Query = 'query'
}

export enum AuthorizationGrantType {
  AuthorizationCode = 'authorization_code',
  Implicit = 'implicit',
  RefreshToken = 'refresh_token',
  ClientCredentials = 'client_credentials'
}

export type BruteForceDetectionOptions = {
  __typename?: 'BruteForceDetectionOptions';
  hypi?: Maybe<Hypi>;
  maxLoginFailures: Scalars['Int'];
  /** How long the user ust wait when maxLoginFailures have been reached */
  waitIncrements?: Maybe<Scalars['Int']>;
  waitIncrementsUnit?: Maybe<TimeUnit>;
  /** If login failures occurr too quickly, lock out the user, this sets number of milliseconds that determine "quickly" */
  quickLoginCheckMillis?: Maybe<Scalars['Int']>;
  /** How long to wait after a quick failure lock out */
  minQuickLoginWait?: Maybe<Scalars['Int']>;
  minQuickLoginWaitUnit?: Maybe<TimeUnit>;
  /** max time a user will be locked out for */
  maxWait?: Maybe<Scalars['Int']>;
  maxWaitUnit?: Maybe<TimeUnit>;
  /** When failure count is reset */
  failureReset?: Maybe<Scalars['Int']>;
  failureResetUnit?: Maybe<TimeUnit>;
};

export type BruteForceDetectionOptionsAggs = {
  __typename?: 'BruteForceDetectionOptionsAggs';
  maxLoginFailures?: Maybe<AggInt>;
  waitIncrements?: Maybe<AggInt>;
  waitIncrementsUnit?: Maybe<AggOtherScalar>;
  quickLoginCheckMillis?: Maybe<AggInt>;
  minQuickLoginWait?: Maybe<AggInt>;
  minQuickLoginWaitUnit?: Maybe<AggOtherScalar>;
  maxWait?: Maybe<AggInt>;
  maxWaitUnit?: Maybe<AggOtherScalar>;
  failureReset?: Maybe<AggInt>;
  failureResetUnit?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by BruteForceDetectionOptions */
export enum BruteForceDetectionOptionsFields {
  Hypi = 'hypi',
  MaxLoginFailures = 'maxLoginFailures',
  /** How long the user ust wait when maxLoginFailures have been reached */
  WaitIncrements = 'waitIncrements',
  WaitIncrementsUnit = 'waitIncrementsUnit',
  /** If login failures occurr too quickly, lock out the user, this sets number of milliseconds that determine "quickly" */
  QuickLoginCheckMillis = 'quickLoginCheckMillis',
  /** How long to wait after a quick failure lock out */
  MinQuickLoginWait = 'minQuickLoginWait',
  MinQuickLoginWaitUnit = 'minQuickLoginWaitUnit',
  /** max time a user will be locked out for */
  MaxWait = 'maxWait',
  MaxWaitUnit = 'maxWaitUnit',
  /** When failure count is reset */
  FailureReset = 'failureReset',
  FailureResetUnit = 'failureResetUnit',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type BruteForceDetectionOptionsGroupByOptions = {
  /** The field by which to to group the matching data */
  field: BruteForceDetectionOptionsScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type BruteForceDetectionOptionsInput = {
  hypi?: Maybe<HypiInput>;
  maxLoginFailures: Scalars['Int'];
  waitIncrements?: Maybe<Scalars['Int']>;
  waitIncrementsUnit?: Maybe<TimeUnit>;
  quickLoginCheckMillis?: Maybe<Scalars['Int']>;
  minQuickLoginWait?: Maybe<Scalars['Int']>;
  minQuickLoginWaitUnit?: Maybe<TimeUnit>;
  maxWait?: Maybe<Scalars['Int']>;
  maxWaitUnit?: Maybe<TimeUnit>;
  failureReset?: Maybe<Scalars['Int']>;
  failureResetUnit?: Maybe<TimeUnit>;
};

export type BruteForceDetectionOptionsInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  maxLoginFailures?: Maybe<Scalars['Int']>;
  waitIncrements?: Maybe<Scalars['Int']>;
  waitIncrementsUnit?: Maybe<TimeUnit>;
  quickLoginCheckMillis?: Maybe<Scalars['Int']>;
  minQuickLoginWait?: Maybe<Scalars['Int']>;
  minQuickLoginWaitUnit?: Maybe<TimeUnit>;
  maxWait?: Maybe<Scalars['Int']>;
  maxWaitUnit?: Maybe<TimeUnit>;
  failureReset?: Maybe<Scalars['Int']>;
  failureResetUnit?: Maybe<TimeUnit>;
};

export type BruteForceDetectionOptionsMaths = {
  maxLoginFailures?: Maybe<MathInputInt>;
  waitIncrements?: Maybe<MathInputInt>;
  quickLoginCheckMillis?: Maybe<MathInputInt>;
  minQuickLoginWait?: Maybe<MathInputInt>;
  maxWait?: Maybe<MathInputInt>;
  failureReset?: Maybe<MathInputInt>;
};

/** All numeric fields defined by BruteForceDetectionOptions */
export enum BruteForceDetectionOptionsNumericFields {
  MaxLoginFailures = 'maxLoginFailures',
  WaitIncrements = 'waitIncrements',
  QuickLoginCheckMillis = 'quickLoginCheckMillis',
  MinQuickLoginWait = 'minQuickLoginWait',
  MaxWait = 'maxWait',
  FailureReset = 'failureReset'
}

/** Scalar fields defined by BruteForceDetectionOptions */
export enum BruteForceDetectionOptionsScalarFields {
  MaxLoginFailures = 'maxLoginFailures',
  /** How long the user ust wait when maxLoginFailures have been reached */
  WaitIncrements = 'waitIncrements',
  WaitIncrementsUnit = 'waitIncrementsUnit',
  /** If login failures occurr too quickly, lock out the user, this sets number of milliseconds that determine "quickly" */
  QuickLoginCheckMillis = 'quickLoginCheckMillis',
  /** How long to wait after a quick failure lock out */
  MinQuickLoginWait = 'minQuickLoginWait',
  MinQuickLoginWaitUnit = 'minQuickLoginWaitUnit',
  /** max time a user will be locked out for */
  MaxWait = 'maxWait',
  MaxWaitUnit = 'maxWaitUnit',
  /** When failure count is reset */
  FailureReset = 'failureReset',
  FailureResetUnit = 'failureResetUnit',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export enum ClientAuthenticationMethod {
  Basic = 'basic',
  Post = 'post'
}

export type ClientPolicy = Policy & {
  __typename?: 'ClientPolicy';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  /** Positive` or `Negative */
  logic?: Maybe<AuthLogic>;
  clients?: Maybe<Array<AuthClient>>;
};


export type ClientPolicyClientsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type ClientPolicyAggs = {
  __typename?: 'ClientPolicyAggs';
  name?: Maybe<AggOtherScalar>;
  logic?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by ClientPolicy */
export enum ClientPolicyFields {
  Hypi = 'hypi',
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  Clients = 'clients',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type ClientPolicyGroupByOptions = {
  /** The field by which to to group the matching data */
  field: ClientPolicyScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type ClientPolicyInput = {
  hypi?: Maybe<HypiInput>;
  clients?: Maybe<Array<AuthClientInput>>;
  name: Scalars['String'];
  logic?: Maybe<AuthLogic>;
};

export type ClientPolicyInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  clients?: Maybe<Array<Maybe<AuthClientInputOpt>>>;
  name?: Maybe<Scalars['String']>;
  logic?: Maybe<AuthLogic>;
};

/** Scalar fields defined by ClientPolicy */
export enum ClientPolicyScalarFields {
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/**
 * input ComputedAggField {
 *   field: String! #The name of the field in the GraphQL type
 *   projectTo: String #The name of the field that should receive the aggregated value - if null, the value is projected to the same field IFF the type is Int or Float
 *   agg: ComputedAggType #Defaults to COUNT
 * }
 */
export enum ComputedAggType {
  Count = 'COUNT',
  Sum = 'SUM',
  Avg = 'AVG',
  Max = 'MAX',
  Min = 'MIN'
}

export type Coordinate = {
  __typename?: 'Coordinate';
  hypi?: Maybe<Hypi>;
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CoordinateAggs = {
  __typename?: 'CoordinateAggs';
  x?: Maybe<AggFloat>;
  y?: Maybe<AggFloat>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Coordinate */
export enum CoordinateFields {
  Hypi = 'hypi',
  X = 'x',
  Y = 'y',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type CoordinateGroupByOptions = {
  /** The field by which to to group the matching data */
  field: CoordinateScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type CoordinateInput = {
  hypi?: Maybe<HypiInput>;
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CoordinateInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type CoordinateMaths = {
  x?: Maybe<MathInputFloat>;
  y?: Maybe<MathInputFloat>;
};

/** All numeric fields defined by Coordinate */
export enum CoordinateNumericFields {
  X = 'x',
  Y = 'y'
}

/** Scalar fields defined by Coordinate */
export enum CoordinateScalarFields {
  X = 'x',
  Y = 'y',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Counter = {
  __typename?: 'Counter';
  hypi?: Maybe<Hypi>;
  /** A name which uniquely identifies this counter in an instance. Must be a letter followed by 0 or more letters, numbers or underscores */
  name: Scalars['String'];
  /** A human friendly display label for the counter */
  label?: Maybe<Scalars['String']>;
  /**
   * The value of the counter. Semantically this is intended to be monotonically increasing but this is not currently enforced
   * See the Gauge type if you want to arbitrarily increase/decrease/set value on a type
   */
  value: Scalars['Float'];
  tags?: Maybe<Array<Scalars['String']>>;
};


export type CounterTagsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type CounterAggs = {
  __typename?: 'CounterAggs';
  name?: Maybe<AggOtherScalar>;
  label?: Maybe<AggOtherScalar>;
  value?: Maybe<AggFloat>;
  tags?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Counter */
export enum CounterFields {
  Hypi = 'hypi',
  /** A name which uniquely identifies this counter in an instance. Must be a letter followed by 0 or more letters, numbers or underscores */
  Name = 'name',
  /** A human friendly display label for the counter */
  Label = 'label',
  /**
   * The value of the counter. Semantically this is intended to be monotonically increasing but this is not currently enforced
   * See the Gauge type if you want to arbitrarily increase/decrease/set value on a type
   */
  Value = 'value',
  Tags = 'tags',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type CounterGroupByOptions = {
  /** The field by which to to group the matching data */
  field: CounterScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type CounterInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  value: Scalars['Float'];
};

export type CounterInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  value?: Maybe<Scalars['Float']>;
};

export type CounterMaths = {
  value?: Maybe<MathInputFloat>;
};

/** All numeric fields defined by Counter */
export enum CounterNumericFields {
  Value = 'value'
}

/** Scalar fields defined by Counter */
export enum CounterScalarFields {
  /** A name which uniquely identifies this counter in an instance. Must be a letter followed by 0 or more letters, numbers or underscores */
  Name = 'name',
  /** A human friendly display label for the counter */
  Label = 'label',
  /**
   * The value of the counter. Semantically this is intended to be monotonically increasing but this is not currently enforced
   * See the Gauge type if you want to arbitrarily increase/decrease/set value on a type
   */
  Value = 'value',
  Tags = 'tags',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/**
 * Identifies a given country according to ISO3166
 * https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
 * See also https://www.iso.org/obp/ui/#search and
 * https://unicode-org.github.io/cldr-staging/charts/37/supplemental/territory_information.html
 */
export type Country = {
  __typename?: 'Country';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  stateName?: Maybe<Scalars['String']>;
  sovereignty?: Maybe<Scalars['String']>;
  alpha2code?: Maybe<Scalars['String']>;
  alpha3code?: Maybe<Scalars['String']>;
  numericCode?: Maybe<Scalars['String']>;
  subdivisionCodeLinks?: Maybe<Scalars['String']>;
  internetCCTLD?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  officialLanguage?: Maybe<Language>;
  currencies?: Maybe<Array<Currency>>;
  languagesSpoken?: Maybe<Array<Language>>;
};


/**
 * Identifies a given country according to ISO3166
 * https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
 * See also https://www.iso.org/obp/ui/#search and
 * https://unicode-org.github.io/cldr-staging/charts/37/supplemental/territory_information.html
 */
export type CountryCurrenciesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/**
 * Identifies a given country according to ISO3166
 * https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
 * See also https://www.iso.org/obp/ui/#search and
 * https://unicode-org.github.io/cldr-staging/charts/37/supplemental/territory_information.html
 */
export type CountryLanguagesSpokenArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type CountryAggs = {
  __typename?: 'CountryAggs';
  name?: Maybe<AggOtherScalar>;
  stateName?: Maybe<AggOtherScalar>;
  sovereignty?: Maybe<AggOtherScalar>;
  alpha2code?: Maybe<AggOtherScalar>;
  alpha3code?: Maybe<AggOtherScalar>;
  numericCode?: Maybe<AggOtherScalar>;
  subdivisionCodeLinks?: Maybe<AggOtherScalar>;
  internetCCTLD?: Maybe<AggOtherScalar>;
  continent?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Country */
export enum CountryFields {
  Hypi = 'hypi',
  Name = 'name',
  StateName = 'stateName',
  Sovereignty = 'sovereignty',
  Alpha2code = 'alpha2code',
  Alpha3code = 'alpha3code',
  NumericCode = 'numericCode',
  SubdivisionCodeLinks = 'subdivisionCodeLinks',
  InternetCctld = 'internetCCTLD',
  Continent = 'continent',
  OfficialLanguage = 'officialLanguage',
  Currencies = 'currencies',
  LanguagesSpoken = 'languagesSpoken',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type CountryGroupByOptions = {
  /** The field by which to to group the matching data */
  field: CountryScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type CountryInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  stateName?: Maybe<Scalars['String']>;
  sovereignty?: Maybe<Scalars['String']>;
  alpha2code?: Maybe<Scalars['String']>;
  alpha3code?: Maybe<Scalars['String']>;
  numericCode?: Maybe<Scalars['String']>;
  subdivisionCodeLinks?: Maybe<Scalars['String']>;
  internetCCTLD?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  currencies?: Maybe<Array<CurrencyInput>>;
  languagesSpoken?: Maybe<Array<LanguageInput>>;
  officialLanguage?: Maybe<LanguageInput>;
};

export type CountryInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  stateName?: Maybe<Scalars['String']>;
  sovereignty?: Maybe<Scalars['String']>;
  alpha2code?: Maybe<Scalars['String']>;
  alpha3code?: Maybe<Scalars['String']>;
  numericCode?: Maybe<Scalars['String']>;
  subdivisionCodeLinks?: Maybe<Scalars['String']>;
  internetCCTLD?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  currencies?: Maybe<Array<Maybe<CurrencyInputOpt>>>;
  languagesSpoken?: Maybe<Array<Maybe<LanguageInputOpt>>>;
  officialLanguage?: Maybe<LanguageInputOpt>;
};

/** Scalar fields defined by Country */
export enum CountryScalarFields {
  Name = 'name',
  StateName = 'stateName',
  Sovereignty = 'sovereignty',
  Alpha2code = 'alpha2code',
  Alpha3code = 'alpha3code',
  NumericCode = 'numericCode',
  SubdivisionCodeLinks = 'subdivisionCodeLinks',
  InternetCctld = 'internetCCTLD',
  Continent = 'continent',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Currency = {
  __typename?: 'Currency';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  code: Scalars['String'];
  symbol: Scalars['String'];
};

export type CurrencyAggs = {
  __typename?: 'CurrencyAggs';
  name?: Maybe<AggOtherScalar>;
  code?: Maybe<AggOtherScalar>;
  symbol?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Currency */
export enum CurrencyFields {
  Hypi = 'hypi',
  Name = 'name',
  Code = 'code',
  Symbol = 'symbol',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type CurrencyGroupByOptions = {
  /** The field by which to to group the matching data */
  field: CurrencyScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type CurrencyInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  code: Scalars['String'];
  symbol: Scalars['String'];
};

export type CurrencyInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by Currency */
export enum CurrencyScalarFields {
  Name = 'name',
  Code = 'code',
  Symbol = 'symbol',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}


/**
 * The decision strategy dictates how the policies associated with a given permission are evaluated and how a final decision is obtained.
 * 'Affirmative' means that at least one policy must evaluate to a positive decision in order for the final decision to be also positive.
 * 'Unanimous' means that all policies must evaluate to a positive decision in order for the final decision to be also positive.
 * 'Consensus' means that the number of positive decisions must be greater than the number of negative decisions.
 * If the number of positive and negative is the same, the final decision will be negative.
 */
export enum DecisionStrategy {
  /** There MUST be at least one policy AND all policies listed must be positive for this policy to result in a positive decision */
  Unanimous = 'Unanimous',
  /** at least one policy listed must be positive for this policy to result in a positive decision */
  Affirmative = 'Affirmative',
  /** The number of policies that are positive must be greater than those that are negative e.g. if 5 policies are included, at least 3 must be positive for this policy to be positive */
  Consensus = 'Consensus'
}

export type Email = {
  __typename?: 'Email';
  hypi?: Maybe<Hypi>;
  value: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type EmailAggs = {
  __typename?: 'EmailAggs';
  value?: Maybe<AggOtherScalar>;
  type?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** The event field of HypiEvent will be one of these */
export enum EmailEventType {
  /** Hypi sent the email and it was accepted by the recipient email server. */
  Delivered = 'delivered',
  /** Hypi could not deliver the email to the recipient email server. */
  Failed = 'failed'
}

/** All fields defined by Email */
export enum EmailFields {
  Hypi = 'hypi',
  Value = 'value',
  Type = 'type',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type EmailGroupByOptions = {
  /** The field by which to to group the matching data */
  field: EmailScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type EmailInput = {
  hypi?: Maybe<HypiInput>;
  value: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type EmailInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/**
 * Creates a new outbound message.
 * Note that it automatically send unless the autoSend field is false
 * https://documentation.Hypi.com/en/latest/api-sending.html#sending
 */
export type EmailMessage = {
  __typename?: 'EmailMessage';
  hypi?: Maybe<Hypi>;
  from: Email;
  subject: Scalars['String'];
  /** Name of the template to use, if present then the given template is used and text/html etc fields in this message are not used */
  template?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  /** Schedule sending in the future */
  deliveryTime?: Maybe<Scalars['DateTime']>;
  /**
   * If set to True or yes this requires the message only be sent over a TLS connection. If a TLS connection can not be established, we will not deliver the message.
   * If set to False or no, we will still try and upgrade the connection, if that fails the message will be delivered over a plaintext SMTP connection.
   */
  requireTls?: Maybe<Scalars['Boolean']>;
  /**
   * If set to True or yes, the certificate and hostname will not be verified when trying to establish a TLS connection and Hypi will accept any certificate during delivery.
   *
   * If set to False or no, Hypi will verify the certificate and hostname. If either one can not be verified, a TLS connection will not be established.
   *
   * The default is False.
   */
  skipVerification?: Maybe<Scalars['Boolean']>;
  /** allows to append a custom MIME header to the message (X-My-Header in this case). For example, h:Reply-To to specify Reply-To address. */
  headers?: Maybe<Scalars['Json']>;
  /** prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See Attaching Data to Messages for more information. */
  variables?: Maybe<Scalars['Json']>;
  /** A valid JSON-encoded dictionary, where key is a plain recipient address and value is a dictionary with variables that can be referenced in the message body. */
  recipientVariables?: Maybe<Scalars['Json']>;
  to: Array<Email>;
  cc?: Maybe<Array<Email>>;
  bcc?: Maybe<Array<Email>>;
  attachment?: Maybe<Array<File>>;
  inline?: Maybe<Array<File>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  responses?: Maybe<Array<EmailSendingAttempt>>;
};


/**
 * Creates a new outbound message.
 * Note that it automatically send unless the autoSend field is false
 * https://documentation.Hypi.com/en/latest/api-sending.html#sending
 */
export type EmailMessageToArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/**
 * Creates a new outbound message.
 * Note that it automatically send unless the autoSend field is false
 * https://documentation.Hypi.com/en/latest/api-sending.html#sending
 */
export type EmailMessageCcArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/**
 * Creates a new outbound message.
 * Note that it automatically send unless the autoSend field is false
 * https://documentation.Hypi.com/en/latest/api-sending.html#sending
 */
export type EmailMessageBccArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/**
 * Creates a new outbound message.
 * Note that it automatically send unless the autoSend field is false
 * https://documentation.Hypi.com/en/latest/api-sending.html#sending
 */
export type EmailMessageAttachmentArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/**
 * Creates a new outbound message.
 * Note that it automatically send unless the autoSend field is false
 * https://documentation.Hypi.com/en/latest/api-sending.html#sending
 */
export type EmailMessageInlineArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/**
 * Creates a new outbound message.
 * Note that it automatically send unless the autoSend field is false
 * https://documentation.Hypi.com/en/latest/api-sending.html#sending
 */
export type EmailMessageTagsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/**
 * Creates a new outbound message.
 * Note that it automatically send unless the autoSend field is false
 * https://documentation.Hypi.com/en/latest/api-sending.html#sending
 */
export type EmailMessageResponsesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type EmailMessageAggs = {
  __typename?: 'EmailMessageAggs';
  subject?: Maybe<AggOtherScalar>;
  template?: Maybe<AggOtherScalar>;
  text?: Maybe<AggOtherScalar>;
  html?: Maybe<AggOtherScalar>;
  deliveryTime?: Maybe<AggOtherScalar>;
  requireTls?: Maybe<AggOtherScalar>;
  skipVerification?: Maybe<AggOtherScalar>;
  headers?: Maybe<AggOtherScalar>;
  variables?: Maybe<AggOtherScalar>;
  recipientVariables?: Maybe<AggOtherScalar>;
  tags?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
  from_value?: Maybe<AggOtherScalar>;
  from_type?: Maybe<AggOtherScalar>;
  to_value?: Maybe<AggOtherScalar>;
  to_type?: Maybe<AggOtherScalar>;
  cc_value?: Maybe<AggOtherScalar>;
  cc_type?: Maybe<AggOtherScalar>;
  bcc_value?: Maybe<AggOtherScalar>;
  bcc_type?: Maybe<AggOtherScalar>;
};

/** All fields defined by EmailMessage */
export enum EmailMessageFields {
  Hypi = 'hypi',
  From = 'from',
  Subject = 'subject',
  /** Name of the template to use, if present then the given template is used and text/html etc fields in this message are not used */
  Template = 'template',
  Text = 'text',
  Html = 'html',
  /** Schedule sending in the future */
  DeliveryTime = 'deliveryTime',
  /**
   * If set to True or yes this requires the message only be sent over a TLS connection. If a TLS connection can not be established, we will not deliver the message.
   * If set to False or no, we will still try and upgrade the connection, if that fails the message will be delivered over a plaintext SMTP connection.
   */
  RequireTls = 'requireTls',
  /**
   * If set to True or yes, the certificate and hostname will not be verified when trying to establish a TLS connection and Hypi will accept any certificate during delivery.
   *
   * If set to False or no, Hypi will verify the certificate and hostname. If either one can not be verified, a TLS connection will not be established.
   *
   * The default is False.
   */
  SkipVerification = 'skipVerification',
  /** allows to append a custom MIME header to the message (X-My-Header in this case). For example, h:Reply-To to specify Reply-To address. */
  Headers = 'headers',
  /** prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See Attaching Data to Messages for more information. */
  Variables = 'variables',
  /** A valid JSON-encoded dictionary, where key is a plain recipient address and value is a dictionary with variables that can be referenced in the message body. */
  RecipientVariables = 'recipientVariables',
  To = 'to',
  Cc = 'cc',
  Bcc = 'bcc',
  Attachment = 'attachment',
  Inline = 'inline',
  Tags = 'tags',
  Responses = 'responses',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  FromHypi = 'from_hypi',
  FromValue = 'from_value',
  FromType = 'from_type',
  ToHypi = 'to_hypi',
  ToValue = 'to_value',
  ToType = 'to_type',
  CcHypi = 'cc_hypi',
  CcValue = 'cc_value',
  CcType = 'cc_type',
  BccHypi = 'bcc_hypi',
  BccValue = 'bcc_value',
  BccType = 'bcc_type'
}

export type EmailMessageGroupByOptions = {
  /** The field by which to to group the matching data */
  field: EmailMessageScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type EmailMessageInput = {
  hypi?: Maybe<HypiInput>;
  from: EmailInput;
  to: Array<EmailInput>;
  cc?: Maybe<Array<EmailInput>>;
  bcc?: Maybe<Array<EmailInput>>;
  subject: Scalars['String'];
  template?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  attachment?: Maybe<Array<FileInput>>;
  inline?: Maybe<Array<FileInput>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  requireTls?: Maybe<Scalars['Boolean']>;
  skipVerification?: Maybe<Scalars['Boolean']>;
  headers?: Maybe<Scalars['Json']>;
  variables?: Maybe<Scalars['Json']>;
  recipientVariables?: Maybe<Scalars['Json']>;
  responses?: Maybe<Array<EmailSendingAttemptInput>>;
};

export type EmailMessageInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  from?: Maybe<EmailInputOpt>;
  to?: Maybe<Array<Maybe<EmailInputOpt>>>;
  cc?: Maybe<Array<Maybe<EmailInputOpt>>>;
  bcc?: Maybe<Array<Maybe<EmailInputOpt>>>;
  subject?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  attachment?: Maybe<Array<Maybe<FileInputOpt>>>;
  inline?: Maybe<Array<Maybe<FileInputOpt>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  requireTls?: Maybe<Scalars['Boolean']>;
  skipVerification?: Maybe<Scalars['Boolean']>;
  headers?: Maybe<Scalars['Json']>;
  variables?: Maybe<Scalars['Json']>;
  recipientVariables?: Maybe<Scalars['Json']>;
  responses?: Maybe<Array<Maybe<EmailSendingAttemptInputOpt>>>;
};

/** Scalar fields defined by EmailMessage */
export enum EmailMessageScalarFields {
  Subject = 'subject',
  /** Name of the template to use, if present then the given template is used and text/html etc fields in this message are not used */
  Template = 'template',
  Text = 'text',
  Html = 'html',
  /** Schedule sending in the future */
  DeliveryTime = 'deliveryTime',
  /**
   * If set to True or yes this requires the message only be sent over a TLS connection. If a TLS connection can not be established, we will not deliver the message.
   * If set to False or no, we will still try and upgrade the connection, if that fails the message will be delivered over a plaintext SMTP connection.
   */
  RequireTls = 'requireTls',
  /**
   * If set to True or yes, the certificate and hostname will not be verified when trying to establish a TLS connection and Hypi will accept any certificate during delivery.
   *
   * If set to False or no, Hypi will verify the certificate and hostname. If either one can not be verified, a TLS connection will not be established.
   *
   * The default is False.
   */
  SkipVerification = 'skipVerification',
  /** allows to append a custom MIME header to the message (X-My-Header in this case). For example, h:Reply-To to specify Reply-To address. */
  Headers = 'headers',
  /** prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See Attaching Data to Messages for more information. */
  Variables = 'variables',
  /** A valid JSON-encoded dictionary, where key is a plain recipient address and value is a dictionary with variables that can be referenced in the message body. */
  RecipientVariables = 'recipientVariables',
  Tags = 'tags',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  FromValue = 'from_value',
  FromType = 'from_type',
  ToValue = 'to_value',
  ToType = 'to_type',
  CcValue = 'cc_value',
  CcType = 'cc_type',
  BccValue = 'bcc_value',
  BccType = 'bcc_type'
}

/** Scalar fields defined by Email */
export enum EmailScalarFields {
  Value = 'value',
  Type = 'type',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type EmailSendingAttempt = {
  __typename?: 'EmailSendingAttempt';
  hypi?: Maybe<Hypi>;
  headers?: Maybe<Scalars['Json']>;
  body?: Maybe<Scalars['Json']>;
  status?: Maybe<EmailEventType>;
  statusMessage?: Maybe<Scalars['String']>;
};

export type EmailSendingAttemptAggs = {
  __typename?: 'EmailSendingAttemptAggs';
  headers?: Maybe<AggOtherScalar>;
  body?: Maybe<AggOtherScalar>;
  status?: Maybe<AggOtherScalar>;
  statusMessage?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by EmailSendingAttempt */
export enum EmailSendingAttemptFields {
  Hypi = 'hypi',
  Headers = 'headers',
  Body = 'body',
  Status = 'status',
  StatusMessage = 'statusMessage',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type EmailSendingAttemptGroupByOptions = {
  /** The field by which to to group the matching data */
  field: EmailSendingAttemptScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type EmailSendingAttemptInput = {
  hypi?: Maybe<HypiInput>;
  headers?: Maybe<Scalars['Json']>;
  body?: Maybe<Scalars['Json']>;
  status?: Maybe<EmailEventType>;
  statusMessage?: Maybe<Scalars['String']>;
};

export type EmailSendingAttemptInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  headers?: Maybe<Scalars['Json']>;
  body?: Maybe<Scalars['Json']>;
  status?: Maybe<EmailEventType>;
  statusMessage?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by EmailSendingAttempt */
export enum EmailSendingAttemptScalarFields {
  Headers = 'headers',
  Body = 'body',
  Status = 'status',
  StatusMessage = 'statusMessage',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/**
 * Defines a Hypi template that can be parameterised
 * https://documentation.Hypi.com/en/latest/api-templates.html#store-new-template
 */
export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  hypi?: Maybe<Hypi>;
  /** Name of the template being created. The name can contain alpha-numeric characters, digits and next symbols: .-_~ */
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type EmailTemplateAggs = {
  __typename?: 'EmailTemplateAggs';
  name?: Maybe<AggOtherScalar>;
  description?: Maybe<AggOtherScalar>;
  template?: Maybe<AggOtherScalar>;
  comment?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by EmailTemplate */
export enum EmailTemplateFields {
  Hypi = 'hypi',
  /** Name of the template being created. The name can contain alpha-numeric characters, digits and next symbols: .-_~ */
  Name = 'name',
  Description = 'description',
  Template = 'template',
  Comment = 'comment',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type EmailTemplateGroupByOptions = {
  /** The field by which to to group the matching data */
  field: EmailTemplateScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type EmailTemplateInput = {
  hypi?: Maybe<HypiInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type EmailTemplateInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by EmailTemplate */
export enum EmailTemplateScalarFields {
  /** Name of the template being created. The name can contain alpha-numeric characters, digits and next symbols: .-_~ */
  Name = 'name',
  Description = 'description',
  Template = 'template',
  Comment = 'comment',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Email related */
export type EmailVerification = {
  __typename?: 'EmailVerification';
  hypi?: Maybe<Hypi>;
  email: Email;
  /** After the link is clicked from the email, redirect the browser to this URL passing a token in the URL i.e. token=jwt.token.here which can be used get the value in the meta field */
  redirectTo: Scalars['String'];
  /** The verification code that is included in the email sent. Generated by the server, if provided the provided value is ignored */
  code?: Maybe<Scalars['String']>;
  /** Optionally, the email from which the email will be sent. You MUST have a Hypi email app configured to send from this address */
  from?: Maybe<Scalars['String']>;
  /** Optionally, the subject of the email, this is a velocity template - Hypi provides a default such as "Please verify your email to <realm>" */
  subject?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
  /**
   * The HTML contents of the email. This is a Velocity template that will be rendered before being sent.
   * The available variables and their types are:
   * instance: AppId - You app instance ID
   * parent - a map representing the current EmailVerification object
   * value - the value of the htmlMessage field
   * env: HypiEnv
   */
  htmlMessage?: Maybe<Scalars['String']>;
  /** A plain text version of the email - see this is a velocity template, see htmlMessage for available variables */
  plainTextMessage?: Maybe<Scalars['String']>;
  /** Any additional meta data you want to store. For example, you could collect all of the information needed to create the Account */
  meta?: Maybe<Scalars['Json']>;
  /** Set by system, cannot be provided */
  confirmed?: Maybe<Scalars['Boolean']>;
};

export type EmailVerificationAggs = {
  __typename?: 'EmailVerificationAggs';
  redirectTo?: Maybe<AggOtherScalar>;
  code?: Maybe<AggOtherScalar>;
  from?: Maybe<AggOtherScalar>;
  subject?: Maybe<AggOtherScalar>;
  templateName?: Maybe<AggOtherScalar>;
  htmlMessage?: Maybe<AggOtherScalar>;
  plainTextMessage?: Maybe<AggOtherScalar>;
  meta?: Maybe<AggOtherScalar>;
  confirmed?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
  email_value?: Maybe<AggOtherScalar>;
  email_type?: Maybe<AggOtherScalar>;
};

/** All fields defined by EmailVerification */
export enum EmailVerificationFields {
  Hypi = 'hypi',
  Email = 'email',
  /** After the link is clicked from the email, redirect the browser to this URL passing a token in the URL i.e. token=jwt.token.here which can be used get the value in the meta field */
  RedirectTo = 'redirectTo',
  /** The verification code that is included in the email sent. Generated by the server, if provided the provided value is ignored */
  Code = 'code',
  /** Optionally, the email from which the email will be sent. You MUST have a Hypi email app configured to send from this address */
  From = 'from',
  /** Optionally, the subject of the email, this is a velocity template - Hypi provides a default such as "Please verify your email to <realm>" */
  Subject = 'subject',
  TemplateName = 'templateName',
  /**
   * The HTML contents of the email. This is a Velocity template that will be rendered before being sent.
   * The available variables and their types are:
   * instance: AppId - You app instance ID
   * parent - a map representing the current EmailVerification object
   * value - the value of the htmlMessage field
   * env: HypiEnv
   */
  HtmlMessage = 'htmlMessage',
  /** A plain text version of the email - see this is a velocity template, see htmlMessage for available variables */
  PlainTextMessage = 'plainTextMessage',
  /** Any additional meta data you want to store. For example, you could collect all of the information needed to create the Account */
  Meta = 'meta',
  /** Set by system, cannot be provided */
  Confirmed = 'confirmed',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  EmailHypi = 'email_hypi',
  EmailValue = 'email_value',
  EmailType = 'email_type'
}

export type EmailVerificationGroupByOptions = {
  /** The field by which to to group the matching data */
  field: EmailVerificationScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type EmailVerificationInput = {
  hypi?: Maybe<HypiInput>;
  email: EmailInput;
  redirectTo: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
  htmlMessage?: Maybe<Scalars['String']>;
  plainTextMessage?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['Json']>;
  confirmed?: Maybe<Scalars['Boolean']>;
};

export type EmailVerificationInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  email?: Maybe<EmailInputOpt>;
  redirectTo?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
  htmlMessage?: Maybe<Scalars['String']>;
  plainTextMessage?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['Json']>;
  confirmed?: Maybe<Scalars['Boolean']>;
};

/** Scalar fields defined by EmailVerification */
export enum EmailVerificationScalarFields {
  /** After the link is clicked from the email, redirect the browser to this URL passing a token in the URL i.e. token=jwt.token.here which can be used get the value in the meta field */
  RedirectTo = 'redirectTo',
  /** The verification code that is included in the email sent. Generated by the server, if provided the provided value is ignored */
  Code = 'code',
  /** Optionally, the email from which the email will be sent. You MUST have a Hypi email app configured to send from this address */
  From = 'from',
  /** Optionally, the subject of the email, this is a velocity template - Hypi provides a default such as "Please verify your email to <realm>" */
  Subject = 'subject',
  TemplateName = 'templateName',
  /**
   * The HTML contents of the email. This is a Velocity template that will be rendered before being sent.
   * The available variables and their types are:
   * instance: AppId - You app instance ID
   * parent - a map representing the current EmailVerification object
   * value - the value of the htmlMessage field
   * env: HypiEnv
   */
  HtmlMessage = 'htmlMessage',
  /** A plain text version of the email - see this is a velocity template, see htmlMessage for available variables */
  PlainTextMessage = 'plainTextMessage',
  /** Any additional meta data you want to store. For example, you could collect all of the information needed to create the Account */
  Meta = 'meta',
  /** Set by system, cannot be provided */
  Confirmed = 'confirmed',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  EmailValue = 'email_value',
  EmailType = 'email_type'
}

/** Published as part of a subscription event's meta data to indicate the nature of the mutation that resulted in the event being triggered. */
export enum EventType {
  /** An event type indicating that the cache entry was created. */
  Created = 'CREATED',
  /** An event type indicating that the cache entry was updated. i.e. a previous mapping existed */
  Updated = 'UPDATED',
  /** An event type indicating that the cache entry was removed. */
  Removed = 'REMOVED',
  /** An event type indicating that the cache entry has expired. */
  Expired = 'EXPIRED'
}

export type File = {
  __typename?: 'File';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  directory: Scalars['String'];
  path: Scalars['String'];
  isDirectory: Scalars['Boolean'];
  status?: Maybe<FileStatus>;
  url?: Maybe<Url>;
  /** mime type */
  type?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Long']>;
  extension?: Maybe<Scalars['String']>;
  isStared?: Maybe<Scalars['Boolean']>;
  isSharable?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  children?: Maybe<Array<File>>;
};


export type FileChildrenArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type FileAggs = {
  __typename?: 'FileAggs';
  name?: Maybe<AggOtherScalar>;
  directory?: Maybe<AggOtherScalar>;
  path?: Maybe<AggOtherScalar>;
  isDirectory?: Maybe<AggOtherScalar>;
  status?: Maybe<AggOtherScalar>;
  type?: Maybe<AggOtherScalar>;
  size?: Maybe<AggOtherScalar>;
  extension?: Maybe<AggOtherScalar>;
  isStared?: Maybe<AggOtherScalar>;
  isSharable?: Maybe<AggOtherScalar>;
  content?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by File */
export enum FileFields {
  Hypi = 'hypi',
  Name = 'name',
  Directory = 'directory',
  Path = 'path',
  IsDirectory = 'isDirectory',
  Status = 'status',
  Url = 'url',
  /** mime type */
  Type = 'type',
  Size = 'size',
  Extension = 'extension',
  IsStared = 'isStared',
  IsSharable = 'isSharable',
  Content = 'content',
  Children = 'children',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type FileGroupByOptions = {
  /** The field by which to to group the matching data */
  field: FileScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type FileInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  directory: Scalars['String'];
  path: Scalars['String'];
  isDirectory: Scalars['Boolean'];
  status?: Maybe<FileStatus>;
  url?: Maybe<UrlInput>;
  children?: Maybe<Array<FileInput>>;
  type?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Long']>;
  extension?: Maybe<Scalars['String']>;
  isStared?: Maybe<Scalars['Boolean']>;
  isSharable?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
};

export type FileInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  directory?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  isDirectory?: Maybe<Scalars['Boolean']>;
  status?: Maybe<FileStatus>;
  url?: Maybe<UrlInputOpt>;
  children?: Maybe<Array<Maybe<FileInputOpt>>>;
  type?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Long']>;
  extension?: Maybe<Scalars['String']>;
  isStared?: Maybe<Scalars['Boolean']>;
  isSharable?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by File */
export enum FileScalarFields {
  Name = 'name',
  Directory = 'directory',
  Path = 'path',
  IsDirectory = 'isDirectory',
  Status = 'status',
  /** mime type */
  Type = 'type',
  Size = 'size',
  Extension = 'extension',
  IsStared = 'isStared',
  IsSharable = 'isSharable',
  Content = 'content',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export enum FileStatus {
  Uploaded = 'UPLOADED',
  Processing = 'PROCESSING',
  PendingApproval = 'PENDING_APPROVAL',
  Disabled = 'DISABLED',
  Available = 'AVAILABLE',
  Deleted = 'DELETED',
  Unavailable = 'UNAVAILABLE'
}

/** Measures a value at a point in time */
export type Gauge = {
  __typename?: 'Gauge';
  hypi?: Maybe<Hypi>;
  /** A name which uniquely identifies this counter in an instance. Must be a letter followed by 0 or more letters, numbers or underscores */
  name: Scalars['String'];
  /** A human friendly display label for the counter */
  label?: Maybe<Scalars['String']>;
  /** The current value of this gauge, set, increase or decrease as you see fit */
  value: Scalars['Float'];
  tags?: Maybe<Array<Scalars['String']>>;
};


/** Measures a value at a point in time */
export type GaugeTagsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type GaugeAggs = {
  __typename?: 'GaugeAggs';
  name?: Maybe<AggOtherScalar>;
  label?: Maybe<AggOtherScalar>;
  value?: Maybe<AggFloat>;
  tags?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Gauge */
export enum GaugeFields {
  Hypi = 'hypi',
  /** A name which uniquely identifies this counter in an instance. Must be a letter followed by 0 or more letters, numbers or underscores */
  Name = 'name',
  /** A human friendly display label for the counter */
  Label = 'label',
  /** The current value of this gauge, set, increase or decrease as you see fit */
  Value = 'value',
  Tags = 'tags',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type GaugeGroupByOptions = {
  /** The field by which to to group the matching data */
  field: GaugeScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type GaugeInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  value: Scalars['Float'];
};

export type GaugeInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  value?: Maybe<Scalars['Float']>;
};

export type GaugeMaths = {
  value?: Maybe<MathInputFloat>;
};

/** All numeric fields defined by Gauge */
export enum GaugeNumericFields {
  Value = 'value'
}

/** Scalar fields defined by Gauge */
export enum GaugeScalarFields {
  /** A name which uniquely identifies this counter in an instance. Must be a letter followed by 0 or more letters, numbers or underscores */
  Name = 'name',
  /** A human friendly display label for the counter */
  Label = 'label',
  /** The current value of this gauge, set, increase or decrease as you see fit */
  Value = 'value',
  Tags = 'tags',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER',
  RatherNotSay = 'RATHER_NOT_SAY'
}

/**
 * Based on http://www.tsusiatsoftware.net/
 * See Geometry Model at http://www.tsusiatsoftware.net/jts/jtsfeatures.html
 * http://www.tsusiatsoftware.net/jts/javadoc/com/vividsolutions/jts/geom/Geometry.html
 * Defines a rectangular region of the 2D coordinate plane. It is often used to represent the bounding box of a Geometry, e.g. the minimum and maximum x and y values of the Coordinates.
 * todo define specific subtypes of Geo and supporting types
 * http://www.tsusiatsoftware.net/jts/javadoc/com/vividsolutions/jts/geom/PrecisionModel.html
 * http://www.tsusiatsoftware.net/jts/javadoc/com/vividsolutions/jts/geom/Point.html
 * http://www.tsusiatsoftware.net/jts/javadoc/com/vividsolutions/jts/geom/MultiPoint.html
 * http://www.tsusiatsoftware.net/jts/javadoc/com/vividsolutions/jts/geom/LineString.html
 * http://www.tsusiatsoftware.net/jts/javadoc/com/vividsolutions/jts/geom/MultiLineString.html
 * http://www.tsusiatsoftware.net/jts/javadoc/com/vividsolutions/jts/geom/Polygon.html
 * http://www.tsusiatsoftware.net/jts/javadoc/com/vividsolutions/jts/geom/MultiPolygon.html
 * http://www.tsusiatsoftware.net/jts/javadoc/com/vividsolutions/jts/geom/GeometryCollection.html
 */
export type Geo = {
  hypi?: Maybe<Hypi>;
  envelope?: Maybe<GeoEnvelope>;
  srid?: Maybe<Scalars['Int']>;
};

export type GeoEnvelope = {
  __typename?: 'GeoEnvelope';
  hypi?: Maybe<Hypi>;
  p1: Coordinate;
  p2: Coordinate;
};

export type GeoEnvelopeAggs = {
  __typename?: 'GeoEnvelopeAggs';
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by GeoEnvelope */
export enum GeoEnvelopeFields {
  Hypi = 'hypi',
  P1 = 'p1',
  P2 = 'p2',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type GeoEnvelopeGroupByOptions = {
  /** The field by which to to group the matching data */
  field: GeoEnvelopeScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type GeoEnvelopeInput = {
  hypi?: Maybe<HypiInput>;
  p1: CoordinateInput;
  p2: CoordinateInput;
};

export type GeoEnvelopeInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  p1?: Maybe<CoordinateInputOpt>;
  p2?: Maybe<CoordinateInputOpt>;
};

/** Scalar fields defined by GeoEnvelope */
export enum GeoEnvelopeScalarFields {
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type GeoInput = {
  envelope?: Maybe<GeoEnvelopeInput>;
  hypi?: Maybe<HypiInput>;
  srid?: Maybe<Scalars['Int']>;
};

export type GeoInputOpt = {
  envelope?: Maybe<GeoEnvelopeInputOpt>;
  hypi?: Maybe<HypiInputOpt>;
  srid?: Maybe<Scalars['Int']>;
};

/** Creates a reference to a GraphQL function in an app instance. */
export type GraphQlRef = {
  __typename?: 'GraphQLRef';
  hypi?: Maybe<Hypi>;
  type: OpType;
  field: Scalars['String'];
  /**
   * If present this is a set of GraphQL fields that will be selected from the results of the function referenced.
   * For example if the type returned by field is "T" and T is the object
   * type T {
   * a: Int
   * b: T2
   * }
   * type T2 {
   * c: String
   * }
   * then this field can be the selection string:
   * a b{c}
   * i.e. the GraphQL selection you would use if manually selecting fields from T and T2 WITHOUT any curly braces at the start/end - i.e. no enclosing curlies.
   * If not provided, the platform will select hypi{id} meaning the result of this function call will have ONLY the hypi.id field
   */
  selection?: Maybe<Scalars['String']>;
};

export type GraphQlRefAggs = {
  __typename?: 'GraphQLRefAggs';
  type?: Maybe<AggOtherScalar>;
  field?: Maybe<AggOtherScalar>;
  selection?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by GraphQLRef */
export enum GraphQlRefFields {
  Hypi = 'hypi',
  Type = 'type',
  Field = 'field',
  /**
   * If present this is a set of GraphQL fields that will be selected from the results of the function referenced.
   * For example if the type returned by field is "T" and T is the object
   * type T {
   * a: Int
   * b: T2
   * }
   * type T2 {
   * c: String
   * }
   * then this field can be the selection string:
   * a b{c}
   * i.e. the GraphQL selection you would use if manually selecting fields from T and T2 WITHOUT any curly braces at the start/end - i.e. no enclosing curlies.
   * If not provided, the platform will select hypi{id} meaning the result of this function call will have ONLY the hypi.id field
   */
  Selection = 'selection',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type GraphQlRefGroupByOptions = {
  /** The field by which to to group the matching data */
  field: GraphQlRefScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type GraphQlRefInput = {
  hypi?: Maybe<HypiInput>;
  type: OpType;
  field: Scalars['String'];
  selection?: Maybe<Scalars['String']>;
};

export type GraphQlRefInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  type?: Maybe<OpType>;
  field?: Maybe<Scalars['String']>;
  selection?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by GraphQLRef */
export enum GraphQlRefScalarFields {
  Type = 'type',
  Field = 'field',
  /**
   * If present this is a set of GraphQL fields that will be selected from the results of the function referenced.
   * For example if the type returned by field is "T" and T is the object
   * type T {
   * a: Int
   * b: T2
   * }
   * type T2 {
   * c: String
   * }
   * then this field can be the selection string:
   * a b{c}
   * i.e. the GraphQL selection you would use if manually selecting fields from T and T2 WITHOUT any curly braces at the start/end - i.e. no enclosing curlies.
   * If not provided, the platform will select hypi{id} meaning the result of this function call will have ONLY the hypi.id field
   */
  Selection = 'selection',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Defines a collection for subjects, roles, policies and permissions. */
export type Group = {
  __typename?: 'Group';
  hypi?: Maybe<Hypi>;
  /** A unique name identifying this group, implicitly sets the path of the group to /<name> whihc can be referenced in wild card permissions */
  name: Scalars['String'];
  accounts?: Maybe<Array<Account>>;
  children?: Maybe<Array<Group>>;
  organisations?: Maybe<Array<Organisation>>;
};


/** Defines a collection for subjects, roles, policies and permissions. */
export type GroupAccountsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/** Defines a collection for subjects, roles, policies and permissions. */
export type GroupChildrenArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/** Defines a collection for subjects, roles, policies and permissions. */
export type GroupOrganisationsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type GroupAggs = {
  __typename?: 'GroupAggs';
  name?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Group */
export enum GroupFields {
  Hypi = 'hypi',
  /** A unique name identifying this group, implicitly sets the path of the group to /<name> whihc can be referenced in wild card permissions */
  Name = 'name',
  Accounts = 'accounts',
  Children = 'children',
  Organisations = 'organisations',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type GroupGroupByOptions = {
  /** The field by which to to group the matching data */
  field: GroupScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type GroupInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  accounts?: Maybe<Array<AccountInput>>;
  children?: Maybe<Array<GroupInput>>;
  organisations?: Maybe<Array<OrganisationInput>>;
};

export type GroupInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  accounts?: Maybe<Array<Maybe<AccountInputOpt>>>;
  children?: Maybe<Array<Maybe<GroupInputOpt>>>;
  organisations?: Maybe<Array<Maybe<OrganisationInputOpt>>>;
};

export type GroupPolicy = Policy & {
  __typename?: 'GroupPolicy';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  /** Positive` or `Negative */
  logic?: Maybe<AuthLogic>;
  groups?: Maybe<Array<Group>>;
};


export type GroupPolicyGroupsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type GroupPolicyAggs = {
  __typename?: 'GroupPolicyAggs';
  name?: Maybe<AggOtherScalar>;
  logic?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by GroupPolicy */
export enum GroupPolicyFields {
  Hypi = 'hypi',
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  Groups = 'groups',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type GroupPolicyGroupByOptions = {
  /** The field by which to to group the matching data */
  field: GroupPolicyScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type GroupPolicyInput = {
  hypi?: Maybe<HypiInput>;
  groups?: Maybe<Array<GroupInput>>;
  name: Scalars['String'];
  logic?: Maybe<AuthLogic>;
};

export type GroupPolicyInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  groups?: Maybe<Array<Maybe<GroupInputOpt>>>;
  name?: Maybe<Scalars['String']>;
  logic?: Maybe<AuthLogic>;
};

/** Scalar fields defined by GroupPolicy */
export enum GroupPolicyScalarFields {
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Scalar fields defined by Group */
export enum GroupScalarFields {
  /** A unique name identifying this group, implicitly sets the path of the group to /<name> whihc can be referenced in wild card permissions */
  Name = 'name',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export enum HashAlgorithm {
  Sha3 = 'SHA3',
  Bcrypt = 'BCRYPT',
  /**
   * PKCS i.e. Public Key Cryptography Standards. When used Hypi will encrypt/decrypt the contents using a public/private key pair.
   * So the data is encrypted at rest and decrypted whilst in use.
   * See https://en.wikipedia.org/wiki/PKCS, specifically Password-based Encryption Standard
   */
  Pkcs5 = 'PKCS5'
}

export enum HttpMethod {
  Get = 'GET',
  Put = 'PUT',
  Post = 'POST',
  Delete = 'DELETE',
  Patch = 'PATCH',
  Options = 'OPTIONS',
  Head = 'HEAD',
  Trace = 'TRACE'
}

export type HttpResponse = {
  hypi?: Maybe<Hypi>;
  headers?: Maybe<Scalars['Json']>;
  status?: Maybe<Scalars['Int']>;
  rawPayload?: Maybe<Scalars['String']>;
};

export type HttpResponseInput = {
  headers?: Maybe<Scalars['Json']>;
  rawPayload?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInput>;
  status?: Maybe<Scalars['Int']>;
};

export type HttpResponseInputOpt = {
  headers?: Maybe<Scalars['Json']>;
  rawPayload?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInputOpt>;
  status?: Maybe<Scalars['Int']>;
};

/** An object injected into ALL types as the field "hypi" */
export type Hypi = {
  __typename?: 'Hypi';
  /**
   * An ID automatically generated by the platform for new objects.
   * If provided and the ID does not exist, the provided ID is used instead of a generated one and a new entry is inserted
   * If provided and the ID already exists then the existing object is updated.
   */
  id?: Maybe<Scalars['ID']>;
  /**
   * When you work with interface fields, Hypi is unable to distinguish which implementation you intend to use
   * automatically, you must set this field to the name of the implementation of the interface e.g.
   * If creating an AccountPolicy which implements the Policy interface, this field should be set to AccountPolicy
   */
  impl?: Maybe<Scalars['String']>;
  /** The ISO8601 date of when the object was created */
  created?: Maybe<Scalars['DateTime']>;
  /** The ISO8601 date of when the object was last modified */
  updated?: Maybe<Scalars['DateTime']>;
  /** The ISO8601 date of when the object was trashed (if it is currently trashed, null otherwise) */
  trashed?: Maybe<Scalars['DateTime']>;
  /** The ID of the account which created the object */
  createdBy?: Maybe<Scalars['ID']>;
  /** The ID of the app instance which created and owns the object */
  instanceId?: Maybe<Scalars['String']>;
};

/** A list of types on which aggregation queries can be executed */
export type HypiAggregationType = {
  __typename?: 'HypiAggregationType';
  product?: Maybe<ProductAggs>;
  productWith?: Maybe<Array<Maybe<ProductAggs>>>;
  script?: Maybe<ScriptAggs>;
  scriptWith?: Maybe<Array<Maybe<ScriptAggs>>>;
  requestTemplate?: Maybe<RequestTemplateAggs>;
  requestTemplateWith?: Maybe<Array<Maybe<RequestTemplateAggs>>>;
  notificationCtx?: Maybe<NotificationCtxAggs>;
  notificationCtxWith?: Maybe<Array<Maybe<NotificationCtxAggs>>>;
  notification?: Maybe<NotificationAggs>;
  notificationWith?: Maybe<Array<Maybe<NotificationAggs>>>;
  uRL?: Maybe<UrlAggs>;
  uRLWith?: Maybe<Array<Maybe<UrlAggs>>>;
  currency?: Maybe<CurrencyAggs>;
  currencyWith?: Maybe<Array<Maybe<CurrencyAggs>>>;
  coordinate?: Maybe<CoordinateAggs>;
  coordinateWith?: Maybe<Array<Maybe<CoordinateAggs>>>;
  geoEnvelope?: Maybe<GeoEnvelopeAggs>;
  geoEnvelopeWith?: Maybe<Array<Maybe<GeoEnvelopeAggs>>>;
  language?: Maybe<LanguageAggs>;
  languageWith?: Maybe<Array<Maybe<LanguageAggs>>>;
  address?: Maybe<AddressAggs>;
  addressWith?: Maybe<Array<Maybe<AddressAggs>>>;
  personName?: Maybe<PersonNameAggs>;
  personNameWith?: Maybe<Array<Maybe<PersonNameAggs>>>;
  phone?: Maybe<PhoneAggs>;
  phoneWith?: Maybe<Array<Maybe<PhoneAggs>>>;
  email?: Maybe<EmailAggs>;
  emailWith?: Maybe<Array<Maybe<EmailAggs>>>;
  password?: Maybe<PasswordAggs>;
  passwordWith?: Maybe<Array<Maybe<PasswordAggs>>>;
  remoteLogin?: Maybe<RemoteLoginAggs>;
  remoteLoginWith?: Maybe<Array<Maybe<RemoteLoginAggs>>>;
  loginAttempt?: Maybe<LoginAttemptAggs>;
  loginAttemptWith?: Maybe<Array<Maybe<LoginAttemptAggs>>>;
  bruteForceDetectionOptions?: Maybe<BruteForceDetectionOptionsAggs>;
  bruteForceDetectionOptionsWith?: Maybe<Array<Maybe<BruteForceDetectionOptionsAggs>>>;
  oAuth2AuthorizedClient?: Maybe<OAuth2AuthorizedClientAggs>;
  oAuth2AuthorizedClientWith?: Maybe<Array<Maybe<OAuth2AuthorizedClientAggs>>>;
  authClient?: Maybe<AuthClientAggs>;
  authClientWith?: Maybe<Array<Maybe<AuthClientAggs>>>;
  image?: Maybe<ImageAggs>;
  imageWith?: Maybe<Array<Maybe<ImageAggs>>>;
  emailVerification?: Maybe<EmailVerificationAggs>;
  emailVerificationWith?: Maybe<Array<Maybe<EmailVerificationAggs>>>;
  emailTemplate?: Maybe<EmailTemplateAggs>;
  emailTemplateWith?: Maybe<Array<Maybe<EmailTemplateAggs>>>;
  emailSendingAttempt?: Maybe<EmailSendingAttemptAggs>;
  emailSendingAttemptWith?: Maybe<Array<Maybe<EmailSendingAttemptAggs>>>;
  passwordReminder?: Maybe<PasswordReminderAggs>;
  passwordReminderWith?: Maybe<Array<Maybe<PasswordReminderAggs>>>;
  webhook?: Maybe<WebhookAggs>;
  webhookWith?: Maybe<Array<Maybe<WebhookAggs>>>;
  webhookResponse?: Maybe<WebhookResponseAggs>;
  webhookResponseWith?: Maybe<Array<Maybe<WebhookResponseAggs>>>;
  logMessage?: Maybe<LogMessageAggs>;
  logMessageWith?: Maybe<Array<Maybe<LogMessageAggs>>>;
  graphQLRef?: Maybe<GraphQlRefAggs>;
  graphQLRefWith?: Maybe<Array<Maybe<GraphQlRefAggs>>>;
  workflowStepData?: Maybe<WorkflowStepDataAggs>;
  workflowStepDataWith?: Maybe<Array<Maybe<WorkflowStepDataAggs>>>;
  workflowStep?: Maybe<WorkflowStepAggs>;
  workflowStepWith?: Maybe<Array<Maybe<WorkflowStepAggs>>>;
  accessToken?: Maybe<AccessTokenAggs>;
  accessTokenWith?: Maybe<Array<Maybe<AccessTokenAggs>>>;
  country?: Maybe<CountryAggs>;
  countryWith?: Maybe<Array<Maybe<CountryAggs>>>;
  account?: Maybe<AccountAggs>;
  accountWith?: Maybe<Array<Maybe<AccountAggs>>>;
  person?: Maybe<PersonAggs>;
  personWith?: Maybe<Array<Maybe<PersonAggs>>>;
  organisation?: Maybe<OrganisationAggs>;
  organisationWith?: Maybe<Array<Maybe<OrganisationAggs>>>;
  oAuthProvider?: Maybe<OAuthProviderAggs>;
  oAuthProviderWith?: Maybe<Array<Maybe<OAuthProviderAggs>>>;
  realm?: Maybe<RealmAggs>;
  realmWith?: Maybe<Array<Maybe<RealmAggs>>>;
  group?: Maybe<GroupAggs>;
  groupWith?: Maybe<Array<Maybe<GroupAggs>>>;
  role?: Maybe<RoleAggs>;
  roleWith?: Maybe<Array<Maybe<RoleAggs>>>;
  rolePolicy?: Maybe<RolePolicyAggs>;
  rolePolicyWith?: Maybe<Array<Maybe<RolePolicyAggs>>>;
  clientPolicy?: Maybe<ClientPolicyAggs>;
  clientPolicyWith?: Maybe<Array<Maybe<ClientPolicyAggs>>>;
  timePolicy?: Maybe<TimePolicyAggs>;
  timePolicyWith?: Maybe<Array<Maybe<TimePolicyAggs>>>;
  aggregatedPolicy?: Maybe<AggregatedPolicyAggs>;
  aggregatedPolicyWith?: Maybe<Array<Maybe<AggregatedPolicyAggs>>>;
  groupPolicy?: Maybe<GroupPolicyAggs>;
  groupPolicyWith?: Maybe<Array<Maybe<GroupPolicyAggs>>>;
  accountPolicy?: Maybe<AccountPolicyAggs>;
  accountPolicyWith?: Maybe<Array<Maybe<AccountPolicyAggs>>>;
  realmPolicy?: Maybe<RealmPolicyAggs>;
  realmPolicyWith?: Maybe<Array<Maybe<RealmPolicyAggs>>>;
  realmLink?: Maybe<RealmLinkAggs>;
  realmLinkWith?: Maybe<Array<Maybe<RealmLinkAggs>>>;
  permission?: Maybe<PermissionAggs>;
  permissionWith?: Maybe<Array<Maybe<PermissionAggs>>>;
  file?: Maybe<FileAggs>;
  fileWith?: Maybe<Array<Maybe<FileAggs>>>;
  video?: Maybe<VideoAggs>;
  videoWith?: Maybe<Array<Maybe<VideoAggs>>>;
  emailMessage?: Maybe<EmailMessageAggs>;
  emailMessageWith?: Maybe<Array<Maybe<EmailMessageAggs>>>;
  workflow?: Maybe<WorkflowAggs>;
  workflowWith?: Maybe<Array<Maybe<WorkflowAggs>>>;
  workflowSession?: Maybe<WorkflowSessionAggs>;
  workflowSessionWith?: Maybe<Array<Maybe<WorkflowSessionAggs>>>;
  counter?: Maybe<CounterAggs>;
  counterWith?: Maybe<Array<Maybe<CounterAggs>>>;
  gauge?: Maybe<GaugeAggs>;
  gaugeWith?: Maybe<Array<Maybe<GaugeAggs>>>;
  serverlessResponse?: Maybe<ServerlessResponseAggs>;
  serverlessResponseWith?: Maybe<Array<Maybe<ServerlessResponseAggs>>>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeProductArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeProductWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<ProductGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeScriptArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeScriptWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<ScriptGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRequestTemplateArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRequestTemplateWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<RequestTemplateGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeNotificationCtxArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeNotificationCtxWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<NotificationCtxGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeNotificationArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeNotificationWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<NotificationGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeURlArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeURlWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<UrlGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeCurrencyArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeCurrencyWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<CurrencyGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeCoordinateArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeCoordinateWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<CoordinateGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeGeoEnvelopeArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeGeoEnvelopeWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<GeoEnvelopeGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeLanguageArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeLanguageWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<LanguageGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAddressArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAddressWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<AddressGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePersonNameArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePersonNameWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<PersonNameGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePhoneArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePhoneWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<PhoneGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeEmailArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeEmailWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<EmailGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePasswordArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePasswordWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<PasswordGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRemoteLoginArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRemoteLoginWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<RemoteLoginGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeLoginAttemptArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeLoginAttemptWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<LoginAttemptGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeBruteForceDetectionOptionsArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeBruteForceDetectionOptionsWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<BruteForceDetectionOptionsGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeOAuth2AuthorizedClientArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeOAuth2AuthorizedClientWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<OAuth2AuthorizedClientGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAuthClientArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAuthClientWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<AuthClientGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeImageArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeImageWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<ImageGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeEmailVerificationArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeEmailVerificationWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<EmailVerificationGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeEmailTemplateArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeEmailTemplateWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<EmailTemplateGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeEmailSendingAttemptArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeEmailSendingAttemptWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<EmailSendingAttemptGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePasswordReminderArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePasswordReminderWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<PasswordReminderGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWebhookArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWebhookWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<WebhookGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWebhookResponseArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWebhookResponseWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<WebhookResponseGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeLogMessageArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeLogMessageWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<LogMessageGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeGraphQlRefArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeGraphQlRefWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<GraphQlRefGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWorkflowStepDataArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWorkflowStepDataWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<WorkflowStepDataGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWorkflowStepArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWorkflowStepWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<WorkflowStepGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAccessTokenArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAccessTokenWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<AccessTokenGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeCountryArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeCountryWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<CountryGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAccountArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAccountWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<AccountGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePersonArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePersonWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<PersonGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeOrganisationArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeOrganisationWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<OrganisationGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeOAuthProviderArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeOAuthProviderWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<OAuthProviderGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRealmArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRealmWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<RealmGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeGroupArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeGroupWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<GroupGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRoleArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRoleWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<RoleGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRolePolicyArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRolePolicyWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<RolePolicyGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeClientPolicyArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeClientPolicyWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<ClientPolicyGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeTimePolicyArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeTimePolicyWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<TimePolicyGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAggregatedPolicyArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAggregatedPolicyWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<AggregatedPolicyGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeGroupPolicyArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeGroupPolicyWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<GroupPolicyGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAccountPolicyArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeAccountPolicyWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<AccountPolicyGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRealmPolicyArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRealmPolicyWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<RealmPolicyGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRealmLinkArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeRealmLinkWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<RealmLinkGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePermissionArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypePermissionWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<PermissionGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeFileArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeFileWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<FileGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeVideoArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeVideoWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<VideoGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeEmailMessageArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeEmailMessageWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<EmailMessageGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWorkflowArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWorkflowWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<WorkflowGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWorkflowSessionArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeWorkflowSessionWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<WorkflowSessionGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeCounterArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeCounterWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<CounterGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeGaugeArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeGaugeWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<GaugeGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeServerlessResponseArgs = {
  where?: Maybe<Scalars['String']>;
};


/** A list of types on which aggregation queries can be executed */
export type HypiAggregationTypeServerlessResponseWithArgs = {
  where?: Maybe<Scalars['String']>;
  groupBy: Array<ServerlessResponseGroupByOptions>;
  having?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};

/** An object available as "env" in all scripts */
export type HypiEnv = {
  __typename?: 'HypiEnv';
  hypi?: Maybe<Hypi>;
  apiHost?: Maybe<Scalars['String']>;
  websocketHost?: Maybe<Scalars['String']>;
};

/** All fields defined by HypiEnv */
export enum HypiEnvFields {
  Hypi = 'hypi',
  ApiHost = 'apiHost',
  WebsocketHost = 'websocketHost',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Scalar fields defined by HypiEnv */
export enum HypiEnvScalarFields {
  ApiHost = 'apiHost',
  WebsocketHost = 'websocketHost',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** All fields defined by Hypi */
export enum HypiFields {
  /**
   * An ID automatically generated by the platform for new objects.
   * If provided and the ID does not exist, the provided ID is used instead of a generated one and a new entry is inserted
   * If provided and the ID already exists then the existing object is updated.
   */
  Id = 'id',
  /**
   * When you work with interface fields, Hypi is unable to distinguish which implementation you intend to use
   * automatically, you must set this field to the name of the implementation of the interface e.g.
   * If creating an AccountPolicy which implements the Policy interface, this field should be set to AccountPolicy
   */
  Impl = 'impl',
  /** The ISO8601 date of when the object was created */
  Created = 'created',
  /** The ISO8601 date of when the object was last modified */
  Updated = 'updated',
  /** The ISO8601 date of when the object was trashed (if it is currently trashed, null otherwise) */
  Trashed = 'trashed',
  /** The ID of the account which created the object */
  CreatedBy = 'createdBy',
  /** The ID of the app instance which created and owns the object */
  InstanceId = 'instanceId'
}

export type HypiFilterConnection = {
  __typename?: 'HypiFilterConnection';
  hypi?: Maybe<Hypi>;
  edges?: Maybe<Array<HypiResultEdge>>;
  pageInfo: PageInfo;
};

export type HypiInput = {
  id?: Maybe<Scalars['ID']>;
  impl?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  trashed?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['ID']>;
  instanceId?: Maybe<Scalars['String']>;
};

export type HypiInputOpt = {
  id?: Maybe<Scalars['ID']>;
  impl?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  trashed?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['ID']>;
  instanceId?: Maybe<Scalars['String']>;
};

/** A list of types on which mathematical mutations can be performed on */
export type HypiMathType = {
  Product?: Maybe<Array<ProductMaths>>;
  URL?: Maybe<Array<UrlMaths>>;
  Coordinate?: Maybe<Array<CoordinateMaths>>;
  BruteForceDetectionOptions?: Maybe<Array<BruteForceDetectionOptionsMaths>>;
  WebhookResponse?: Maybe<Array<WebhookResponseMaths>>;
  WorkflowStep?: Maybe<Array<WorkflowStepMaths>>;
  Workflow?: Maybe<Array<WorkflowMaths>>;
  Counter?: Maybe<Array<CounterMaths>>;
  Gauge?: Maybe<Array<GaugeMaths>>;
};

/** A list of all types in the app which can created or updated directly */
export enum HypiMutationType {
  Product = 'Product',
  Hypi = 'Hypi',
  PageInfo = 'PageInfo',
  HypiResultEdge = 'HypiResultEdge',
  HypiFilterConnection = 'HypiFilterConnection',
  HypiEnv = 'HypiEnv',
  Pair = 'Pair',
  AggInt = 'AggInt',
  AggFloat = 'AggFloat',
  AggOtherScalar = 'AggOtherScalar',
  Script = 'Script',
  /** Defines the templates that should be applied to a given HTTP request */
  RequestTemplate = 'RequestTemplate',
  NotificationCtx = 'NotificationCtx',
  Notification = 'Notification',
  Url = 'URL',
  Currency = 'Currency',
  Coordinate = 'Coordinate',
  GeoEnvelope = 'GeoEnvelope',
  Language = 'Language',
  Address = 'Address',
  PersonName = 'PersonName',
  Phone = 'Phone',
  Email = 'Email',
  Password = 'Password',
  RemoteLogin = 'RemoteLogin',
  LoginAttempt = 'LoginAttempt',
  BruteForceDetectionOptions = 'BruteForceDetectionOptions',
  OAuth2AuthorizedClient = 'OAuth2AuthorizedClient',
  /**
   * A client defines an agent that acts on behalf of a user/subject.
   * Currently implicitly created by Hypi.
   */
  AuthClient = 'AuthClient',
  Image = 'Image',
  EmailVerification = 'EmailVerification',
  /**
   * Defines a Hypi template that can be parameterised
   * https://documentation.Hypi.com/en/latest/api-templates.html#store-new-template
   */
  EmailTemplate = 'EmailTemplate',
  EmailSendingAttempt = 'EmailSendingAttempt',
  /**
   * To reset an Account's password, create a `PasswordReminder`.
   *
   * This will generate a code in the `code` field that can be referenced using $!{parent.code} in the `htmlMessage` or `plainTextMessage` fields.
   *
   * This will send an email to the email in the `to` field. In the message you should provide a link to a URL where the user can enter their new password.
   * Include the code in this URL e.g. https://my-app.com/reset-password?code=$!{parent.code}.
   *
   * When the user gets to this page, you will have the password reset code in the URL query string. Get this code from the URL
   * and when the user enter their new password, make a POST request to the Hypi API e.g.
   * POST <hypi-domain>/email/reset/<domain> - where <domain> is app instance domain.
   *
   * In the body of the request send a JSON like this:
   * {"code": "<the-code-from-the-URL>", "password": "<the-user's-new-password>"}
   *
   * Hypi will change the user's password and return HTTP status 200.
   */
  PasswordReminder = 'PasswordReminder',
  /**
   * Defines a web hook that can be used to trigger Hypi GraphQL functions on a given app.
   * The account specified in the web hook must have access to the app/instance and must be authorised to call the functions specified.
   */
  Webhook = 'Webhook',
  /**
   * If the query or mutation functions in the Webhook definition returns this then it controls what the server responds with
   * For example, the GraphQL function can return a 301 or 302 status and a Location header to an external URL to cause a redirect.
   */
  WebhookResponse = 'WebhookResponse',
  LogMessage = 'LogMessage',
  /** Creates a reference to a GraphQL function in an app instance. */
  GraphQlRef = 'GraphQLRef',
  WorkflowStepData = 'WorkflowStepData',
  WorkflowStep = 'WorkflowStep',
  AccessToken = 'AccessToken',
  PermissionDescription = 'PermissionDescription',
  /**
   * Identifies a given country according to ISO3166
   * https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
   * See also https://www.iso.org/obp/ui/#search and
   * https://unicode-org.github.io/cldr-staging/charts/37/supplemental/territory_information.html
   */
  Country = 'Country',
  Account = 'Account',
  Person = 'Person',
  Organisation = 'Organisation',
  OAuthProvider = 'OAuthProvider',
  /**  namespace for containing authz objects and their relationships. */
  Realm = 'Realm',
  /** Defines a collection for subjects, roles, policies and permissions. */
  Group = 'Group',
  Role = 'Role',
  RolePolicy = 'RolePolicy',
  ClientPolicy = 'ClientPolicy',
  TimePolicy = 'TimePolicy',
  AggregatedPolicy = 'AggregatedPolicy',
  GroupPolicy = 'GroupPolicy',
  AccountPolicy = 'AccountPolicy',
  RealmPolicy = 'RealmPolicy',
  RealmLink = 'RealmLink',
  Permission = 'Permission',
  File = 'File',
  Video = 'Video',
  /**
   * Creates a new outbound message.
   * Note that it automatically send unless the autoSend field is false
   * https://documentation.Hypi.com/en/latest/api-sending.html#sending
   */
  EmailMessage = 'EmailMessage',
  /**
   * A workflow defines a sequence of steps that execute in a defined order (you set the order field on each step).
   * It is one way in which Hypi allows you to do composition, so similarities can be drawn to function composition with some specifics thrown in for Hypi and GraphQL.
   *
   * If two steps have the same order their execution order is undefined with relation to each other.
   * Every step has a GraphQL function that is executed for that step.
   *
   * When a Workflow is executed it creates a WorkflowSession. The result of each step in the workflow is added to the session.
   *
   * The first step can have any parameters you want. For the other steps there are some rules that define how the system maps
   * parameters to the function in these steps. These rules are:
   *
   * 1. Any step (including the first step) can have a parameter "params: Json" i.e. name = params and type is Json.
   * This params is a map of the arguments passed to the first function in the Workflow. For example if the function was defined as
   * step1(a: Int, b: Json, c: MyType): T
   * in this case the "params" Json object would be have the fields a, b and c set to the values the function was executed with.
   * Normally, this is used in the first step but can be used in any step that wants access to this data.
   *
   * 2. Any step can have a parameter "session: WorkflowSession" - this is the current workflow's session and contains the results of all steps before the current one.
   * You can identify the results for a specific step by finding the result using the step's name in the session's data array.
   *
   * 3. Except the first step, a parameter "previous: T" where T is the result type of the previous step can be used.
   * In this case, the platform will use the output of the previous function for this parameter.
   * Note that if the type is not the same as the last step's output type then the workflow will fail if the field is not optional.
   * If the field is optional then the platform will not provide it and it would therefore be null if you try to use it.
   *
   * 4. Except the first step, pass-through is possible. This is where the parameters from the first step are passed through
   * to other steps by name and type. i.e. given
   * step1(a: Int, b: String): String
   * step2(a: Int): ID
   * In this case, the variable "a" in both step1 and step2 will have the same value that step1 was executed with.
   * Incidentally, this is the same as getting "a" from the "params" Json.
   */
  Workflow = 'Workflow',
  WorkflowSession = 'WorkflowSession',
  Counter = 'Counter',
  Gauge = 'Gauge',
  ServerlessResponse = 'ServerlessResponse'
}

export type HypiResultEdge = {
  __typename?: 'HypiResultEdge';
  hypi?: Maybe<Hypi>;
  node: HypiRootAggregate;
  cursor: Scalars['ID'];
};

/** A union of all types in the app which can be created or updated directly */
export type HypiRootAggregate = Product | Hypi | PageInfo | HypiResultEdge | HypiFilterConnection | HypiEnv | Pair | AggInt | AggFloat | AggOtherScalar | Script | RequestTemplate | NotificationCtx | Notification | Url | Currency | Coordinate | GeoEnvelope | Language | Address | PersonName | Phone | Email | Password | RemoteLogin | LoginAttempt | BruteForceDetectionOptions | OAuth2AuthorizedClient | AuthClient | Image | EmailVerification | EmailTemplate | EmailSendingAttempt | PasswordReminder | Webhook | WebhookResponse | LogMessage | GraphQlRef | WorkflowStepData | WorkflowStep | AccessToken | PermissionDescription | Country | Account | Person | Organisation | OAuthProvider | Realm | Group | Role | RolePolicy | ClientPolicy | TimePolicy | AggregatedPolicy | GroupPolicy | AccountPolicy | RealmPolicy | RealmLink | Permission | File | Video | EmailMessage | Workflow | WorkflowSession | Counter | Gauge | ServerlessResponse;

/** Scalar fields defined by Hypi */
export enum HypiScalarFields {
  /**
   * An ID automatically generated by the platform for new objects.
   * If provided and the ID does not exist, the provided ID is used instead of a generated one and a new entry is inserted
   * If provided and the ID already exists then the existing object is updated.
   */
  Id = 'id',
  /**
   * When you work with interface fields, Hypi is unable to distinguish which implementation you intend to use
   * automatically, you must set this field to the name of the implementation of the interface e.g.
   * If creating an AccountPolicy which implements the Policy interface, this field should be set to AccountPolicy
   */
  Impl = 'impl',
  /** The ISO8601 date of when the object was created */
  Created = 'created',
  /** The ISO8601 date of when the object was last modified */
  Updated = 'updated',
  /** The ISO8601 date of when the object was trashed (if it is currently trashed, null otherwise) */
  Trashed = 'trashed',
  /** The ID of the account which created the object */
  CreatedBy = 'createdBy',
  /** The ID of the app instance which created and owns the object */
  InstanceId = 'instanceId'
}

/** A list of all types in the app */
export enum HypiSchemaType {
  Product = 'Product',
  Hypi = 'Hypi',
  PageInfo = 'PageInfo',
  HypiResultEdge = 'HypiResultEdge',
  HypiFilterConnection = 'HypiFilterConnection',
  HypiEnv = 'HypiEnv',
  Pair = 'Pair',
  AggInt = 'AggInt',
  AggFloat = 'AggFloat',
  AggOtherScalar = 'AggOtherScalar',
  Script = 'Script',
  /** Defines the templates that should be applied to a given HTTP request */
  RequestTemplate = 'RequestTemplate',
  NotificationCtx = 'NotificationCtx',
  Notification = 'Notification',
  Url = 'URL',
  Currency = 'Currency',
  Coordinate = 'Coordinate',
  GeoEnvelope = 'GeoEnvelope',
  Language = 'Language',
  Address = 'Address',
  PersonName = 'PersonName',
  Phone = 'Phone',
  Email = 'Email',
  Password = 'Password',
  RemoteLogin = 'RemoteLogin',
  LoginAttempt = 'LoginAttempt',
  BruteForceDetectionOptions = 'BruteForceDetectionOptions',
  OAuth2AuthorizedClient = 'OAuth2AuthorizedClient',
  /**
   * A client defines an agent that acts on behalf of a user/subject.
   * Currently implicitly created by Hypi.
   */
  AuthClient = 'AuthClient',
  Image = 'Image',
  EmailVerification = 'EmailVerification',
  /**
   * Defines a Hypi template that can be parameterised
   * https://documentation.Hypi.com/en/latest/api-templates.html#store-new-template
   */
  EmailTemplate = 'EmailTemplate',
  EmailSendingAttempt = 'EmailSendingAttempt',
  /**
   * To reset an Account's password, create a `PasswordReminder`.
   *
   * This will generate a code in the `code` field that can be referenced using $!{parent.code} in the `htmlMessage` or `plainTextMessage` fields.
   *
   * This will send an email to the email in the `to` field. In the message you should provide a link to a URL where the user can enter their new password.
   * Include the code in this URL e.g. https://my-app.com/reset-password?code=$!{parent.code}.
   *
   * When the user gets to this page, you will have the password reset code in the URL query string. Get this code from the URL
   * and when the user enter their new password, make a POST request to the Hypi API e.g.
   * POST <hypi-domain>/email/reset/<domain> - where <domain> is app instance domain.
   *
   * In the body of the request send a JSON like this:
   * {"code": "<the-code-from-the-URL>", "password": "<the-user's-new-password>"}
   *
   * Hypi will change the user's password and return HTTP status 200.
   */
  PasswordReminder = 'PasswordReminder',
  /**
   * Defines a web hook that can be used to trigger Hypi GraphQL functions on a given app.
   * The account specified in the web hook must have access to the app/instance and must be authorised to call the functions specified.
   */
  Webhook = 'Webhook',
  /**
   * If the query or mutation functions in the Webhook definition returns this then it controls what the server responds with
   * For example, the GraphQL function can return a 301 or 302 status and a Location header to an external URL to cause a redirect.
   */
  WebhookResponse = 'WebhookResponse',
  LogMessage = 'LogMessage',
  /** Creates a reference to a GraphQL function in an app instance. */
  GraphQlRef = 'GraphQLRef',
  WorkflowStepData = 'WorkflowStepData',
  WorkflowStep = 'WorkflowStep',
  AccessToken = 'AccessToken',
  PermissionDescription = 'PermissionDescription',
  /**
   * Identifies a given country according to ISO3166
   * https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
   * See also https://www.iso.org/obp/ui/#search and
   * https://unicode-org.github.io/cldr-staging/charts/37/supplemental/territory_information.html
   */
  Country = 'Country',
  Account = 'Account',
  Person = 'Person',
  Organisation = 'Organisation',
  OAuthProvider = 'OAuthProvider',
  /**  namespace for containing authz objects and their relationships. */
  Realm = 'Realm',
  /** Defines a collection for subjects, roles, policies and permissions. */
  Group = 'Group',
  Role = 'Role',
  RolePolicy = 'RolePolicy',
  ClientPolicy = 'ClientPolicy',
  TimePolicy = 'TimePolicy',
  AggregatedPolicy = 'AggregatedPolicy',
  GroupPolicy = 'GroupPolicy',
  AccountPolicy = 'AccountPolicy',
  RealmPolicy = 'RealmPolicy',
  RealmLink = 'RealmLink',
  Permission = 'Permission',
  File = 'File',
  Video = 'Video',
  /**
   * Creates a new outbound message.
   * Note that it automatically send unless the autoSend field is false
   * https://documentation.Hypi.com/en/latest/api-sending.html#sending
   */
  EmailMessage = 'EmailMessage',
  /**
   * A workflow defines a sequence of steps that execute in a defined order (you set the order field on each step).
   * It is one way in which Hypi allows you to do composition, so similarities can be drawn to function composition with some specifics thrown in for Hypi and GraphQL.
   *
   * If two steps have the same order their execution order is undefined with relation to each other.
   * Every step has a GraphQL function that is executed for that step.
   *
   * When a Workflow is executed it creates a WorkflowSession. The result of each step in the workflow is added to the session.
   *
   * The first step can have any parameters you want. For the other steps there are some rules that define how the system maps
   * parameters to the function in these steps. These rules are:
   *
   * 1. Any step (including the first step) can have a parameter "params: Json" i.e. name = params and type is Json.
   * This params is a map of the arguments passed to the first function in the Workflow. For example if the function was defined as
   * step1(a: Int, b: Json, c: MyType): T
   * in this case the "params" Json object would be have the fields a, b and c set to the values the function was executed with.
   * Normally, this is used in the first step but can be used in any step that wants access to this data.
   *
   * 2. Any step can have a parameter "session: WorkflowSession" - this is the current workflow's session and contains the results of all steps before the current one.
   * You can identify the results for a specific step by finding the result using the step's name in the session's data array.
   *
   * 3. Except the first step, a parameter "previous: T" where T is the result type of the previous step can be used.
   * In this case, the platform will use the output of the previous function for this parameter.
   * Note that if the type is not the same as the last step's output type then the workflow will fail if the field is not optional.
   * If the field is optional then the platform will not provide it and it would therefore be null if you try to use it.
   *
   * 4. Except the first step, pass-through is possible. This is where the parameters from the first step are passed through
   * to other steps by name and type. i.e. given
   * step1(a: Int, b: String): String
   * step2(a: Int): ID
   * In this case, the variable "a" in both step1 and step2 will have the same value that step1 was executed with.
   * Incidentally, this is the same as getting "a" from the "params" Json.
   */
  Workflow = 'Workflow',
  WorkflowSession = 'WorkflowSession',
  Counter = 'Counter',
  Gauge = 'Gauge',
  ServerlessResponse = 'ServerlessResponse'
}

/** A list of types which can be subscribed to */
export type HypiSubscriptionUnion = {
  __typename?: 'HypiSubscriptionUnion';
  Product?: Maybe<Product>;
  Hypi?: Maybe<Hypi>;
  PageInfo?: Maybe<PageInfo>;
  HypiResultEdge?: Maybe<HypiResultEdge>;
  HypiFilterConnection?: Maybe<HypiFilterConnection>;
  HypiEnv?: Maybe<HypiEnv>;
  Pair?: Maybe<Pair>;
  AggInt?: Maybe<AggInt>;
  AggFloat?: Maybe<AggFloat>;
  AggOtherScalar?: Maybe<AggOtherScalar>;
  Script?: Maybe<Script>;
  RequestTemplate?: Maybe<RequestTemplate>;
  NotificationCtx?: Maybe<NotificationCtx>;
  Notification?: Maybe<Notification>;
  URL?: Maybe<Url>;
  Currency?: Maybe<Currency>;
  Coordinate?: Maybe<Coordinate>;
  GeoEnvelope?: Maybe<GeoEnvelope>;
  Language?: Maybe<Language>;
  Address?: Maybe<Address>;
  PersonName?: Maybe<PersonName>;
  Phone?: Maybe<Phone>;
  Email?: Maybe<Email>;
  Password?: Maybe<Password>;
  RemoteLogin?: Maybe<RemoteLogin>;
  LoginAttempt?: Maybe<LoginAttempt>;
  BruteForceDetectionOptions?: Maybe<BruteForceDetectionOptions>;
  OAuth2AuthorizedClient?: Maybe<OAuth2AuthorizedClient>;
  AuthClient?: Maybe<AuthClient>;
  Image?: Maybe<Image>;
  EmailVerification?: Maybe<EmailVerification>;
  EmailTemplate?: Maybe<EmailTemplate>;
  EmailSendingAttempt?: Maybe<EmailSendingAttempt>;
  PasswordReminder?: Maybe<PasswordReminder>;
  Webhook?: Maybe<Webhook>;
  WebhookResponse?: Maybe<WebhookResponse>;
  LogMessage?: Maybe<LogMessage>;
  GraphQLRef?: Maybe<GraphQlRef>;
  WorkflowStepData?: Maybe<WorkflowStepData>;
  WorkflowStep?: Maybe<WorkflowStep>;
  AccessToken?: Maybe<AccessToken>;
  PermissionDescription?: Maybe<PermissionDescription>;
  Country?: Maybe<Country>;
  Account?: Maybe<Account>;
  Person?: Maybe<Person>;
  Organisation?: Maybe<Organisation>;
  OAuthProvider?: Maybe<OAuthProvider>;
  Realm?: Maybe<Realm>;
  Group?: Maybe<Group>;
  Role?: Maybe<Role>;
  RolePolicy?: Maybe<RolePolicy>;
  ClientPolicy?: Maybe<ClientPolicy>;
  TimePolicy?: Maybe<TimePolicy>;
  AggregatedPolicy?: Maybe<AggregatedPolicy>;
  GroupPolicy?: Maybe<GroupPolicy>;
  AccountPolicy?: Maybe<AccountPolicy>;
  RealmPolicy?: Maybe<RealmPolicy>;
  RealmLink?: Maybe<RealmLink>;
  Permission?: Maybe<Permission>;
  File?: Maybe<File>;
  Video?: Maybe<Video>;
  EmailMessage?: Maybe<EmailMessage>;
  Workflow?: Maybe<Workflow>;
  WorkflowSession?: Maybe<WorkflowSession>;
  Counter?: Maybe<Counter>;
  Gauge?: Maybe<Gauge>;
  ServerlessResponse?: Maybe<ServerlessResponse>;
};

/** A list of types on which mutations can be performed on */
export type HypiUpsertInputUnion = {
  Product?: Maybe<Array<ProductInputOpt>>;
  Hypi?: Maybe<Array<HypiInputOpt>>;
  Pair?: Maybe<Array<PairInputOpt>>;
  Script?: Maybe<Array<ScriptInputOpt>>;
  RequestTemplate?: Maybe<Array<RequestTemplateInputOpt>>;
  NotificationCtx?: Maybe<Array<NotificationCtxInputOpt>>;
  Notification?: Maybe<Array<NotificationInputOpt>>;
  URL?: Maybe<Array<UrlInputOpt>>;
  Currency?: Maybe<Array<CurrencyInputOpt>>;
  Coordinate?: Maybe<Array<CoordinateInputOpt>>;
  GeoEnvelope?: Maybe<Array<GeoEnvelopeInputOpt>>;
  Language?: Maybe<Array<LanguageInputOpt>>;
  Address?: Maybe<Array<AddressInputOpt>>;
  PersonName?: Maybe<Array<PersonNameInputOpt>>;
  Phone?: Maybe<Array<PhoneInputOpt>>;
  Email?: Maybe<Array<EmailInputOpt>>;
  Password?: Maybe<Array<PasswordInputOpt>>;
  RemoteLogin?: Maybe<Array<RemoteLoginInputOpt>>;
  LoginAttempt?: Maybe<Array<LoginAttemptInputOpt>>;
  BruteForceDetectionOptions?: Maybe<Array<BruteForceDetectionOptionsInputOpt>>;
  OAuth2AuthorizedClient?: Maybe<Array<OAuth2AuthorizedClientInputOpt>>;
  AuthClient?: Maybe<Array<AuthClientInputOpt>>;
  Image?: Maybe<Array<ImageInputOpt>>;
  EmailVerification?: Maybe<Array<EmailVerificationInputOpt>>;
  EmailTemplate?: Maybe<Array<EmailTemplateInputOpt>>;
  EmailSendingAttempt?: Maybe<Array<EmailSendingAttemptInputOpt>>;
  PasswordReminder?: Maybe<Array<PasswordReminderInputOpt>>;
  Webhook?: Maybe<Array<WebhookInputOpt>>;
  WebhookResponse?: Maybe<Array<WebhookResponseInputOpt>>;
  LogMessage?: Maybe<Array<LogMessageInputOpt>>;
  GraphQLRef?: Maybe<Array<GraphQlRefInputOpt>>;
  WorkflowStepData?: Maybe<Array<WorkflowStepDataInputOpt>>;
  WorkflowStep?: Maybe<Array<WorkflowStepInputOpt>>;
  AccessToken?: Maybe<Array<AccessTokenInputOpt>>;
  Country?: Maybe<Array<CountryInputOpt>>;
  Account?: Maybe<Array<AccountInputOpt>>;
  Person?: Maybe<Array<PersonInputOpt>>;
  Organisation?: Maybe<Array<OrganisationInputOpt>>;
  OAuthProvider?: Maybe<Array<OAuthProviderInputOpt>>;
  Realm?: Maybe<Array<RealmInputOpt>>;
  Group?: Maybe<Array<GroupInputOpt>>;
  Role?: Maybe<Array<RoleInputOpt>>;
  RolePolicy?: Maybe<Array<RolePolicyInputOpt>>;
  ClientPolicy?: Maybe<Array<ClientPolicyInputOpt>>;
  TimePolicy?: Maybe<Array<TimePolicyInputOpt>>;
  AggregatedPolicy?: Maybe<Array<AggregatedPolicyInputOpt>>;
  GroupPolicy?: Maybe<Array<GroupPolicyInputOpt>>;
  AccountPolicy?: Maybe<Array<AccountPolicyInputOpt>>;
  RealmPolicy?: Maybe<Array<RealmPolicyInputOpt>>;
  RealmLink?: Maybe<Array<RealmLinkInputOpt>>;
  Permission?: Maybe<Array<PermissionInputOpt>>;
  File?: Maybe<Array<FileInputOpt>>;
  Video?: Maybe<Array<VideoInputOpt>>;
  EmailMessage?: Maybe<Array<EmailMessageInputOpt>>;
  Workflow?: Maybe<Array<WorkflowInputOpt>>;
  WorkflowSession?: Maybe<Array<WorkflowSessionInputOpt>>;
  Counter?: Maybe<Array<CounterInputOpt>>;
  Gauge?: Maybe<Array<GaugeInputOpt>>;
  ServerlessResponse?: Maybe<Array<ServerlessResponseInputOpt>>;
};

export type Image = {
  __typename?: 'Image';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  file: File;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Geo>;
};

export type ImageAggs = {
  __typename?: 'ImageAggs';
  name?: Maybe<AggOtherScalar>;
  description?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Image */
export enum ImageFields {
  Hypi = 'hypi',
  Name = 'name',
  File = 'file',
  Description = 'description',
  Location = 'location',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type ImageGroupByOptions = {
  /** The field by which to to group the matching data */
  field: ImageScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type ImageInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  file: FileInput;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<GeoInput>;
};

export type ImageInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  file?: Maybe<FileInputOpt>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<GeoInputOpt>;
};

/** Scalar fields defined by Image */
export enum ImageScalarFields {
  Name = 'name',
  Description = 'description',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type InlineHttpRequestTemplate = {
  requestTemplate?: Maybe<Scalars['String']>;
  responseTemplate?: Maybe<Scalars['String']>;
};


/**
 * ==============IaM models==============
 * union Entity = Account | Organisation #todo unions not yet supported
 */
export type Language = {
  __typename?: 'Language';
  hypi?: Maybe<Hypi>;
  family?: Maybe<Scalars['String']>;
  isoName?: Maybe<Scalars['String']>;
  nativeName?: Maybe<Scalars['String']>;
  iso6391Code?: Maybe<Scalars['String']>;
  iso6392TCode?: Maybe<Scalars['String']>;
  iso6392BCode?: Maybe<Scalars['String']>;
  iso6393Code?: Maybe<Scalars['String']>;
};

export type LanguageAggs = {
  __typename?: 'LanguageAggs';
  family?: Maybe<AggOtherScalar>;
  isoName?: Maybe<AggOtherScalar>;
  nativeName?: Maybe<AggOtherScalar>;
  iso6391Code?: Maybe<AggOtherScalar>;
  iso6392TCode?: Maybe<AggOtherScalar>;
  iso6392BCode?: Maybe<AggOtherScalar>;
  iso6393Code?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Language */
export enum LanguageFields {
  Hypi = 'hypi',
  Family = 'family',
  IsoName = 'isoName',
  NativeName = 'nativeName',
  Iso6391Code = 'iso6391Code',
  Iso6392TCode = 'iso6392TCode',
  Iso6392BCode = 'iso6392BCode',
  Iso6393Code = 'iso6393Code',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type LanguageGroupByOptions = {
  /** The field by which to to group the matching data */
  field: LanguageScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type LanguageInput = {
  hypi?: Maybe<HypiInput>;
  family?: Maybe<Scalars['String']>;
  isoName?: Maybe<Scalars['String']>;
  nativeName?: Maybe<Scalars['String']>;
  iso6391Code?: Maybe<Scalars['String']>;
  iso6392TCode?: Maybe<Scalars['String']>;
  iso6392BCode?: Maybe<Scalars['String']>;
  iso6393Code?: Maybe<Scalars['String']>;
};

export type LanguageInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  family?: Maybe<Scalars['String']>;
  isoName?: Maybe<Scalars['String']>;
  nativeName?: Maybe<Scalars['String']>;
  iso6391Code?: Maybe<Scalars['String']>;
  iso6392TCode?: Maybe<Scalars['String']>;
  iso6392BCode?: Maybe<Scalars['String']>;
  iso6393Code?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by Language */
export enum LanguageScalarFields {
  Family = 'family',
  IsoName = 'isoName',
  NativeName = 'nativeName',
  Iso6391Code = 'iso6391Code',
  Iso6392TCode = 'iso6392TCode',
  Iso6392BCode = 'iso6392BCode',
  Iso6393Code = 'iso6393Code',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/**  Logging */
export enum LogLevel {
  Debug = 'DEBUG',
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR'
}

export type LogMessage = {
  __typename?: 'LogMessage';
  hypi?: Maybe<Hypi>;
  level: LogLevel;
  message?: Maybe<Scalars['String']>;
  stackTrace?: Maybe<Scalars['String']>;
  /** Optional, may not be a stacktrace */
  releaseId?: Maybe<Scalars['String']>;
  /** This is optional, we can have system messages that aren't from an app */
  type?: Maybe<Scalars['String']>;
  /** The name of the GraphQL type that the log is for, this is also optional */
  workflow?: Maybe<Scalars['String']>;
};

export type LogMessageAggs = {
  __typename?: 'LogMessageAggs';
  level?: Maybe<AggOtherScalar>;
  message?: Maybe<AggOtherScalar>;
  stackTrace?: Maybe<AggOtherScalar>;
  releaseId?: Maybe<AggOtherScalar>;
  type?: Maybe<AggOtherScalar>;
  workflow?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by LogMessage */
export enum LogMessageFields {
  Hypi = 'hypi',
  Level = 'level',
  Message = 'message',
  StackTrace = 'stackTrace',
  /** Optional, may not be a stacktrace */
  ReleaseId = 'releaseId',
  /** This is optional, we can have system messages that aren't from an app */
  Type = 'type',
  /** The name of the GraphQL type that the log is for, this is also optional */
  Workflow = 'workflow',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type LogMessageGroupByOptions = {
  /** The field by which to to group the matching data */
  field: LogMessageScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type LogMessageInput = {
  hypi?: Maybe<HypiInput>;
  level: LogLevel;
  message?: Maybe<Scalars['String']>;
  stackTrace?: Maybe<Scalars['String']>;
  releaseId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workflow?: Maybe<Scalars['String']>;
};

export type LogMessageInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  level?: Maybe<LogLevel>;
  message?: Maybe<Scalars['String']>;
  stackTrace?: Maybe<Scalars['String']>;
  releaseId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  workflow?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by LogMessage */
export enum LogMessageScalarFields {
  Level = 'level',
  Message = 'message',
  StackTrace = 'stackTrace',
  /** Optional, may not be a stacktrace */
  ReleaseId = 'releaseId',
  /** This is optional, we can have system messages that aren't from an app */
  Type = 'type',
  /** The name of the GraphQL type that the log is for, this is also optional */
  Workflow = 'workflow',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type LoginAttempt = {
  __typename?: 'LoginAttempt';
  hypi?: Maybe<Hypi>;
  successful?: Maybe<Scalars['Boolean']>;
  errorCode?: Maybe<Scalars['String']>;
};

export type LoginAttemptAggs = {
  __typename?: 'LoginAttemptAggs';
  successful?: Maybe<AggOtherScalar>;
  errorCode?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by LoginAttempt */
export enum LoginAttemptFields {
  Hypi = 'hypi',
  Successful = 'successful',
  ErrorCode = 'errorCode',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type LoginAttemptGroupByOptions = {
  /** The field by which to to group the matching data */
  field: LoginAttemptScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type LoginAttemptInput = {
  hypi?: Maybe<HypiInput>;
  successful?: Maybe<Scalars['Boolean']>;
  errorCode?: Maybe<Scalars['String']>;
};

export type LoginAttemptInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  successful?: Maybe<Scalars['Boolean']>;
  errorCode?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by LoginAttempt */
export enum LoginAttemptScalarFields {
  Successful = 'successful',
  ErrorCode = 'errorCode',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}


/**
 * The precedence of the operations follows BODMAS. https://en.wikipedia.org/wiki/Order_of_operations
 * For clarity if all fields are specified the precedence is:
 * 1. Divsion
 * 2. Multiplication
 * 3. Subtraction
 * 4. Addition
 */
export type MathInputFloat = {
  div?: Maybe<Scalars['Float']>;
  times?: Maybe<Scalars['Float']>;
  minus?: Maybe<Scalars['Float']>;
  plus?: Maybe<Scalars['Float']>;
  hypi: HypiInput;
};

/**
 * The precedence of the operations follows BODMAS. https://en.wikipedia.org/wiki/Order_of_operations
 * For clarity if all fields are specified the precedence is:
 * 1. Divsion
 * 2. Multiplication
 * 3. Subtraction
 * 4. Addition
 */
export type MathInputInt = {
  div?: Maybe<Scalars['Int']>;
  times?: Maybe<Scalars['Int']>;
  minus?: Maybe<Scalars['Int']>;
  plus?: Maybe<Scalars['Int']>;
  hypi: HypiInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Removes the link between two objects WITHOUT deleting either object */
  unlink: Scalars['Boolean'];
  /** Creates a relationship between two existing objects via some field on the source type */
  link: Scalars['Boolean'];
  /** Inserts or updates a set of values. To update an existing value provide the hypi.id */
  upsert: Array<Hypi>;
  /** Marks any object that matches the filter as NOT trash if they were previous trashed with the 'trash' function */
  untrash: Scalars['Int'];
  math: Array<Hypi>;
  /** Deletes any objects matching the query up to a maximum of 25 (regardless of the first/last arguments if they are bigger than 25) */
  delete: Scalars['Int'];
  /** Deletes the given scalar values from the object with the given ID from the field in the specified type */
  deleteScalars: Scalars['Int'];
  /** Marks any object that matches the filter as trash. Those objects will not be returned in get or find queries unless they're marked as not trash later. Maximum of 25 will be trashed (regardless of the first/last arguments if they are bigger than 25) */
  trash: Scalars['Int'];
  /** Used to perform registration of a new realm. Normally only Hypi directly calls this */
  createRealm?: Maybe<Hypi>;
  /** Creates a new account which can be used to login and perform various actions in a Realm */
  createAccount?: Maybe<Hypi>;
};


export type MutationUnlinkArgs = {
  from: HypiMutationType;
  to: HypiMutationType;
  via: Scalars['String'];
  whereFromID: Scalars['String'];
  andToID: Scalars['String'];
  fromInstanceId?: Maybe<Scalars['String']>;
  toInstanceId?: Maybe<Scalars['String']>;
};


export type MutationLinkArgs = {
  from: HypiMutationType;
  to: HypiMutationType;
  via: Scalars['String'];
  whereFromID: Scalars['String'];
  andToID: Scalars['String'];
  fromInstanceId?: Maybe<Scalars['String']>;
  toInstanceId?: Maybe<Scalars['String']>;
};


export type MutationUpsertArgs = {
  values: HypiUpsertInputUnion;
};


export type MutationUntrashArgs = {
  type: HypiMutationType;
  arcql: Scalars['String'];
};


export type MutationMathArgs = {
  values?: Maybe<HypiMathType>;
};


export type MutationDeleteArgs = {
  type: HypiMutationType;
  arcql: Scalars['String'];
  clearArrayReferences?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteScalarsArgs = {
  type: HypiMutationType;
  field: Scalars['String'];
  values: Array<Scalars['String']>;
  arcql: Scalars['String'];
};


export type MutationTrashArgs = {
  type: HypiMutationType;
  arcql: Scalars['String'];
};


export type MutationCreateRealmArgs = {
  value: RealmInput;
};


export type MutationCreateAccountArgs = {
  value: AccountInput;
};

/** Events that can be raised by the system to inform you about errors or other state that happened asynchronously, hence you may not otherwise have been told this info. */
export type Notification = {
  __typename?: 'Notification';
  hypi?: Maybe<Hypi>;
  message?: Maybe<Scalars['String']>;
  ctx?: Maybe<NotificationCtx>;
};

export type NotificationAggs = {
  __typename?: 'NotificationAggs';
  message?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
  ctx_type?: Maybe<AggOtherScalar>;
  ctx_targetAccount?: Maybe<AggOtherScalar>;
};

export type NotificationCtx = {
  __typename?: 'NotificationCtx';
  hypi?: Maybe<Hypi>;
  /** The type that the notification applies to */
  type?: Maybe<Scalars['String']>;
  targetAccount?: Maybe<Scalars['ID']>;
};

export type NotificationCtxAggs = {
  __typename?: 'NotificationCtxAggs';
  type?: Maybe<AggOtherScalar>;
  targetAccount?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by NotificationCtx */
export enum NotificationCtxFields {
  Hypi = 'hypi',
  /** The type that the notification applies to */
  Type = 'type',
  TargetAccount = 'targetAccount',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type NotificationCtxGroupByOptions = {
  /** The field by which to to group the matching data */
  field: NotificationCtxScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type NotificationCtxInput = {
  hypi?: Maybe<HypiInput>;
  type?: Maybe<Scalars['String']>;
  targetAccount?: Maybe<Scalars['ID']>;
};

export type NotificationCtxInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  type?: Maybe<Scalars['String']>;
  targetAccount?: Maybe<Scalars['ID']>;
};

/** Scalar fields defined by NotificationCtx */
export enum NotificationCtxScalarFields {
  /** The type that the notification applies to */
  Type = 'type',
  TargetAccount = 'targetAccount',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** All fields defined by Notification */
export enum NotificationFields {
  Hypi = 'hypi',
  Message = 'message',
  Ctx = 'ctx',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  CtxHypi = 'ctx_hypi',
  CtxType = 'ctx_type',
  CtxTargetAccount = 'ctx_targetAccount'
}

export type NotificationGroupByOptions = {
  /** The field by which to to group the matching data */
  field: NotificationScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type NotificationInput = {
  hypi?: Maybe<HypiInput>;
  message?: Maybe<Scalars['String']>;
  ctx?: Maybe<NotificationCtxInput>;
};

export type NotificationInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  message?: Maybe<Scalars['String']>;
  ctx?: Maybe<NotificationCtxInputOpt>;
};

/** Scalar fields defined by Notification */
export enum NotificationScalarFields {
  Message = 'message',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  CtxType = 'ctx_type',
  CtxTargetAccount = 'ctx_targetAccount'
}

export type OAuth2AuthorizedClient = {
  __typename?: 'OAuth2AuthorizedClient';
  hypi?: Maybe<Hypi>;
  clientRegistrationId?: Maybe<Scalars['String']>;
  principalName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type OAuth2AuthorizedClientAggs = {
  __typename?: 'OAuth2AuthorizedClientAggs';
  clientRegistrationId?: Maybe<AggOtherScalar>;
  principalName?: Maybe<AggOtherScalar>;
  accessToken?: Maybe<AggOtherScalar>;
  refreshToken?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by OAuth2AuthorizedClient */
export enum OAuth2AuthorizedClientFields {
  Hypi = 'hypi',
  ClientRegistrationId = 'clientRegistrationId',
  PrincipalName = 'principalName',
  AccessToken = 'accessToken',
  RefreshToken = 'refreshToken',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type OAuth2AuthorizedClientGroupByOptions = {
  /** The field by which to to group the matching data */
  field: OAuth2AuthorizedClientScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type OAuth2AuthorizedClientInput = {
  hypi?: Maybe<HypiInput>;
  clientRegistrationId?: Maybe<Scalars['String']>;
  principalName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type OAuth2AuthorizedClientInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  clientRegistrationId?: Maybe<Scalars['String']>;
  principalName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by OAuth2AuthorizedClient */
export enum OAuth2AuthorizedClientScalarFields {
  ClientRegistrationId = 'clientRegistrationId',
  PrincipalName = 'principalName',
  AccessToken = 'accessToken',
  RefreshToken = 'refreshToken',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type OAuthProvider = {
  __typename?: 'OAuthProvider';
  hypi?: Maybe<Hypi>;
  /**  instanceId-(hypi.id = registrationId) */
  clientId: Scalars['String'];
  clientSecret: Scalars['String'];
  clientAuthenticationMethod?: Maybe<ClientAuthenticationMethod>;
  authorizationGrantType?: Maybe<AuthorizationGrantType>;
  redirectUriTemplate?: Maybe<Scalars['String']>;
  authorizationUri?: Maybe<Scalars['String']>;
  tokenUri?: Maybe<Scalars['String']>;
  userInfoUri?: Maybe<Scalars['String']>;
  userInfoAuthenticationMethod?: Maybe<AuthenticationMethod>;
  userNameAttributeName?: Maybe<UserNameAttributeName>;
  jwkSetUri?: Maybe<Scalars['String']>;
  clientName?: Maybe<Scalars['String']>;
  hypiSuccessRedirectUri?: Maybe<Scalars['String']>;
  hypiFailureRedirectUri?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Scalars['String']>>;
  configurationMetadata?: Maybe<Array<Pair>>;
};


export type OAuthProviderScopesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type OAuthProviderConfigurationMetadataArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type OAuthProviderAggs = {
  __typename?: 'OAuthProviderAggs';
  clientId?: Maybe<AggOtherScalar>;
  clientSecret?: Maybe<AggOtherScalar>;
  clientAuthenticationMethod?: Maybe<AggOtherScalar>;
  authorizationGrantType?: Maybe<AggOtherScalar>;
  redirectUriTemplate?: Maybe<AggOtherScalar>;
  authorizationUri?: Maybe<AggOtherScalar>;
  tokenUri?: Maybe<AggOtherScalar>;
  userInfoUri?: Maybe<AggOtherScalar>;
  userInfoAuthenticationMethod?: Maybe<AggOtherScalar>;
  userNameAttributeName?: Maybe<AggOtherScalar>;
  jwkSetUri?: Maybe<AggOtherScalar>;
  clientName?: Maybe<AggOtherScalar>;
  hypiSuccessRedirectUri?: Maybe<AggOtherScalar>;
  hypiFailureRedirectUri?: Maybe<AggOtherScalar>;
  scopes?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by OAuthProvider */
export enum OAuthProviderFields {
  Hypi = 'hypi',
  /**  instanceId-(hypi.id = registrationId) */
  ClientId = 'clientId',
  ClientSecret = 'clientSecret',
  ClientAuthenticationMethod = 'clientAuthenticationMethod',
  AuthorizationGrantType = 'authorizationGrantType',
  RedirectUriTemplate = 'redirectUriTemplate',
  AuthorizationUri = 'authorizationUri',
  TokenUri = 'tokenUri',
  UserInfoUri = 'userInfoUri',
  UserInfoAuthenticationMethod = 'userInfoAuthenticationMethod',
  UserNameAttributeName = 'userNameAttributeName',
  JwkSetUri = 'jwkSetUri',
  ClientName = 'clientName',
  HypiSuccessRedirectUri = 'hypiSuccessRedirectUri',
  HypiFailureRedirectUri = 'hypiFailureRedirectUri',
  Scopes = 'scopes',
  ConfigurationMetadata = 'configurationMetadata',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type OAuthProviderGroupByOptions = {
  /** The field by which to to group the matching data */
  field: OAuthProviderScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type OAuthProviderInput = {
  hypi?: Maybe<HypiInput>;
  clientId: Scalars['String'];
  clientSecret: Scalars['String'];
  clientAuthenticationMethod?: Maybe<ClientAuthenticationMethod>;
  authorizationGrantType?: Maybe<AuthorizationGrantType>;
  redirectUriTemplate?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Scalars['String']>>;
  authorizationUri?: Maybe<Scalars['String']>;
  tokenUri?: Maybe<Scalars['String']>;
  userInfoUri?: Maybe<Scalars['String']>;
  userInfoAuthenticationMethod?: Maybe<AuthenticationMethod>;
  userNameAttributeName?: Maybe<UserNameAttributeName>;
  jwkSetUri?: Maybe<Scalars['String']>;
  configurationMetadata?: Maybe<Array<PairInput>>;
  clientName?: Maybe<Scalars['String']>;
  hypiSuccessRedirectUri?: Maybe<Scalars['String']>;
  hypiFailureRedirectUri?: Maybe<Scalars['String']>;
};

export type OAuthProviderInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  clientAuthenticationMethod?: Maybe<ClientAuthenticationMethod>;
  authorizationGrantType?: Maybe<AuthorizationGrantType>;
  redirectUriTemplate?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorizationUri?: Maybe<Scalars['String']>;
  tokenUri?: Maybe<Scalars['String']>;
  userInfoUri?: Maybe<Scalars['String']>;
  userInfoAuthenticationMethod?: Maybe<AuthenticationMethod>;
  userNameAttributeName?: Maybe<UserNameAttributeName>;
  jwkSetUri?: Maybe<Scalars['String']>;
  configurationMetadata?: Maybe<Array<Maybe<PairInputOpt>>>;
  clientName?: Maybe<Scalars['String']>;
  hypiSuccessRedirectUri?: Maybe<Scalars['String']>;
  hypiFailureRedirectUri?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by OAuthProvider */
export enum OAuthProviderScalarFields {
  /**  instanceId-(hypi.id = registrationId) */
  ClientId = 'clientId',
  ClientSecret = 'clientSecret',
  ClientAuthenticationMethod = 'clientAuthenticationMethod',
  AuthorizationGrantType = 'authorizationGrantType',
  RedirectUriTemplate = 'redirectUriTemplate',
  AuthorizationUri = 'authorizationUri',
  TokenUri = 'tokenUri',
  UserInfoUri = 'userInfoUri',
  UserInfoAuthenticationMethod = 'userInfoAuthenticationMethod',
  UserNameAttributeName = 'userNameAttributeName',
  JwkSetUri = 'jwkSetUri',
  ClientName = 'clientName',
  HypiSuccessRedirectUri = 'hypiSuccessRedirectUri',
  HypiFailureRedirectUri = 'hypiFailureRedirectUri',
  Scopes = 'scopes',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** The types of GraphQL queries */
export enum OpType {
  Query = 'Query',
  Mutation = 'Mutation',
  Subscription = 'Subscription'
}

/** Used to represent arbitrary customer specific collections of entities e.g. an Organisation, a Meetup or Friends */
export type Organisation = {
  __typename?: 'Organisation';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  logo?: Maybe<Image>;
  incorporated?: Maybe<Scalars['DateTime']>;
  addresses?: Maybe<Array<Address>>;
  phones?: Maybe<Array<Phone>>;
  emails?: Maybe<Array<Email>>;
  members?: Maybe<Array<Account>>;
  subsidiaries?: Maybe<Array<Organisation>>;
};


/** Used to represent arbitrary customer specific collections of entities e.g. an Organisation, a Meetup or Friends */
export type OrganisationAddressesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/** Used to represent arbitrary customer specific collections of entities e.g. an Organisation, a Meetup or Friends */
export type OrganisationPhonesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/** Used to represent arbitrary customer specific collections of entities e.g. an Organisation, a Meetup or Friends */
export type OrganisationEmailsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/** Used to represent arbitrary customer specific collections of entities e.g. an Organisation, a Meetup or Friends */
export type OrganisationMembersArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


/** Used to represent arbitrary customer specific collections of entities e.g. an Organisation, a Meetup or Friends */
export type OrganisationSubsidiariesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type OrganisationAggs = {
  __typename?: 'OrganisationAggs';
  name?: Maybe<AggOtherScalar>;
  incorporated?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Organisation */
export enum OrganisationFields {
  Hypi = 'hypi',
  Name = 'name',
  Logo = 'logo',
  Incorporated = 'incorporated',
  Addresses = 'addresses',
  Phones = 'phones',
  Emails = 'emails',
  Members = 'members',
  Subsidiaries = 'subsidiaries',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type OrganisationGroupByOptions = {
  /** The field by which to to group the matching data */
  field: OrganisationScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type OrganisationInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  logo?: Maybe<ImageInput>;
  addresses?: Maybe<Array<AddressInput>>;
  incorporated?: Maybe<Scalars['DateTime']>;
  phones?: Maybe<Array<PhoneInput>>;
  emails?: Maybe<Array<EmailInput>>;
  members?: Maybe<Array<AccountInput>>;
  subsidiaries?: Maybe<Array<OrganisationInput>>;
};

export type OrganisationInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<ImageInputOpt>;
  addresses?: Maybe<Array<Maybe<AddressInputOpt>>>;
  incorporated?: Maybe<Scalars['DateTime']>;
  phones?: Maybe<Array<Maybe<PhoneInputOpt>>>;
  emails?: Maybe<Array<Maybe<EmailInputOpt>>>;
  members?: Maybe<Array<Maybe<AccountInputOpt>>>;
  subsidiaries?: Maybe<Array<Maybe<OrganisationInputOpt>>>;
};

/** Scalar fields defined by Organisation */
export enum OrganisationScalarFields {
  Name = 'name',
  Incorporated = 'incorporated',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** See https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: 'PageInfo';
  hypi?: Maybe<Hypi>;
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['ID'];
  /** relay modern - https://relay.dev/graphql/connections.htm#note-95f8a */
  endCursor: Scalars['ID'];
  /**
   * relay modern
   * If present, is the page size that is used to generate the previousOffsets and nextOffsets if they're present
   */
  pageLimit?: Maybe<Scalars['Int']>;
  /** If present, contains the pagination cursors that can be used to get the previous N pages */
  previousOffsets?: Maybe<Array<Scalars['String']>>;
  /** If present, contains the pagination cursors that can be used to get the next N pages */
  nextOffsets?: Maybe<Array<Scalars['String']>>;
};

export type Pair = {
  __typename?: 'Pair';
  hypi?: Maybe<Hypi>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** All fields defined by Pair */
export enum PairFields {
  Hypi = 'hypi',
  Key = 'key',
  Value = 'value',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type PairInput = {
  hypi?: Maybe<HypiInput>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PairInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by Pair */
export enum PairScalarFields {
  Key = 'key',
  Value = 'value',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Password = {
  __typename?: 'Password';
  hypi?: Maybe<Hypi>;
  /**
   * password is never returned
   * further, the @secret directive enforces this, queries can be use to perform comparison against the field but it is never returned
   */
  value: Scalars['String'];
  expired?: Maybe<Scalars['Boolean']>;
};

export type PasswordAggs = {
  __typename?: 'PasswordAggs';
  value?: Maybe<AggOtherScalar>;
  expired?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Password */
export enum PasswordFields {
  Hypi = 'hypi',
  /**
   * password is never returned
   * further, the @secret directive enforces this, queries can be use to perform comparison against the field but it is never returned
   */
  Value = 'value',
  Expired = 'expired',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type PasswordGroupByOptions = {
  /** The field by which to to group the matching data */
  field: PasswordScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type PasswordInput = {
  hypi?: Maybe<HypiInput>;
  value: Scalars['String'];
  expired?: Maybe<Scalars['Boolean']>;
};

export type PasswordInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  value?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
};

/**
 * To reset an Account's password, create a `PasswordReminder`.
 *
 * This will generate a code in the `code` field that can be referenced using $!{parent.code} in the `htmlMessage` or `plainTextMessage` fields.
 *
 * This will send an email to the email in the `to` field. In the message you should provide a link to a URL where the user can enter their new password.
 * Include the code in this URL e.g. https://my-app.com/reset-password?code=$!{parent.code}.
 *
 * When the user gets to this page, you will have the password reset code in the URL query string. Get this code from the URL
 * and when the user enter their new password, make a POST request to the Hypi API e.g.
 * POST <hypi-domain>/email/reset/<domain> - where <domain> is app instance domain.
 *
 * In the body of the request send a JSON like this:
 * {"code": "<the-code-from-the-URL>", "password": "<the-user's-new-password>"}
 *
 * Hypi will change the user's password and return HTTP status 200.
 */
export type PasswordReminder = {
  __typename?: 'PasswordReminder';
  hypi?: Maybe<Hypi>;
  /** If true the reset code has not yet been used. */
  valid?: Maybe<Scalars['Boolean']>;
  /** The verification code that is included in the email sent. Generated by the server, if provided the provided value is ignored */
  code?: Maybe<Scalars['String']>;
  /** The Account email that needs to be changed */
  to: Email;
  /** Optionally, the email from which the email will be sent. You MUST have a Hypi email app configured to send from this address */
  from?: Maybe<Scalars['String']>;
  /** Optionally, the subject of the email, this is a velocity template - Hypi provides a default such as "Please verify your email to <realm>" */
  subject?: Maybe<Scalars['String']>;
  /**
   * The HTML contents of the email. This is a Velocity template that will be rendered before being sent.
   * The available variables and their types are:
   * instance: AppId - You app instance ID
   * parent - a map representing the current EmailVerification object
   * value - the value of the htmlMessage field
   * env: HypiEnv
   */
  htmlMessage?: Maybe<Scalars['String']>;
  /** A plain text version of the email - see this is a velocity template, see htmlMessage for available variables */
  plainTextMessage?: Maybe<Scalars['String']>;
};

export type PasswordReminderAggs = {
  __typename?: 'PasswordReminderAggs';
  valid?: Maybe<AggOtherScalar>;
  code?: Maybe<AggOtherScalar>;
  from?: Maybe<AggOtherScalar>;
  subject?: Maybe<AggOtherScalar>;
  htmlMessage?: Maybe<AggOtherScalar>;
  plainTextMessage?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
  to_value?: Maybe<AggOtherScalar>;
  to_type?: Maybe<AggOtherScalar>;
};

/** All fields defined by PasswordReminder */
export enum PasswordReminderFields {
  Hypi = 'hypi',
  /** If true the reset code has not yet been used. */
  Valid = 'valid',
  /** The verification code that is included in the email sent. Generated by the server, if provided the provided value is ignored */
  Code = 'code',
  /** The Account email that needs to be changed */
  To = 'to',
  /** Optionally, the email from which the email will be sent. You MUST have a Hypi email app configured to send from this address */
  From = 'from',
  /** Optionally, the subject of the email, this is a velocity template - Hypi provides a default such as "Please verify your email to <realm>" */
  Subject = 'subject',
  /**
   * The HTML contents of the email. This is a Velocity template that will be rendered before being sent.
   * The available variables and their types are:
   * instance: AppId - You app instance ID
   * parent - a map representing the current EmailVerification object
   * value - the value of the htmlMessage field
   * env: HypiEnv
   */
  HtmlMessage = 'htmlMessage',
  /** A plain text version of the email - see this is a velocity template, see htmlMessage for available variables */
  PlainTextMessage = 'plainTextMessage',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /** The Account email that needs to be changed */
  ToHypi = 'to_hypi',
  /** The Account email that needs to be changed */
  ToValue = 'to_value',
  /** The Account email that needs to be changed */
  ToType = 'to_type'
}

export type PasswordReminderGroupByOptions = {
  /** The field by which to to group the matching data */
  field: PasswordReminderScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type PasswordReminderInput = {
  hypi?: Maybe<HypiInput>;
  valid?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  to: EmailInput;
  from?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  htmlMessage?: Maybe<Scalars['String']>;
  plainTextMessage?: Maybe<Scalars['String']>;
};

export type PasswordReminderInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  valid?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  to?: Maybe<EmailInputOpt>;
  from?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  htmlMessage?: Maybe<Scalars['String']>;
  plainTextMessage?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by PasswordReminder */
export enum PasswordReminderScalarFields {
  /** If true the reset code has not yet been used. */
  Valid = 'valid',
  /** The verification code that is included in the email sent. Generated by the server, if provided the provided value is ignored */
  Code = 'code',
  /** Optionally, the email from which the email will be sent. You MUST have a Hypi email app configured to send from this address */
  From = 'from',
  /** Optionally, the subject of the email, this is a velocity template - Hypi provides a default such as "Please verify your email to <realm>" */
  Subject = 'subject',
  /**
   * The HTML contents of the email. This is a Velocity template that will be rendered before being sent.
   * The available variables and their types are:
   * instance: AppId - You app instance ID
   * parent - a map representing the current EmailVerification object
   * value - the value of the htmlMessage field
   * env: HypiEnv
   */
  HtmlMessage = 'htmlMessage',
  /** A plain text version of the email - see this is a velocity template, see htmlMessage for available variables */
  PlainTextMessage = 'plainTextMessage',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /** The Account email that needs to be changed */
  ToValue = 'to_value',
  /** The Account email that needs to be changed */
  ToType = 'to_type'
}

/** Scalar fields defined by Password */
export enum PasswordScalarFields {
  /**
   * password is never returned
   * further, the @secret directive enforces this, queries can be use to perform comparison against the field but it is never returned
   */
  Value = 'value',
  Expired = 'expired',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Permission = {
  __typename?: 'Permission';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  /** defines how the policy arrives at a decision, defaults to Unanimous */
  decisionStrategy?: Maybe<DecisionStrategy>;
  /** The type that this permission applies to */
  type: Scalars['String'];
  /**
   * If present then the scopes in this permission will have the given policies applied to this resource.
   * This can be used for example to prevent mutation on a resource by a user, group etc
   */
  resource?: Maybe<Scalars['String']>;
  /** Query, Mutation or Subscription */
  operationType: OpType;
  /** If true, this permission grants/denies access to all accounts (including anonymous account) */
  includeAllAccounts?: Maybe<Scalars['Boolean']>;
  /**
   * When a Permission is created, the instance to which it grants access is assumed to be the same as the one in which it is created.
   * This means - if this field is not provided, it will be set to the current instance by default.
   * Some times, it is necessary to grant permission to a resource that exists in a different instance.
   * In those cases, this field can be set to the instance ID from which the resource needs to be accessed.
   * It is also possible to set this to the wildcard character '*' - in which case, this permission grants access to the resource from any instance.
   * Note that wildcard can only be used to grant access, by default, access is denied to all other instances
   * so a negative policy will have no effect when this field is set to '*'.
   */
  targetInstance?: Maybe<Scalars['String']>;
  policies?: Maybe<Array<Policy>>;
  scopes: Array<Scalars['String']>;
  operations: Array<Maybe<Scalars['String']>>;
};


export type PermissionPoliciesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type PermissionScopesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type PermissionOperationsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type PermissionAggs = {
  __typename?: 'PermissionAggs';
  name?: Maybe<AggOtherScalar>;
  decisionStrategy?: Maybe<AggOtherScalar>;
  type?: Maybe<AggOtherScalar>;
  resource?: Maybe<AggOtherScalar>;
  operationType?: Maybe<AggOtherScalar>;
  includeAllAccounts?: Maybe<AggOtherScalar>;
  targetInstance?: Maybe<AggOtherScalar>;
  scopes?: Maybe<AggOtherScalar>;
  operations?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

export type PermissionDescription = {
  __typename?: 'PermissionDescription';
  hypi?: Maybe<Hypi>;
  roles?: Maybe<Array<Role>>;
  groups?: Maybe<Array<Group>>;
  organisations?: Maybe<Array<Organisation>>;
  realms?: Maybe<Array<Realm>>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
};


export type PermissionDescriptionPermissionsArgs = {
  after?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  resources?: Maybe<Array<Scalars['String']>>;
};

/** All fields defined by PermissionDescription */
export enum PermissionDescriptionFields {
  Hypi = 'hypi',
  Roles = 'roles',
  Groups = 'groups',
  Organisations = 'organisations',
  Realms = 'realms',
  Permissions = 'permissions',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Scalar fields defined by PermissionDescription */
export enum PermissionDescriptionScalarFields {
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** All fields defined by Permission */
export enum PermissionFields {
  Hypi = 'hypi',
  Name = 'name',
  /** defines how the policy arrives at a decision, defaults to Unanimous */
  DecisionStrategy = 'decisionStrategy',
  /** The type that this permission applies to */
  Type = 'type',
  /**
   * If present then the scopes in this permission will have the given policies applied to this resource.
   * This can be used for example to prevent mutation on a resource by a user, group etc
   */
  Resource = 'resource',
  /** Query, Mutation or Subscription */
  OperationType = 'operationType',
  /** If true, this permission grants/denies access to all accounts (including anonymous account) */
  IncludeAllAccounts = 'includeAllAccounts',
  /**
   * When a Permission is created, the instance to which it grants access is assumed to be the same as the one in which it is created.
   * This means - if this field is not provided, it will be set to the current instance by default.
   * Some times, it is necessary to grant permission to a resource that exists in a different instance.
   * In those cases, this field can be set to the instance ID from which the resource needs to be accessed.
   * It is also possible to set this to the wildcard character '*' - in which case, this permission grants access to the resource from any instance.
   * Note that wildcard can only be used to grant access, by default, access is denied to all other instances
   * so a negative policy will have no effect when this field is set to '*'.
   */
  TargetInstance = 'targetInstance',
  Policies = 'policies',
  Scopes = 'scopes',
  Operations = 'operations',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type PermissionGroupByOptions = {
  /** The field by which to to group the matching data */
  field: PermissionScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type PermissionInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  policies?: Maybe<Array<PolicyInput>>;
  decisionStrategy?: Maybe<DecisionStrategy>;
  type: Scalars['String'];
  scopes: Array<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  operationType: OpType;
  operations: Array<Maybe<Scalars['String']>>;
  includeAllAccounts?: Maybe<Scalars['Boolean']>;
  targetInstance?: Maybe<Scalars['String']>;
};

export type PermissionInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  policies?: Maybe<Array<Maybe<PolicyInputOpt>>>;
  decisionStrategy?: Maybe<DecisionStrategy>;
  type?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  resource?: Maybe<Scalars['String']>;
  operationType?: Maybe<OpType>;
  operations?: Maybe<Array<Maybe<Scalars['String']>>>;
  includeAllAccounts?: Maybe<Scalars['Boolean']>;
  targetInstance?: Maybe<Scalars['String']>;
};

export type PermissionRequest = {
  opType: OpType;
  operationName: Scalars['String'];
  type: Scalars['String'];
  scopes: Array<Scalars['String']>;
  resource: Scalars['String'];
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

/** Scalar fields defined by Permission */
export enum PermissionScalarFields {
  Name = 'name',
  /** defines how the policy arrives at a decision, defaults to Unanimous */
  DecisionStrategy = 'decisionStrategy',
  /** The type that this permission applies to */
  Type = 'type',
  /**
   * If present then the scopes in this permission will have the given policies applied to this resource.
   * This can be used for example to prevent mutation on a resource by a user, group etc
   */
  Resource = 'resource',
  /** Query, Mutation or Subscription */
  OperationType = 'operationType',
  /** If true, this permission grants/denies access to all accounts (including anonymous account) */
  IncludeAllAccounts = 'includeAllAccounts',
  /**
   * When a Permission is created, the instance to which it grants access is assumed to be the same as the one in which it is created.
   * This means - if this field is not provided, it will be set to the current instance by default.
   * Some times, it is necessary to grant permission to a resource that exists in a different instance.
   * In those cases, this field can be set to the instance ID from which the resource needs to be accessed.
   * It is also possible to set this to the wildcard character '*' - in which case, this permission grants access to the resource from any instance.
   * Note that wildcard can only be used to grant access, by default, access is denied to all other instances
   * so a negative policy will have no effect when this field is set to '*'.
   */
  TargetInstance = 'targetInstance',
  Scopes = 'scopes',
  Operations = 'operations',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Person = {
  __typename?: 'Person';
  hypi?: Maybe<Hypi>;
  dob?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  avatar?: Maybe<Image>;
  names: Array<PersonName>;
  addresses?: Maybe<Array<Address>>;
  phones?: Maybe<Array<Phone>>;
  roles?: Maybe<Array<Pair>>;
  preferences?: Maybe<Array<Pair>>;
};


export type PersonNamesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type PersonAddressesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type PersonPhonesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type PersonRolesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type PersonPreferencesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type PersonAggs = {
  __typename?: 'PersonAggs';
  dob?: Maybe<AggOtherScalar>;
  gender?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Person */
export enum PersonFields {
  Hypi = 'hypi',
  Dob = 'dob',
  Gender = 'gender',
  Avatar = 'avatar',
  Names = 'names',
  Addresses = 'addresses',
  Phones = 'phones',
  Roles = 'roles',
  Preferences = 'preferences',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type PersonGroupByOptions = {
  /** The field by which to to group the matching data */
  field: PersonScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type PersonInput = {
  hypi?: Maybe<HypiInput>;
  names: Array<PersonNameInput>;
  addresses?: Maybe<Array<AddressInput>>;
  phones?: Maybe<Array<PhoneInput>>;
  dob?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  avatar?: Maybe<ImageInput>;
  roles?: Maybe<Array<PairInput>>;
  preferences?: Maybe<Array<PairInput>>;
};

export type PersonInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  names?: Maybe<Array<Maybe<PersonNameInputOpt>>>;
  addresses?: Maybe<Array<Maybe<AddressInputOpt>>>;
  phones?: Maybe<Array<Maybe<PhoneInputOpt>>>;
  dob?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  avatar?: Maybe<ImageInputOpt>;
  roles?: Maybe<Array<Maybe<PairInputOpt>>>;
  preferences?: Maybe<Array<Maybe<PairInputOpt>>>;
};

export type PersonName = {
  __typename?: 'PersonName';
  hypi?: Maybe<Hypi>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

export type PersonNameAggs = {
  __typename?: 'PersonNameAggs';
  title?: Maybe<AggOtherScalar>;
  firstName?: Maybe<AggOtherScalar>;
  lastName?: Maybe<AggOtherScalar>;
  from?: Maybe<AggOtherScalar>;
  to?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by PersonName */
export enum PersonNameFields {
  Hypi = 'hypi',
  Title = 'title',
  FirstName = 'firstName',
  LastName = 'lastName',
  From = 'from',
  To = 'to',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type PersonNameGroupByOptions = {
  /** The field by which to to group the matching data */
  field: PersonNameScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type PersonNameInput = {
  hypi?: Maybe<HypiInput>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

export type PersonNameInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

/** Scalar fields defined by PersonName */
export enum PersonNameScalarFields {
  Title = 'title',
  FirstName = 'firstName',
  LastName = 'lastName',
  From = 'from',
  To = 'to',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Scalar fields defined by Person */
export enum PersonScalarFields {
  Dob = 'dob',
  Gender = 'gender',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Phone = {
  __typename?: 'Phone';
  hypi?: Maybe<Hypi>;
  number: Scalars['String'];
  country?: Maybe<Country>;
  code?: Maybe<Scalars['String']>;
};

export type PhoneAggs = {
  __typename?: 'PhoneAggs';
  number?: Maybe<AggOtherScalar>;
  code?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Phone */
export enum PhoneFields {
  Hypi = 'hypi',
  Number = 'number',
  Country = 'country',
  Code = 'code',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type PhoneGroupByOptions = {
  /** The field by which to to group the matching data */
  field: PhoneScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type PhoneInput = {
  hypi?: Maybe<HypiInput>;
  number: Scalars['String'];
  country?: Maybe<CountryInput>;
  code?: Maybe<Scalars['String']>;
};

export type PhoneInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  number?: Maybe<Scalars['String']>;
  country?: Maybe<CountryInputOpt>;
  code?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by Phone */
export enum PhoneScalarFields {
  Number = 'number',
  Code = 'code',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Policy = {
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  /** Positive` or `Negative */
  logic?: Maybe<AuthLogic>;
};

export type PolicyInput = {
  realms?: Maybe<Array<RealmLinkInput>>;
  clients?: Maybe<Array<AuthClientInput>>;
  roles?: Maybe<Array<RoleInput>>;
  name: Scalars['String'];
  policies?: Maybe<Array<PolicyInput>>;
  groups?: Maybe<Array<GroupInput>>;
  from?: Maybe<Scalars['DateTime']>;
  hypi?: Maybe<HypiInput>;
  logic?: Maybe<AuthLogic>;
  to?: Maybe<Scalars['DateTime']>;
  accounts?: Maybe<Array<AccountInput>>;
  decisionStrategy?: Maybe<DecisionStrategy>;
};

export type PolicyInputOpt = {
  realms?: Maybe<Array<Maybe<RealmLinkInputOpt>>>;
  clients?: Maybe<Array<Maybe<AuthClientInputOpt>>>;
  roles?: Maybe<Array<Maybe<RoleInputOpt>>>;
  name?: Maybe<Scalars['String']>;
  policies?: Maybe<Array<Maybe<PolicyInputOpt>>>;
  groups?: Maybe<Array<Maybe<GroupInputOpt>>>;
  from?: Maybe<Scalars['DateTime']>;
  hypi?: Maybe<HypiInputOpt>;
  logic?: Maybe<AuthLogic>;
  to?: Maybe<Scalars['DateTime']>;
  accounts?: Maybe<Array<Maybe<AccountInputOpt>>>;
  decisionStrategy?: Maybe<DecisionStrategy>;
};

export type Product = {
  __typename?: 'Product';
  hypi?: Maybe<Hypi>;
  title: Scalars['String'];
  description: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
};

export type ProductAggs = {
  __typename?: 'ProductAggs';
  title?: Maybe<AggOtherScalar>;
  description?: Maybe<AggOtherScalar>;
  price?: Maybe<AggFloat>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Product */
export enum ProductFields {
  Hypi = 'hypi',
  Title = 'title',
  Description = 'description',
  Price = 'price',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type ProductGroupByOptions = {
  /** The field by which to to group the matching data */
  field: ProductScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type ProductInput = {
  hypi?: Maybe<HypiInput>;
  title: Scalars['String'];
  description: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
};

export type ProductInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductMaths = {
  price?: Maybe<MathInputFloat>;
};

/** All numeric fields defined by Product */
export enum ProductNumericFields {
  Price = 'price'
}

/** Scalar fields defined by Product */
export enum ProductScalarFields {
  Title = 'title',
  Description = 'description',
  Price = 'price',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Query = {
  __typename?: 'Query';
  /** Find objects of the given type which match the query. Use a conditional fragment to select fields as in https://graphql.org/learn/schema/#union-types */
  find: HypiFilterConnection;
  /** Gets a single object by its ID (hypi.id) */
  get?: Maybe<HypiRootAggregate>;
  aggregate?: Maybe<HypiAggregationType>;
  login?: Maybe<AccessToken>;
  loginByEmail?: Maybe<AccessToken>;
  me?: Maybe<PermissionDescription>;
  hasPermission?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type QueryFindArgs = {
  type: HypiMutationType;
  arcql: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  includeTrashed?: Maybe<Scalars['Boolean']>;
};


export type QueryGetArgs = {
  type: HypiMutationType;
  id: Scalars['String'];
};


export type QueryLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type QueryLoginByEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryHasPermissionArgs = {
  req: Array<PermissionRequest>;
};

/**  namespace for containing authz objects and their relationships. */
export type Realm = {
  __typename?: 'Realm';
  hypi?: Maybe<Hypi>;
  /**
   * the name identifying the organisation and becomes the URL by which it is accessed e.g. alpha-corp.hypi.app, where alpha-corp is name
   * If not provided one will be automatically generated
   */
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Image>;
  /** The name displayed in the user interface */
  displayName?: Maybe<Scalars['String']>;
  /** If true users can register without an admin creating their account */
  allowRegistrations?: Maybe<Scalars['Boolean']>;
  /** if true users must verify their email before they're allowed to login */
  verifyEmail?: Maybe<Scalars['Boolean']>;
  /** Optionally defines some options to help detect and protect against brute force login attempts */
  bruteForceDetection?: Maybe<BruteForceDetectionOptions>;
  referrer?: Maybe<Scalars['String']>;
  remoteLoginId?: Maybe<Scalars['String']>;
  organisations: Array<Organisation>;
};


/**  namespace for containing authz objects and their relationships. */
export type RealmOrganisationsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type RealmAggs = {
  __typename?: 'RealmAggs';
  name?: Maybe<AggOtherScalar>;
  displayName?: Maybe<AggOtherScalar>;
  allowRegistrations?: Maybe<AggOtherScalar>;
  verifyEmail?: Maybe<AggOtherScalar>;
  referrer?: Maybe<AggOtherScalar>;
  remoteLoginId?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Realm */
export enum RealmFields {
  Hypi = 'hypi',
  /**
   * the name identifying the organisation and becomes the URL by which it is accessed e.g. alpha-corp.hypi.app, where alpha-corp is name
   * If not provided one will be automatically generated
   */
  Name = 'name',
  Logo = 'logo',
  /** The name displayed in the user interface */
  DisplayName = 'displayName',
  /** If true users can register without an admin creating their account */
  AllowRegistrations = 'allowRegistrations',
  /** if true users must verify their email before they're allowed to login */
  VerifyEmail = 'verifyEmail',
  /** Optionally defines some options to help detect and protect against brute force login attempts */
  BruteForceDetection = 'bruteForceDetection',
  Referrer = 'referrer',
  RemoteLoginId = 'remoteLoginId',
  Organisations = 'organisations',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type RealmGroupByOptions = {
  /** The field by which to to group the matching data */
  field: RealmScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type RealmInput = {
  hypi?: Maybe<HypiInput>;
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<ImageInput>;
  displayName?: Maybe<Scalars['String']>;
  allowRegistrations?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  bruteForceDetection?: Maybe<BruteForceDetectionOptionsInput>;
  organisations: Array<OrganisationInput>;
  referrer?: Maybe<Scalars['String']>;
  remoteLoginId?: Maybe<Scalars['String']>;
};

export type RealmInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<ImageInputOpt>;
  displayName?: Maybe<Scalars['String']>;
  allowRegistrations?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  bruteForceDetection?: Maybe<BruteForceDetectionOptionsInputOpt>;
  organisations?: Maybe<Array<Maybe<OrganisationInputOpt>>>;
  referrer?: Maybe<Scalars['String']>;
  remoteLoginId?: Maybe<Scalars['String']>;
};

export type RealmLink = {
  __typename?: 'RealmLink';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  accounts: Array<Account>;
};


export type RealmLinkAccountsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type RealmLinkAggs = {
  __typename?: 'RealmLinkAggs';
  name?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by RealmLink */
export enum RealmLinkFields {
  Hypi = 'hypi',
  Name = 'name',
  Accounts = 'accounts',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type RealmLinkGroupByOptions = {
  /** The field by which to to group the matching data */
  field: RealmLinkScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type RealmLinkInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  accounts: Array<AccountInput>;
};

export type RealmLinkInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  accounts?: Maybe<Array<Maybe<AccountInputOpt>>>;
};

/** Scalar fields defined by RealmLink */
export enum RealmLinkScalarFields {
  Name = 'name',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type RealmPolicy = Policy & {
  __typename?: 'RealmPolicy';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  /** Positive` or `Negative */
  logic?: Maybe<AuthLogic>;
  realms?: Maybe<Array<RealmLink>>;
};


export type RealmPolicyRealmsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type RealmPolicyAggs = {
  __typename?: 'RealmPolicyAggs';
  name?: Maybe<AggOtherScalar>;
  logic?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by RealmPolicy */
export enum RealmPolicyFields {
  Hypi = 'hypi',
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  Realms = 'realms',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type RealmPolicyGroupByOptions = {
  /** The field by which to to group the matching data */
  field: RealmPolicyScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type RealmPolicyInput = {
  hypi?: Maybe<HypiInput>;
  realms?: Maybe<Array<RealmLinkInput>>;
  name: Scalars['String'];
  logic?: Maybe<AuthLogic>;
};

export type RealmPolicyInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  realms?: Maybe<Array<Maybe<RealmLinkInputOpt>>>;
  name?: Maybe<Scalars['String']>;
  logic?: Maybe<AuthLogic>;
};

/** Scalar fields defined by RealmPolicy */
export enum RealmPolicyScalarFields {
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Scalar fields defined by Realm */
export enum RealmScalarFields {
  /**
   * the name identifying the organisation and becomes the URL by which it is accessed e.g. alpha-corp.hypi.app, where alpha-corp is name
   * If not provided one will be automatically generated
   */
  Name = 'name',
  /** The name displayed in the user interface */
  DisplayName = 'displayName',
  /** If true users can register without an admin creating their account */
  AllowRegistrations = 'allowRegistrations',
  /** if true users must verify their email before they're allowed to login */
  VerifyEmail = 'verifyEmail',
  Referrer = 'referrer',
  RemoteLoginId = 'remoteLoginId',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type RemoteLogin = {
  __typename?: 'RemoteLogin';
  hypi?: Maybe<Hypi>;
  type?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  remoteId?: Maybe<Scalars['String']>;
  otherAttributes?: Maybe<Scalars['Json']>;
};

export type RemoteLoginAggs = {
  __typename?: 'RemoteLoginAggs';
  type?: Maybe<AggOtherScalar>;
  email?: Maybe<AggOtherScalar>;
  remoteId?: Maybe<AggOtherScalar>;
  otherAttributes?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by RemoteLogin */
export enum RemoteLoginFields {
  Hypi = 'hypi',
  Type = 'type',
  Email = 'email',
  RemoteId = 'remoteId',
  OtherAttributes = 'otherAttributes',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type RemoteLoginGroupByOptions = {
  /** The field by which to to group the matching data */
  field: RemoteLoginScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type RemoteLoginInput = {
  hypi?: Maybe<HypiInput>;
  type?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  remoteId?: Maybe<Scalars['String']>;
  otherAttributes?: Maybe<Scalars['Json']>;
};

export type RemoteLoginInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  type?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  remoteId?: Maybe<Scalars['String']>;
  otherAttributes?: Maybe<Scalars['Json']>;
};

/** Scalar fields defined by RemoteLogin */
export enum RemoteLoginScalarFields {
  Type = 'type',
  Email = 'email',
  RemoteId = 'remoteId',
  OtherAttributes = 'otherAttributes',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Defines the templates that should be applied to a given HTTP request */
export type RequestTemplate = {
  __typename?: 'RequestTemplate';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  request?: Maybe<Scalars['String']>;
  response?: Maybe<Scalars['String']>;
};

export type RequestTemplateAggs = {
  __typename?: 'RequestTemplateAggs';
  name?: Maybe<AggOtherScalar>;
  request?: Maybe<AggOtherScalar>;
  response?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by RequestTemplate */
export enum RequestTemplateFields {
  Hypi = 'hypi',
  Name = 'name',
  Request = 'request',
  Response = 'response',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type RequestTemplateGroupByOptions = {
  /** The field by which to to group the matching data */
  field: RequestTemplateScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type RequestTemplateInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  request?: Maybe<Scalars['String']>;
  response?: Maybe<Scalars['String']>;
};

export type RequestTemplateInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  request?: Maybe<Scalars['String']>;
  response?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by RequestTemplate */
export enum RequestTemplateScalarFields {
  Name = 'name',
  Request = 'request',
  Response = 'response',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Role = {
  __typename?: 'Role';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  accounts?: Maybe<Array<Account>>;
};


export type RoleAccountsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type RoleAggs = {
  __typename?: 'RoleAggs';
  name?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Role */
export enum RoleFields {
  Hypi = 'hypi',
  Name = 'name',
  Accounts = 'accounts',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type RoleGroupByOptions = {
  /** The field by which to to group the matching data */
  field: RoleScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type RoleInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  accounts?: Maybe<Array<AccountInput>>;
};

export type RoleInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  accounts?: Maybe<Array<Maybe<AccountInputOpt>>>;
};

export type RolePolicy = Policy & {
  __typename?: 'RolePolicy';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  /** Positive` or `Negative */
  logic?: Maybe<AuthLogic>;
  roles: Array<Role>;
};


export type RolePolicyRolesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type RolePolicyAggs = {
  __typename?: 'RolePolicyAggs';
  name?: Maybe<AggOtherScalar>;
  logic?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by RolePolicy */
export enum RolePolicyFields {
  Hypi = 'hypi',
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  Roles = 'roles',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type RolePolicyGroupByOptions = {
  /** The field by which to to group the matching data */
  field: RolePolicyScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type RolePolicyInput = {
  hypi?: Maybe<HypiInput>;
  roles: Array<RoleInput>;
  name: Scalars['String'];
  logic?: Maybe<AuthLogic>;
};

export type RolePolicyInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  roles?: Maybe<Array<Maybe<RoleInputOpt>>>;
  name?: Maybe<Scalars['String']>;
  logic?: Maybe<AuthLogic>;
};

/** Scalar fields defined by RolePolicy */
export enum RolePolicyScalarFields {
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Scalar fields defined by Role */
export enum RoleScalarFields {
  Name = 'name',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Script = {
  __typename?: 'Script';
  hypi?: Maybe<Hypi>;
  type: TanType;
  name: Scalars['String'];
  body: Scalars['String'];
};

export type ScriptAggs = {
  __typename?: 'ScriptAggs';
  type?: Maybe<AggOtherScalar>;
  name?: Maybe<AggOtherScalar>;
  body?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Script */
export enum ScriptFields {
  Hypi = 'hypi',
  Type = 'type',
  Name = 'name',
  Body = 'body',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type ScriptGroupByOptions = {
  /** The field by which to to group the matching data */
  field: ScriptScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type ScriptInput = {
  hypi?: Maybe<HypiInput>;
  type: TanType;
  name: Scalars['String'];
  body: Scalars['String'];
};

export type ScriptInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  type?: Maybe<TanType>;
  name?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

/** Scalar fields defined by Script */
export enum ScriptScalarFields {
  Type = 'type',
  Name = 'name',
  Body = 'body',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type ServerlessResponse = {
  __typename?: 'ServerlessResponse';
  hypi?: Maybe<Hypi>;
  path?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['Json']>;
  multiPart?: Maybe<Scalars['Boolean']>;
  method?: Maybe<Scalars['String']>;
  chunked?: Maybe<Scalars['Boolean']>;
  queryString?: Maybe<Scalars['Json']>;
  body?: Maybe<Scalars['Json']>;
  cookies?: Maybe<Scalars['Json']>;
  files?: Maybe<Array<Maybe<File>>>;
  attributes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ServerlessResponseFilesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type ServerlessResponseAttributesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type ServerlessResponseAggs = {
  __typename?: 'ServerlessResponseAggs';
  path?: Maybe<AggOtherScalar>;
  headers?: Maybe<AggOtherScalar>;
  multiPart?: Maybe<AggOtherScalar>;
  method?: Maybe<AggOtherScalar>;
  chunked?: Maybe<AggOtherScalar>;
  queryString?: Maybe<AggOtherScalar>;
  body?: Maybe<AggOtherScalar>;
  cookies?: Maybe<AggOtherScalar>;
  attributes?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by ServerlessResponse */
export enum ServerlessResponseFields {
  Hypi = 'hypi',
  Path = 'path',
  Headers = 'headers',
  MultiPart = 'multiPart',
  Method = 'method',
  Chunked = 'chunked',
  QueryString = 'queryString',
  Body = 'body',
  Cookies = 'cookies',
  Files = 'files',
  Attributes = 'attributes',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type ServerlessResponseGroupByOptions = {
  /** The field by which to to group the matching data */
  field: ServerlessResponseScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type ServerlessResponseInput = {
  hypi?: Maybe<HypiInput>;
  path?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['Json']>;
  multiPart?: Maybe<Scalars['Boolean']>;
  method?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<FileInput>>>;
  chunked?: Maybe<Scalars['Boolean']>;
  attributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  queryString?: Maybe<Scalars['Json']>;
  body?: Maybe<Scalars['Json']>;
  cookies?: Maybe<Scalars['Json']>;
};

export type ServerlessResponseInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  path?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['Json']>;
  multiPart?: Maybe<Scalars['Boolean']>;
  method?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Maybe<FileInputOpt>>>;
  chunked?: Maybe<Scalars['Boolean']>;
  attributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  queryString?: Maybe<Scalars['Json']>;
  body?: Maybe<Scalars['Json']>;
  cookies?: Maybe<Scalars['Json']>;
};

/** Scalar fields defined by ServerlessResponse */
export enum ServerlessResponseScalarFields {
  Path = 'path',
  Headers = 'headers',
  MultiPart = 'multiPart',
  Method = 'method',
  Chunked = 'chunked',
  QueryString = 'queryString',
  Body = 'body',
  Cookies = 'cookies',
  Attributes = 'attributes',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Subscribe to mutations on the given type. */
  subscribe: HypiSubscriptionUnion;
};


export type SubscriptionSubscribeArgs = {
  id?: Maybe<Scalars['String']>;
};

/**
 * One of Hypi's supported Scripting languages. Currently:
 * 1. Groovy
 * 2. JavaScript
 *
 * Or full serverless functions via KNative, support for OpenWhisk is to come in a future release
 */
export enum TanType {
  Groovy = 'Groovy',
  /** https://velocity.apache.org/engine/2.2/user-guide.html */
  Velocity = 'Velocity',
  /** Any OpenFaaS function can be used. See a python example at https://docs.openfaas.com/tutorials/first-python-function/ */
  OpenWhisk = 'OpenWhisk',
  OpenFaaS = 'OpenFaaS'
}

export type TimePolicy = Policy & {
  __typename?: 'TimePolicy';
  hypi?: Maybe<Hypi>;
  /** (yyyy-MM-dd hh:mm:ss) can be used for example to ensure a file is not viewable before the given date */
  from?: Maybe<Scalars['DateTime']>;
  /** can be used to ensure a file is not viewable after a given date */
  to?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** Positive` or `Negative */
  logic?: Maybe<AuthLogic>;
  clients?: Maybe<Array<AuthClient>>;
  roles?: Maybe<Array<Role>>;
  groups?: Maybe<Array<Group>>;
  accounts?: Maybe<Array<Account>>;
  realms?: Maybe<Array<RealmLink>>;
};


export type TimePolicyClientsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type TimePolicyRolesArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type TimePolicyGroupsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type TimePolicyAccountsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};


export type TimePolicyRealmsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type TimePolicyAggs = {
  __typename?: 'TimePolicyAggs';
  from?: Maybe<AggOtherScalar>;
  to?: Maybe<AggOtherScalar>;
  name?: Maybe<AggOtherScalar>;
  logic?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by TimePolicy */
export enum TimePolicyFields {
  Hypi = 'hypi',
  /** (yyyy-MM-dd hh:mm:ss) can be used for example to ensure a file is not viewable before the given date */
  From = 'from',
  /** can be used to ensure a file is not viewable after a given date */
  To = 'to',
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  Clients = 'clients',
  Roles = 'roles',
  Groups = 'groups',
  Accounts = 'accounts',
  Realms = 'realms',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type TimePolicyGroupByOptions = {
  /** The field by which to to group the matching data */
  field: TimePolicyScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type TimePolicyInput = {
  hypi?: Maybe<HypiInput>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  clients?: Maybe<Array<AuthClientInput>>;
  roles?: Maybe<Array<RoleInput>>;
  groups?: Maybe<Array<GroupInput>>;
  accounts?: Maybe<Array<AccountInput>>;
  realms?: Maybe<Array<RealmLinkInput>>;
  name: Scalars['String'];
  logic?: Maybe<AuthLogic>;
};

export type TimePolicyInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  clients?: Maybe<Array<Maybe<AuthClientInputOpt>>>;
  roles?: Maybe<Array<Maybe<RoleInputOpt>>>;
  groups?: Maybe<Array<Maybe<GroupInputOpt>>>;
  accounts?: Maybe<Array<Maybe<AccountInputOpt>>>;
  realms?: Maybe<Array<Maybe<RealmLinkInputOpt>>>;
  name?: Maybe<Scalars['String']>;
  logic?: Maybe<AuthLogic>;
};

/** Scalar fields defined by TimePolicy */
export enum TimePolicyScalarFields {
  /** (yyyy-MM-dd hh:mm:ss) can be used for example to ensure a file is not viewable before the given date */
  From = 'from',
  /** can be used to ensure a file is not viewable after a given date */
  To = 'to',
  Name = 'name',
  /** Positive` or `Negative */
  Logic = 'logic',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Time units used in Auth* types */
export enum TimeUnit {
  Seconds = 'SECONDS',
  Minutes = 'MINUTES',
  Hours = 'HOURS',
  Days = 'DAYS'
}

export type Trigger = {
  /**
   * Executes before the target function. Typically used for validation to prevent execution of a function.
   * It MUST have the same arguments as the target function and return Boolean
   */
  before?: Maybe<GraphQlRefInput>;
  /**
   * Executed asynchronously after the target. It MUST have the same arguments as the target and can optionally
   * have an argument called "hypiResult: T" where T is the type returned by the target
   */
  after?: Maybe<GraphQlRefInput>;
};

export type Url = {
  __typename?: 'URL';
  hypi?: Maybe<Hypi>;
  path: Scalars['String'];
  queryParams?: Maybe<Scalars['Json']>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
};

export type UrlAggs = {
  __typename?: 'URLAggs';
  path?: Maybe<AggOtherScalar>;
  queryParams?: Maybe<AggOtherScalar>;
  port?: Maybe<AggInt>;
  host?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by URL */
export enum UrlFields {
  Hypi = 'hypi',
  Path = 'path',
  QueryParams = 'queryParams',
  Port = 'port',
  Host = 'host',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type UrlGroupByOptions = {
  /** The field by which to to group the matching data */
  field: UrlScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type UrlInput = {
  hypi?: Maybe<HypiInput>;
  path: Scalars['String'];
  queryParams?: Maybe<Scalars['Json']>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
};

export type UrlInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  path?: Maybe<Scalars['String']>;
  queryParams?: Maybe<Scalars['Json']>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
};

export type UrlMaths = {
  port?: Maybe<MathInputInt>;
};

/** All numeric fields defined by URL */
export enum UrlNumericFields {
  Port = 'port'
}

/** Scalar fields defined by URL */
export enum UrlScalarFields {
  Path = 'path',
  QueryParams = 'queryParams',
  Port = 'port',
  Host = 'host',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export enum UserNameAttributeName {
  Iss = 'iss',
  Sub = 'sub',
  Aud = 'aud',
  Exp = 'exp',
  Iat = 'iat',
  AuthTime = 'auth_time',
  Nonce = 'nonce',
  Acr = 'acr',
  Amr = 'amr',
  Azp = 'azp',
  AtHash = 'at_hash',
  CHash = 'c_hash'
}

export type Video = {
  __typename?: 'Video';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  file: File;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Geo>;
  thumbnails?: Maybe<Array<Image>>;
};


export type VideoThumbnailsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type VideoAggs = {
  __typename?: 'VideoAggs';
  name?: Maybe<AggOtherScalar>;
  description?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by Video */
export enum VideoFields {
  Hypi = 'hypi',
  Name = 'name',
  File = 'file',
  Description = 'description',
  Location = 'location',
  Thumbnails = 'thumbnails',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type VideoGroupByOptions = {
  /** The field by which to to group the matching data */
  field: VideoScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type VideoInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  thumbnails?: Maybe<Array<ImageInput>>;
  file: FileInput;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<GeoInput>;
};

export type VideoInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  thumbnails?: Maybe<Array<Maybe<ImageInputOpt>>>;
  file?: Maybe<FileInputOpt>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<GeoInputOpt>;
};

/** Scalar fields defined by Video */
export enum VideoScalarFields {
  Name = 'name',
  Description = 'description',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/**
 * Defines a web hook that can be used to trigger Hypi GraphQL functions on a given app.
 * The account specified in the web hook must have access to the app/instance and must be authorised to call the functions specified.
 */
export type Webhook = {
  __typename?: 'Webhook';
  hypi?: Maybe<Hypi>;
  /** The name by which this web hook is referenced in the URL, if missing the webhook is only adressable by ID */
  name?: Maybe<Scalars['String']>;
  /**
   * Defaults to the account creating the Webhook.
   * Hypi will generate an authorisation token automatically for the account when the web hook is triggered.
   * This token will then be used to execute the triggers in the web hook (query or mutation).
   * For security an account should be created specifically for invoking web hooks and an AccountPolicy should be created that grants access only to the specified functions or otherwise limit the scope of what the account can do.
   */
  as?: Maybe<Account>;
  /**
   * This refers to a GraphQL function.
   * The function must have a graphql argument defined as `(payload: WebhookPayload): WebhookPayload`
   * The function can trigger a workflow or operate on the payload itself.
   */
  query: GraphQlRef;
};

export type WebhookAggs = {
  __typename?: 'WebhookAggs';
  name?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
  query_type?: Maybe<AggOtherScalar>;
  query_field?: Maybe<AggOtherScalar>;
  query_selection?: Maybe<AggOtherScalar>;
};

/** All fields defined by Webhook */
export enum WebhookFields {
  Hypi = 'hypi',
  /** The name by which this web hook is referenced in the URL, if missing the webhook is only adressable by ID */
  Name = 'name',
  /**
   * Defaults to the account creating the Webhook.
   * Hypi will generate an authorisation token automatically for the account when the web hook is triggered.
   * This token will then be used to execute the triggers in the web hook (query or mutation).
   * For security an account should be created specifically for invoking web hooks and an AccountPolicy should be created that grants access only to the specified functions or otherwise limit the scope of what the account can do.
   */
  As = 'as',
  /**
   * This refers to a GraphQL function.
   * The function must have a graphql argument defined as `(payload: WebhookPayload): WebhookPayload`
   * The function can trigger a workflow or operate on the payload itself.
   */
  Query = 'query',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /**
   * This refers to a GraphQL function.
   * The function must have a graphql argument defined as `(payload: WebhookPayload): WebhookPayload`
   * The function can trigger a workflow or operate on the payload itself.
   */
  QueryHypi = 'query_hypi',
  /**
   * This refers to a GraphQL function.
   * The function must have a graphql argument defined as `(payload: WebhookPayload): WebhookPayload`
   * The function can trigger a workflow or operate on the payload itself.
   */
  QueryType = 'query_type',
  /**
   * This refers to a GraphQL function.
   * The function must have a graphql argument defined as `(payload: WebhookPayload): WebhookPayload`
   * The function can trigger a workflow or operate on the payload itself.
   */
  QueryField = 'query_field',
  /**
   * This refers to a GraphQL function.
   * The function must have a graphql argument defined as `(payload: WebhookPayload): WebhookPayload`
   * The function can trigger a workflow or operate on the payload itself.
   */
  QuerySelection = 'query_selection'
}

export type WebhookGroupByOptions = {
  /** The field by which to to group the matching data */
  field: WebhookScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type WebhookInput = {
  hypi?: Maybe<HypiInput>;
  name?: Maybe<Scalars['String']>;
  as?: Maybe<AccountInput>;
  query: GraphQlRefInput;
};

export type WebhookInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  as?: Maybe<AccountInputOpt>;
  query?: Maybe<GraphQlRefInputOpt>;
};

export type WebhookPayload = {
  url: UrlInput;
  headers: Scalars['Json'];
  body?: Maybe<Scalars['String']>;
};

/**
 * If the query or mutation functions in the Webhook definition returns this then it controls what the server responds with
 * For example, the GraphQL function can return a 301 or 302 status and a Location header to an external URL to cause a redirect.
 */
export type WebhookResponse = {
  __typename?: 'WebhookResponse';
  hypi?: Maybe<Hypi>;
  status?: Maybe<Scalars['Int']>;
  headers?: Maybe<Scalars['Json']>;
  body?: Maybe<Scalars['Json']>;
};

export type WebhookResponseAggs = {
  __typename?: 'WebhookResponseAggs';
  status?: Maybe<AggInt>;
  headers?: Maybe<AggOtherScalar>;
  body?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by WebhookResponse */
export enum WebhookResponseFields {
  Hypi = 'hypi',
  Status = 'status',
  Headers = 'headers',
  Body = 'body',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type WebhookResponseGroupByOptions = {
  /** The field by which to to group the matching data */
  field: WebhookResponseScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type WebhookResponseInput = {
  hypi?: Maybe<HypiInput>;
  status?: Maybe<Scalars['Int']>;
  headers?: Maybe<Scalars['Json']>;
  body?: Maybe<Scalars['Json']>;
};

export type WebhookResponseInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  status?: Maybe<Scalars['Int']>;
  headers?: Maybe<Scalars['Json']>;
  body?: Maybe<Scalars['Json']>;
};

export type WebhookResponseMaths = {
  status?: Maybe<MathInputInt>;
};

/** All numeric fields defined by WebhookResponse */
export enum WebhookResponseNumericFields {
  Status = 'status'
}

/** Scalar fields defined by WebhookResponse */
export enum WebhookResponseScalarFields {
  Status = 'status',
  Headers = 'headers',
  Body = 'body',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** Scalar fields defined by Webhook */
export enum WebhookScalarFields {
  /** The name by which this web hook is referenced in the URL, if missing the webhook is only adressable by ID */
  Name = 'name',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /**
   * This refers to a GraphQL function.
   * The function must have a graphql argument defined as `(payload: WebhookPayload): WebhookPayload`
   * The function can trigger a workflow or operate on the payload itself.
   */
  QueryType = 'query_type',
  /**
   * This refers to a GraphQL function.
   * The function must have a graphql argument defined as `(payload: WebhookPayload): WebhookPayload`
   * The function can trigger a workflow or operate on the payload itself.
   */
  QueryField = 'query_field',
  /**
   * This refers to a GraphQL function.
   * The function must have a graphql argument defined as `(payload: WebhookPayload): WebhookPayload`
   * The function can trigger a workflow or operate on the payload itself.
   */
  QuerySelection = 'query_selection'
}

/**
 * A workflow defines a sequence of steps that execute in a defined order (you set the order field on each step).
 * It is one way in which Hypi allows you to do composition, so similarities can be drawn to function composition with some specifics thrown in for Hypi and GraphQL.
 *
 * If two steps have the same order their execution order is undefined with relation to each other.
 * Every step has a GraphQL function that is executed for that step.
 *
 * When a Workflow is executed it creates a WorkflowSession. The result of each step in the workflow is added to the session.
 *
 * The first step can have any parameters you want. For the other steps there are some rules that define how the system maps
 * parameters to the function in these steps. These rules are:
 *
 * 1. Any step (including the first step) can have a parameter "params: Json" i.e. name = params and type is Json.
 * This params is a map of the arguments passed to the first function in the Workflow. For example if the function was defined as
 * step1(a: Int, b: Json, c: MyType): T
 * in this case the "params" Json object would be have the fields a, b and c set to the values the function was executed with.
 * Normally, this is used in the first step but can be used in any step that wants access to this data.
 *
 * 2. Any step can have a parameter "session: WorkflowSession" - this is the current workflow's session and contains the results of all steps before the current one.
 * You can identify the results for a specific step by finding the result using the step's name in the session's data array.
 *
 * 3. Except the first step, a parameter "previous: T" where T is the result type of the previous step can be used.
 * In this case, the platform will use the output of the previous function for this parameter.
 * Note that if the type is not the same as the last step's output type then the workflow will fail if the field is not optional.
 * If the field is optional then the platform will not provide it and it would therefore be null if you try to use it.
 *
 * 4. Except the first step, pass-through is possible. This is where the parameters from the first step are passed through
 * to other steps by name and type. i.e. given
 * step1(a: Int, b: String): String
 * step2(a: Int): ID
 * In this case, the variable "a" in both step1 and step2 will have the same value that step1 was executed with.
 * Incidentally, this is the same as getting "a" from the "params" Json.
 */
export type Workflow = WorkflowAsync & WorkflowTimed & WorkflowRepeatable & WorkflowConditional & WorkflowParallel & WorkflowExecutableAs & {
  __typename?: 'Workflow';
  hypi?: Maybe<Hypi>;
  name: Scalars['String'];
  /**
   * If present, this is a cron schedule to automatically execute this Workflow
   * The syntax as defined at https://www.manpagez.com/man/5/crontab/
   * NOTE: The special strings @hourly, @daily etc are NOT supported
   */
  cronSchedule?: Maybe<Scalars['String']>;
  /**
   * An ArcQL query to find the account e.g. hypi.id = 'user123' to find by id or username = 'blah' to find by username
   * If present, execution of the steps in the Workflow will be done as this account
   * If not specified, it defaults to the account making the request
   */
  execAs?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  /** If present AND true, all steps in this block are executed at the same time. */
  parallel?: Maybe<Scalars['Boolean']>;
  /**
   * Specifies the the max time an async task should be allowed to execute. When this time has elapsed the task will be killed.
   * The format is ISO8601 durations https://en.wikipedia.org/wiki/ISO_8601#Durations
   * e.g. P1M is 1 month and PT1M is 1 minute
   */
  maxExecutionTime?: Maybe<Scalars['String']>;
  repeatN?: Maybe<Scalars['Int']>;
  evaluateIf?: Maybe<GraphQlRef>;
  repeatIf?: Maybe<GraphQlRef>;
  steps?: Maybe<Array<WorkflowStep>>;
};


/**
 * A workflow defines a sequence of steps that execute in a defined order (you set the order field on each step).
 * It is one way in which Hypi allows you to do composition, so similarities can be drawn to function composition with some specifics thrown in for Hypi and GraphQL.
 *
 * If two steps have the same order their execution order is undefined with relation to each other.
 * Every step has a GraphQL function that is executed for that step.
 *
 * When a Workflow is executed it creates a WorkflowSession. The result of each step in the workflow is added to the session.
 *
 * The first step can have any parameters you want. For the other steps there are some rules that define how the system maps
 * parameters to the function in these steps. These rules are:
 *
 * 1. Any step (including the first step) can have a parameter "params: Json" i.e. name = params and type is Json.
 * This params is a map of the arguments passed to the first function in the Workflow. For example if the function was defined as
 * step1(a: Int, b: Json, c: MyType): T
 * in this case the "params" Json object would be have the fields a, b and c set to the values the function was executed with.
 * Normally, this is used in the first step but can be used in any step that wants access to this data.
 *
 * 2. Any step can have a parameter "session: WorkflowSession" - this is the current workflow's session and contains the results of all steps before the current one.
 * You can identify the results for a specific step by finding the result using the step's name in the session's data array.
 *
 * 3. Except the first step, a parameter "previous: T" where T is the result type of the previous step can be used.
 * In this case, the platform will use the output of the previous function for this parameter.
 * Note that if the type is not the same as the last step's output type then the workflow will fail if the field is not optional.
 * If the field is optional then the platform will not provide it and it would therefore be null if you try to use it.
 *
 * 4. Except the first step, pass-through is possible. This is where the parameters from the first step are passed through
 * to other steps by name and type. i.e. given
 * step1(a: Int, b: String): String
 * step2(a: Int): ID
 * In this case, the variable "a" in both step1 and step2 will have the same value that step1 was executed with.
 * Incidentally, this is the same as getting "a" from the "params" Json.
 */
export type WorkflowStepsArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type WorkflowAggs = {
  __typename?: 'WorkflowAggs';
  name?: Maybe<AggOtherScalar>;
  cronSchedule?: Maybe<AggOtherScalar>;
  execAs?: Maybe<AggOtherScalar>;
  async?: Maybe<AggOtherScalar>;
  parallel?: Maybe<AggOtherScalar>;
  maxExecutionTime?: Maybe<AggOtherScalar>;
  repeatN?: Maybe<AggInt>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
  evaluateIf_type?: Maybe<AggOtherScalar>;
  evaluateIf_field?: Maybe<AggOtherScalar>;
  evaluateIf_selection?: Maybe<AggOtherScalar>;
  repeatIf_type?: Maybe<AggOtherScalar>;
  repeatIf_field?: Maybe<AggOtherScalar>;
  repeatIf_selection?: Maybe<AggOtherScalar>;
};

export type WorkflowAsync = {
  hypi?: Maybe<Hypi>;
  async?: Maybe<Scalars['Boolean']>;
};

export type WorkflowAsyncInput = {
  execAs?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInput>;
  repeatN?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<WorkflowStepInput>>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInput>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInput>;
  evaluateIf?: Maybe<GraphQlRefInput>;
  order?: Maybe<Scalars['Int']>;
};

export type WorkflowAsyncInputOpt = {
  execAs?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInputOpt>;
  repeatN?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<Maybe<WorkflowStepInputOpt>>>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInputOpt>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInputOpt>;
  evaluateIf?: Maybe<GraphQlRefInputOpt>;
  order?: Maybe<Scalars['Int']>;
};

/**
 * Indicates the type should only be evaluated IFF the refrenced function is defined AND executing it returns true.
 * Any other state results in the evaluation of the conditional e.g.
 * if evaluateIf is not defined, the conditional is executed.
 * if evaluateIf is defined but returns anything other than the boolean value true the conditional is executed
 */
export type WorkflowConditional = {
  hypi?: Maybe<Hypi>;
  evaluateIf?: Maybe<GraphQlRef>;
};

export type WorkflowConditionalInput = {
  execAs?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInput>;
  repeatN?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<WorkflowStepInput>>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInput>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInput>;
  evaluateIf?: Maybe<GraphQlRefInput>;
  order?: Maybe<Scalars['Int']>;
};

export type WorkflowConditionalInputOpt = {
  execAs?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInputOpt>;
  repeatN?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<Maybe<WorkflowStepInputOpt>>>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInputOpt>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInputOpt>;
  evaluateIf?: Maybe<GraphQlRefInputOpt>;
  order?: Maybe<Scalars['Int']>;
};

export type WorkflowExecutableAs = {
  hypi?: Maybe<Hypi>;
  /**
   * An ArcQL query to find the account e.g. hypi.id = 'user123' to find by id or username = 'blah' to find by username
   * If present, execution of the steps in the Workflow will be done as this account
   * If not specified, it defaults to the account making the request
   */
  execAs?: Maybe<Scalars['String']>;
};

export type WorkflowExecutableAsInput = {
  execAs?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInput>;
  repeatN?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<WorkflowStepInput>>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInput>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInput>;
  evaluateIf?: Maybe<GraphQlRefInput>;
  order?: Maybe<Scalars['Int']>;
};

export type WorkflowExecutableAsInputOpt = {
  execAs?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInputOpt>;
  repeatN?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<Maybe<WorkflowStepInputOpt>>>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInputOpt>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInputOpt>;
  evaluateIf?: Maybe<GraphQlRefInputOpt>;
  order?: Maybe<Scalars['Int']>;
};

/** All fields defined by Workflow */
export enum WorkflowFields {
  Hypi = 'hypi',
  Name = 'name',
  /**
   * If present, this is a cron schedule to automatically execute this Workflow
   * The syntax as defined at https://www.manpagez.com/man/5/crontab/
   * NOTE: The special strings @hourly, @daily etc are NOT supported
   */
  CronSchedule = 'cronSchedule',
  /**
   * An ArcQL query to find the account e.g. hypi.id = 'user123' to find by id or username = 'blah' to find by username
   * If present, execution of the steps in the Workflow will be done as this account
   * If not specified, it defaults to the account making the request
   */
  ExecAs = 'execAs',
  Async = 'async',
  /** If present AND true, all steps in this block are executed at the same time. */
  Parallel = 'parallel',
  /**
   * Specifies the the max time an async task should be allowed to execute. When this time has elapsed the task will be killed.
   * The format is ISO8601 durations https://en.wikipedia.org/wiki/ISO_8601#Durations
   * e.g. P1M is 1 month and PT1M is 1 minute
   */
  MaxExecutionTime = 'maxExecutionTime',
  RepeatN = 'repeatN',
  EvaluateIf = 'evaluateIf',
  RepeatIf = 'repeatIf',
  Steps = 'steps',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  EvaluateIfHypi = 'evaluateIf_hypi',
  EvaluateIfType = 'evaluateIf_type',
  EvaluateIfField = 'evaluateIf_field',
  EvaluateIfSelection = 'evaluateIf_selection',
  RepeatIfHypi = 'repeatIf_hypi',
  RepeatIfType = 'repeatIf_type',
  RepeatIfField = 'repeatIf_field',
  RepeatIfSelection = 'repeatIf_selection'
}

export type WorkflowGroupByOptions = {
  /** The field by which to to group the matching data */
  field: WorkflowScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type WorkflowInput = {
  hypi?: Maybe<HypiInput>;
  name: Scalars['String'];
  steps?: Maybe<Array<WorkflowStepInput>>;
  cronSchedule?: Maybe<Scalars['String']>;
  execAs?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  repeatN?: Maybe<Scalars['Int']>;
  evaluateIf?: Maybe<GraphQlRefInput>;
  repeatIf?: Maybe<GraphQlRefInput>;
};

export type WorkflowInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  steps?: Maybe<Array<Maybe<WorkflowStepInputOpt>>>;
  cronSchedule?: Maybe<Scalars['String']>;
  execAs?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  repeatN?: Maybe<Scalars['Int']>;
  evaluateIf?: Maybe<GraphQlRefInputOpt>;
  repeatIf?: Maybe<GraphQlRefInputOpt>;
};

export type WorkflowMaths = {
  repeatN?: Maybe<MathInputInt>;
};

/** All numeric fields defined by Workflow */
export enum WorkflowNumericFields {
  RepeatN = 'repeatN'
}

export type WorkflowOrdered = {
  hypi?: Maybe<Hypi>;
  order: Scalars['Int'];
};

export type WorkflowOrderedInput = {
  execAs?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInput>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  repeatN?: Maybe<Scalars['Int']>;
  hypi?: Maybe<HypiInput>;
  evaluateIf?: Maybe<GraphQlRefInput>;
  order: Scalars['Int'];
  repeatIf?: Maybe<GraphQlRefInput>;
};

export type WorkflowOrderedInputOpt = {
  execAs?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInputOpt>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  repeatN?: Maybe<Scalars['Int']>;
  hypi?: Maybe<HypiInputOpt>;
  evaluateIf?: Maybe<GraphQlRefInputOpt>;
  order?: Maybe<Scalars['Int']>;
  repeatIf?: Maybe<GraphQlRefInputOpt>;
};

export type WorkflowParallel = {
  hypi?: Maybe<Hypi>;
  /** If present AND true, all steps in this block are executed at the same time. */
  parallel?: Maybe<Scalars['Boolean']>;
};

export type WorkflowParallelInput = {
  execAs?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  repeatN?: Maybe<Scalars['Int']>;
  hypi?: Maybe<HypiInput>;
  steps?: Maybe<Array<WorkflowStepInput>>;
  evaluateIf?: Maybe<GraphQlRefInput>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInput>;
};

export type WorkflowParallelInputOpt = {
  execAs?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  repeatN?: Maybe<Scalars['Int']>;
  hypi?: Maybe<HypiInputOpt>;
  steps?: Maybe<Array<Maybe<WorkflowStepInputOpt>>>;
  evaluateIf?: Maybe<GraphQlRefInputOpt>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInputOpt>;
};

/**
 * Indicates the type should be repeated once it's finished IFF the referenced function is defined AND executing it returns true;
 * repeatIf and repeatN are mutually exclusive. If repeatN is specified it takes precedence over repeatIf
 */
export type WorkflowRepeatable = {
  hypi?: Maybe<Hypi>;
  repeatIf?: Maybe<GraphQlRef>;
  repeatN?: Maybe<Scalars['Int']>;
};

export type WorkflowRepeatableInput = {
  execAs?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInput>;
  repeatN?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<WorkflowStepInput>>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInput>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInput>;
  evaluateIf?: Maybe<GraphQlRefInput>;
  order?: Maybe<Scalars['Int']>;
};

export type WorkflowRepeatableInputOpt = {
  execAs?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInputOpt>;
  repeatN?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<Maybe<WorkflowStepInputOpt>>>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInputOpt>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInputOpt>;
  evaluateIf?: Maybe<GraphQlRefInputOpt>;
  order?: Maybe<Scalars['Int']>;
};

/** Scalar fields defined by Workflow */
export enum WorkflowScalarFields {
  Name = 'name',
  /**
   * If present, this is a cron schedule to automatically execute this Workflow
   * The syntax as defined at https://www.manpagez.com/man/5/crontab/
   * NOTE: The special strings @hourly, @daily etc are NOT supported
   */
  CronSchedule = 'cronSchedule',
  /**
   * An ArcQL query to find the account e.g. hypi.id = 'user123' to find by id or username = 'blah' to find by username
   * If present, execution of the steps in the Workflow will be done as this account
   * If not specified, it defaults to the account making the request
   */
  ExecAs = 'execAs',
  Async = 'async',
  /** If present AND true, all steps in this block are executed at the same time. */
  Parallel = 'parallel',
  /**
   * Specifies the the max time an async task should be allowed to execute. When this time has elapsed the task will be killed.
   * The format is ISO8601 durations https://en.wikipedia.org/wiki/ISO_8601#Durations
   * e.g. P1M is 1 month and PT1M is 1 minute
   */
  MaxExecutionTime = 'maxExecutionTime',
  RepeatN = 'repeatN',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  EvaluateIfType = 'evaluateIf_type',
  EvaluateIfField = 'evaluateIf_field',
  EvaluateIfSelection = 'evaluateIf_selection',
  RepeatIfType = 'repeatIf_type',
  RepeatIfField = 'repeatIf_field',
  RepeatIfSelection = 'repeatIf_selection'
}

export type WorkflowSession = {
  __typename?: 'WorkflowSession';
  hypi?: Maybe<Hypi>;
  data?: Maybe<Array<WorkflowStepData>>;
};


export type WorkflowSessionDataArgs = {
  arcql?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
};

export type WorkflowSessionAggs = {
  __typename?: 'WorkflowSessionAggs';
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by WorkflowSession */
export enum WorkflowSessionFields {
  Hypi = 'hypi',
  Data = 'data',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type WorkflowSessionGroupByOptions = {
  /** The field by which to to group the matching data */
  field: WorkflowSessionScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type WorkflowSessionInput = {
  hypi?: Maybe<HypiInput>;
  data?: Maybe<Array<WorkflowStepDataInput>>;
};

export type WorkflowSessionInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  data?: Maybe<Array<Maybe<WorkflowStepDataInputOpt>>>;
};

/** Scalar fields defined by WorkflowSession */
export enum WorkflowSessionScalarFields {
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type WorkflowStep = WorkflowAsync & WorkflowTimed & WorkflowRepeatable & WorkflowConditional & WorkflowExecutableAs & WorkflowOrdered & {
  __typename?: 'WorkflowStep';
  hypi?: Maybe<Hypi>;
  /** A name that can be used to reference or trigger this step */
  name?: Maybe<Scalars['String']>;
  /** The function to execute for this step, the data returned by the step can subsequently be used in other steps */
  fn: GraphQlRef;
  order: Scalars['Int'];
  /**
   * An ArcQL query to find the account e.g. hypi.id = 'user123' to find by id or username = 'blah' to find by username
   * If present, execution of the steps in the Workflow will be done as this account
   * If not specified, it defaults to the account making the request
   */
  execAs?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  /**
   * Specifies the the max time an async task should be allowed to execute. When this time has elapsed the task will be killed.
   * The format is ISO8601 durations https://en.wikipedia.org/wiki/ISO_8601#Durations
   * e.g. P1M is 1 month and PT1M is 1 minute
   */
  maxExecutionTime?: Maybe<Scalars['String']>;
  repeatN?: Maybe<Scalars['Int']>;
  evaluateIf?: Maybe<GraphQlRef>;
  repeatIf?: Maybe<GraphQlRef>;
};

export type WorkflowStepAggs = {
  __typename?: 'WorkflowStepAggs';
  name?: Maybe<AggOtherScalar>;
  order?: Maybe<AggInt>;
  execAs?: Maybe<AggOtherScalar>;
  async?: Maybe<AggOtherScalar>;
  maxExecutionTime?: Maybe<AggOtherScalar>;
  repeatN?: Maybe<AggInt>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
  fn_type?: Maybe<AggOtherScalar>;
  fn_field?: Maybe<AggOtherScalar>;
  fn_selection?: Maybe<AggOtherScalar>;
  evaluateIf_type?: Maybe<AggOtherScalar>;
  evaluateIf_field?: Maybe<AggOtherScalar>;
  evaluateIf_selection?: Maybe<AggOtherScalar>;
  repeatIf_type?: Maybe<AggOtherScalar>;
  repeatIf_field?: Maybe<AggOtherScalar>;
  repeatIf_selection?: Maybe<AggOtherScalar>;
};

export type WorkflowStepData = {
  __typename?: 'WorkflowStepData';
  hypi?: Maybe<Hypi>;
  stepName: Scalars['String'];
  stepResult: Scalars['Any'];
};

export type WorkflowStepDataAggs = {
  __typename?: 'WorkflowStepDataAggs';
  stepName?: Maybe<AggOtherScalar>;
  stepResult?: Maybe<AggOtherScalar>;
  hypi_id?: Maybe<AggOtherScalar>;
  hypi_impl?: Maybe<AggOtherScalar>;
  hypi_created?: Maybe<AggOtherScalar>;
  hypi_updated?: Maybe<AggOtherScalar>;
  hypi_trashed?: Maybe<AggOtherScalar>;
  hypi_createdBy?: Maybe<AggOtherScalar>;
  hypi_instanceId?: Maybe<AggOtherScalar>;
};

/** All fields defined by WorkflowStepData */
export enum WorkflowStepDataFields {
  Hypi = 'hypi',
  StepName = 'stepName',
  StepResult = 'stepResult',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

export type WorkflowStepDataGroupByOptions = {
  /** The field by which to to group the matching data */
  field: WorkflowStepDataScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type WorkflowStepDataInput = {
  hypi?: Maybe<HypiInput>;
  stepName: Scalars['String'];
  stepResult: Scalars['Any'];
};

export type WorkflowStepDataInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  stepName?: Maybe<Scalars['String']>;
  stepResult?: Maybe<Scalars['Any']>;
};

/** Scalar fields defined by WorkflowStepData */
export enum WorkflowStepDataScalarFields {
  StepName = 'stepName',
  StepResult = 'stepResult',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId'
}

/** All fields defined by WorkflowStep */
export enum WorkflowStepFields {
  Hypi = 'hypi',
  /** A name that can be used to reference or trigger this step */
  Name = 'name',
  /** The function to execute for this step, the data returned by the step can subsequently be used in other steps */
  Fn = 'fn',
  Order = 'order',
  /**
   * An ArcQL query to find the account e.g. hypi.id = 'user123' to find by id or username = 'blah' to find by username
   * If present, execution of the steps in the Workflow will be done as this account
   * If not specified, it defaults to the account making the request
   */
  ExecAs = 'execAs',
  Async = 'async',
  /**
   * Specifies the the max time an async task should be allowed to execute. When this time has elapsed the task will be killed.
   * The format is ISO8601 durations https://en.wikipedia.org/wiki/ISO_8601#Durations
   * e.g. P1M is 1 month and PT1M is 1 minute
   */
  MaxExecutionTime = 'maxExecutionTime',
  RepeatN = 'repeatN',
  EvaluateIf = 'evaluateIf',
  RepeatIf = 'repeatIf',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /** The function to execute for this step, the data returned by the step can subsequently be used in other steps */
  FnHypi = 'fn_hypi',
  /** The function to execute for this step, the data returned by the step can subsequently be used in other steps */
  FnType = 'fn_type',
  /** The function to execute for this step, the data returned by the step can subsequently be used in other steps */
  FnField = 'fn_field',
  /** The function to execute for this step, the data returned by the step can subsequently be used in other steps */
  FnSelection = 'fn_selection',
  EvaluateIfHypi = 'evaluateIf_hypi',
  EvaluateIfType = 'evaluateIf_type',
  EvaluateIfField = 'evaluateIf_field',
  EvaluateIfSelection = 'evaluateIf_selection',
  RepeatIfHypi = 'repeatIf_hypi',
  RepeatIfType = 'repeatIf_type',
  RepeatIfField = 'repeatIf_field',
  RepeatIfSelection = 'repeatIf_selection'
}

export type WorkflowStepGroupByOptions = {
  /** The field by which to to group the matching data */
  field: WorkflowStepScalarFields;
  /** If provided, the aggregated data will be ordered by this field and any other field which specifies this field, in the order they're defined */
  order?: Maybe<AggOrder>;
  /** Applies only to DateTime fields. If provided then the date is grouped to this granularity e.g. if MINUTES then the grouping will be per minute */
  dateGranularity?: Maybe<TimeUnit>;
};

export type WorkflowStepInput = {
  hypi?: Maybe<HypiInput>;
  name?: Maybe<Scalars['String']>;
  fn: GraphQlRefInput;
  order: Scalars['Int'];
  execAs?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  repeatN?: Maybe<Scalars['Int']>;
  evaluateIf?: Maybe<GraphQlRefInput>;
  repeatIf?: Maybe<GraphQlRefInput>;
};

export type WorkflowStepInputOpt = {
  hypi?: Maybe<HypiInputOpt>;
  name?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInputOpt>;
  order?: Maybe<Scalars['Int']>;
  execAs?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  repeatN?: Maybe<Scalars['Int']>;
  evaluateIf?: Maybe<GraphQlRefInputOpt>;
  repeatIf?: Maybe<GraphQlRefInputOpt>;
};

export type WorkflowStepMaths = {
  order?: Maybe<MathInputInt>;
  repeatN?: Maybe<MathInputInt>;
};

/** All numeric fields defined by WorkflowStep */
export enum WorkflowStepNumericFields {
  Order = 'order',
  RepeatN = 'repeatN'
}

/** Scalar fields defined by WorkflowStep */
export enum WorkflowStepScalarFields {
  /** A name that can be used to reference or trigger this step */
  Name = 'name',
  Order = 'order',
  /**
   * An ArcQL query to find the account e.g. hypi.id = 'user123' to find by id or username = 'blah' to find by username
   * If present, execution of the steps in the Workflow will be done as this account
   * If not specified, it defaults to the account making the request
   */
  ExecAs = 'execAs',
  Async = 'async',
  /**
   * Specifies the the max time an async task should be allowed to execute. When this time has elapsed the task will be killed.
   * The format is ISO8601 durations https://en.wikipedia.org/wiki/ISO_8601#Durations
   * e.g. P1M is 1 month and PT1M is 1 minute
   */
  MaxExecutionTime = 'maxExecutionTime',
  RepeatN = 'repeatN',
  HypiId = 'hypi_id',
  HypiImpl = 'hypi_impl',
  HypiCreated = 'hypi_created',
  HypiUpdated = 'hypi_updated',
  HypiTrashed = 'hypi_trashed',
  HypiCreatedBy = 'hypi_createdBy',
  HypiInstanceId = 'hypi_instanceId',
  /** The function to execute for this step, the data returned by the step can subsequently be used in other steps */
  FnType = 'fn_type',
  /** The function to execute for this step, the data returned by the step can subsequently be used in other steps */
  FnField = 'fn_field',
  /** The function to execute for this step, the data returned by the step can subsequently be used in other steps */
  FnSelection = 'fn_selection',
  EvaluateIfType = 'evaluateIf_type',
  EvaluateIfField = 'evaluateIf_field',
  EvaluateIfSelection = 'evaluateIf_selection',
  RepeatIfType = 'repeatIf_type',
  RepeatIfField = 'repeatIf_field',
  RepeatIfSelection = 'repeatIf_selection'
}

export type WorkflowTimed = {
  hypi?: Maybe<Hypi>;
  /**
   * Specifies the the max time an async task should be allowed to execute. When this time has elapsed the task will be killed.
   * The format is ISO8601 durations https://en.wikipedia.org/wiki/ISO_8601#Durations
   * e.g. P1M is 1 month and PT1M is 1 minute
   */
  maxExecutionTime?: Maybe<Scalars['String']>;
};

export type WorkflowTimedInput = {
  execAs?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInput>;
  repeatN?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<WorkflowStepInput>>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInput>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInput>;
  evaluateIf?: Maybe<GraphQlRefInput>;
  order?: Maybe<Scalars['Int']>;
};

export type WorkflowTimedInputOpt = {
  execAs?: Maybe<Scalars['String']>;
  maxExecutionTime?: Maybe<Scalars['String']>;
  fn?: Maybe<GraphQlRefInputOpt>;
  repeatN?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<Maybe<WorkflowStepInputOpt>>>;
  cronSchedule?: Maybe<Scalars['String']>;
  repeatIf?: Maybe<GraphQlRefInputOpt>;
  async?: Maybe<Scalars['Boolean']>;
  parallel?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  hypi?: Maybe<HypiInputOpt>;
  evaluateIf?: Maybe<GraphQlRefInputOpt>;
  order?: Maybe<Scalars['Int']>;
};

export type ProductsQueryVariables = Exact<{
  arcql: Scalars['String'];
}>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { find: (
    { __typename?: 'HypiFilterConnection' }
    & { edges?: Maybe<Array<(
      { __typename?: 'HypiResultEdge' }
      & { node: (
        { __typename?: 'Product' }
        & ProductFieldsFragment
      ) | { __typename?: 'Hypi' } | { __typename?: 'PageInfo' } | { __typename?: 'HypiResultEdge' } | { __typename?: 'HypiFilterConnection' } | { __typename?: 'HypiEnv' } | { __typename?: 'Pair' } | { __typename?: 'AggInt' } | { __typename?: 'AggFloat' } | { __typename?: 'AggOtherScalar' } | { __typename?: 'Script' } | { __typename?: 'RequestTemplate' } | { __typename?: 'NotificationCtx' } | { __typename?: 'Notification' } | { __typename?: 'URL' } | { __typename?: 'Currency' } | { __typename?: 'Coordinate' } | { __typename?: 'GeoEnvelope' } | { __typename?: 'Language' } | { __typename?: 'Address' } | { __typename?: 'PersonName' } | { __typename?: 'Phone' } | { __typename?: 'Email' } | { __typename?: 'Password' } | { __typename?: 'RemoteLogin' } | { __typename?: 'LoginAttempt' } | { __typename?: 'BruteForceDetectionOptions' } | { __typename?: 'OAuth2AuthorizedClient' } | { __typename?: 'AuthClient' } | { __typename?: 'Image' } | { __typename?: 'EmailVerification' } | { __typename?: 'EmailTemplate' } | { __typename?: 'EmailSendingAttempt' } | { __typename?: 'PasswordReminder' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookResponse' } | { __typename?: 'LogMessage' } | { __typename?: 'GraphQLRef' } | { __typename?: 'WorkflowStepData' } | { __typename?: 'WorkflowStep' } | { __typename?: 'AccessToken' } | { __typename?: 'PermissionDescription' } | { __typename?: 'Country' } | { __typename?: 'Account' } | { __typename?: 'Person' } | { __typename?: 'Organisation' } | { __typename?: 'OAuthProvider' } | { __typename?: 'Realm' } | { __typename?: 'Group' } | { __typename?: 'Role' } | { __typename?: 'RolePolicy' } | { __typename?: 'ClientPolicy' } | { __typename?: 'TimePolicy' } | { __typename?: 'AggregatedPolicy' } | { __typename?: 'GroupPolicy' } | { __typename?: 'AccountPolicy' } | { __typename?: 'RealmPolicy' } | { __typename?: 'RealmLink' } | { __typename?: 'Permission' } | { __typename?: 'File' } | { __typename?: 'Video' } | { __typename?: 'EmailMessage' } | { __typename?: 'Workflow' } | { __typename?: 'WorkflowSession' } | { __typename?: 'Counter' } | { __typename?: 'Gauge' } | { __typename?: 'ServerlessResponse' } }
    )>> }
  ) }
);

export type ProductFieldsFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'title' | 'description'>
);

export const ProductFieldsFragmentDoc = gql`
    fragment ProductFields on Product {
  title
  description
}
    `;
export const ProductsDocument = gql`
    query products($arcql: String!) {
  find(type: Product, arcql: $arcql) {
    edges {
      node {
        ...ProductFields
      }
    }
  }
}
    ${ProductFieldsFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      arcql: // value for 'arcql'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;