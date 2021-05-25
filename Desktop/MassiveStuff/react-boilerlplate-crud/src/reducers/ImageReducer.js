import { GET_FORM_REQUEST, GET_FORM_SUCCESS, GET_FORM_FAILURE, 
         GET_FORM_REQUEST_FOR_EDIT, GET_FORM_SUCCESS_FOR_EDIT, GET_FORM_FAILURE_FOR_EDIT,     
         DELETE_FORM_REQUEST, DELETE_FORM_SUCCESS, DELETE_FORM_ERROR,
         PUT_FORM_REQUEST, PUT_FORM_SUCCESS, PUT_FORM_ERROR,
         POST_FORM_REQUEST, POST_FORM_SUCCESS, POST_FORM_ERROR,
         SHOW_LOADER, HIDE_LOADER } from '../constants/imageConstant'

const initialState = {
    formPageLoading: '',
    data: [],
    dataWithId: [],
    item: {},
    status: '',
    error: '',
    message: '',
    loading: false
}

export default function ImageReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FORM_REQUEST:
            return Object.assign({}, state, {
                formPageLoading: true,
            })

        case GET_FORM_SUCCESS:
            return {
                formPageLoading: false,
                data: action.response.data,
                status: 200,
                error: false
            }

        case GET_FORM_FAILURE:
            return Object.assign({}, state, {
                formPageLoading: false,
                data: '',
                error: true

            })

        case POST_FORM_REQUEST:
            return Object.assign({}, state, {
                formPageLoading: true,
                message: ''
            })

        case POST_FORM_SUCCESS:
            console.log('post reducer')
            return Object.assign({}, state, {
                formPageLoading: false,
                data: action.payload,
                error: false,
                message: "Image has been added successfully"
            })

        case POST_FORM_ERROR:
            return Object.assign({}, state, {
                formPageLoading: false,
                data: '',
                error: true

            })

            case GET_FORM_REQUEST_FOR_EDIT:
            return Object.assign({}, state, {
                formPageLoading: true,
            })

            case GET_FORM_SUCCESS_FOR_EDIT:
                return {
                    formPageLoading: false,
                    dataWithId: action.response.dataWithId,
                    status: 200,
                    error: false
                }
    
            case GET_FORM_FAILURE_FOR_EDIT:
                return Object.assign({}, state, {
                    formPageLoading: false,
                    dataWithId: '',
                    error: true
    
                })

        case PUT_FORM_REQUEST:
            return Object.assign({}, state, {
                formPageLoading: true,
            })

        case PUT_FORM_SUCCESS:
            console.log('success PUT', action)
            return {
                ...state,
                data: state.data.map(
                    item=> item.id === action.response.data.id ? ( item = action.response.data )
                        : item
                ),
                formPageLoading: false
            }

        case PUT_FORM_ERROR:
            return Object.assign({}, state, {
                formPageLoading: false,
                data: '',
                error: true
            })

        case DELETE_FORM_REQUEST:
            console.log('request DELETE')
            return Object.assign({}, state, {
                formPageLoading: true,
            })

        case DELETE_FORM_SUCCESS:
            console.log('success DELETE')
            
            return{
                ...state,
                data: state.data.filter(item=>
                    item.id === action.payload ? false: true),
                    formPageLoading: false
            }

        case DELETE_FORM_ERROR:
            console.log('error DELETE')
            return Object.assign({}, state, {
                formPageLoading: false,
                data: '',
                error: true
            })

        case SHOW_LOADER:
            return { ...state, loading: true };

        case HIDE_LOADER:
            return { ...state, loading: false };


        default: return state
    }
}

