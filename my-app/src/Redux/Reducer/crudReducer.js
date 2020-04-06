export default function crudReducer(state = [], action) {

    switch (action.type) {
        case "CREATE_DATA":

            return [...state, { ...action.payload }]

        default:
            return state;
    }
}