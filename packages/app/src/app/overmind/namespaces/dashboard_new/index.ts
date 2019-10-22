import { graphql } from 'app/overmind-graphql';

import * as actions from './actions';
import * as queries from './queries';
import * as mutations from './mutations';
import { state } from './state';

const config = {
  state,
  actions,
};

export default graphql(config, {
  queries,
  mutations,
});
