import { useEffect, useState } from 'react'
import { useUserContext } from '../context/UserContext'
import { Repo } from '../components/Repo'
import { repoProps } from '../types/repo'


export const Repos = () => {
  const { userName } = useUserContext()
  const [repos, setRepos] = useState([])
  const [error, setError] = useState(false)

  const getRepos = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`)
    const data = await res.json()
    // handling error message:
    if (res.status === 404) {
      setError(true)
    } else {
      setError(false)
    }
    setRepos(data)
    console.log(data)
  }

  useEffect(() => {
    getRepos(userName)
  }, [])

  return (
    <div>
      {repos.map((repo: any) => (
        <Repo key={repo.id} name={repo.name} description={repo.description} id={repo.id} url={repo.html_url}/>
      ))}
    </div>
  )
}
