import React  from 'react';

const UserInfo = (props) => {
    
        return(
            <div className='userInfo'>{props.name ?
                <div>
                    <div>
                        <span className='primaryUserInfo'>{props.name}</span>
                    </div>
                        <span className='secondaryUserInfo'>{'@' + props.login}</span>
                </div> :
                <div>
                    <span className='primaryUserInfo'>{'@' + props.login}</span>
                    <br/>
                    <br/>
                </div>
            } </div>
        )
}

export default UserInfo;