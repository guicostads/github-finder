import { UserProps } from "../types/user"
import { MdLocationPin } from 'react-icons/md'
import { Link } from "react-router-dom"
import classes from "./User.module.css"



export const User = ({ login, avatar_url, followers, following, location }: UserProps) => {
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt='user avatar' />
            <h2>{login}</h2>
            <p className={classes.location}><MdLocationPin />
                <span>{location}</span></p>
            <div className={classes.stats}>
                <div>
                    <p> Seguidores:</p>
                    <p><strong>{followers}</strong></p>
                </div>
                <div>
                    <p> Seguindo:</p>
                    <p><strong>{following}</strong></p>
                </div>
            </div>
            <Link to={`/repos/${login}`}>Ver melhores projetos:</Link>
        </div>
    )
}