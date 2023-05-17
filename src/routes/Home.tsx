import { Search } from "../components/Search"
import { useState } from "react"
import { UserProps } from "../types/user"
import { User } from "../components/User"
import { Error } from "../components/Error"


export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)


  // fetching data from the API using fetch:
  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    // handling error message:
    if (res.status === 404) {
      setError(true)
    } else {
      setError(false)
    }
    // destructuring:
    const { avatar_url, login, location, followers, following } = data
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    }
    setUser(userData)

    console.log(data)
  }


  return (
    <div>
      <Search loadUser={loadUser} />
      {(user && !error) &&
        <User {...user} />
      }
      {error && <Error />}
    </div>
  )
}
