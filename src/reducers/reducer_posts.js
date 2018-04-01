import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // Gets the action payload from fetchPosts and maps them
      // to a keyed array using lodash.
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
