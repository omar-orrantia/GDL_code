// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

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
  perLanguage?: Record<string, PerLanguageData>;
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
    perLanguage: {
      cli: {
        method: 'pet update',
        example:
          "strezless-musick-nexus-metadata pet update \\\n  --api-key 'My API Key' \\\n  --name doggie \\\n  --photo-url string",
      },
      csharp: {
        method: 'Pet.Update',
        example:
          'PetUpdateParams parameters = new()\n{\n    Name = "doggie",\n    PhotoUrls =\n    [\n        "string"\n    ],\n};\n\nvar pet = await client.Pet.Update(parameters);\n\nConsole.WriteLine(pet);',
      },
      go: {
        method: 'client.Pet.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpet, err := client.Pet.Update(context.TODO(), strezlessmusicknexusmetadata.PetUpdateParams{\n\t\tPet: strezlessmusicknexusmetadata.PetParam{\n\t\t\tName:      "doggie",\n\t\t\tPhotoURLs: []string{"string"},\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY" \\\n    -d \'{\n          "name": "doggie",\n          "photoUrls": [\n            "string"\n          ],\n          "id": 10\n        }\'',
      },
      java: {
        method: 'pet().update',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        Pet params = Pet.builder()\n            .name("doggie")\n            .addPhotoUrl("string")\n            .build();\n        Pet pet = client.pet().update(params);\n    }\n}',
      },
      kotlin: {
        method: 'pet().update',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val params: Pet = Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build()\n    val pet: Pet = client.pet().update(params)\n}',
      },
      php: {
        method: 'pet->update',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$pet = $client->pet->update(\n  name: 'doggie',\n  photoURLs: ['string'],\n  id: 10,\n  category: ['id' => 1, 'name' => 'Dogs'],\n  status: 'available',\n  tags: [['id' => 0, 'name' => 'name']],\n);\n\nvar_dump($pet);",
      },
      python: {
        method: 'pet.update',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\npet = client.pet.update(\n    name="doggie",\n    photo_urls=["string"],\n)\nprint(pet.id)',
      },
      ruby: {
        method: 'pet.update',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\npet = strezless_musick_nexus_metadata.pet.update(name: "doggie", photo_urls: ["string"])\n\nputs(pet)',
      },
      typescript: {
        method: 'client.pet.update',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pet.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);",
      },
    },
  },
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
    perLanguage: {
      cli: {
        method: 'pet create',
        example:
          "strezless-musick-nexus-metadata pet create \\\n  --api-key 'My API Key' \\\n  --name doggie \\\n  --photo-url string",
      },
      csharp: {
        method: 'Pet.Create',
        example:
          'PetCreateParams parameters = new()\n{\n    Name = "doggie",\n    PhotoUrls =\n    [\n        "string"\n    ],\n};\n\nvar pet = await client.Pet.Create(parameters);\n\nConsole.WriteLine(pet);',
      },
      go: {
        method: 'client.Pet.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpet, err := client.Pet.New(context.TODO(), strezlessmusicknexusmetadata.PetNewParams{\n\t\tPet: strezlessmusicknexusmetadata.PetParam{\n\t\t\tName:      "doggie",\n\t\t\tPhotoURLs: []string{"string"},\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY" \\\n    -d \'{\n          "name": "doggie",\n          "photoUrls": [\n            "string"\n          ],\n          "id": 10\n        }\'',
      },
      java: {
        method: 'pet().create',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        Pet params = Pet.builder()\n            .name("doggie")\n            .addPhotoUrl("string")\n            .build();\n        Pet pet = client.pet().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'pet().create',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetCreateParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val params: Pet = Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build()\n    val pet: Pet = client.pet().create(params)\n}',
      },
      php: {
        method: 'pet->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$pet = $client->pet->create(\n  name: 'doggie',\n  photoURLs: ['string'],\n  id: 10,\n  category: ['id' => 1, 'name' => 'Dogs'],\n  status: 'available',\n  tags: [['id' => 0, 'name' => 'name']],\n);\n\nvar_dump($pet);",
      },
      python: {
        method: 'pet.create',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\npet = client.pet.create(\n    name="doggie",\n    photo_urls=["string"],\n)\nprint(pet.id)',
      },
      ruby: {
        method: 'pet.create',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\npet = strezless_musick_nexus_metadata.pet.create(name: "doggie", photo_urls: ["string"])\n\nputs(pet)',
      },
      typescript: {
        method: 'client.pet.create',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pet.create({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'pet find_by_status',
        example: "strezless-musick-nexus-metadata pet find-by-status \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Pet.FindByStatus',
        example:
          'PetFindByStatusParams parameters = new();\n\nvar pets = await client.Pet.FindByStatus(parameters);\n\nConsole.WriteLine(pets);',
      },
      go: {
        method: 'client.Pet.FindByStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpets, err := client.Pet.FindByStatus(context.TODO(), strezlessmusicknexusmetadata.PetFindByStatusParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pets)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/findByStatus \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'pet().findByStatus',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetFindByStatusParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        List<Pet> pets = client.pet().findByStatus();\n    }\n}',
      },
      kotlin: {
        method: 'pet().findByStatus',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetFindByStatusParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val pets: List<Pet> = client.pet().findByStatus()\n}',
      },
      php: {
        method: 'pet->findByStatus',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$pets = $client->pet->findByStatus(status: 'available');\n\nvar_dump($pets);",
      },
      python: {
        method: 'pet.find_by_status',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\npets = client.pet.find_by_status()\nprint(pets)',
      },
      ruby: {
        method: 'pet.find_by_status',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\npets = strezless_musick_nexus_metadata.pet.find_by_status\n\nputs(pets)',
      },
      typescript: {
        method: 'client.pet.findByStatus',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst pets = await client.pet.findByStatus();\n\nconsole.log(pets);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'pet find_by_tags',
        example: "strezless-musick-nexus-metadata pet find-by-tags \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Pet.FindByTags',
        example:
          'PetFindByTagsParams parameters = new();\n\nvar pets = await client.Pet.FindByTags(parameters);\n\nConsole.WriteLine(pets);',
      },
      go: {
        method: 'client.Pet.FindByTags',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpets, err := client.Pet.FindByTags(context.TODO(), strezlessmusicknexusmetadata.PetFindByTagsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pets)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/findByTags \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'pet().findByTags',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetFindByTagsParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        List<Pet> pets = client.pet().findByTags();\n    }\n}',
      },
      kotlin: {
        method: 'pet().findByTags',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetFindByTagsParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val pets: List<Pet> = client.pet().findByTags()\n}',
      },
      php: {
        method: 'pet->findByTags',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$pets = $client->pet->findByTags(tags: ['string']);\n\nvar_dump($pets);",
      },
      python: {
        method: 'pet.find_by_tags',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\npets = client.pet.find_by_tags()\nprint(pets)',
      },
      ruby: {
        method: 'pet.find_by_tags',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\npets = strezless_musick_nexus_metadata.pet.find_by_tags\n\nputs(pets)',
      },
      typescript: {
        method: 'client.pet.findByTags',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst pets = await client.pet.findByTags();\n\nconsole.log(pets);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'pet retrieve',
        example: "strezless-musick-nexus-metadata pet retrieve \\\n  --api-key 'My API Key' \\\n  --pet-id 0",
      },
      csharp: {
        method: 'Pet.Retrieve',
        example:
          'PetRetrieveParams parameters = new() { PetID = 0 };\n\nvar pet = await client.Pet.Retrieve(parameters);\n\nConsole.WriteLine(pet);',
      },
      go: {
        method: 'client.Pet.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpet, err := client.Pet.Get(context.TODO(), 0)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/$PET_ID \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'pet().retrieve',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        Pet pet = client.pet().retrieve(0L);\n    }\n}',
      },
      kotlin: {
        method: 'pet().retrieve',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetRetrieveParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val pet: Pet = client.pet().retrieve(0L)\n}',
      },
      php: {
        method: 'pet->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$pet = $client->pet->retrieve(0);\n\nvar_dump($pet);",
      },
      python: {
        method: 'pet.retrieve',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\npet = client.pet.retrieve(\n    0,\n)\nprint(pet.id)',
      },
      ruby: {
        method: 'pet.retrieve',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\npet = strezless_musick_nexus_metadata.pet.retrieve(0)\n\nputs(pet)',
      },
      typescript: {
        method: 'client.pet.retrieve',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pet.retrieve(0);\n\nconsole.log(pet.id);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'pet update_with_form',
        example:
          "strezless-musick-nexus-metadata pet update-with-form \\\n  --api-key 'My API Key' \\\n  --pet-id 0",
      },
      csharp: {
        method: 'Pet.UpdateWithForm',
        example:
          'PetUpdateWithFormParams parameters = new() { PetID = 0 };\n\nawait client.Pet.UpdateWithForm(parameters);',
      },
      go: {
        method: 'client.Pet.UpdateWithForm',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Pet.UpdateWithForm(\n\t\tcontext.TODO(),\n\t\t0,\n\t\tstrezlessmusicknexusmetadata.PetUpdateWithFormParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/$PET_ID \\\n    -X POST \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'pet().updateWithForm',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateWithFormParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        client.pet().updateWithForm(0L);\n    }\n}',
      },
      kotlin: {
        method: 'pet().updateWithForm',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateWithFormParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    client.pet().updateWithForm(0L)\n}',
      },
      php: {
        method: 'pet->updateWithForm',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->pet->updateWithForm(0, name: 'name', status: 'status');\n\nvar_dump($result);",
      },
      python: {
        method: 'pet.update_with_form',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nclient.pet.update_with_form(\n    pet_id=0,\n)',
      },
      ruby: {
        method: 'pet.update_with_form',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nresult = strezless_musick_nexus_metadata.pet.update_with_form(0)\n\nputs(result)',
      },
      typescript: {
        method: 'client.pet.updateWithForm',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.pet.updateWithForm(0);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'pet delete',
        example: "strezless-musick-nexus-metadata pet delete \\\n  --api-key 'My API Key' \\\n  --pet-id 0",
      },
      csharp: {
        method: 'Pet.Delete',
        example: 'PetDeleteParams parameters = new() { PetID = 0 };\n\nawait client.Pet.Delete(parameters);',
      },
      go: {
        method: 'client.Pet.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Pet.Delete(context.TODO(), 0)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/pet/$PET_ID \\\n    -X DELETE \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'pet().delete',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        client.pet().delete(0L);\n    }\n}',
      },
      kotlin: {
        method: 'pet().delete',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetDeleteParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    client.pet().delete(0L)\n}',
      },
      php: {
        method: 'pet->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->pet->delete(0);\n\nvar_dump($result);",
      },
      python: {
        method: 'pet.delete',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nclient.pet.delete(\n    0,\n)',
      },
      ruby: {
        method: 'pet.delete',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nresult = strezless_musick_nexus_metadata.pet.delete(0)\n\nputs(result)',
      },
      typescript: {
        method: 'client.pet.delete',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.pet.delete(0);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'pet upload_image',
        example:
          "strezless-musick-nexus-metadata pet upload-image \\\n  --api-key 'My API Key' \\\n  --pet-id 0 \\\n  --body 'Example data'",
      },
      csharp: {
        method: 'Pet.UploadImage',
        example:
          'PetUploadImageParams parameters = new()\n{\n    PetID = 0,\n    Body = Encoding.UTF8.GetBytes("Example data"),\n};\n\nvar response = await client.Pet.UploadImage(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Pet.UploadImage',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Pet.UploadImage(\n\t\tcontext.TODO(),\n\t\t0,\n\t\tio.Reader(bytes.NewBuffer([]byte("Example data"))),\n\t\tstrezlessmusicknexusmetadata.PetUploadImageParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Code)\n}\n',
      },
      http: {
        example:
          "curl https://petstore3.swagger.io/api/v3/pet/$PET_ID/uploadImage \\\n    -H 'Content-Type: application/octet-stream' \\\n    -H \"api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY\" \\\n    -F 'body=@/path/to/body'",
      },
      java: {
        method: 'pet().uploadImage',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUploadImageParams;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUploadImageResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        PetUploadImageResponse response = client.pet().uploadImage(\n          0L, "Example data"\n        );\n    }\n}',
      },
      kotlin: {
        method: 'pet().uploadImage',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUploadImageParams\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUploadImageResponse\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val response: PetUploadImageResponse = client.pet().uploadImage(\n      0L, "Example data"\n    )\n}',
      },
      php: {
        method: 'pet->uploadImage',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->pet->uploadImage(0, 'file');\n\nvar_dump($response);",
      },
      python: {
        method: 'pet.upload_image',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.pet.upload_image(\n    pet_id=0,\n    body=b"Example data",\n)\nprint(response.code)',
      },
      ruby: {
        method: 'pet.upload_image',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nresponse = strezless_musick_nexus_metadata.pet.upload_image(0, body: StringIO.new("Example data"))\n\nputs(response)',
      },
      typescript: {
        method: 'client.pet.uploadImage',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.pet.uploadImage(0, fs.createReadStream('path/to/file'));\n\nconsole.log(response.code);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'store list_inventory',
        example: "strezless-musick-nexus-metadata store list-inventory \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Store.ListInventory',
        example:
          'StoreListInventoryParams parameters = new();\n\nvar response = await client.Store.ListInventory(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Store.ListInventory',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Store.ListInventory(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/inventory \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'store().listInventory',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.store.StoreListInventoryParams;\nimport com.strezless_musick_nexus_metadata.api.models.store.StoreListInventoryResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        StoreListInventoryResponse response = client.store().listInventory();\n    }\n}',
      },
      kotlin: {
        method: 'store().listInventory',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.store.StoreListInventoryParams\nimport com.strezless_musick_nexus_metadata.api.models.store.StoreListInventoryResponse\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val response: StoreListInventoryResponse = client.store().listInventory()\n}',
      },
      php: {
        method: 'store->listInventory',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->store->listInventory();\n\nvar_dump($response);",
      },
      python: {
        method: 'store.list_inventory',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.store.list_inventory()\nprint(response)',
      },
      ruby: {
        method: 'store.list_inventory',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nresponse = strezless_musick_nexus_metadata.store.list_inventory\n\nputs(response)',
      },
      typescript: {
        method: 'client.store.listInventory',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.store.listInventory();\n\nconsole.log(response);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'order create',
        example: "strezless-musick-nexus-metadata store:order create \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Store.Order.Create',
        example:
          'OrderCreateParams parameters = new();\n\nvar order = await client.Store.Order.Create(parameters);\n\nConsole.WriteLine(order);',
      },
      go: {
        method: 'client.Store.Order.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torder, err := client.Store.Order.New(context.TODO(), strezlessmusicknexusmetadata.StoreOrderNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/order \\\n    -X POST \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'store().order().create',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.store.order.Order;\nimport com.strezless_musick_nexus_metadata.api.models.store.order.OrderCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        Order order = client.store().order().create();\n    }\n}',
      },
      kotlin: {
        method: 'store().order().create',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.store.order.Order\nimport com.strezless_musick_nexus_metadata.api.models.store.order.OrderCreateParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val order: Order = client.store().order().create()\n}',
      },
      php: {
        method: 'store->order->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$order = $client->store->order->create(\n  id: 10,\n  complete: true,\n  petID: 198772,\n  quantity: 7,\n  shipDate: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  status: 'approved',\n);\n\nvar_dump($order);",
      },
      python: {
        method: 'store.order.create',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\norder = client.store.order.create()\nprint(order.id)',
      },
      ruby: {
        method: 'store.order.create',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\norder = strezless_musick_nexus_metadata.store.order.create\n\nputs(order)',
      },
      typescript: {
        method: 'client.store.order.create',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.store.order.create();\n\nconsole.log(order.id);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'order retrieve',
        example:
          "strezless-musick-nexus-metadata store:order retrieve \\\n  --api-key 'My API Key' \\\n  --order-id 0",
      },
      csharp: {
        method: 'Store.Order.Retrieve',
        example:
          'OrderRetrieveParams parameters = new() { OrderID = 0 };\n\nvar order = await client.Store.Order.Retrieve(parameters);\n\nConsole.WriteLine(order);',
      },
      go: {
        method: 'client.Store.Order.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torder, err := client.Store.Order.Get(context.TODO(), 0)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/order/$ORDER_ID \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'store().order().retrieve',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.store.order.Order;\nimport com.strezless_musick_nexus_metadata.api.models.store.order.OrderRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        Order order = client.store().order().retrieve(0L);\n    }\n}',
      },
      kotlin: {
        method: 'store().order().retrieve',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.store.order.Order\nimport com.strezless_musick_nexus_metadata.api.models.store.order.OrderRetrieveParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val order: Order = client.store().order().retrieve(0L)\n}',
      },
      php: {
        method: 'store->order->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$order = $client->store->order->retrieve(0);\n\nvar_dump($order);",
      },
      python: {
        method: 'store.order.retrieve',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\norder = client.store.order.retrieve(\n    0,\n)\nprint(order.id)',
      },
      ruby: {
        method: 'store.order.retrieve',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\norder = strezless_musick_nexus_metadata.store.order.retrieve(0)\n\nputs(order)',
      },
      typescript: {
        method: 'client.store.order.retrieve',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.store.order.retrieve(0);\n\nconsole.log(order.id);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'order delete',
        example:
          "strezless-musick-nexus-metadata store:order delete \\\n  --api-key 'My API Key' \\\n  --order-id 0",
      },
      csharp: {
        method: 'Store.Order.Delete',
        example:
          'OrderDeleteParams parameters = new() { OrderID = 0 };\n\nawait client.Store.Order.Delete(parameters);',
      },
      go: {
        method: 'client.Store.Order.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Store.Order.Delete(context.TODO(), 0)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/store/order/$ORDER_ID \\\n    -X DELETE \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'store().order().delete',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.store.order.OrderDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        client.store().order().delete(0L);\n    }\n}',
      },
      kotlin: {
        method: 'store().order().delete',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.store.order.OrderDeleteParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    client.store().order().delete(0L)\n}',
      },
      php: {
        method: 'store->order->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->store->order->delete(0);\n\nvar_dump($result);",
      },
      python: {
        method: 'store.order.delete',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nclient.store.order.delete(\n    0,\n)',
      },
      ruby: {
        method: 'store.order.delete',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nresult = strezless_musick_nexus_metadata.store.order.delete(0)\n\nputs(result)',
      },
      typescript: {
        method: 'client.store.order.delete',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.store.order.delete(0);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'user create',
        example: "strezless-musick-nexus-metadata user create \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'User.Create',
        example:
          'UserCreateParams parameters = new();\n\nvar user = await client.User.Create(parameters);\n\nConsole.WriteLine(user);',
      },
      go: {
        method: 'client.User.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuser, err := client.User.New(context.TODO(), strezlessmusicknexusmetadata.UserNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", user.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user \\\n    -X POST \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'user().create',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.user.User;\nimport com.strezless_musick_nexus_metadata.api.models.user.UserCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        User user = client.user().create();\n    }\n}',
      },
      kotlin: {
        method: 'user().create',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.user.User\nimport com.strezless_musick_nexus_metadata.api.models.user.UserCreateParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val user: User = client.user().create()\n}',
      },
      php: {
        method: 'user->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$user = $client->user->create(\n  id: 10,\n  email: 'john@email.com',\n  firstName: 'John',\n  lastName: 'James',\n  password: '12345',\n  phone: '12345',\n  username: 'theUser',\n  userStatus: 1,\n);\n\nvar_dump($user);",
      },
      python: {
        method: 'user.create',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.user.create()\nprint(user.id)',
      },
      ruby: {
        method: 'user.create',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nuser = strezless_musick_nexus_metadata.user.create\n\nputs(user)',
      },
      typescript: {
        method: 'client.user.create',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.user.create();\n\nconsole.log(user.id);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'user create_with_list',
        example: "strezless-musick-nexus-metadata user create-with-list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'User.CreateWithList',
        example:
          'UserCreateWithListParams parameters = new();\n\nvar user = await client.User.CreateWithList(parameters);\n\nConsole.WriteLine(user);',
      },
      go: {
        method: 'client.User.NewWithList',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuser, err := client.User.NewWithList(context.TODO(), strezlessmusicknexusmetadata.UserNewWithListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", user.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/createWithList \\\n    -X POST \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'user().createWithList',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.user.User;\nimport com.strezless_musick_nexus_metadata.api.models.user.UserCreateWithListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        User user = client.user().createWithList();\n    }\n}',
      },
      kotlin: {
        method: 'user().createWithList',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.user.User\nimport com.strezless_musick_nexus_metadata.api.models.user.UserCreateWithListParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val user: User = client.user().createWithList()\n}',
      },
      php: {
        method: 'user->createWithList',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$user = $client->user->createWithList(\n  body: [\n    [\n      'id' => 10,\n      'email' => 'john@email.com',\n      'firstName' => 'John',\n      'lastName' => 'James',\n      'password' => '12345',\n      'phone' => '12345',\n      'username' => 'theUser',\n      'userStatus' => 1,\n    ],\n  ],\n);\n\nvar_dump($user);",
      },
      python: {
        method: 'user.create_with_list',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.user.create_with_list()\nprint(user.id)',
      },
      ruby: {
        method: 'user.create_with_list',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nuser = strezless_musick_nexus_metadata.user.create_with_list\n\nputs(user)',
      },
      typescript: {
        method: 'client.user.createWithList',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.user.createWithList();\n\nconsole.log(user.id);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'user login',
        example: "strezless-musick-nexus-metadata user login \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'User.Login',
        example:
          'UserLoginParams parameters = new();\n\nvar response = await client.User.Login(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.User.Login',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.User.Login(context.TODO(), strezlessmusicknexusmetadata.UserLoginParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/login \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'user().login',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.user.UserLoginParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        String response = client.user().login();\n    }\n}',
      },
      kotlin: {
        method: 'user().login',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.user.UserLoginParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val response: String = client.user().login()\n}',
      },
      php: {
        method: 'user->login',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->user->login(password: 'password', username: 'username');\n\nvar_dump($response);",
      },
      python: {
        method: 'user.login',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.user.login()\nprint(response)',
      },
      ruby: {
        method: 'user.login',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nresponse = strezless_musick_nexus_metadata.user.login\n\nputs(response)',
      },
      typescript: {
        method: 'client.user.login',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.user.login();\n\nconsole.log(response);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'user logout',
        example: "strezless-musick-nexus-metadata user logout \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'User.Logout',
        example: 'UserLogoutParams parameters = new();\n\nawait client.User.Logout(parameters);',
      },
      go: {
        method: 'client.User.Logout',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.User.Logout(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/logout \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'user().logout',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.user.UserLogoutParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        client.user().logout();\n    }\n}',
      },
      kotlin: {
        method: 'user().logout',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.user.UserLogoutParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    client.user().logout()\n}',
      },
      php: {
        method: 'user->logout',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->user->logout();\n\nvar_dump($result);",
      },
      python: {
        method: 'user.logout',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nclient.user.logout()',
      },
      ruby: {
        method: 'user.logout',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nresult = strezless_musick_nexus_metadata.user.logout\n\nputs(result)',
      },
      typescript: {
        method: 'client.user.logout',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.user.logout();",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'user retrieve',
        example:
          "strezless-musick-nexus-metadata user retrieve \\\n  --api-key 'My API Key' \\\n  --username username",
      },
      csharp: {
        method: 'User.Retrieve',
        example:
          'UserRetrieveParams parameters = new() { Username = "username" };\n\nvar user = await client.User.Retrieve(parameters);\n\nConsole.WriteLine(user);',
      },
      go: {
        method: 'client.User.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuser, err := client.User.Get(context.TODO(), "username")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", user.ID)\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/$USERNAME \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'user().retrieve',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.user.User;\nimport com.strezless_musick_nexus_metadata.api.models.user.UserRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        User user = client.user().retrieve("username");\n    }\n}',
      },
      kotlin: {
        method: 'user().retrieve',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.user.User\nimport com.strezless_musick_nexus_metadata.api.models.user.UserRetrieveParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    val user: User = client.user().retrieve("username")\n}',
      },
      php: {
        method: 'user->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$user = $client->user->retrieve('username');\n\nvar_dump($user);",
      },
      python: {
        method: 'user.retrieve',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.user.retrieve(\n    "username",\n)\nprint(user.id)',
      },
      ruby: {
        method: 'user.retrieve',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nuser = strezless_musick_nexus_metadata.user.retrieve("username")\n\nputs(user)',
      },
      typescript: {
        method: 'client.user.retrieve',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.user.retrieve('username');\n\nconsole.log(user.id);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'user update',
        example:
          "strezless-musick-nexus-metadata user update \\\n  --api-key 'My API Key' \\\n  --existing-username username",
      },
      csharp: {
        method: 'User.Update',
        example:
          'UserUpdateParams parameters = new() { ExistingUsername = "username" };\n\nawait client.User.Update(parameters);',
      },
      go: {
        method: 'client.User.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.User.Update(\n\t\tcontext.TODO(),\n\t\t"username",\n\t\tstrezlessmusicknexusmetadata.UserUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/$EXISTING_USERNAME \\\n    -X PUT \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'user().update',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.user.UserUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        client.user().update("username");\n    }\n}',
      },
      kotlin: {
        method: 'user().update',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.user.UserUpdateParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    client.user().update("username")\n}',
      },
      php: {
        method: 'user->update',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->user->update(\n  'username',\n  id: 10,\n  email: 'john@email.com',\n  firstName: 'John',\n  lastName: 'James',\n  password: '12345',\n  phone: '12345',\n  username: 'theUser',\n  userStatus: 1,\n);\n\nvar_dump($result);",
      },
      python: {
        method: 'user.update',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nclient.user.update(\n    existing_username="username",\n)',
      },
      ruby: {
        method: 'user.update',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nresult = strezless_musick_nexus_metadata.user.update("username")\n\nputs(result)',
      },
      typescript: {
        method: 'client.user.update',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.user.update('username');",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'user delete',
        example:
          "strezless-musick-nexus-metadata user delete \\\n  --api-key 'My API Key' \\\n  --username username",
      },
      csharp: {
        method: 'User.Delete',
        example:
          'UserDeleteParams parameters = new() { Username = "username" };\n\nawait client.User.Delete(parameters);',
      },
      go: {
        method: 'client.User.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.User.Delete(context.TODO(), "username")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://petstore3.swagger.io/api/v3/user/$USERNAME \\\n    -X DELETE \\\n    -H "api_key: $STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"',
      },
      java: {
        method: 'user().delete',
        example:
          'package com.strezless_musick_nexus_metadata.api.example;\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.user.UserDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        StrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\n        client.user().delete("username");\n    }\n}',
      },
      kotlin: {
        method: 'user().delete',
        example:
          'package com.strezless_musick_nexus_metadata.api.example\n\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.user.UserDeleteParams\n\nfun main() {\n    val client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\n    client.user().delete("username")\n}',
      },
      php: {
        method: 'user->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->user->delete('username');\n\nvar_dump($result);",
      },
      python: {
        method: 'user.delete',
        example:
          'import os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\nclient.user.delete(\n    "username",\n)',
      },
      ruby: {
        method: 'user.delete',
        example:
          'require "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(api_key: "My API Key")\n\nresult = strezless_musick_nexus_metadata.user.delete("username")\n\nputs(result)',
      },
      typescript: {
        method: 'client.user.delete',
        example:
          "import StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.user.delete('username');",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Strezless Musick Nexus Metadata Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/strezless_musick_nexus_metadata.svg?label=pypi%20(stable))](https://pypi.org/project/strezless_musick_nexus_metadata/)\n\nThe Strezless Musick Nexus Metadata Python library provides convenient access to the Strezless Musick Nexus Metadata REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Strezless Musick Nexus Metadata MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=strezless-musick-nexus-metadata-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInN0cmV6bGVzcy1tdXNpY2stbmV4dXMtbWV0YWRhdGEtbWNwIl0sImVudiI6eyJTVFJFWkxFU1NfTVVTSUNLX05FWFVTX01FVEFEQVRBX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22strezless-musick-nexus-metadata-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22strezless-musick-nexus-metadata-mcp%22%5D%2C%22env%22%3A%7B%22STREZLESS_MUSICK_NEXUS_METADATA_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\n The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install strezless_musick_nexus_metadata\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\n\npet = client.pet.update(\n    name="doggie",\n    photo_urls=["string"],\n)\nprint(pet.id)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncStrezlessMusickNexusMetadata` instead of `StrezlessMusickNexusMetadata` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom strezless_musick_nexus_metadata import AsyncStrezlessMusickNexusMetadata\n\nclient = AsyncStrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  pet = await client.pet.update(\n      name="doggie",\n      photo_urls=["string"],\n  )\n  print(pet.id)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install strezless_musick_nexus_metadata[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom strezless_musick_nexus_metadata import DefaultAioHttpClient\nfrom strezless_musick_nexus_metadata import AsyncStrezlessMusickNexusMetadata\n\nasync def main() -> None:\n  async with AsyncStrezlessMusickNexusMetadata(\n    api_key=os.environ.get("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    pet = await client.pet.update(\n        name="doggie",\n        photo_urls=["string"],\n    )\n    print(pet.id)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata()\n\npet = client.pet.update(\n    name="doggie",\n    photo_urls=["string"],\n    category={},\n)\nprint(pet.category)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `strezless_musick_nexus_metadata.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `strezless_musick_nexus_metadata.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `strezless_musick_nexus_metadata.APIError`.\n\n```python\nimport strezless_musick_nexus_metadata\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata()\n\ntry:\n    client.pet.update(\n        name="doggie",\n        photo_urls=["string"],\n    )\nexcept strezless_musick_nexus_metadata.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept strezless_musick_nexus_metadata.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept strezless_musick_nexus_metadata.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\n# Configure the default for all requests:\nclient = StrezlessMusickNexusMetadata(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).pet.update(\n    name="doggie",\n    photo_urls=["string"],\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\n# Configure the default for all requests:\nclient = StrezlessMusickNexusMetadata(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = StrezlessMusickNexusMetadata(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).pet.update(\n    name="doggie",\n    photo_urls=["string"],\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `STREZLESS_MUSICK_NEXUS_METADATA_LOG` to `info`.\n\n```shell\n$ export STREZLESS_MUSICK_NEXUS_METADATA_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nclient = StrezlessMusickNexusMetadata()\nresponse = client.pet.with_raw_response.update(\n    name="doggie",\n    photo_urls=["string"],\n)\nprint(response.headers.get(\'X-My-Header\'))\n\npet = response.parse()  # get the object that `pet.update()` would have returned\nprint(pet.id)\n```\n\nThese methods return an [`APIResponse`](https://github.com/omar-orrantia/Never-Fret-listen-to-Sin-Estres/tree/main/src/strezless_musick_nexus_metadata/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/omar-orrantia/Never-Fret-listen-to-Sin-Estres/tree/main/src/strezless_musick_nexus_metadata/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.pet.with_streaming_response.update(\n    name="doggie",\n    photo_urls=["string"],\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata, DefaultHttpxClient\n\nclient = StrezlessMusickNexusMetadata(\n    # Or use the `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom strezless_musick_nexus_metadata import StrezlessMusickNexusMetadata\n\nwith StrezlessMusickNexusMetadata() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/omar-orrantia/Never-Fret-listen-to-Sin-Estres/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport strezless_musick_nexus_metadata\nprint(strezless_musick_nexus_metadata.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'go',
    content:
      '# Strezless Musick Nexus Metadata Go API Library\n\n<a href="https://pkg.go.dev/github.com/stainless-sdks/strezless-musick-nexus-metadata-go"><img src="https://pkg.go.dev/badge/github.com/stainless-sdks/strezless-musick-nexus-metadata-go.svg" alt="Go Reference"></a>\n\nThe Strezless Musick Nexus Metadata Go library provides convenient access to the Strezless Musick Nexus Metadata REST API\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Strezless Musick Nexus Metadata MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=strezless-musick-nexus-metadata-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInN0cmV6bGVzcy1tdXNpY2stbmV4dXMtbWV0YWRhdGEtbWNwIl0sImVudiI6eyJTVFJFWkxFU1NfTVVTSUNLX05FWFVTX01FVEFEQVRBX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22strezless-musick-nexus-metadata-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22strezless-musick-nexus-metadata-mcp%22%5D%2C%22env%22%3A%7B%22STREZLESS_MUSICK_NEXUS_METADATA_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n\n\n```go\nimport (\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go" // imported as SDK_PackageName\n)\n```\n\n\n\nOr to pin the version:\n\n\n\n```sh\ngo get -u \'github.com/stainless-sdks/strezless-musick-nexus-metadata-go@v0.0.1\'\n```\n\n\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go"\n\t"github.com/stainless-sdks/strezless-musick-nexus-metadata-go/option"\n)\n\nfunc main() {\n\tclient := strezlessmusicknexusmetadata.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("STREZLESS_MUSICK_NEXUS_METADATA_API_KEY")\n\t)\n\tpet, err := client.Pet.Update(context.TODO(), strezlessmusicknexusmetadata.PetUpdateParams{\n\t\tPet: strezlessmusicknexusmetadata.PetParam{\n\t\t\tName:      "doggie",\n\t\t\tPhotoURLs: []string{"string"},\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Pet.Update(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stainless-sdks/strezless-musick-nexus-metadata-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Pet.Update(context.TODO(), strezlessmusicknexusmetadata.PetUpdateParams{\n\tPet: strezlessmusicknexusmetadata.PetParam{\n\t\tName:      "doggie",\n\t\tPhotoURLs: []string{"string"},\n\t},\n})\nif err != nil {\n\tvar apierr *strezlessmusicknexusmetadata.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/pet": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Pet.Update(\n\tctx,\n\tstrezlessmusicknexusmetadata.PetUpdateParams{\n\t\tPet: strezlessmusicknexusmetadata.PetParam{\n\t\t\tName:      "doggie",\n\t\t\tPhotoURLs: []string{"string"},\n\t\t},\n\t},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := strezlessmusicknexusmetadata.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Pet.Update(\n\tcontext.TODO(),\n\tstrezlessmusicknexusmetadata.PetUpdateParams{\n\t\tPet: strezlessmusicknexusmetadata.PetParam{\n\t\t\tName:      "doggie",\n\t\t\tPhotoURLs: []string{"string"},\n\t\t},\n\t},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\npet, err := client.Pet.Update(\n\tcontext.TODO(),\n\tstrezlessmusicknexusmetadata.PetUpdateParams{\n\t\tPet: strezlessmusicknexusmetadata.PetParam{\n\t\t\tName:      "doggie",\n\t\t\tPhotoURLs: []string{"string"},\n\t\t},\n\t},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", pet)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/strezless-musick-nexus-metadata-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Strezless Musick Nexus Metadata TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/strezless-musick-nexus-metadata.svg?label=npm%20(stable))](https://npmjs.org/package/strezless-musick-nexus-metadata) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/strezless-musick-nexus-metadata)\n\nThis library provides convenient access to the Strezless Musick Nexus Metadata REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Strezless Musick Nexus Metadata MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=strezless-musick-nexus-metadata-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInN0cmV6bGVzcy1tdXNpY2stbmV4dXMtbWV0YWRhdGEtbWNwIl0sImVudiI6eyJTVFJFWkxFU1NfTVVTSUNLX05FWFVTX01FVEFEQVRBX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22strezless-musick-nexus-metadata-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22strezless-musick-nexus-metadata-mcp%22%5D%2C%22env%22%3A%7B%22STREZLESS_MUSICK_NEXUS_METADATA_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install git+ssh://git@github.com:omar-orrantia/GDL_code.git\n```\n> [!NOTE]\n> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install strezless-musick-nexus-metadata`\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pet.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  apiKey: process.env['STREZLESS_MUSICK_NEXUS_METADATA_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: StrezlessMusickNexusMetadata.PetUpdateParams = {\n  name: 'doggie',\n  photoUrls: ['string'],\n};\nconst pet: StrezlessMusickNexusMetadata.Pet = await client.pet.update(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst pet = await client.pet\n  .update({ name: 'doggie', photoUrls: ['string'] })\n  .catch(async (err) => {\n    if (err instanceof StrezlessMusickNexusMetadata.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new StrezlessMusickNexusMetadata({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.pet.update({ name: 'doggie', photoUrls: ['string'] }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new StrezlessMusickNexusMetadata({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.pet.update({ name: 'doggie', photoUrls: ['string'] }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new StrezlessMusickNexusMetadata();\n\nconst response = await client.pet.update({ name: 'doggie', photoUrls: ['string'] }).asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: pet, response: raw } = await client.pet\n  .update({ name: 'doggie', photoUrls: ['string'] })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(pet.id);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `STREZLESS_MUSICK_NEXUS_METADATA_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new StrezlessMusickNexusMetadata({\n  logger: logger.child({ name: 'StrezlessMusickNexusMetadata' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.pet.update({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\nimport fetch from 'my-fetch';\n\nconst client = new StrezlessMusickNexusMetadata({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new StrezlessMusickNexusMetadata({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport StrezlessMusickNexusMetadata from 'strezless-musick-nexus-metadata';\n\nconst client = new StrezlessMusickNexusMetadata({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport StrezlessMusickNexusMetadata from 'npm:strezless-musick-nexus-metadata';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new StrezlessMusickNexusMetadata({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/omar-orrantia/GDL_code/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'ruby',
    content:
      '# Strezless Musick Nexus Metadata Ruby API library\n\nThe Strezless Musick Nexus Metadata Ruby library provides convenient access to the Strezless Musick Nexus Metadata REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/stainless-sdks/strezless-musick-nexus-metadata-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Strezless Musick Nexus Metadata MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=strezless-musick-nexus-metadata-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInN0cmV6bGVzcy1tdXNpY2stbmV4dXMtbWV0YWRhdGEtbWNwIl0sImVudiI6eyJTVFJFWkxFU1NfTVVTSUNLX05FWFVTX01FVEFEQVRBX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22strezless-musick-nexus-metadata-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22strezless-musick-nexus-metadata-mcp%22%5D%2C%22env%22%3A%7B%22STREZLESS_MUSICK_NEXUS_METADATA_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/strezless-musick-nexus-metadata).\n\n\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n```ruby\ngem "strezless-musick-nexus-metadata", "~> 0.0.1"\n```\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "strezless_musick_nexus_metadata"\n\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(\n  api_key: ENV["STREZLESS_MUSICK_NEXUS_METADATA_API_KEY"] # This is the default and can be omitted\n)\n\npet = strezless_musick_nexus_metadata.pet.update(name: "doggie", photo_urls: ["string"])\n\nputs(pet.id)\n```\n\n\n\n\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `StrezlessMusickNexusMetadata::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  pet = strezless_musick_nexus_metadata.pet.update(name: "doggie", photo_urls: ["string"])\nrescue StrezlessMusickNexusMetadata::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue StrezlessMusickNexusMetadata::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue StrezlessMusickNexusMetadata::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nstrezless_musick_nexus_metadata.pet.update(\n  name: "doggie",\n  photo_urls: ["string"],\n  request_options: {max_retries: 5}\n)\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nstrezless_musick_nexus_metadata = StrezlessMusickNexusMetadata::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nstrezless_musick_nexus_metadata.pet.update(\n  name: "doggie",\n  photo_urls: ["string"],\n  request_options: {timeout: 5}\n)\n```\n\nOn timeout, `StrezlessMusickNexusMetadata::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `StrezlessMusickNexusMetadata::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\npet =\n  strezless_musick_nexus_metadata.pet.update(\n    name: "doggie",\n    photo_urls: ["string"],\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(pet[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `StrezlessMusickNexusMetadata::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `StrezlessMusickNexusMetadata::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nstrezless_musick_nexus_metadata.pet.update(name: "doggie", photo_urls: ["string"])\n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nstrezless_musick_nexus_metadata.pet.update(name: "doggie", photo_urls: ["string"])\n\n# You can also splat a full Params class:\nparams = StrezlessMusickNexusMetadata::PetUpdateParams.new(name: "doggie", photo_urls: ["string"])\nstrezless_musick_nexus_metadata.pet.update(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :available\nputs(StrezlessMusickNexusMetadata::PetAPI::Status::AVAILABLE)\n\n# Revealed type: `T.all(StrezlessMusickNexusMetadata::PetAPI::Status, Symbol)`\nT.reveal_type(StrezlessMusickNexusMetadata::PetAPI::Status::AVAILABLE)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nstrezless_musick_nexus_metadata.pet.create(\n  status: StrezlessMusickNexusMetadata::PetAPI::Status::AVAILABLE,\n  # …\n)\n\n# Literal values are also permissible:\nstrezless_musick_nexus_metadata.pet.create(\n  status: :available,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/stainless-sdks/strezless-musick-nexus-metadata-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Strezless Musick Nexus Metadata Java API Library\n\n\n[![Maven Central](https://img.shields.io/maven-central/v/com.strezless_musick_nexus_metadata.api/strezless-musick-nexus-metadata-java)](https://central.sonatype.com/artifact/com.strezless_musick_nexus_metadata.api/strezless-musick-nexus-metadata-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.strezless_musick_nexus_metadata.api/strezless-musick-nexus-metadata-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.strezless_musick_nexus_metadata.api/strezless-musick-nexus-metadata-java/0.0.1)\n\n\nThe Strezless Musick Nexus Metadata Java SDK provides convenient access to the Strezless Musick Nexus Metadata REST API   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Strezless Musick Nexus Metadata MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=strezless-musick-nexus-metadata-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInN0cmV6bGVzcy1tdXNpY2stbmV4dXMtbWV0YWRhdGEtbWNwIl0sImVudiI6eyJTVFJFWkxFU1NfTVVTSUNLX05FWFVTX01FVEFEQVRBX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22strezless-musick-nexus-metadata-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22strezless-musick-nexus-metadata-mcp%22%5D%2C%22env%22%3A%7B%22STREZLESS_MUSICK_NEXUS_METADATA_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\nJavadocs are available on [javadoc.io](https://javadoc.io/doc/com.strezless_musick_nexus_metadata.api/strezless-musick-nexus-metadata-java/0.0.1).\n\n## Installation\n\n### Gradle\n\n~~~kotlin\nimplementation("com.strezless_musick_nexus_metadata.api:strezless-musick-nexus-metadata-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.strezless_musick_nexus_metadata.api</groupId>\n  <artifactId>strezless-musick-nexus-metadata-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams;\n\n// Configures using the `strezlessmusicknexusmetadata.apiKey` and `strezlessmusicknexusmetadata.baseUrl` system properties\n// Or configures using the `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` and `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` environment variables\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\nPet params = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build();\nPet pet = client.pet().update(params);\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\n\n// Configures using the `strezlessmusicknexusmetadata.apiKey` and `strezlessmusicknexusmetadata.baseUrl` system properties\n// Or configures using the `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` and `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` environment variables\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\n\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\n\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    // Configures using the `strezlessmusicknexusmetadata.apiKey` and `strezlessmusicknexusmetadata.baseUrl` system properties\n    // Or configures using the `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` and `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property                        | Environment variable                       | Required | Default value                           |\n| --------- | -------------------------------------- | ------------------------------------------ | -------- | --------------------------------------- |\n| `apiKey`  | `strezlessmusicknexusmetadata.apiKey`  | `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY`  | true     | -                                       |\n| `baseUrl` | `strezlessmusicknexusmetadata.baseUrl` | `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` | true     | `"https://petstore3.swagger.io/api/v3"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\n\nStrezlessMusickNexusMetadataClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Strezless Musick Nexus Metadata API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.pet().update(...)` should be called with an instance of `PetUpdateParams`, and it     will return an instance of `Pet`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `strezlessmusicknexusmetadata.apiKey` and `strezlessmusicknexusmetadata.baseUrl` system properties\n// Or configures using the `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` and `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` environment variables\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.fromEnv();\n\nPet params = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build();\nCompletableFuture<Pet> pet = client.async().pet().update(params);\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClientAsync;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClientAsync;\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `strezlessmusicknexusmetadata.apiKey` and `strezlessmusicknexusmetadata.baseUrl` system properties\n// Or configures using the `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` and `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` environment variables\nStrezlessMusickNexusMetadataClientAsync client = StrezlessMusickNexusMetadataOkHttpClientAsync.fromEnv();\n\nPet params = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build();\nCompletableFuture<Pet> pet = client.pet().update(params);\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.core.http.Headers;\nimport com.strezless_musick_nexus_metadata.api.core.http.HttpResponseFor;\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams;\n\nPet params = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build();\nHttpResponseFor<Pet> pet = client.pet().withRawResponse().update(params);\n\nint statusCode = pet.statusCode();\nHeaders headers = pet.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\n\nPet parsedPet = pet.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`StrezlessMusickNexusMetadataServiceException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`StrezlessMusickNexusMetadataIoException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataIoException.kt): I/O networking errors.\n\n- [`StrezlessMusickNexusMetadataRetryableException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`StrezlessMusickNexusMetadataInvalidDataException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`StrezlessMusickNexusMetadataException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `STREZLESS_MUSICK_NEXUS_METADATA_LOG` environment variable to   `info`:\n\n```sh\nexport STREZLESS_MUSICK_NEXUS_METADATA_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport STREZLESS_MUSICK_NEXUS_METADATA_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `strezless-musick-nexus-metadata-java-core` is published with a     [configuration file](strezless-musick-nexus-metadata-java-core/src/main/resources/META-INF/proguard/strezless-musick-nexus-metadata-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`StrezlessMusickNexusMetadataOkHttpClient`](strezless-musick-nexus-metadata-java-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClient.kt) or     [`StrezlessMusickNexusMetadataOkHttpClientAsync`](strezless-musick-nexus-metadata-java-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\n\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\n\nPet pet = client.pet().update(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport java.time.Duration;\n\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\nimport java.time.Duration;\n\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\n\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `strezless-musick-nexus-metadata-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`StrezlessMusickNexusMetadataClient`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClient.kt), [`StrezlessMusickNexusMetadataClientAsync`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientAsync.kt),             [`StrezlessMusickNexusMetadataClientImpl`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientImpl.kt), and [`StrezlessMusickNexusMetadataClientAsyncImpl`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `strezless-musick-nexus-metadata-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`StrezlessMusickNexusMetadataOkHttpClient`](strezless-musick-nexus-metadata-java-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClient.kt) and [`StrezlessMusickNexusMetadataOkHttpClientAsync`](strezless-musick-nexus-metadata-java-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClientAsync.kt), which             provide a way to construct [`StrezlessMusickNexusMetadataClientImpl`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientImpl.kt) and             [`StrezlessMusickNexusMetadataClientAsyncImpl`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientAsyncImpl.kt), respectively, using OkHttp\n- `strezless-musick-nexus-metadata-java`\n  - Depends on and exposes the APIs of both `strezless-musick-nexus-metadata-java-core` and `strezless-musick-nexus-metadata-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`strezless-musick-nexus-metadata-java` dependency](#installation) with `strezless-musick-nexus-metadata-java-core`\n2. Copy `strezless-musick-nexus-metadata-java-client-okhttp`\'s [`OkHttpClient`](strezless-musick-nexus-metadata-java-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`StrezlessMusickNexusMetadataClientImpl`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientImpl.kt) or [`StrezlessMusickNexusMetadataClientAsyncImpl`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientAsyncImpl.kt), similarly to        [`StrezlessMusickNexusMetadataOkHttpClient`](strezless-musick-nexus-metadata-java-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClient.kt) or [`StrezlessMusickNexusMetadataOkHttpClientAsync`](strezless-musick-nexus-metadata-java-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`strezless-musick-nexus-metadata-java` dependency](#installation) with `strezless-musick-nexus-metadata-java-core`\n2. Write a class that implements the [`HttpClient`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/core/http/HttpClient.kt) interface\n3. Construct [`StrezlessMusickNexusMetadataClientImpl`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientImpl.kt) or [`StrezlessMusickNexusMetadataClientAsyncImpl`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientAsyncImpl.kt), similarly to        [`StrezlessMusickNexusMetadataOkHttpClient`](strezless-musick-nexus-metadata-java-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClient.kt) or [`StrezlessMusickNexusMetadataOkHttpClientAsync`](strezless-musick-nexus-metadata-java-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.core.JsonValue;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams;\n\nPetUpdateParams params = PetUpdateParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/core/Values.kt) object to its setter:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams;\n\nPetUpdateParams params = PetUpdateParams.builder()\n    .pet(Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build())\n    .build();\n```\n\nThe most straightforward way to create a [`JsonValue`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/core/Values.kt):\n\n```java\nimport com.strezless_musick_nexus_metadata.api.core.JsonMissing;\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams;\n\nPetUpdateParams params = PetUpdateParams.builder()\n    .pet(Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build())\n    .name(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.pet().update(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.pet().update(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`StrezlessMusickNexusMetadataInvalidDataException`](strezless-musick-nexus-metadata-java-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\n\nPet pet = client.pet().update(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet;\n\nPet pet = client.pet().update(\n  params, RequestOptions.builder().responseValidation(true).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient;\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient;\n\nStrezlessMusickNexusMetadataClient client = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/strezless-musick-nexus-metadata-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'kotlin',
    content:
      '# Strezless Musick Nexus Metadata Kotlin API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.strezless_musick_nexus_metadata.api/strezless-musick-nexus-metadata-kotlin)](https://central.sonatype.com/artifact/com.strezless_musick_nexus_metadata.api/strezless-musick-nexus-metadata-kotlin/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.strezless_musick_nexus_metadata.api/strezless-musick-nexus-metadata-kotlin/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.strezless_musick_nexus_metadata.api/strezless-musick-nexus-metadata-kotlin/0.0.1)\n<!-- x-release-please-end -->\n\nThe Strezless Musick Nexus Metadata Kotlin SDK provides convenient access to the Strezless Musick Nexus Metadata REST API   from applications written in Kotlin.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Strezless Musick Nexus Metadata MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=strezless-musick-nexus-metadata-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInN0cmV6bGVzcy1tdXNpY2stbmV4dXMtbWV0YWRhdGEtbWNwIl0sImVudiI6eyJTVFJFWkxFU1NfTVVTSUNLX05FWFVTX01FVEFEQVRBX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22strezless-musick-nexus-metadata-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22strezless-musick-nexus-metadata-mcp%22%5D%2C%22env%22%3A%7B%22STREZLESS_MUSICK_NEXUS_METADATA_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nKDocs are available on [javadoc.io](https://javadoc.io/doc/com.strezless_musick_nexus_metadata.api/strezless-musick-nexus-metadata-kotlin/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.strezless_musick_nexus_metadata.api:strezless-musick-nexus-metadata-kotlin:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.strezless_musick_nexus_metadata.api</groupId>\n  <artifactId>strezless-musick-nexus-metadata-kotlin</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams\n\n// Configures using the `strezlessmusicknexusmetadata.apiKey` and `strezlessmusicknexusmetadata.baseUrl` system properties\n// Or configures using the `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` and `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` environment variables\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\nval params: Pet = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build()\nval pet: Pet = client.pet().update(params)\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\n\n// Configures using the `strezlessmusicknexusmetadata.apiKey` and `strezlessmusicknexusmetadata.baseUrl` system properties\n// Or configures using the `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` and `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` environment variables\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n```\n\nOr manually:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\n\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build()\n```\n\nOr using a combination of the two approaches:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\n\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    // Configures using the `strezlessmusicknexusmetadata.apiKey` and `strezlessmusicknexusmetadata.baseUrl` system properties\n    // Or configures using the `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` and `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build()\n```\n\nSee this table for the available options:\n\n| Setter    | System property                        | Environment variable                       | Required | Default value                           |\n| --------- | -------------------------------------- | ------------------------------------------ | -------- | --------------------------------------- |\n| `apiKey`  | `strezlessmusicknexusmetadata.apiKey`  | `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY`  | true     | -                                       |\n| `baseUrl` | `strezlessmusicknexusmetadata.baseUrl` | `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` | true     | `"https://petstore3.swagger.io/api/v3"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\n\nval clientWithOptions: StrezlessMusickNexusMetadataClient = client.withOptions {\n    it.baseUrl("https://example.com")\n    it.maxRetries(42)\n}\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Strezless Musick Nexus Metadata API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Kotlin class.\n\nFor example, `client.pet().update(...)` should be called with an instance of `PetUpdateParams`, and it     will return an instance of `Pet`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams\n\n// Configures using the `strezlessmusicknexusmetadata.apiKey` and `strezlessmusicknexusmetadata.baseUrl` system properties\n// Or configures using the `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` and `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` environment variables\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.fromEnv()\n\nval params: Pet = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build()\nval pet: Pet = client.async().pet().update(params)\n```\n\nOr create an asynchronous client from the beginning:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClientAsync\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClientAsync\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams\n\n// Configures using the `strezlessmusicknexusmetadata.apiKey` and `strezlessmusicknexusmetadata.baseUrl` system properties\n// Or configures using the `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` and `STREZLESS_MUSICK_NEXUS_METADATA_BASE_URL` environment variables\nval client: StrezlessMusickNexusMetadataClientAsync = StrezlessMusickNexusMetadataOkHttpClientAsync.fromEnv()\n\nval params: Pet = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build()\nval pet: Pet = client.pet().update(params)\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods are [suspending](https://kotlinlang.org/docs/coroutines-guide.html).\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Kotlin classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.core.http.Headers\nimport com.strezless_musick_nexus_metadata.api.core.http.HttpResponseFor\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams\n\nval params: Pet = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build()\nval pet: HttpResponseFor<Pet> = client.pet().withRawResponse().update(params)\n\nval statusCode: Int = pet.statusCode()\nval headers: Headers = pet.headers()\n```\n\nYou can still deserialize the response into an instance of a Kotlin class if needed:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\n\nval parsedPet: Pet = pet.parse()\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`StrezlessMusickNexusMetadataServiceException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`StrezlessMusickNexusMetadataIoException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataIoException.kt): I/O networking errors.\n\n- [`StrezlessMusickNexusMetadataRetryableException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`StrezlessMusickNexusMetadataInvalidDataException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`StrezlessMusickNexusMetadataException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `STREZLESS_MUSICK_NEXUS_METADATA_LOG` environment variable to   `info`:\n\n```sh\nexport STREZLESS_MUSICK_NEXUS_METADATA_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport STREZLESS_MUSICK_NEXUS_METADATA_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `strezless-musick-nexus-metadata-kotlin-core` is published with a     [configuration file](strezless-musick-nexus-metadata-kotlin-core/src/main/resources/META-INF/proguard/strezless-musick-nexus-metadata-kotlin-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`StrezlessMusickNexusMetadataOkHttpClient`](strezless-musick-nexus-metadata-kotlin-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClient.kt) or     [`StrezlessMusickNexusMetadataOkHttpClientAsync`](strezless-musick-nexus-metadata-kotlin-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\n\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build()\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\n\nval pet: Pet = client.pet().update(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n)\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport java.time.Duration\n\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build()\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport java.net.InetSocketAddress\nimport java.net.Proxy\n\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    .proxy(Proxy(\n      Proxy.Type.HTTP, InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build()\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\nimport java.time.Duration\n\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build()\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\n\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build()\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `strezless-musick-nexus-metadata-kotlin-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`StrezlessMusickNexusMetadataClient`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClient.kt), [`StrezlessMusickNexusMetadataClientAsync`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientAsync.kt),             [`StrezlessMusickNexusMetadataClientImpl`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientImpl.kt), and [`StrezlessMusickNexusMetadataClientAsyncImpl`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `strezless-musick-nexus-metadata-kotlin-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`StrezlessMusickNexusMetadataOkHttpClient`](strezless-musick-nexus-metadata-kotlin-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClient.kt) and [`StrezlessMusickNexusMetadataOkHttpClientAsync`](strezless-musick-nexus-metadata-kotlin-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClientAsync.kt), which             provide a way to construct [`StrezlessMusickNexusMetadataClientImpl`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientImpl.kt) and             [`StrezlessMusickNexusMetadataClientAsyncImpl`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientAsyncImpl.kt), respectively, using OkHttp\n- `strezless-musick-nexus-metadata-kotlin`\n  - Depends on and exposes the APIs of both `strezless-musick-nexus-metadata-kotlin-core` and `strezless-musick-nexus-metadata-kotlin-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`strezless-musick-nexus-metadata-kotlin` dependency](#installation) with `strezless-musick-nexus-metadata-kotlin-core`\n2. Copy `strezless-musick-nexus-metadata-kotlin-client-okhttp`\'s [`OkHttpClient`](strezless-musick-nexus-metadata-kotlin-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`StrezlessMusickNexusMetadataClientImpl`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientImpl.kt) or [`StrezlessMusickNexusMetadataClientAsyncImpl`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientAsyncImpl.kt), similarly to        [`StrezlessMusickNexusMetadataOkHttpClient`](strezless-musick-nexus-metadata-kotlin-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClient.kt) or [`StrezlessMusickNexusMetadataOkHttpClientAsync`](strezless-musick-nexus-metadata-kotlin-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`strezless-musick-nexus-metadata-kotlin` dependency](#installation) with `strezless-musick-nexus-metadata-kotlin-core`\n2. Write a class that implements the [`HttpClient`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/core/http/HttpClient.kt) interface\n3. Construct [`StrezlessMusickNexusMetadataClientImpl`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientImpl.kt) or [`StrezlessMusickNexusMetadataClientAsyncImpl`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/StrezlessMusickNexusMetadataClientAsyncImpl.kt), similarly to        [`StrezlessMusickNexusMetadataOkHttpClient`](strezless-musick-nexus-metadata-kotlin-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClient.kt) or [`StrezlessMusickNexusMetadataOkHttpClientAsync`](strezless-musick-nexus-metadata-kotlin-client-okhttp/src/main/kotlin/com/strezless_musick_nexus_metadata/api/client/okhttp/StrezlessMusickNexusMetadataOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.core.JsonValue\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams\n\nval params: PetUpdateParams = PetUpdateParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build()\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/core/Values.kt) object to its setter:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams\n\nval params: PetUpdateParams = PetUpdateParams.builder()\n    .pet(Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build())\n    .build()\n```\n\nThe most straightforward way to create a [`JsonValue`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/core/Values.kt) is using its       `from(...)` method:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.core.JsonValue\n\n// Create primitive JSON values\nval nullValue: JsonValue = JsonValue.from(null)\nval booleanValue: JsonValue = JsonValue.from(true)\nval numberValue: JsonValue = JsonValue.from(42)\nval stringValue: JsonValue = JsonValue.from("Hello World!")\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nval arrayValue: JsonValue = JsonValue.from(listOf(\n  "Hello", "World"\n))\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nval objectValue: JsonValue = JsonValue.from(mapOf(\n  "a" to 1, "b" to 2\n))\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nval complexValue: JsonValue = JsonValue.from(mapOf(\n  "a" to listOf(\n    1, 2\n  ), "b" to listOf(\n    3, 4\n  )\n))\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/core/Values.kt):\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.core.JsonMissing\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\nimport com.strezless_musick_nexus_metadata.api.models.pet.PetUpdateParams\n\nval params: PetUpdateParams = PetUpdateParams.builder()\n    .pet(Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build())\n    .name(JsonMissing.of())\n    .build()\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.core.JsonBoolean\nimport com.strezless_musick_nexus_metadata.api.core.JsonNull\nimport com.strezless_musick_nexus_metadata.api.core.JsonNumber\nimport com.strezless_musick_nexus_metadata.api.core.JsonValue\n\nval additionalProperties: Map<String, JsonValue> = client.pet().update(params)._additionalProperties()\nval secretPropertyValue: JsonValue = additionalProperties.get("secretProperty")\n\nval result = when (secretPropertyValue) {\n    is JsonNull -> "It\'s null!"\n    is JsonBoolean -> "It\'s a boolean!"\n    is JsonNumber -> "It\'s a number!"\n    // Other types include `JsonMissing`, `JsonString`, `JsonArray`, and `JsonObject`\n    else -> "It\'s something else!"\n}\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.core.JsonField\n\nval field: JsonField<Any> = client.pet().update(params)._field()\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  val jsonString: String? = field.asString();\n\n  // Try to deserialize into a custom type\n  val myObject: MyClass = field.asUnknown()!!.convert(MyClass::class.java)\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`StrezlessMusickNexusMetadataInvalidDataException`](strezless-musick-nexus-metadata-kotlin-core/src/main/kotlin/com/strezless_musick_nexus_metadata/api/errors/StrezlessMusickNexusMetadataInvalidDataException.kt) only if you directly access the property.\n\nIf you would prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\n\nval pet: Pet = client.pet().update(params).validate()\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.models.pet.Pet\n\nval pet: Pet = client.pet().update(\n  params, RequestOptions.builder().responseValidation(true).build()\n)\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.strezless_musick_nexus_metadata.api.client.StrezlessMusickNexusMetadataClient\nimport com.strezless_musick_nexus_metadata.api.client.okhttp.StrezlessMusickNexusMetadataOkHttpClient\n\nval client: StrezlessMusickNexusMetadataClient = StrezlessMusickNexusMetadataOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build()\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nKotlin `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/omar-orrantia/Strezless/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'csharp',
    content:
      '# Strezless Musick Nexus Metadata C# API Library\n\nThe Strezless Musick Nexus Metadata C# SDK provides convenient access to the Strezless Musick Nexus Metadata REST API from applications written in   C#.\n\n## Installation\n\n```bash\ngit clone git@github.com:stainless-sdks/strezless-musick-nexus-metadata-csharp.git\ndotnet add reference strezless-musick-nexus-metadata-csharp/src/StrezlessMusickNexusMetadata\n```\n\n## Requirements\n\nThis library requires .NET Standard 2.0 or later.\n\n## Usage\n\nSee the [`examples`](examples) directory for complete and runnable examples.\n\n```csharp\nStrezlessMusickNexusMetadataClient client = new();\n\nPetUpdateParams parameters = new()\n{\n    Name = "doggie",\n    PhotoUrls =\n    [\n        "string"\n    ],\n};\n\nvar pet = await client.Pet.Update(parameters);\n\nConsole.WriteLine(pet);\n```',
  },
  {
    language: 'cli',
    content:
      "# Strezless Musick Nexus Metadata CLI\n\nThe official CLI for the Strezless Musick Nexus Metadata REST API.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n<!-- x-release-please-start-version -->\n\n## Installation\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/omar-orrantia/Strezless-Musick-Productionz-Founder/cmd/strezless-musick-nexus-metadata@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n<!-- x-release-please-end -->\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nstrezless-musick-nexus-metadata [resource] <command> [flags...]\n~~~\n\n~~~sh\nstrezless-musick-nexus-metadata pet update \\\n  --api-key 'My API Key' \\\n  --name doggie \\\n  --photo-url string\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable                      | Required |\n| ----------------------------------------- | -------- |\n| `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` | yes      |\n\n### Global flags\n\n- `--api-key` (can also be set with `STREZLESS_MUSICK_NEXUS_METADATA_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nstrezless-musick-nexus-metadata <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nstrezless-musick-nexus-metadata <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nstrezless-musick-nexus-metadata <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nstrezless-musick-nexus-metadata <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nstrezless-musick-nexus-metadata <command> --arg @data://file.txt\n~~~\n",
  },
  {
    language: 'php',
    content:
      '# Strezless Musick Nexus Metadata PHP API Library\n\nThe Strezless Musick Nexus Metadata PHP library provides convenient access to the Strezless Musick Nexus Metadata REST API from any PHP 8.1.0+ application.\n\n## Installation\n\nTo use this package, install via Composer by adding the following to your application\'s `composer.json`:\n\n```json\n{\n  "repositories": [\n    {\n      "type": "vcs",\n      "url": "git@github.com:stainless-sdks/strezless-musick-nexus-metadata-php.git"\n    }\n  ],\n  "require": {\n    "org-placeholder/strezless-musick-nexus-metadata": "dev-main"\n  }\n}\n```\n\n## Usage\n\n```php\n<?php\n\n$client = new Client(\n  apiKey: getenv(\'STREZLESS_MUSICK_NEXUS_METADATA_API_KEY\') ?: \'My API Key\'\n);\n\n$pet = $client->pet->update(name: \'doggie\', photoURLs: [\'string\']);\n\nvar_dump($pet->id);\n```',
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
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
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
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
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
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
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
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
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

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
