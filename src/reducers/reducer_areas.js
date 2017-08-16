import { FETCH_AREAS, UPDATE_AREA, DELETE_AREA } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_AREAS:
      // what is data?? it's axios attribute!
      // this is toLowerCase() object keys
      let data = action.payload.data.dt;
      data = data.map(function(obj){
        return  _.mapKeys(obj, function (v, k) { return k.toLowerCase(); });
      })
      // end
      return _.mapKeys(data, 'id'); // transform array of objects to: {1:{}, 2:{}, 21:{}}
    // case FETCH_POST:
    //   // const post = action.payload.data
    //   // const newState = {...state};
    //   // newState[post.id] = post;
    //
    //   //ES6 way, save as above:
    //   // "key interpolation"
    //   return { ...state, [action.payload.data.id]: action.payload.data }
    //   return newState;
    case UPDATE_AREA:
      //update area data:
      return {...state, [action.payload.id]: action.payload };
    case DELETE_AREA:
      //action.payload == `id` as we defined in action creator
      //remove key value pair from app state object
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
