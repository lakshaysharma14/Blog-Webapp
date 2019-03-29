//ACTION CREATOR
import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash'; //

    export const fetchPost = () => async dispatch =>
    {
        const response = await jsonPlaceholder.get('/posts')    
        dispatch({ type:'FETCH_POST', payload:response.data })
    };

    export const fetchUser = (id) =>async dispatch =>
    {
        const response = await jsonPlaceholder.get(`/users/${id}`)    
        dispatch({ type:'FETCH_USER', payload:response.data })
    }

    //Remember that the second argument that redux thunk calls our inner functions with for 
    //all these action creators.The second argument in addition to dispatch is the getState
    //arguments
    //getState is the second argument function that exist on the redux_store that gives us access
    //to all the data inside of redux

    //Calling action creator within action creator
    export const fetchPostandUser = () => async (dispatch,getState) =>{  
        await dispatch(fetchPost())
        const uniqUserId =  _.uniq(_.map(getState().posts,'userId'));
        uniqUserId.forEach(id => dispatch(fetchUser(id)))
    }

