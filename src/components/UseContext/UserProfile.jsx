import {useContext} from 'react'
import { userContext } from './UserContext'

const UserProfile = () => {

    const {user} = useContext(userContext)
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  )
}

export default UserProfile