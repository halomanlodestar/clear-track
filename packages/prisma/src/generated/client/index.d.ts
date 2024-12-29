
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model PendingTransaction
 * 
 */
export type PendingTransaction = $Result.DefaultSelection<Prisma.$PendingTransactionPayload>
/**
 * Model RejectedTransaction
 * 
 */
export type RejectedTransaction = $Result.DefaultSelection<Prisma.$RejectedTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionStatus: {
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  SUCCESSFUL: 'SUCCESSFUL'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.pendingTransaction`: Exposes CRUD operations for the **PendingTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingTransactions
    * const pendingTransactions = await prisma.pendingTransaction.findMany()
    * ```
    */
  get pendingTransaction(): Prisma.PendingTransactionDelegate<ExtArgs>;

  /**
   * `prisma.rejectedTransaction`: Exposes CRUD operations for the **RejectedTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RejectedTransactions
    * const rejectedTransactions = await prisma.rejectedTransaction.findMany()
    * ```
    */
  get rejectedTransaction(): Prisma.RejectedTransactionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Transaction: 'Transaction',
    PendingTransaction: 'PendingTransaction',
    RejectedTransaction: 'RejectedTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "transaction" | "pendingTransaction" | "rejectedTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      PendingTransaction: {
        payload: Prisma.$PendingTransactionPayload<ExtArgs>
        fields: Prisma.PendingTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingTransactionPayload>
          }
          findFirst: {
            args: Prisma.PendingTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingTransactionPayload>
          }
          findMany: {
            args: Prisma.PendingTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingTransactionPayload>[]
          }
          create: {
            args: Prisma.PendingTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingTransactionPayload>
          }
          createMany: {
            args: Prisma.PendingTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendingTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingTransactionPayload>[]
          }
          delete: {
            args: Prisma.PendingTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingTransactionPayload>
          }
          update: {
            args: Prisma.PendingTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingTransactionPayload>
          }
          deleteMany: {
            args: Prisma.PendingTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendingTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PendingTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingTransactionPayload>
          }
          aggregate: {
            args: Prisma.PendingTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendingTransaction>
          }
          groupBy: {
            args: Prisma.PendingTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<PendingTransactionCountAggregateOutputType> | number
          }
        }
      }
      RejectedTransaction: {
        payload: Prisma.$RejectedTransactionPayload<ExtArgs>
        fields: Prisma.RejectedTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RejectedTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RejectedTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedTransactionPayload>
          }
          findFirst: {
            args: Prisma.RejectedTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RejectedTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedTransactionPayload>
          }
          findMany: {
            args: Prisma.RejectedTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedTransactionPayload>[]
          }
          create: {
            args: Prisma.RejectedTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedTransactionPayload>
          }
          createMany: {
            args: Prisma.RejectedTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RejectedTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedTransactionPayload>[]
          }
          delete: {
            args: Prisma.RejectedTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedTransactionPayload>
          }
          update: {
            args: Prisma.RejectedTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedTransactionPayload>
          }
          deleteMany: {
            args: Prisma.RejectedTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RejectedTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RejectedTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedTransactionPayload>
          }
          aggregate: {
            args: Prisma.RejectedTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRejectedTransaction>
          }
          groupBy: {
            args: Prisma.RejectedTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RejectedTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RejectedTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<RejectedTransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    SenderTransaction: number
    RecieverTransaction: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SenderTransaction?: boolean | UserCountOutputTypeCountSenderTransactionArgs
    RecieverTransaction?: boolean | UserCountOutputTypeCountRecieverTransactionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSenderTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecieverTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    token: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    token: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    token: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    token?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    token?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    token?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    token: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    SenderTransaction?: boolean | User$SenderTransactionArgs<ExtArgs>
    RecieverTransaction?: boolean | User$RecieverTransactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SenderTransaction?: boolean | User$SenderTransactionArgs<ExtArgs>
    RecieverTransaction?: boolean | User$RecieverTransactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      SenderTransaction: Prisma.$TransactionPayload<ExtArgs>[]
      RecieverTransaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      token: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SenderTransaction<T extends User$SenderTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$SenderTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    RecieverTransaction<T extends User$RecieverTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$RecieverTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.SenderTransaction
   */
  export type User$SenderTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.RecieverTransaction
   */
  export type User$RecieverTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    initialisedAt: Date | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
    acceptedAt: Date | null
    status: $Enums.TransactionStatus | null
    expirationTime: Date | null
    signature: string | null
    previousHash: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    initialisedAt: Date | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
    acceptedAt: Date | null
    status: $Enums.TransactionStatus | null
    expirationTime: Date | null
    signature: string | null
    previousHash: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    initialisedAt: number
    senderId: number
    recieverId: number
    amount: number
    acceptedAt: number
    status: number
    expirationTime: number
    signature: number
    previousHash: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    senderId?: true
    recieverId?: true
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    senderId?: true
    recieverId?: true
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    initialisedAt?: true
    senderId?: true
    recieverId?: true
    amount?: true
    acceptedAt?: true
    status?: true
    expirationTime?: true
    signature?: true
    previousHash?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    initialisedAt?: true
    senderId?: true
    recieverId?: true
    amount?: true
    acceptedAt?: true
    status?: true
    expirationTime?: true
    signature?: true
    previousHash?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    initialisedAt?: true
    senderId?: true
    recieverId?: true
    amount?: true
    acceptedAt?: true
    status?: true
    expirationTime?: true
    signature?: true
    previousHash?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    initialisedAt: Date
    senderId: number
    recieverId: number
    amount: number
    acceptedAt: Date
    status: $Enums.TransactionStatus
    expirationTime: Date
    signature: string
    previousHash: string
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    initialisedAt?: boolean
    senderId?: boolean
    recieverId?: boolean
    amount?: boolean
    acceptedAt?: boolean
    status?: boolean
    expirationTime?: boolean
    signature?: boolean
    previousHash?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    reciever?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    initialisedAt?: boolean
    senderId?: boolean
    recieverId?: boolean
    amount?: boolean
    acceptedAt?: boolean
    status?: boolean
    expirationTime?: boolean
    signature?: boolean
    previousHash?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    reciever?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    initialisedAt?: boolean
    senderId?: boolean
    recieverId?: boolean
    amount?: boolean
    acceptedAt?: boolean
    status?: boolean
    expirationTime?: boolean
    signature?: boolean
    previousHash?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    reciever?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    reciever?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      reciever: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      initialisedAt: Date
      senderId: number
      recieverId: number
      amount: number
      acceptedAt: Date
      status: $Enums.TransactionStatus
      expirationTime: Date
      signature: string
      previousHash: string
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reciever<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly initialisedAt: FieldRef<"Transaction", 'DateTime'>
    readonly senderId: FieldRef<"Transaction", 'Int'>
    readonly recieverId: FieldRef<"Transaction", 'Int'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly acceptedAt: FieldRef<"Transaction", 'DateTime'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly expirationTime: FieldRef<"Transaction", 'DateTime'>
    readonly signature: FieldRef<"Transaction", 'String'>
    readonly previousHash: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model PendingTransaction
   */

  export type AggregatePendingTransaction = {
    _count: PendingTransactionCountAggregateOutputType | null
    _avg: PendingTransactionAvgAggregateOutputType | null
    _sum: PendingTransactionSumAggregateOutputType | null
    _min: PendingTransactionMinAggregateOutputType | null
    _max: PendingTransactionMaxAggregateOutputType | null
  }

  export type PendingTransactionAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
  }

  export type PendingTransactionSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
  }

  export type PendingTransactionMinAggregateOutputType = {
    id: number | null
    initialisedAt: Date | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
    status: $Enums.TransactionStatus | null
    expirationTime: Date | null
    signature: string | null
    previousHash: string | null
  }

  export type PendingTransactionMaxAggregateOutputType = {
    id: number | null
    initialisedAt: Date | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
    status: $Enums.TransactionStatus | null
    expirationTime: Date | null
    signature: string | null
    previousHash: string | null
  }

  export type PendingTransactionCountAggregateOutputType = {
    id: number
    initialisedAt: number
    senderId: number
    recieverId: number
    amount: number
    status: number
    expirationTime: number
    signature: number
    previousHash: number
    _all: number
  }


  export type PendingTransactionAvgAggregateInputType = {
    id?: true
    senderId?: true
    recieverId?: true
    amount?: true
  }

  export type PendingTransactionSumAggregateInputType = {
    id?: true
    senderId?: true
    recieverId?: true
    amount?: true
  }

  export type PendingTransactionMinAggregateInputType = {
    id?: true
    initialisedAt?: true
    senderId?: true
    recieverId?: true
    amount?: true
    status?: true
    expirationTime?: true
    signature?: true
    previousHash?: true
  }

  export type PendingTransactionMaxAggregateInputType = {
    id?: true
    initialisedAt?: true
    senderId?: true
    recieverId?: true
    amount?: true
    status?: true
    expirationTime?: true
    signature?: true
    previousHash?: true
  }

  export type PendingTransactionCountAggregateInputType = {
    id?: true
    initialisedAt?: true
    senderId?: true
    recieverId?: true
    amount?: true
    status?: true
    expirationTime?: true
    signature?: true
    previousHash?: true
    _all?: true
  }

  export type PendingTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingTransaction to aggregate.
     */
    where?: PendingTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingTransactions to fetch.
     */
    orderBy?: PendingTransactionOrderByWithRelationInput | PendingTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingTransactions
    **/
    _count?: true | PendingTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendingTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendingTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingTransactionMaxAggregateInputType
  }

  export type GetPendingTransactionAggregateType<T extends PendingTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingTransaction[P]>
      : GetScalarType<T[P], AggregatePendingTransaction[P]>
  }




  export type PendingTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingTransactionWhereInput
    orderBy?: PendingTransactionOrderByWithAggregationInput | PendingTransactionOrderByWithAggregationInput[]
    by: PendingTransactionScalarFieldEnum[] | PendingTransactionScalarFieldEnum
    having?: PendingTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingTransactionCountAggregateInputType | true
    _avg?: PendingTransactionAvgAggregateInputType
    _sum?: PendingTransactionSumAggregateInputType
    _min?: PendingTransactionMinAggregateInputType
    _max?: PendingTransactionMaxAggregateInputType
  }

  export type PendingTransactionGroupByOutputType = {
    id: number
    initialisedAt: Date
    senderId: number
    recieverId: number
    amount: number
    status: $Enums.TransactionStatus
    expirationTime: Date
    signature: string
    previousHash: string
    _count: PendingTransactionCountAggregateOutputType | null
    _avg: PendingTransactionAvgAggregateOutputType | null
    _sum: PendingTransactionSumAggregateOutputType | null
    _min: PendingTransactionMinAggregateOutputType | null
    _max: PendingTransactionMaxAggregateOutputType | null
  }

  type GetPendingTransactionGroupByPayload<T extends PendingTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], PendingTransactionGroupByOutputType[P]>
        }
      >
    >


  export type PendingTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    initialisedAt?: boolean
    senderId?: boolean
    recieverId?: boolean
    amount?: boolean
    status?: boolean
    expirationTime?: boolean
    signature?: boolean
    previousHash?: boolean
  }, ExtArgs["result"]["pendingTransaction"]>

  export type PendingTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    initialisedAt?: boolean
    senderId?: boolean
    recieverId?: boolean
    amount?: boolean
    status?: boolean
    expirationTime?: boolean
    signature?: boolean
    previousHash?: boolean
  }, ExtArgs["result"]["pendingTransaction"]>

  export type PendingTransactionSelectScalar = {
    id?: boolean
    initialisedAt?: boolean
    senderId?: boolean
    recieverId?: boolean
    amount?: boolean
    status?: boolean
    expirationTime?: boolean
    signature?: boolean
    previousHash?: boolean
  }


  export type $PendingTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendingTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      initialisedAt: Date
      senderId: number
      recieverId: number
      amount: number
      status: $Enums.TransactionStatus
      expirationTime: Date
      signature: string
      previousHash: string
    }, ExtArgs["result"]["pendingTransaction"]>
    composites: {}
  }

  type PendingTransactionGetPayload<S extends boolean | null | undefined | PendingTransactionDefaultArgs> = $Result.GetResult<Prisma.$PendingTransactionPayload, S>

  type PendingTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PendingTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PendingTransactionCountAggregateInputType | true
    }

  export interface PendingTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingTransaction'], meta: { name: 'PendingTransaction' } }
    /**
     * Find zero or one PendingTransaction that matches the filter.
     * @param {PendingTransactionFindUniqueArgs} args - Arguments to find a PendingTransaction
     * @example
     * // Get one PendingTransaction
     * const pendingTransaction = await prisma.pendingTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendingTransactionFindUniqueArgs>(args: SelectSubset<T, PendingTransactionFindUniqueArgs<ExtArgs>>): Prisma__PendingTransactionClient<$Result.GetResult<Prisma.$PendingTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PendingTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PendingTransactionFindUniqueOrThrowArgs} args - Arguments to find a PendingTransaction
     * @example
     * // Get one PendingTransaction
     * const pendingTransaction = await prisma.pendingTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendingTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PendingTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendingTransactionClient<$Result.GetResult<Prisma.$PendingTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PendingTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTransactionFindFirstArgs} args - Arguments to find a PendingTransaction
     * @example
     * // Get one PendingTransaction
     * const pendingTransaction = await prisma.pendingTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendingTransactionFindFirstArgs>(args?: SelectSubset<T, PendingTransactionFindFirstArgs<ExtArgs>>): Prisma__PendingTransactionClient<$Result.GetResult<Prisma.$PendingTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PendingTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTransactionFindFirstOrThrowArgs} args - Arguments to find a PendingTransaction
     * @example
     * // Get one PendingTransaction
     * const pendingTransaction = await prisma.pendingTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendingTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PendingTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendingTransactionClient<$Result.GetResult<Prisma.$PendingTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PendingTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingTransactions
     * const pendingTransactions = await prisma.pendingTransaction.findMany()
     * 
     * // Get first 10 PendingTransactions
     * const pendingTransactions = await prisma.pendingTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingTransactionWithIdOnly = await prisma.pendingTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendingTransactionFindManyArgs>(args?: SelectSubset<T, PendingTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PendingTransaction.
     * @param {PendingTransactionCreateArgs} args - Arguments to create a PendingTransaction.
     * @example
     * // Create one PendingTransaction
     * const PendingTransaction = await prisma.pendingTransaction.create({
     *   data: {
     *     // ... data to create a PendingTransaction
     *   }
     * })
     * 
     */
    create<T extends PendingTransactionCreateArgs>(args: SelectSubset<T, PendingTransactionCreateArgs<ExtArgs>>): Prisma__PendingTransactionClient<$Result.GetResult<Prisma.$PendingTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PendingTransactions.
     * @param {PendingTransactionCreateManyArgs} args - Arguments to create many PendingTransactions.
     * @example
     * // Create many PendingTransactions
     * const pendingTransaction = await prisma.pendingTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendingTransactionCreateManyArgs>(args?: SelectSubset<T, PendingTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendingTransactions and returns the data saved in the database.
     * @param {PendingTransactionCreateManyAndReturnArgs} args - Arguments to create many PendingTransactions.
     * @example
     * // Create many PendingTransactions
     * const pendingTransaction = await prisma.pendingTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendingTransactions and only return the `id`
     * const pendingTransactionWithIdOnly = await prisma.pendingTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendingTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, PendingTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PendingTransaction.
     * @param {PendingTransactionDeleteArgs} args - Arguments to delete one PendingTransaction.
     * @example
     * // Delete one PendingTransaction
     * const PendingTransaction = await prisma.pendingTransaction.delete({
     *   where: {
     *     // ... filter to delete one PendingTransaction
     *   }
     * })
     * 
     */
    delete<T extends PendingTransactionDeleteArgs>(args: SelectSubset<T, PendingTransactionDeleteArgs<ExtArgs>>): Prisma__PendingTransactionClient<$Result.GetResult<Prisma.$PendingTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PendingTransaction.
     * @param {PendingTransactionUpdateArgs} args - Arguments to update one PendingTransaction.
     * @example
     * // Update one PendingTransaction
     * const pendingTransaction = await prisma.pendingTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendingTransactionUpdateArgs>(args: SelectSubset<T, PendingTransactionUpdateArgs<ExtArgs>>): Prisma__PendingTransactionClient<$Result.GetResult<Prisma.$PendingTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PendingTransactions.
     * @param {PendingTransactionDeleteManyArgs} args - Arguments to filter PendingTransactions to delete.
     * @example
     * // Delete a few PendingTransactions
     * const { count } = await prisma.pendingTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendingTransactionDeleteManyArgs>(args?: SelectSubset<T, PendingTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingTransactions
     * const pendingTransaction = await prisma.pendingTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendingTransactionUpdateManyArgs>(args: SelectSubset<T, PendingTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PendingTransaction.
     * @param {PendingTransactionUpsertArgs} args - Arguments to update or create a PendingTransaction.
     * @example
     * // Update or create a PendingTransaction
     * const pendingTransaction = await prisma.pendingTransaction.upsert({
     *   create: {
     *     // ... data to create a PendingTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PendingTransactionUpsertArgs>(args: SelectSubset<T, PendingTransactionUpsertArgs<ExtArgs>>): Prisma__PendingTransactionClient<$Result.GetResult<Prisma.$PendingTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PendingTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTransactionCountArgs} args - Arguments to filter PendingTransactions to count.
     * @example
     * // Count the number of PendingTransactions
     * const count = await prisma.pendingTransaction.count({
     *   where: {
     *     // ... the filter for the PendingTransactions we want to count
     *   }
     * })
    **/
    count<T extends PendingTransactionCountArgs>(
      args?: Subset<T, PendingTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PendingTransactionAggregateArgs>(args: Subset<T, PendingTransactionAggregateArgs>): Prisma.PrismaPromise<GetPendingTransactionAggregateType<T>>

    /**
     * Group by PendingTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PendingTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PendingTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PendingTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendingTransaction model
   */
  readonly fields: PendingTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PendingTransaction model
   */ 
  interface PendingTransactionFieldRefs {
    readonly id: FieldRef<"PendingTransaction", 'Int'>
    readonly initialisedAt: FieldRef<"PendingTransaction", 'DateTime'>
    readonly senderId: FieldRef<"PendingTransaction", 'Int'>
    readonly recieverId: FieldRef<"PendingTransaction", 'Int'>
    readonly amount: FieldRef<"PendingTransaction", 'Float'>
    readonly status: FieldRef<"PendingTransaction", 'TransactionStatus'>
    readonly expirationTime: FieldRef<"PendingTransaction", 'DateTime'>
    readonly signature: FieldRef<"PendingTransaction", 'String'>
    readonly previousHash: FieldRef<"PendingTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PendingTransaction findUnique
   */
  export type PendingTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelect<ExtArgs> | null
    /**
     * Filter, which PendingTransaction to fetch.
     */
    where: PendingTransactionWhereUniqueInput
  }

  /**
   * PendingTransaction findUniqueOrThrow
   */
  export type PendingTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelect<ExtArgs> | null
    /**
     * Filter, which PendingTransaction to fetch.
     */
    where: PendingTransactionWhereUniqueInput
  }

  /**
   * PendingTransaction findFirst
   */
  export type PendingTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelect<ExtArgs> | null
    /**
     * Filter, which PendingTransaction to fetch.
     */
    where?: PendingTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingTransactions to fetch.
     */
    orderBy?: PendingTransactionOrderByWithRelationInput | PendingTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingTransactions.
     */
    cursor?: PendingTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingTransactions.
     */
    distinct?: PendingTransactionScalarFieldEnum | PendingTransactionScalarFieldEnum[]
  }

  /**
   * PendingTransaction findFirstOrThrow
   */
  export type PendingTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelect<ExtArgs> | null
    /**
     * Filter, which PendingTransaction to fetch.
     */
    where?: PendingTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingTransactions to fetch.
     */
    orderBy?: PendingTransactionOrderByWithRelationInput | PendingTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingTransactions.
     */
    cursor?: PendingTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingTransactions.
     */
    distinct?: PendingTransactionScalarFieldEnum | PendingTransactionScalarFieldEnum[]
  }

  /**
   * PendingTransaction findMany
   */
  export type PendingTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelect<ExtArgs> | null
    /**
     * Filter, which PendingTransactions to fetch.
     */
    where?: PendingTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingTransactions to fetch.
     */
    orderBy?: PendingTransactionOrderByWithRelationInput | PendingTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingTransactions.
     */
    cursor?: PendingTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingTransactions.
     */
    skip?: number
    distinct?: PendingTransactionScalarFieldEnum | PendingTransactionScalarFieldEnum[]
  }

  /**
   * PendingTransaction create
   */
  export type PendingTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelect<ExtArgs> | null
    /**
     * The data needed to create a PendingTransaction.
     */
    data: XOR<PendingTransactionCreateInput, PendingTransactionUncheckedCreateInput>
  }

  /**
   * PendingTransaction createMany
   */
  export type PendingTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingTransactions.
     */
    data: PendingTransactionCreateManyInput | PendingTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingTransaction createManyAndReturn
   */
  export type PendingTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PendingTransactions.
     */
    data: PendingTransactionCreateManyInput | PendingTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingTransaction update
   */
  export type PendingTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelect<ExtArgs> | null
    /**
     * The data needed to update a PendingTransaction.
     */
    data: XOR<PendingTransactionUpdateInput, PendingTransactionUncheckedUpdateInput>
    /**
     * Choose, which PendingTransaction to update.
     */
    where: PendingTransactionWhereUniqueInput
  }

  /**
   * PendingTransaction updateMany
   */
  export type PendingTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingTransactions.
     */
    data: XOR<PendingTransactionUpdateManyMutationInput, PendingTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PendingTransactions to update
     */
    where?: PendingTransactionWhereInput
  }

  /**
   * PendingTransaction upsert
   */
  export type PendingTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelect<ExtArgs> | null
    /**
     * The filter to search for the PendingTransaction to update in case it exists.
     */
    where: PendingTransactionWhereUniqueInput
    /**
     * In case the PendingTransaction found by the `where` argument doesn't exist, create a new PendingTransaction with this data.
     */
    create: XOR<PendingTransactionCreateInput, PendingTransactionUncheckedCreateInput>
    /**
     * In case the PendingTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingTransactionUpdateInput, PendingTransactionUncheckedUpdateInput>
  }

  /**
   * PendingTransaction delete
   */
  export type PendingTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelect<ExtArgs> | null
    /**
     * Filter which PendingTransaction to delete.
     */
    where: PendingTransactionWhereUniqueInput
  }

  /**
   * PendingTransaction deleteMany
   */
  export type PendingTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingTransactions to delete
     */
    where?: PendingTransactionWhereInput
  }

  /**
   * PendingTransaction without action
   */
  export type PendingTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTransaction
     */
    select?: PendingTransactionSelect<ExtArgs> | null
  }


  /**
   * Model RejectedTransaction
   */

  export type AggregateRejectedTransaction = {
    _count: RejectedTransactionCountAggregateOutputType | null
    _avg: RejectedTransactionAvgAggregateOutputType | null
    _sum: RejectedTransactionSumAggregateOutputType | null
    _min: RejectedTransactionMinAggregateOutputType | null
    _max: RejectedTransactionMaxAggregateOutputType | null
  }

  export type RejectedTransactionAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
  }

  export type RejectedTransactionSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
  }

  export type RejectedTransactionMinAggregateOutputType = {
    id: number | null
    initialisedAt: Date | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
    acceptedAt: Date | null
    status: $Enums.TransactionStatus | null
    expirationTime: Date | null
    signature: string | null
    previousHash: string | null
    rejectionReason: string | null
  }

  export type RejectedTransactionMaxAggregateOutputType = {
    id: number | null
    initialisedAt: Date | null
    senderId: number | null
    recieverId: number | null
    amount: number | null
    acceptedAt: Date | null
    status: $Enums.TransactionStatus | null
    expirationTime: Date | null
    signature: string | null
    previousHash: string | null
    rejectionReason: string | null
  }

  export type RejectedTransactionCountAggregateOutputType = {
    id: number
    initialisedAt: number
    senderId: number
    recieverId: number
    amount: number
    acceptedAt: number
    status: number
    expirationTime: number
    signature: number
    previousHash: number
    rejectionReason: number
    _all: number
  }


  export type RejectedTransactionAvgAggregateInputType = {
    id?: true
    senderId?: true
    recieverId?: true
    amount?: true
  }

  export type RejectedTransactionSumAggregateInputType = {
    id?: true
    senderId?: true
    recieverId?: true
    amount?: true
  }

  export type RejectedTransactionMinAggregateInputType = {
    id?: true
    initialisedAt?: true
    senderId?: true
    recieverId?: true
    amount?: true
    acceptedAt?: true
    status?: true
    expirationTime?: true
    signature?: true
    previousHash?: true
    rejectionReason?: true
  }

  export type RejectedTransactionMaxAggregateInputType = {
    id?: true
    initialisedAt?: true
    senderId?: true
    recieverId?: true
    amount?: true
    acceptedAt?: true
    status?: true
    expirationTime?: true
    signature?: true
    previousHash?: true
    rejectionReason?: true
  }

  export type RejectedTransactionCountAggregateInputType = {
    id?: true
    initialisedAt?: true
    senderId?: true
    recieverId?: true
    amount?: true
    acceptedAt?: true
    status?: true
    expirationTime?: true
    signature?: true
    previousHash?: true
    rejectionReason?: true
    _all?: true
  }

  export type RejectedTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RejectedTransaction to aggregate.
     */
    where?: RejectedTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedTransactions to fetch.
     */
    orderBy?: RejectedTransactionOrderByWithRelationInput | RejectedTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RejectedTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RejectedTransactions
    **/
    _count?: true | RejectedTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RejectedTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RejectedTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RejectedTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RejectedTransactionMaxAggregateInputType
  }

  export type GetRejectedTransactionAggregateType<T extends RejectedTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateRejectedTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRejectedTransaction[P]>
      : GetScalarType<T[P], AggregateRejectedTransaction[P]>
  }




  export type RejectedTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RejectedTransactionWhereInput
    orderBy?: RejectedTransactionOrderByWithAggregationInput | RejectedTransactionOrderByWithAggregationInput[]
    by: RejectedTransactionScalarFieldEnum[] | RejectedTransactionScalarFieldEnum
    having?: RejectedTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RejectedTransactionCountAggregateInputType | true
    _avg?: RejectedTransactionAvgAggregateInputType
    _sum?: RejectedTransactionSumAggregateInputType
    _min?: RejectedTransactionMinAggregateInputType
    _max?: RejectedTransactionMaxAggregateInputType
  }

  export type RejectedTransactionGroupByOutputType = {
    id: number
    initialisedAt: Date
    senderId: number
    recieverId: number
    amount: number
    acceptedAt: Date | null
    status: $Enums.TransactionStatus
    expirationTime: Date
    signature: string
    previousHash: string
    rejectionReason: string | null
    _count: RejectedTransactionCountAggregateOutputType | null
    _avg: RejectedTransactionAvgAggregateOutputType | null
    _sum: RejectedTransactionSumAggregateOutputType | null
    _min: RejectedTransactionMinAggregateOutputType | null
    _max: RejectedTransactionMaxAggregateOutputType | null
  }

  type GetRejectedTransactionGroupByPayload<T extends RejectedTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RejectedTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RejectedTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RejectedTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], RejectedTransactionGroupByOutputType[P]>
        }
      >
    >


  export type RejectedTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    initialisedAt?: boolean
    senderId?: boolean
    recieverId?: boolean
    amount?: boolean
    acceptedAt?: boolean
    status?: boolean
    expirationTime?: boolean
    signature?: boolean
    previousHash?: boolean
    rejectionReason?: boolean
  }, ExtArgs["result"]["rejectedTransaction"]>

  export type RejectedTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    initialisedAt?: boolean
    senderId?: boolean
    recieverId?: boolean
    amount?: boolean
    acceptedAt?: boolean
    status?: boolean
    expirationTime?: boolean
    signature?: boolean
    previousHash?: boolean
    rejectionReason?: boolean
  }, ExtArgs["result"]["rejectedTransaction"]>

  export type RejectedTransactionSelectScalar = {
    id?: boolean
    initialisedAt?: boolean
    senderId?: boolean
    recieverId?: boolean
    amount?: boolean
    acceptedAt?: boolean
    status?: boolean
    expirationTime?: boolean
    signature?: boolean
    previousHash?: boolean
    rejectionReason?: boolean
  }


  export type $RejectedTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RejectedTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      initialisedAt: Date
      senderId: number
      recieverId: number
      amount: number
      acceptedAt: Date | null
      status: $Enums.TransactionStatus
      expirationTime: Date
      signature: string
      previousHash: string
      rejectionReason: string | null
    }, ExtArgs["result"]["rejectedTransaction"]>
    composites: {}
  }

  type RejectedTransactionGetPayload<S extends boolean | null | undefined | RejectedTransactionDefaultArgs> = $Result.GetResult<Prisma.$RejectedTransactionPayload, S>

  type RejectedTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RejectedTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RejectedTransactionCountAggregateInputType | true
    }

  export interface RejectedTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RejectedTransaction'], meta: { name: 'RejectedTransaction' } }
    /**
     * Find zero or one RejectedTransaction that matches the filter.
     * @param {RejectedTransactionFindUniqueArgs} args - Arguments to find a RejectedTransaction
     * @example
     * // Get one RejectedTransaction
     * const rejectedTransaction = await prisma.rejectedTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RejectedTransactionFindUniqueArgs>(args: SelectSubset<T, RejectedTransactionFindUniqueArgs<ExtArgs>>): Prisma__RejectedTransactionClient<$Result.GetResult<Prisma.$RejectedTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RejectedTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RejectedTransactionFindUniqueOrThrowArgs} args - Arguments to find a RejectedTransaction
     * @example
     * // Get one RejectedTransaction
     * const rejectedTransaction = await prisma.rejectedTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RejectedTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, RejectedTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RejectedTransactionClient<$Result.GetResult<Prisma.$RejectedTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RejectedTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedTransactionFindFirstArgs} args - Arguments to find a RejectedTransaction
     * @example
     * // Get one RejectedTransaction
     * const rejectedTransaction = await prisma.rejectedTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RejectedTransactionFindFirstArgs>(args?: SelectSubset<T, RejectedTransactionFindFirstArgs<ExtArgs>>): Prisma__RejectedTransactionClient<$Result.GetResult<Prisma.$RejectedTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RejectedTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedTransactionFindFirstOrThrowArgs} args - Arguments to find a RejectedTransaction
     * @example
     * // Get one RejectedTransaction
     * const rejectedTransaction = await prisma.rejectedTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RejectedTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, RejectedTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RejectedTransactionClient<$Result.GetResult<Prisma.$RejectedTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RejectedTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RejectedTransactions
     * const rejectedTransactions = await prisma.rejectedTransaction.findMany()
     * 
     * // Get first 10 RejectedTransactions
     * const rejectedTransactions = await prisma.rejectedTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rejectedTransactionWithIdOnly = await prisma.rejectedTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RejectedTransactionFindManyArgs>(args?: SelectSubset<T, RejectedTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RejectedTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RejectedTransaction.
     * @param {RejectedTransactionCreateArgs} args - Arguments to create a RejectedTransaction.
     * @example
     * // Create one RejectedTransaction
     * const RejectedTransaction = await prisma.rejectedTransaction.create({
     *   data: {
     *     // ... data to create a RejectedTransaction
     *   }
     * })
     * 
     */
    create<T extends RejectedTransactionCreateArgs>(args: SelectSubset<T, RejectedTransactionCreateArgs<ExtArgs>>): Prisma__RejectedTransactionClient<$Result.GetResult<Prisma.$RejectedTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RejectedTransactions.
     * @param {RejectedTransactionCreateManyArgs} args - Arguments to create many RejectedTransactions.
     * @example
     * // Create many RejectedTransactions
     * const rejectedTransaction = await prisma.rejectedTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RejectedTransactionCreateManyArgs>(args?: SelectSubset<T, RejectedTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RejectedTransactions and returns the data saved in the database.
     * @param {RejectedTransactionCreateManyAndReturnArgs} args - Arguments to create many RejectedTransactions.
     * @example
     * // Create many RejectedTransactions
     * const rejectedTransaction = await prisma.rejectedTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RejectedTransactions and only return the `id`
     * const rejectedTransactionWithIdOnly = await prisma.rejectedTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RejectedTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, RejectedTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RejectedTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RejectedTransaction.
     * @param {RejectedTransactionDeleteArgs} args - Arguments to delete one RejectedTransaction.
     * @example
     * // Delete one RejectedTransaction
     * const RejectedTransaction = await prisma.rejectedTransaction.delete({
     *   where: {
     *     // ... filter to delete one RejectedTransaction
     *   }
     * })
     * 
     */
    delete<T extends RejectedTransactionDeleteArgs>(args: SelectSubset<T, RejectedTransactionDeleteArgs<ExtArgs>>): Prisma__RejectedTransactionClient<$Result.GetResult<Prisma.$RejectedTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RejectedTransaction.
     * @param {RejectedTransactionUpdateArgs} args - Arguments to update one RejectedTransaction.
     * @example
     * // Update one RejectedTransaction
     * const rejectedTransaction = await prisma.rejectedTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RejectedTransactionUpdateArgs>(args: SelectSubset<T, RejectedTransactionUpdateArgs<ExtArgs>>): Prisma__RejectedTransactionClient<$Result.GetResult<Prisma.$RejectedTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RejectedTransactions.
     * @param {RejectedTransactionDeleteManyArgs} args - Arguments to filter RejectedTransactions to delete.
     * @example
     * // Delete a few RejectedTransactions
     * const { count } = await prisma.rejectedTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RejectedTransactionDeleteManyArgs>(args?: SelectSubset<T, RejectedTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RejectedTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RejectedTransactions
     * const rejectedTransaction = await prisma.rejectedTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RejectedTransactionUpdateManyArgs>(args: SelectSubset<T, RejectedTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RejectedTransaction.
     * @param {RejectedTransactionUpsertArgs} args - Arguments to update or create a RejectedTransaction.
     * @example
     * // Update or create a RejectedTransaction
     * const rejectedTransaction = await prisma.rejectedTransaction.upsert({
     *   create: {
     *     // ... data to create a RejectedTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RejectedTransaction we want to update
     *   }
     * })
     */
    upsert<T extends RejectedTransactionUpsertArgs>(args: SelectSubset<T, RejectedTransactionUpsertArgs<ExtArgs>>): Prisma__RejectedTransactionClient<$Result.GetResult<Prisma.$RejectedTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RejectedTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedTransactionCountArgs} args - Arguments to filter RejectedTransactions to count.
     * @example
     * // Count the number of RejectedTransactions
     * const count = await prisma.rejectedTransaction.count({
     *   where: {
     *     // ... the filter for the RejectedTransactions we want to count
     *   }
     * })
    **/
    count<T extends RejectedTransactionCountArgs>(
      args?: Subset<T, RejectedTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RejectedTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RejectedTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RejectedTransactionAggregateArgs>(args: Subset<T, RejectedTransactionAggregateArgs>): Prisma.PrismaPromise<GetRejectedTransactionAggregateType<T>>

    /**
     * Group by RejectedTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RejectedTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RejectedTransactionGroupByArgs['orderBy'] }
        : { orderBy?: RejectedTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RejectedTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRejectedTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RejectedTransaction model
   */
  readonly fields: RejectedTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RejectedTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RejectedTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RejectedTransaction model
   */ 
  interface RejectedTransactionFieldRefs {
    readonly id: FieldRef<"RejectedTransaction", 'Int'>
    readonly initialisedAt: FieldRef<"RejectedTransaction", 'DateTime'>
    readonly senderId: FieldRef<"RejectedTransaction", 'Int'>
    readonly recieverId: FieldRef<"RejectedTransaction", 'Int'>
    readonly amount: FieldRef<"RejectedTransaction", 'Float'>
    readonly acceptedAt: FieldRef<"RejectedTransaction", 'DateTime'>
    readonly status: FieldRef<"RejectedTransaction", 'TransactionStatus'>
    readonly expirationTime: FieldRef<"RejectedTransaction", 'DateTime'>
    readonly signature: FieldRef<"RejectedTransaction", 'String'>
    readonly previousHash: FieldRef<"RejectedTransaction", 'String'>
    readonly rejectionReason: FieldRef<"RejectedTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RejectedTransaction findUnique
   */
  export type RejectedTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelect<ExtArgs> | null
    /**
     * Filter, which RejectedTransaction to fetch.
     */
    where: RejectedTransactionWhereUniqueInput
  }

  /**
   * RejectedTransaction findUniqueOrThrow
   */
  export type RejectedTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelect<ExtArgs> | null
    /**
     * Filter, which RejectedTransaction to fetch.
     */
    where: RejectedTransactionWhereUniqueInput
  }

  /**
   * RejectedTransaction findFirst
   */
  export type RejectedTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelect<ExtArgs> | null
    /**
     * Filter, which RejectedTransaction to fetch.
     */
    where?: RejectedTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedTransactions to fetch.
     */
    orderBy?: RejectedTransactionOrderByWithRelationInput | RejectedTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RejectedTransactions.
     */
    cursor?: RejectedTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RejectedTransactions.
     */
    distinct?: RejectedTransactionScalarFieldEnum | RejectedTransactionScalarFieldEnum[]
  }

  /**
   * RejectedTransaction findFirstOrThrow
   */
  export type RejectedTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelect<ExtArgs> | null
    /**
     * Filter, which RejectedTransaction to fetch.
     */
    where?: RejectedTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedTransactions to fetch.
     */
    orderBy?: RejectedTransactionOrderByWithRelationInput | RejectedTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RejectedTransactions.
     */
    cursor?: RejectedTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RejectedTransactions.
     */
    distinct?: RejectedTransactionScalarFieldEnum | RejectedTransactionScalarFieldEnum[]
  }

  /**
   * RejectedTransaction findMany
   */
  export type RejectedTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelect<ExtArgs> | null
    /**
     * Filter, which RejectedTransactions to fetch.
     */
    where?: RejectedTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedTransactions to fetch.
     */
    orderBy?: RejectedTransactionOrderByWithRelationInput | RejectedTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RejectedTransactions.
     */
    cursor?: RejectedTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedTransactions.
     */
    skip?: number
    distinct?: RejectedTransactionScalarFieldEnum | RejectedTransactionScalarFieldEnum[]
  }

  /**
   * RejectedTransaction create
   */
  export type RejectedTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelect<ExtArgs> | null
    /**
     * The data needed to create a RejectedTransaction.
     */
    data: XOR<RejectedTransactionCreateInput, RejectedTransactionUncheckedCreateInput>
  }

  /**
   * RejectedTransaction createMany
   */
  export type RejectedTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RejectedTransactions.
     */
    data: RejectedTransactionCreateManyInput | RejectedTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RejectedTransaction createManyAndReturn
   */
  export type RejectedTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RejectedTransactions.
     */
    data: RejectedTransactionCreateManyInput | RejectedTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RejectedTransaction update
   */
  export type RejectedTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelect<ExtArgs> | null
    /**
     * The data needed to update a RejectedTransaction.
     */
    data: XOR<RejectedTransactionUpdateInput, RejectedTransactionUncheckedUpdateInput>
    /**
     * Choose, which RejectedTransaction to update.
     */
    where: RejectedTransactionWhereUniqueInput
  }

  /**
   * RejectedTransaction updateMany
   */
  export type RejectedTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RejectedTransactions.
     */
    data: XOR<RejectedTransactionUpdateManyMutationInput, RejectedTransactionUncheckedUpdateManyInput>
    /**
     * Filter which RejectedTransactions to update
     */
    where?: RejectedTransactionWhereInput
  }

  /**
   * RejectedTransaction upsert
   */
  export type RejectedTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelect<ExtArgs> | null
    /**
     * The filter to search for the RejectedTransaction to update in case it exists.
     */
    where: RejectedTransactionWhereUniqueInput
    /**
     * In case the RejectedTransaction found by the `where` argument doesn't exist, create a new RejectedTransaction with this data.
     */
    create: XOR<RejectedTransactionCreateInput, RejectedTransactionUncheckedCreateInput>
    /**
     * In case the RejectedTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RejectedTransactionUpdateInput, RejectedTransactionUncheckedUpdateInput>
  }

  /**
   * RejectedTransaction delete
   */
  export type RejectedTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelect<ExtArgs> | null
    /**
     * Filter which RejectedTransaction to delete.
     */
    where: RejectedTransactionWhereUniqueInput
  }

  /**
   * RejectedTransaction deleteMany
   */
  export type RejectedTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RejectedTransactions to delete
     */
    where?: RejectedTransactionWhereInput
  }

  /**
   * RejectedTransaction without action
   */
  export type RejectedTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedTransaction
     */
    select?: RejectedTransactionSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    token: 'token'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    initialisedAt: 'initialisedAt',
    senderId: 'senderId',
    recieverId: 'recieverId',
    amount: 'amount',
    acceptedAt: 'acceptedAt',
    status: 'status',
    expirationTime: 'expirationTime',
    signature: 'signature',
    previousHash: 'previousHash'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PendingTransactionScalarFieldEnum: {
    id: 'id',
    initialisedAt: 'initialisedAt',
    senderId: 'senderId',
    recieverId: 'recieverId',
    amount: 'amount',
    status: 'status',
    expirationTime: 'expirationTime',
    signature: 'signature',
    previousHash: 'previousHash'
  };

  export type PendingTransactionScalarFieldEnum = (typeof PendingTransactionScalarFieldEnum)[keyof typeof PendingTransactionScalarFieldEnum]


  export const RejectedTransactionScalarFieldEnum: {
    id: 'id',
    initialisedAt: 'initialisedAt',
    senderId: 'senderId',
    recieverId: 'recieverId',
    amount: 'amount',
    acceptedAt: 'acceptedAt',
    status: 'status',
    expirationTime: 'expirationTime',
    signature: 'signature',
    previousHash: 'previousHash',
    rejectionReason: 'rejectionReason'
  };

  export type RejectedTransactionScalarFieldEnum = (typeof RejectedTransactionScalarFieldEnum)[keyof typeof RejectedTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    SenderTransaction?: TransactionListRelationFilter
    RecieverTransaction?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    SenderTransaction?: TransactionOrderByRelationAggregateInput
    RecieverTransaction?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    SenderTransaction?: TransactionListRelationFilter
    RecieverTransaction?: TransactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    initialisedAt?: DateTimeFilter<"Transaction"> | Date | string
    senderId?: IntFilter<"Transaction"> | number
    recieverId?: IntFilter<"Transaction"> | number
    amount?: FloatFilter<"Transaction"> | number
    acceptedAt?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    expirationTime?: DateTimeFilter<"Transaction"> | Date | string
    signature?: StringFilter<"Transaction"> | string
    previousHash?: StringFilter<"Transaction"> | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    reciever?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    acceptedAt?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
    sender?: UserOrderByWithRelationInput
    reciever?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    initialisedAt?: DateTimeFilter<"Transaction"> | Date | string
    senderId?: IntFilter<"Transaction"> | number
    recieverId?: IntFilter<"Transaction"> | number
    amount?: FloatFilter<"Transaction"> | number
    acceptedAt?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    expirationTime?: DateTimeFilter<"Transaction"> | Date | string
    signature?: StringFilter<"Transaction"> | string
    previousHash?: StringFilter<"Transaction"> | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    reciever?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    acceptedAt?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    initialisedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    senderId?: IntWithAggregatesFilter<"Transaction"> | number
    recieverId?: IntWithAggregatesFilter<"Transaction"> | number
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    acceptedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    expirationTime?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    signature?: StringWithAggregatesFilter<"Transaction"> | string
    previousHash?: StringWithAggregatesFilter<"Transaction"> | string
  }

  export type PendingTransactionWhereInput = {
    AND?: PendingTransactionWhereInput | PendingTransactionWhereInput[]
    OR?: PendingTransactionWhereInput[]
    NOT?: PendingTransactionWhereInput | PendingTransactionWhereInput[]
    id?: IntFilter<"PendingTransaction"> | number
    initialisedAt?: DateTimeFilter<"PendingTransaction"> | Date | string
    senderId?: IntFilter<"PendingTransaction"> | number
    recieverId?: IntFilter<"PendingTransaction"> | number
    amount?: FloatFilter<"PendingTransaction"> | number
    status?: EnumTransactionStatusFilter<"PendingTransaction"> | $Enums.TransactionStatus
    expirationTime?: DateTimeFilter<"PendingTransaction"> | Date | string
    signature?: StringFilter<"PendingTransaction"> | string
    previousHash?: StringFilter<"PendingTransaction"> | string
  }

  export type PendingTransactionOrderByWithRelationInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
  }

  export type PendingTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PendingTransactionWhereInput | PendingTransactionWhereInput[]
    OR?: PendingTransactionWhereInput[]
    NOT?: PendingTransactionWhereInput | PendingTransactionWhereInput[]
    initialisedAt?: DateTimeFilter<"PendingTransaction"> | Date | string
    senderId?: IntFilter<"PendingTransaction"> | number
    recieverId?: IntFilter<"PendingTransaction"> | number
    amount?: FloatFilter<"PendingTransaction"> | number
    status?: EnumTransactionStatusFilter<"PendingTransaction"> | $Enums.TransactionStatus
    expirationTime?: DateTimeFilter<"PendingTransaction"> | Date | string
    signature?: StringFilter<"PendingTransaction"> | string
    previousHash?: StringFilter<"PendingTransaction"> | string
  }, "id">

  export type PendingTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
    _count?: PendingTransactionCountOrderByAggregateInput
    _avg?: PendingTransactionAvgOrderByAggregateInput
    _max?: PendingTransactionMaxOrderByAggregateInput
    _min?: PendingTransactionMinOrderByAggregateInput
    _sum?: PendingTransactionSumOrderByAggregateInput
  }

  export type PendingTransactionScalarWhereWithAggregatesInput = {
    AND?: PendingTransactionScalarWhereWithAggregatesInput | PendingTransactionScalarWhereWithAggregatesInput[]
    OR?: PendingTransactionScalarWhereWithAggregatesInput[]
    NOT?: PendingTransactionScalarWhereWithAggregatesInput | PendingTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PendingTransaction"> | number
    initialisedAt?: DateTimeWithAggregatesFilter<"PendingTransaction"> | Date | string
    senderId?: IntWithAggregatesFilter<"PendingTransaction"> | number
    recieverId?: IntWithAggregatesFilter<"PendingTransaction"> | number
    amount?: FloatWithAggregatesFilter<"PendingTransaction"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"PendingTransaction"> | $Enums.TransactionStatus
    expirationTime?: DateTimeWithAggregatesFilter<"PendingTransaction"> | Date | string
    signature?: StringWithAggregatesFilter<"PendingTransaction"> | string
    previousHash?: StringWithAggregatesFilter<"PendingTransaction"> | string
  }

  export type RejectedTransactionWhereInput = {
    AND?: RejectedTransactionWhereInput | RejectedTransactionWhereInput[]
    OR?: RejectedTransactionWhereInput[]
    NOT?: RejectedTransactionWhereInput | RejectedTransactionWhereInput[]
    id?: IntFilter<"RejectedTransaction"> | number
    initialisedAt?: DateTimeFilter<"RejectedTransaction"> | Date | string
    senderId?: IntFilter<"RejectedTransaction"> | number
    recieverId?: IntFilter<"RejectedTransaction"> | number
    amount?: FloatFilter<"RejectedTransaction"> | number
    acceptedAt?: DateTimeNullableFilter<"RejectedTransaction"> | Date | string | null
    status?: EnumTransactionStatusFilter<"RejectedTransaction"> | $Enums.TransactionStatus
    expirationTime?: DateTimeFilter<"RejectedTransaction"> | Date | string
    signature?: StringFilter<"RejectedTransaction"> | string
    previousHash?: StringFilter<"RejectedTransaction"> | string
    rejectionReason?: StringNullableFilter<"RejectedTransaction"> | string | null
  }

  export type RejectedTransactionOrderByWithRelationInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
  }

  export type RejectedTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RejectedTransactionWhereInput | RejectedTransactionWhereInput[]
    OR?: RejectedTransactionWhereInput[]
    NOT?: RejectedTransactionWhereInput | RejectedTransactionWhereInput[]
    initialisedAt?: DateTimeFilter<"RejectedTransaction"> | Date | string
    senderId?: IntFilter<"RejectedTransaction"> | number
    recieverId?: IntFilter<"RejectedTransaction"> | number
    amount?: FloatFilter<"RejectedTransaction"> | number
    acceptedAt?: DateTimeNullableFilter<"RejectedTransaction"> | Date | string | null
    status?: EnumTransactionStatusFilter<"RejectedTransaction"> | $Enums.TransactionStatus
    expirationTime?: DateTimeFilter<"RejectedTransaction"> | Date | string
    signature?: StringFilter<"RejectedTransaction"> | string
    previousHash?: StringFilter<"RejectedTransaction"> | string
    rejectionReason?: StringNullableFilter<"RejectedTransaction"> | string | null
  }, "id">

  export type RejectedTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    _count?: RejectedTransactionCountOrderByAggregateInput
    _avg?: RejectedTransactionAvgOrderByAggregateInput
    _max?: RejectedTransactionMaxOrderByAggregateInput
    _min?: RejectedTransactionMinOrderByAggregateInput
    _sum?: RejectedTransactionSumOrderByAggregateInput
  }

  export type RejectedTransactionScalarWhereWithAggregatesInput = {
    AND?: RejectedTransactionScalarWhereWithAggregatesInput | RejectedTransactionScalarWhereWithAggregatesInput[]
    OR?: RejectedTransactionScalarWhereWithAggregatesInput[]
    NOT?: RejectedTransactionScalarWhereWithAggregatesInput | RejectedTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RejectedTransaction"> | number
    initialisedAt?: DateTimeWithAggregatesFilter<"RejectedTransaction"> | Date | string
    senderId?: IntWithAggregatesFilter<"RejectedTransaction"> | number
    recieverId?: IntWithAggregatesFilter<"RejectedTransaction"> | number
    amount?: FloatWithAggregatesFilter<"RejectedTransaction"> | number
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"RejectedTransaction"> | Date | string | null
    status?: EnumTransactionStatusWithAggregatesFilter<"RejectedTransaction"> | $Enums.TransactionStatus
    expirationTime?: DateTimeWithAggregatesFilter<"RejectedTransaction"> | Date | string
    signature?: StringWithAggregatesFilter<"RejectedTransaction"> | string
    previousHash?: StringWithAggregatesFilter<"RejectedTransaction"> | string
    rejectionReason?: StringNullableWithAggregatesFilter<"RejectedTransaction"> | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    token?: string | null
    SenderTransaction?: TransactionCreateNestedManyWithoutSenderInput
    RecieverTransaction?: TransactionCreateNestedManyWithoutRecieverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    token?: string | null
    SenderTransaction?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    RecieverTransaction?: TransactionUncheckedCreateNestedManyWithoutRecieverInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    SenderTransaction?: TransactionUpdateManyWithoutSenderNestedInput
    RecieverTransaction?: TransactionUpdateManyWithoutRecieverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    SenderTransaction?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    RecieverTransaction?: TransactionUncheckedUpdateManyWithoutRecieverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    token?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateInput = {
    initialisedAt?: Date | string
    amount: number
    acceptedAt: Date | string
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
    sender: UserCreateNestedOneWithoutSenderTransactionInput
    reciever: UserCreateNestedOneWithoutRecieverTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    initialisedAt?: Date | string
    senderId: number
    recieverId: number
    amount: number
    acceptedAt: Date | string
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
  }

  export type TransactionUpdateInput = {
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
    sender?: UserUpdateOneRequiredWithoutSenderTransactionNestedInput
    reciever?: UserUpdateOneRequiredWithoutRecieverTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    initialisedAt?: Date | string
    senderId: number
    recieverId: number
    amount: number
    acceptedAt: Date | string
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
  }

  export type TransactionUpdateManyMutationInput = {
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }

  export type PendingTransactionCreateInput = {
    initialisedAt?: Date | string
    senderId: number
    recieverId: number
    amount: number
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
  }

  export type PendingTransactionUncheckedCreateInput = {
    id?: number
    initialisedAt?: Date | string
    senderId: number
    recieverId: number
    amount: number
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
  }

  export type PendingTransactionUpdateInput = {
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }

  export type PendingTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }

  export type PendingTransactionCreateManyInput = {
    id?: number
    initialisedAt?: Date | string
    senderId: number
    recieverId: number
    amount: number
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
  }

  export type PendingTransactionUpdateManyMutationInput = {
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }

  export type PendingTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }

  export type RejectedTransactionCreateInput = {
    initialisedAt?: Date | string
    senderId: number
    recieverId: number
    amount: number
    acceptedAt?: Date | string | null
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
    rejectionReason?: string | null
  }

  export type RejectedTransactionUncheckedCreateInput = {
    id?: number
    initialisedAt?: Date | string
    senderId: number
    recieverId: number
    amount: number
    acceptedAt?: Date | string | null
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
    rejectionReason?: string | null
  }

  export type RejectedTransactionUpdateInput = {
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RejectedTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RejectedTransactionCreateManyInput = {
    id?: number
    initialisedAt?: Date | string
    senderId: number
    recieverId: number
    amount: number
    acceptedAt?: Date | string | null
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
    rejectionReason?: string | null
  }

  export type RejectedTransactionUpdateManyMutationInput = {
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RejectedTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    acceptedAt?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    acceptedAt?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    acceptedAt?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type PendingTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
  }

  export type PendingTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
  }

  export type PendingTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
  }

  export type PendingTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
  }

  export type PendingTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RejectedTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    acceptedAt?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
    rejectionReason?: SortOrder
  }

  export type RejectedTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
  }

  export type RejectedTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    acceptedAt?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
    rejectionReason?: SortOrder
  }

  export type RejectedTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    initialisedAt?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
    acceptedAt?: SortOrder
    status?: SortOrder
    expirationTime?: SortOrder
    signature?: SortOrder
    previousHash?: SortOrder
    rejectionReason?: SortOrder
  }

  export type RejectedTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TransactionCreateNestedManyWithoutSenderInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutRecieverInput = {
    create?: XOR<TransactionCreateWithoutRecieverInput, TransactionUncheckedCreateWithoutRecieverInput> | TransactionCreateWithoutRecieverInput[] | TransactionUncheckedCreateWithoutRecieverInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecieverInput | TransactionCreateOrConnectWithoutRecieverInput[]
    createMany?: TransactionCreateManyRecieverInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutRecieverInput = {
    create?: XOR<TransactionCreateWithoutRecieverInput, TransactionUncheckedCreateWithoutRecieverInput> | TransactionCreateWithoutRecieverInput[] | TransactionUncheckedCreateWithoutRecieverInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecieverInput | TransactionCreateOrConnectWithoutRecieverInput[]
    createMany?: TransactionCreateManyRecieverInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TransactionUpdateManyWithoutSenderNestedInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSenderInput | TransactionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSenderInput | TransactionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSenderInput | TransactionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutRecieverNestedInput = {
    create?: XOR<TransactionCreateWithoutRecieverInput, TransactionUncheckedCreateWithoutRecieverInput> | TransactionCreateWithoutRecieverInput[] | TransactionUncheckedCreateWithoutRecieverInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecieverInput | TransactionCreateOrConnectWithoutRecieverInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutRecieverInput | TransactionUpsertWithWhereUniqueWithoutRecieverInput[]
    createMany?: TransactionCreateManyRecieverInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutRecieverInput | TransactionUpdateWithWhereUniqueWithoutRecieverInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutRecieverInput | TransactionUpdateManyWithWhereWithoutRecieverInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSenderInput | TransactionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSenderInput | TransactionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSenderInput | TransactionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutRecieverNestedInput = {
    create?: XOR<TransactionCreateWithoutRecieverInput, TransactionUncheckedCreateWithoutRecieverInput> | TransactionCreateWithoutRecieverInput[] | TransactionUncheckedCreateWithoutRecieverInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecieverInput | TransactionCreateOrConnectWithoutRecieverInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutRecieverInput | TransactionUpsertWithWhereUniqueWithoutRecieverInput[]
    createMany?: TransactionCreateManyRecieverInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutRecieverInput | TransactionUpdateWithWhereUniqueWithoutRecieverInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutRecieverInput | TransactionUpdateManyWithWhereWithoutRecieverInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSenderTransactionInput = {
    create?: XOR<UserCreateWithoutSenderTransactionInput, UserUncheckedCreateWithoutSenderTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRecieverTransactionInput = {
    create?: XOR<UserCreateWithoutRecieverTransactionInput, UserUncheckedCreateWithoutRecieverTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecieverTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UserUpdateOneRequiredWithoutSenderTransactionNestedInput = {
    create?: XOR<UserCreateWithoutSenderTransactionInput, UserUncheckedCreateWithoutSenderTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderTransactionInput
    upsert?: UserUpsertWithoutSenderTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSenderTransactionInput, UserUpdateWithoutSenderTransactionInput>, UserUncheckedUpdateWithoutSenderTransactionInput>
  }

  export type UserUpdateOneRequiredWithoutRecieverTransactionNestedInput = {
    create?: XOR<UserCreateWithoutRecieverTransactionInput, UserUncheckedCreateWithoutRecieverTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecieverTransactionInput
    upsert?: UserUpsertWithoutRecieverTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecieverTransactionInput, UserUpdateWithoutRecieverTransactionInput>, UserUncheckedUpdateWithoutRecieverTransactionInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutSenderInput = {
    initialisedAt?: Date | string
    amount: number
    acceptedAt: Date | string
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
    reciever: UserCreateNestedOneWithoutRecieverTransactionInput
  }

  export type TransactionUncheckedCreateWithoutSenderInput = {
    id?: number
    initialisedAt?: Date | string
    recieverId: number
    amount: number
    acceptedAt: Date | string
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
  }

  export type TransactionCreateOrConnectWithoutSenderInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput>
  }

  export type TransactionCreateManySenderInputEnvelope = {
    data: TransactionCreateManySenderInput | TransactionCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutRecieverInput = {
    initialisedAt?: Date | string
    amount: number
    acceptedAt: Date | string
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
    sender: UserCreateNestedOneWithoutSenderTransactionInput
  }

  export type TransactionUncheckedCreateWithoutRecieverInput = {
    id?: number
    initialisedAt?: Date | string
    senderId: number
    amount: number
    acceptedAt: Date | string
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
  }

  export type TransactionCreateOrConnectWithoutRecieverInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutRecieverInput, TransactionUncheckedCreateWithoutRecieverInput>
  }

  export type TransactionCreateManyRecieverInputEnvelope = {
    data: TransactionCreateManyRecieverInput | TransactionCreateManyRecieverInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutSenderInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSenderInput, TransactionUncheckedUpdateWithoutSenderInput>
    create: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSenderInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSenderInput, TransactionUncheckedUpdateWithoutSenderInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSenderInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSenderInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    initialisedAt?: DateTimeFilter<"Transaction"> | Date | string
    senderId?: IntFilter<"Transaction"> | number
    recieverId?: IntFilter<"Transaction"> | number
    amount?: FloatFilter<"Transaction"> | number
    acceptedAt?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    expirationTime?: DateTimeFilter<"Transaction"> | Date | string
    signature?: StringFilter<"Transaction"> | string
    previousHash?: StringFilter<"Transaction"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutRecieverInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutRecieverInput, TransactionUncheckedUpdateWithoutRecieverInput>
    create: XOR<TransactionCreateWithoutRecieverInput, TransactionUncheckedCreateWithoutRecieverInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutRecieverInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutRecieverInput, TransactionUncheckedUpdateWithoutRecieverInput>
  }

  export type TransactionUpdateManyWithWhereWithoutRecieverInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutRecieverInput>
  }

  export type UserCreateWithoutSenderTransactionInput = {
    name: string
    email: string
    password: string
    token?: string | null
    RecieverTransaction?: TransactionCreateNestedManyWithoutRecieverInput
  }

  export type UserUncheckedCreateWithoutSenderTransactionInput = {
    id?: number
    name: string
    email: string
    password: string
    token?: string | null
    RecieverTransaction?: TransactionUncheckedCreateNestedManyWithoutRecieverInput
  }

  export type UserCreateOrConnectWithoutSenderTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSenderTransactionInput, UserUncheckedCreateWithoutSenderTransactionInput>
  }

  export type UserCreateWithoutRecieverTransactionInput = {
    name: string
    email: string
    password: string
    token?: string | null
    SenderTransaction?: TransactionCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutRecieverTransactionInput = {
    id?: number
    name: string
    email: string
    password: string
    token?: string | null
    SenderTransaction?: TransactionUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutRecieverTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecieverTransactionInput, UserUncheckedCreateWithoutRecieverTransactionInput>
  }

  export type UserUpsertWithoutSenderTransactionInput = {
    update: XOR<UserUpdateWithoutSenderTransactionInput, UserUncheckedUpdateWithoutSenderTransactionInput>
    create: XOR<UserCreateWithoutSenderTransactionInput, UserUncheckedCreateWithoutSenderTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSenderTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSenderTransactionInput, UserUncheckedUpdateWithoutSenderTransactionInput>
  }

  export type UserUpdateWithoutSenderTransactionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    RecieverTransaction?: TransactionUpdateManyWithoutRecieverNestedInput
  }

  export type UserUncheckedUpdateWithoutSenderTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    RecieverTransaction?: TransactionUncheckedUpdateManyWithoutRecieverNestedInput
  }

  export type UserUpsertWithoutRecieverTransactionInput = {
    update: XOR<UserUpdateWithoutRecieverTransactionInput, UserUncheckedUpdateWithoutRecieverTransactionInput>
    create: XOR<UserCreateWithoutRecieverTransactionInput, UserUncheckedCreateWithoutRecieverTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecieverTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecieverTransactionInput, UserUncheckedUpdateWithoutRecieverTransactionInput>
  }

  export type UserUpdateWithoutRecieverTransactionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    SenderTransaction?: TransactionUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutRecieverTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    SenderTransaction?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type TransactionCreateManySenderInput = {
    id?: number
    initialisedAt?: Date | string
    recieverId: number
    amount: number
    acceptedAt: Date | string
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
  }

  export type TransactionCreateManyRecieverInput = {
    id?: number
    initialisedAt?: Date | string
    senderId: number
    amount: number
    acceptedAt: Date | string
    status?: $Enums.TransactionStatus
    expirationTime: Date | string
    signature: string
    previousHash: string
  }

  export type TransactionUpdateWithoutSenderInput = {
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
    reciever?: UserUpdateOneRequiredWithoutRecieverTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recieverId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutRecieverInput = {
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
    sender?: UserUpdateOneRequiredWithoutSenderTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutRecieverInput = {
    id?: IntFieldUpdateOperationsInput | number
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutRecieverInput = {
    id?: IntFieldUpdateOperationsInput | number
    initialisedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    expirationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    previousHash?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}