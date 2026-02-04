// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrderAPI from './order';
import { Order, OrderCreateParams, OrderResource } from './order';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Store extends APIResource {
  order: OrderAPI.OrderResource = new OrderAPI.OrderResource(this._client);

  /**
   * Returns a map of status codes to quantities
   *
   * @example
   * ```ts
   * const response = await client.store.listInventory();
   * ```
   */
  listInventory(options?: RequestOptions): APIPromise<StoreListInventoryResponse> {
    return this._client.get('/store/inventory', options);
  }
}

export type StoreListInventoryResponse = { [key: string]: number };

Store.OrderResource = OrderResource;

export declare namespace Store {
  export { type StoreListInventoryResponse as StoreListInventoryResponse };

  export { OrderResource as OrderResource, type Order as Order, type OrderCreateParams as OrderCreateParams };
}
