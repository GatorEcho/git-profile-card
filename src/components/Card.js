import React, { Component } from 'react';
import { GIT_PROFILES } from './Objects.js'
import UserInfo from './UserInfo.js'
import InfoPanel from './InfoPanel.js';

class Card extends Component {

    render(){
        return(
            
                <div className='row'>{GIT_PROFILES.map((user, id) => 
                    <div className='col-md-3' key={user.id}>
                    <div className='card'>
                        <img className='profileImage' src={user.avatar_url} alt='profile' />
                        <UserInfo name={user.name} login={user.login} />
                        <hr />
                        <InfoPanel bio={user.bio}
                                   login={user.login}
                                   repos={user.public_repos}
                                   gists={user.public_gists}
                                   url={user.html_url}/>
                    </div>
                    </div>
                )}</div>
            
        )
    }
}

export default Card;