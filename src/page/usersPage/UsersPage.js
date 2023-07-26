import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../../components/User'
import { fetchUsersAction } from '../../redux/actions/actions'

function UsersPage() {

    const dispatch = useDispatch()
    const { users } = useSelector(state => state.usersReducer)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    return (
        <div>

            <ul>
                <li>name: </li>
                <li>adres: </li>
                <li>email: </li>
                <li>userName: </li>
            </ul>

            <button onClick={getUsers}>get users</button>
            {users.map(user => <User userInfo={user} />)}
        </div>
    )
}

export default UsersPage