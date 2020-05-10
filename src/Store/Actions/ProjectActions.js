export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        //make async call to db then dispatch
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project, 
            authorFirstName: 'J',
            authorLastName: 'Johnson',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            // dispatch state to reducer
            dispatch({type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })      
    }
};

