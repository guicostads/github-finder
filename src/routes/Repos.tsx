import { useUserContext } from '../context/UserContext'


export const Repos = () => {
  const { userName } = useUserContext()
  return (
    <div>{userName}</div>
  )
}
