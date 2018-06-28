import React, { Component } from 'react';
import { GIT_PROFILES } from './Objects.js'
import UserInfo from './UserInfo.js'
import InfoPanel from './InfoPanel.js';

//The primary card component. Renders the other components and passes object keys as props.
class Card extends Component {

render(){
    return(
        
            <div className='row'>{GIT_PROFILES.map((user) => 
                <div className='col' key={user.id}>
                <div className='card'>
                    <img className='profileImage' src={user.avatar_url} alt='profile' />
                    <UserInfo name={user.name} login={user.login} />
                    <hr />
                    <InfoPanel bio={user.bio}
                                login={user.login}
                                repos={user.public_repos}
                                gists={user.public_gists}
                                url={user.html_url}
                                languages={user.languages}
                                quote={user.quote}/>
                </div>
                </div>
            )}</div>
        
    )
}
}

export default Card;