import { request } from 'graphql-request';
import { Options } from 'graphql-request/dist/src/types';
import { print } from 'graphql/language/printer';
import { IConfiguration } from 'overmind';

export { default as gql } from 'graphql-tag';

export interface Query<Result extends any, Payload extends any = void> {
  (payload: Payload): Result;
}

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
    connect: (endpoint: string, options?: Options | (() => Options)) => void;
    disconnect: () => void;
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

  config.onInitialize = initialConfig.onInitialize;
  config.state = initialConfig.state;
  config.effects = Object.assign(initialConfig.effects || {}, {
    queries: Object.keys(options.queries || {}).reduce((aggr, key) => {
      aggr[key] = variables => {
        const query = options.queries[key] as any;

        return request(options.endpoint, print(query), variables);
      };
      return aggr;
    }, {}),
    mutations: Object.keys(options.mutations || {}).reduce((aggr, key) => {
      aggr[key] = variables => {
        const query = options.mutations[key] as any;

        return request(options.endpoint, print(query), variables);
      };
      return aggr;
    }, {}),
  });
  config.actions = initialConfig.actions;

  return config as any;
}
