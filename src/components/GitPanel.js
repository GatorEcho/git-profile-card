import React  from 'react';

const GitPanel = (props) => {
    
        return(
            <div className='container-fluid infoContainer'>
            <div className='row'>
                <div className='col'>
                    <a  href={props.reposURL} target="_blank"><i className='fab fa-github-alt gitIcon' ></i></a>
                    <div className='smallText'>{props.repos} public repos</div>
                </div>
                <div className='col'>
                    <a  href={props.gistsURL} target="_blank"><i className='fas fa-code-branch gitIcon' ></i></a>
                    <div className='smallText'>{props.gists} public gists</div>
                </div>
            </div>
            
            </div>
        )
}

export default GitPanel;