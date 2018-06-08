import React, { Component } from 'react';
import { GIT_PROFILES } from './Objects.js'
import UserInfo from './UserInfo.js'
import Icons from './Icons';

class Card extends Component {
    
    render(){
        return(
            
                <div className='row'>{GIT_PROFILES.map((user, id) => 
                    <div className='col'>
                    <div className='card'>
                        <img className='profileImage' src={user.avatar_url} alt='profile' />
                        <UserInfo name={user.name} login={user.login} />
                        <hr />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br/>
                        <Icons />
                    </div>
                    </div>
                )}</div>
            
        )
    }
}

export default Card;