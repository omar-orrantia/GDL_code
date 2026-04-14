// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.pet.create',
    fullyQualifiedName: 'pet.create',
    httpMethod: 'post',
    httpPath: '/pet',
  },
  {
    clientCallName: 'client.pet.retrieve',
    fullyQualifiedName: 'pet.retrieve',
    httpMethod: 'get',
    httpPath: '/pet/{petId}',
  },
  {
    clientCallName: 'client.pet.update',
    fullyQualifiedName: 'pet.update',
    httpMethod: 'put',
    httpPath: '/pet',
  },
  {
    clientCallName: 'client.pet.delete',
    fullyQualifiedName: 'pet.delete',
    httpMethod: 'delete',
    httpPath: '/pet/{petId}',
  },
  {
    clientCallName: 'client.pet.findByStatus',
    fullyQualifiedName: 'pet.findByStatus',
    httpMethod: 'get',
    httpPath: '/pet/findByStatus',
  },
  {
    clientCallName: 'client.pet.findByTags',
    fullyQualifiedName: 'pet.findByTags',
    httpMethod: 'get',
    httpPath: '/pet/findByTags',
  },
  {
    clientCallName: 'client.pet.updateWithForm',
    fullyQualifiedName: 'pet.updateWithForm',
    httpMethod: 'post',
    httpPath: '/pet/{petId}',
  },
  {
    clientCallName: 'client.pet.uploadImage',
    fullyQualifiedName: 'pet.uploadImage',
    httpMethod: 'post',
    httpPath: '/pet/{petId}/uploadImage',
  },
  {
    clientCallName: 'client.store.listInventory',
    fullyQualifiedName: 'store.listInventory',
    httpMethod: 'get',
    httpPath: '/store/inventory',
  },
  {
    clientCallName: 'client.store.order.create',
    fullyQualifiedName: 'store.order.create',
    httpMethod: 'post',
    httpPath: '/store/order',
  },
  {
    clientCallName: 'client.store.order.retrieve',
    fullyQualifiedName: 'store.order.retrieve',
    httpMethod: 'get',
    httpPath: '/store/order/{orderId}',
  },
  {
    clientCallName: 'client.store.order.delete',
    fullyQualifiedName: 'store.order.delete',
    httpMethod: 'delete',
    httpPath: '/store/order/{orderId}',
  },
  {
    clientCallName: 'client.user.create',
    fullyQualifiedName: 'user.create',
    httpMethod: 'post',
    httpPath: '/user',
  },
  {
    clientCallName: 'client.user.retrieve',
    fullyQualifiedName: 'user.retrieve',
    httpMethod: 'get',
    httpPath: '/user/{username}',
  },
  {
    clientCallName: 'client.user.update',
    fullyQualifiedName: 'user.update',
    httpMethod: 'put',
    httpPath: '/user/{username}',
  },
  {
    clientCallName: 'client.user.delete',
    fullyQualifiedName: 'user.delete',
    httpMethod: 'delete',
    httpPath: '/user/{username}',
  },
  {
    clientCallName: 'client.user.createWithList',
    fullyQualifiedName: 'user.createWithList',
    httpMethod: 'post',
    httpPath: '/user/createWithList',
  },
  {
    clientCallName: 'client.user.login',
    fullyQualifiedName: 'user.login',
    httpMethod: 'get',
    httpPath: '/user/login',
  },
  {
    clientCallName: 'client.user.logout',
    fullyQualifiedName: 'user.logout',
    httpMethod: 'get',
    httpPath: '/user/logout',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
