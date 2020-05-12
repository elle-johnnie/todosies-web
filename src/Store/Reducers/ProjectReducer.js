
const intiState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}  
    ]
}

const projectReducer = (state=intiState, action) => {
    switch (action.type) {
        // detect action type to determine how to handle each case
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        case 'DELETE_PROJECT':
            console.log('project deleted', action.id);
            return state;
        case 'DELETE_FAILURE':
            console.log('project delete unsuccessful', action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer