import { GraphQLClient } from 'graphql-request';
import {
  Headers as HttpHeaders,
  Options,
} from 'graphql-request/dist/src/types';
import { print } from 'graphql/language/printer';
import { IConfiguration } from 'overmind';

export { default as gql } from 'graphql-tag';

export interface Query<Result extends any, Payload extends any = void> {
  (payload: Payload): Result;
}

export type RequestOptions = Omit<Options, 'headers'> & {
  headers?: HttpHeaders | (() => HttpHeaders);
};

export function graphql<
  C extends IConfiguration,
  G extends {
    queries?: {
      [key: string]: (payload: any) => any;
    };
    mutations?: {
      [key: string]: (payload: any) => any;
    };
  }
>(
  initialConfig: C,
  options: G
): {
  state: C['state'];
  effects: {
    initializeGraphQLClient: (
      endpoint: string,
      requestOptions?: RequestOptions
    ) => void;
    queries: {
      [N in keyof G['queries']]: G['queries'][N] extends (
        payload: infer P
      ) => infer R
        ? P extends void
          ? () => R
          : (payload: P) => R
        : never;
    };
    mutations: {
      [N in keyof G['mutations']]: G['mutations'][N] extends (
        payload: infer P
      ) => infer R
        ? P extends void
          ? () => R
          : (payload: P) => R
        : never;
    };
  };
  actions: C['actions'];
} {
  const config: any = {};
  let _client: GraphQLClient;
  let _requestOptions: RequestOptions;

  config.onInitialize = initialConfig.onInitialize;
  config.state = initialConfig.state;
  config.effects = Object.assign(initialConfig.effects || {}, {
    initializeGraphQLClient: (
      endpoint: string,
      requestOptions: RequestOptions = {}
    ) => {
      _requestOptions = requestOptions;

      _client = new GraphQLClient(endpoint, {
        ...requestOptions,
        headers:
          typeof requestOptions.headers === 'function'
            ? requestOptions.headers()
            : requestOptions.headers,
      });
    },
    queries: Object.keys(options.queries || {}).reduce((aggr, key) => {
      aggr[key] = variables => {
        if (!_client) {
          throw new Error(
            `You have not connected to your GraphQL endpoint, please run "connect" first`
          );
        }
        const query = options.queries[key] as any;

        if (typeof _requestOptions.headers === 'function') {
          _client.setHeaders(_requestOptions.headers());
        }

        return _client.request(print(query), variables);
      };
      return aggr;
    }, {}),
    mutations: Object.keys(options.mutations || {}).reduce((aggr, key) => {
      aggr[key] = variables => {
        if (!_client) {
          throw new Error(
            `You have not connected to your GraphQL endpoint, please run "connect" first`
          );
        }
        const query = options.mutations[key] as any;

        if (typeof _requestOptions.headers === 'function') {
          _client.setHeaders(_requestOptions.headers());
        }

        return _client.request(print(query), variables);
      };
      return aggr;
    }, {}),
  });
  config.actions = initialConfig.actions;

  return config as any;
}
