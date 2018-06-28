import React  from 'react';

//Component to display the developer's summary (goals, skills, etc)
const BioPanel = (props) => {
    
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='panelText col'><p>"{props.quote}"</p></div>
                </div>
                
            </div>
        )
}

export default BioPanel;