import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../../components/User'
import { addUser, changeInput } from '../../store/usersSlice'

function UsersPage() {

    const dispatch = useDispatch()

    const { inputValue, users } = useSelector(state => state.usersReducer)

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

  return (
    <>
        <input type="text" placeholder="name" onChange={changeInputFunc}/>
        <button onClick={addUserFunc}>add user</button>

        {users.map(user => <User name={user} />)}
        <button>clear</button>
        <button>delete all</button>
    </>
  )
}

export default UsersPage