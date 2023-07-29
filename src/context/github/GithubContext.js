import { createContext } from "react";
import { useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,

    }
    const [state,dispatch] = useReducer(GithubReducer,initialState)
    
    // Get initial users, testing purpose
    // const fetchUsers = async () => {
    //     setLoading()
    //     const response = await fetch(`${GITHUB_URL}/users`,{
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,
    //         },
    //     })
    //     const data = await response.json()
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data,
    //     })
    // }

    // // clear users
    // const clearUsers = () => {
    //     dispatch({
    //         type: 'CLEAR_USERS',
    //         payload: '',
    //     })
    // }

    return <GithubContext.Provider  value={{...state, dispatch}}>
        {children}
    </GithubContext.Provider>
    }


export default GithubContext