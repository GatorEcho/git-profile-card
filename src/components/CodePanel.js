import React  from 'react';

const CodePanel = (props) => {

    //Renders code icons based on proficiencies (contained in GIT_PROFILE obj).
    
  const  lessThanFour = (length) => {
        if(length < 4){ {/*Adds an extra <br> if there is only one row of languages */}
            return (
                    <br />
            )
        }
    }
        return(
            <div className='container-fluid infoContainer'>
            {lessThanFour(props.languages.length)}
            <div className='row'>{props.languages.map((language, id) => 
                    <div className={id < 3 ? 'col-md-4 col-sm-4' : 'col-md-6 col-sm-6'}>
                        <i className={'fab fa-' + language + ' codeIcon infoIcon'}></i>
                        <div className='codeSmallText'>{language}</div>
                    </div>
            )}</div>
            
            </div>
        )
}

export default CodePanel;