// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create',
    endpoint: '/pet',
    httpMethod: 'post',
    summary: 'Add a new pet to the store',
    description: 'Add a new pet to the store',
    stainlessPath: '(resource) pet > (method) create',
    qualified: 'client.pet.create',
    params: [
      'name: string;',
      'photoUrls: string[];',
      'id?: number;',
      'category?: { id?: number; name?: string; };',
      "status?: 'available' | 'pending' | 'sold';",
      'tags?: { id?: number; name?: string; }[];',
    ],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## create\n\n`client.pet.create(name: string, photoUrls: string[], id?: number, category?: { id?: number; name?: string; }, status?: 'available' | 'pending' | 'sold', tags?: { id?: number; name?: string; }[]): { name: string; photoUrls: string[]; id?: number; category?: object; status?: 'available' | 'pending' | 'sold'; tags?: object[]; }`\n\n**post** `/pet`\n\nAdd a new pet to the store\n\n### Parameters\n\n- `name: string`\n\n- `photoUrls: string[]`\n\n- `id?: number`\n\n- `category?: { id?: number; name?: string; }`\n  - `id?: number`\n  - `name?: string`\n\n- `status?: 'available' | 'pending' | 'sold'`\n  pet status in the store\n\n- `tags?: { id?: number; name?: string; }[]`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `category?: { id?: number; name?: string; }`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst pet = await client.pet.create({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/pet/{petId}',
    httpMethod: 'get',
    summary: 'Find pet by ID',
    description: 'Returns a single pet',
    stainlessPath: '(resource) pet > (method) retrieve',
    qualified: 'client.pet.retrieve',
    params: ['petId: number;'],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## retrieve\n\n`client.pet.retrieve(petId: number): { name: string; photoUrls: string[]; id?: number; category?: object; status?: 'available' | 'pending' | 'sold'; tags?: object[]; }`\n\n**get** `/pet/{petId}`\n\nReturns a single pet\n\n### Parameters\n\n- `petId: number`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `category?: { id?: number; name?: string; }`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst pet = await client.pet.retrieve(0);\n\nconsole.log(pet);\n```",
  },
  {
    name: 'update',
    endpoint: '/pet',
    httpMethod: 'put',
    summary: 'Update an existing pet',
    description: 'Update an existing pet by Id',
    stainlessPath: '(resource) pet > (method) update',
    qualified: 'client.pet.update',
    params: [
      'name: string;',
      'photoUrls: string[];',
      'id?: number;',
      'category?: { id?: number; name?: string; };',
      "status?: 'available' | 'pending' | 'sold';",
      'tags?: { id?: number; name?: string; }[];',
    ],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## update\n\n`client.pet.update(name: string, photoUrls: string[], id?: number, category?: { id?: number; name?: string; }, status?: 'available' | 'pending' | 'sold', tags?: { id?: number; name?: string; }[]): { name: string; photoUrls: string[]; id?: number; category?: object; status?: 'available' | 'pending' | 'sold'; tags?: object[]; }`\n\n**put** `/pet`\n\nUpdate an existing pet by Id\n\n### Parameters\n\n- `name: string`\n\n- `photoUrls: string[]`\n\n- `id?: number`\n\n- `category?: { id?: number; name?: string; }`\n  - `id?: number`\n  - `name?: string`\n\n- `status?: 'available' | 'pending' | 'sold'`\n  pet status in the store\n\n- `tags?: { id?: number; name?: string; }[]`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `category?: { id?: number; name?: string; }`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst pet = await client.pet.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet);\n```",
  },
  {
    name: 'delete',
    endpoint: '/pet/{petId}',
    httpMethod: 'delete',
    summary: 'Deletes a pet',
    description: 'delete a pet',
    stainlessPath: '(resource) pet > (method) delete',
    qualified: 'client.pet.delete',
    params: ['petId: number;'],
    markdown:
      "## delete\n\n`client.pet.delete(petId: number): void`\n\n**delete** `/pet/{petId}`\n\ndelete a pet\n\n### Parameters\n\n- `petId: number`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nawait client.pet.delete(0)\n```",
  },
  {
    name: 'find_by_status',
    endpoint: '/pet/findByStatus',
    httpMethod: 'get',
    summary: 'Finds Pets by status',
    description: 'Multiple status values can be provided with comma separated strings',
    stainlessPath: '(resource) pet > (method) find_by_status',
    qualified: 'client.pet.findByStatus',
    params: ["status?: 'available' | 'pending' | 'sold';"],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]",
    markdown:
      "## find_by_status\n\n`client.pet.findByStatus(status?: 'available' | 'pending' | 'sold'): object[]`\n\n**get** `/pet/findByStatus`\n\nMultiple status values can be provided with comma separated strings\n\n### Parameters\n\n- `status?: 'available' | 'pending' | 'sold'`\n  Status values that need to be considered for filter\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst pets = await client.pet.findByStatus();\n\nconsole.log(pets);\n```",
  },
  {
    name: 'find_by_tags',
    endpoint: '/pet/findByTags',
    httpMethod: 'get',
    summary: 'Finds Pets by tags',
    description:
      'Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
    stainlessPath: '(resource) pet > (method) find_by_tags',
    qualified: 'client.pet.findByTags',
    params: ['tags?: string[];'],
    response:
      "{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]",
    markdown:
      "## find_by_tags\n\n`client.pet.findByTags(tags?: string[]): object[]`\n\n**get** `/pet/findByTags`\n\nMultiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.\n\n### Parameters\n\n- `tags?: string[]`\n  Tags to filter by\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; category?: { id?: number; name?: string; }; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst pets = await client.pet.findByTags();\n\nconsole.log(pets);\n```",
  },
  {
    name: 'update_with_form',
    endpoint: '/pet/{petId}',
    httpMethod: 'post',
    summary: 'Updates a pet in the store with form data',
    description: 'Updates a pet in the store with form data',
    stainlessPath: '(resource) pet > (method) update_with_form',
    qualified: 'client.pet.updateWithForm',
    params: ['petId: number;', 'name?: string;', 'status?: string;'],
    markdown:
      "## update_with_form\n\n`client.pet.updateWithForm(petId: number, name?: string, status?: string): void`\n\n**post** `/pet/{petId}`\n\nUpdates a pet in the store with form data\n\n### Parameters\n\n- `petId: number`\n\n- `name?: string`\n  Name of pet that needs to be updated\n\n- `status?: string`\n  Status of pet that needs to be updated\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nawait client.pet.updateWithForm(0)\n```",
  },
  {
    name: 'upload_image',
    endpoint: '/pet/{petId}/uploadImage',
    httpMethod: 'post',
    summary: 'uploads an image',
    description: 'uploads an image',
    stainlessPath: '(resource) pet > (method) upload_image',
    qualified: 'client.pet.uploadImage',
    params: ['petId: number;', 'body: string;', 'additionalMetadata?: string;'],
    response: '{ code?: number; message?: string; type?: string; }',
    markdown:
      "## upload_image\n\n`client.pet.uploadImage(petId: number, body: string, additionalMetadata?: string): { code?: number; message?: string; type?: string; }`\n\n**post** `/pet/{petId}/uploadImage`\n\nuploads an image\n\n### Parameters\n\n- `petId: number`\n\n- `body: string`\n\n- `additionalMetadata?: string`\n  Additional Metadata\n\n### Returns\n\n- `{ code?: number; message?: string; type?: string; }`\n\n  - `code?: number`\n  - `message?: string`\n  - `type?: string`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst response = await client.pet.uploadImage(0, fs.createReadStream('path/to/file'));\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_inventory',
    endpoint: '/store/inventory',
    httpMethod: 'get',
    summary: 'Returns pet inventories by status',
    description: 'Returns a map of status codes to quantities',
    stainlessPath: '(resource) store > (method) list_inventory',
    qualified: 'client.store.listInventory',
    response: 'object',
    markdown:
      "## list_inventory\n\n`client.store.listInventory(): object`\n\n**get** `/store/inventory`\n\nReturns a map of status codes to quantities\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst response = await client.store.listInventory();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/store/order',
    httpMethod: 'post',
    summary: 'Place an order for a pet',
    description: 'Place a new order in the store',
    stainlessPath: '(resource) store.order > (method) create',
    qualified: 'client.store.order.create',
    params: [
      'id?: number;',
      'complete?: boolean;',
      'petId?: number;',
      'quantity?: number;',
      'shipDate?: string;',
      "status?: 'placed' | 'approved' | 'delivered';",
    ],
    response:
      "{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }",
    markdown:
      "## create\n\n`client.store.order.create(id?: number, complete?: boolean, petId?: number, quantity?: number, shipDate?: string, status?: 'placed' | 'approved' | 'delivered'): { id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n**post** `/store/order`\n\nPlace a new order in the store\n\n### Parameters\n\n- `id?: number`\n\n- `complete?: boolean`\n\n- `petId?: number`\n\n- `quantity?: number`\n\n- `shipDate?: string`\n\n- `status?: 'placed' | 'approved' | 'delivered'`\n  Order Status\n\n### Returns\n\n- `{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n  - `id?: number`\n  - `complete?: boolean`\n  - `petId?: number`\n  - `quantity?: number`\n  - `shipDate?: string`\n  - `status?: 'placed' | 'approved' | 'delivered'`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst order = await client.store.order.create();\n\nconsole.log(order);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/store/order/{orderId}',
    httpMethod: 'get',
    summary: 'Find purchase order by ID',
    description:
      'For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.',
    stainlessPath: '(resource) store.order > (method) retrieve',
    qualified: 'client.store.order.retrieve',
    params: ['orderId: number;'],
    response:
      "{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }",
    markdown:
      "## retrieve\n\n`client.store.order.retrieve(orderId: number): { id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n**get** `/store/order/{orderId}`\n\nFor valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.\n\n### Parameters\n\n- `orderId: number`\n\n### Returns\n\n- `{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; }`\n\n  - `id?: number`\n  - `complete?: boolean`\n  - `petId?: number`\n  - `quantity?: number`\n  - `shipDate?: string`\n  - `status?: 'placed' | 'approved' | 'delivered'`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst order = await client.store.order.retrieve(0);\n\nconsole.log(order);\n```",
  },
  {
    name: 'delete',
    endpoint: '/store/order/{orderId}',
    httpMethod: 'delete',
    summary: 'Delete purchase order by ID',
    description:
      'For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors',
    stainlessPath: '(resource) store.order > (method) delete',
    qualified: 'client.store.order.delete',
    params: ['orderId: number;'],
    markdown:
      "## delete\n\n`client.store.order.delete(orderId: number): void`\n\n**delete** `/store/order/{orderId}`\n\nFor valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors\n\n### Parameters\n\n- `orderId: number`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nawait client.store.order.delete(0)\n```",
  },
  {
    name: 'create',
    endpoint: '/user',
    httpMethod: 'post',
    summary: 'Create user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) user > (method) create',
    qualified: 'client.user.create',
    params: [
      'id?: number;',
      'email?: string;',
      'firstName?: string;',
      'lastName?: string;',
      'password?: string;',
      'phone?: string;',
      'username?: string;',
      'userStatus?: number;',
    ],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## create\n\n`client.user.create(id?: number, email?: string, firstName?: string, lastName?: string, password?: string, phone?: string, username?: string, userStatus?: number): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**post** `/user`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `id?: number`\n\n- `email?: string`\n\n- `firstName?: string`\n\n- `lastName?: string`\n\n- `password?: string`\n\n- `phone?: string`\n\n- `username?: string`\n\n- `userStatus?: number`\n  User Status\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst user = await client.user.create();\n\nconsole.log(user);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/user/{username}',
    httpMethod: 'get',
    summary: 'Get user by user name',
    description: 'Get user by user name',
    stainlessPath: '(resource) user > (method) retrieve',
    qualified: 'client.user.retrieve',
    params: ['username: string;'],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## retrieve\n\n`client.user.retrieve(username: string): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**get** `/user/{username}`\n\nGet user by user name\n\n### Parameters\n\n- `username: string`\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst user = await client.user.retrieve('username');\n\nconsole.log(user);\n```",
  },
  {
    name: 'update',
    endpoint: '/user/{username}',
    httpMethod: 'put',
    summary: 'Update user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) user > (method) update',
    qualified: 'client.user.update',
    params: [
      'username: string;',
      'id?: number;',
      'email?: string;',
      'firstName?: string;',
      'lastName?: string;',
      'password?: string;',
      'phone?: string;',
      'username?: string;',
      'userStatus?: number;',
    ],
    markdown:
      "## update\n\n`client.user.update(username: string, id?: number, email?: string, firstName?: string, lastName?: string, password?: string, phone?: string, username?: string, userStatus?: number): void`\n\n**put** `/user/{username}`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `username: string`\n\n- `id?: number`\n\n- `email?: string`\n\n- `firstName?: string`\n\n- `lastName?: string`\n\n- `password?: string`\n\n- `phone?: string`\n\n- `username?: string`\n\n- `userStatus?: number`\n  User Status\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nawait client.user.update('username')\n```",
  },
  {
    name: 'delete',
    endpoint: '/user/{username}',
    httpMethod: 'delete',
    summary: 'Delete user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) user > (method) delete',
    qualified: 'client.user.delete',
    params: ['username: string;'],
    markdown:
      "## delete\n\n`client.user.delete(username: string): void`\n\n**delete** `/user/{username}`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `username: string`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nawait client.user.delete('username')\n```",
  },
  {
    name: 'create_with_list',
    endpoint: '/user/createWithList',
    httpMethod: 'post',
    summary: 'Creates list of users with given input array',
    description: 'Creates list of users with given input array',
    stainlessPath: '(resource) user > (method) create_with_list',
    qualified: 'client.user.createWithList',
    params: [
      'body?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[];',
    ],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## create_with_list\n\n`client.user.createWithList(body?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[]): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**post** `/user/createWithList`\n\nCreates list of users with given input array\n\n### Parameters\n\n- `body?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[]`\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst user = await client.user.createWithList();\n\nconsole.log(user);\n```",
  },
  {
    name: 'login',
    endpoint: '/user/login',
    httpMethod: 'get',
    summary: 'Logs user into the system',
    description: 'Logs user into the system',
    stainlessPath: '(resource) user > (method) login',
    qualified: 'client.user.login',
    params: ['password?: string;', 'username?: string;'],
    response: 'string',
    markdown:
      "## login\n\n`client.user.login(password?: string, username?: string): string`\n\n**get** `/user/login`\n\nLogs user into the system\n\n### Parameters\n\n- `password?: string`\n  The password for login in clear text\n\n- `username?: string`\n  The user name for login\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nconst response = await client.user.login();\n\nconsole.log(response);\n```",
  },
  {
    name: 'logout',
    endpoint: '/user/logout',
    httpMethod: 'get',
    summary: 'Logs out current logged in user session',
    description: 'Logs out current logged in user session',
    stainlessPath: '(resource) user > (method) logout',
    qualified: 'client.user.logout',
    markdown:
      "## logout\n\n`client.user.logout(): void`\n\n**get** `/user/logout`\n\nLogs out current logged in user session\n\n### Example\n\n```typescript\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata();\n\nawait client.user.logout()\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
