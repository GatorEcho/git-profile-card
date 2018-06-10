import React  from 'react';


const Icons = (props) => {
    
        return(
            <div className='container-fluid'>
            <div className='row'>
                <a  href={props.git} target="_blank"><i className='fab fa-git staticIcon col' ></i></a>
                <i className='fas fa-envelope staticIcon col'></i>
                <i className='fab fa-free-code-camp staticIcon col'></i>
                <i className='fab fa-twitter staticIcon col'></i>
                <i className='fab fa-codepen staticIcon col'></i>
                
            </div>
            </div>
        )
}

export default Icons;