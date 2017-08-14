import { FETCH_AREAS, DELETE_AREA } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_AREAS:
      // what is data?? it's axios attribute!
      console.log(_.mapKeys(action.payload.data.dt, 'Id'));
      return _.mapKeys(action.payload.data.dt, 'Id');
    // case FETCH_POST:
    //   // const post = action.payload.data
    //   // const newState = {...state};
    //   // newState[post.id] = post;
    //
    //   //ES6 way, save as above:
    //   // "key interpolation"
    //   return { ...state, [action.payload.data.id]: action.payload.data }
    //   return newState;
    case DELETE_AREA:
      //action.payload == `id` as we defined in action creator
      //remove key value pair from app state object
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
