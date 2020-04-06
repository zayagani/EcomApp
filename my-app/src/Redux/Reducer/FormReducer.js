export default function FormReducer(state = [], action) {

    switch (action.type) {

        case "FORM_DATA":

            return [...state, { ...action.formdata }]
        default:
            return state
    }
}