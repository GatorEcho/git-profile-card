import React  from 'react';

const CodePanel = (props) => {
    
  const  lessThanFour = (length) => {
        if(length < 4){
            return (
                    <br />
            )
        }
    }
        return(
            <div className='container-fluid infoContainer'>
            {lessThanFour(props.languages.length)}
            <div className='row'>{props.languages.map((language, id) => 
                    <div className={id < 3 ? 'col-md-4 col-xs-4' : 'col-md-6 col-xs-6'}>
                        <i className={'fab fa-' + language + ' codeIcon'}></i>
                        <div className='codeSmallText'>{language}</div>
                    </div>
            )}</div>
            
            </div>
        )
}

export default CodePanel;