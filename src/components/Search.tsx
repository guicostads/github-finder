//tipando a função
type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}
//---

import { useState, KeyboardEvent } from 'react'
import { BsSearch } from 'react-icons/bs';
import classes from "./Search.module.css"


export const Search = ({ loadUser }: SearchProps) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName)
    }
  }
  const [userName, setUserName] = useState('')

  return (
    <div className={classes.search_container}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.row}>
        <input type="text" placeholder="Digite o nome do usuário" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown} />
        <button onClick={() => loadUser(userName)}><BsSearch /></button>
      </div>
    </div>
  )
}
