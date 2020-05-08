export const createProject = (project) => {
    return (dispatch, getState) => {
        //make async call to db then dispatch
        // dispatch state to reducer
        dispatch({type: 'CREATE_PROJECT', project });
    }
};

