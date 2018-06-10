import React  from 'react';

const EmailPanel = (props) => {
    
        return(
            <div>
                <br />
                <div className='panelText'>{props.login}@example.com</div>
                <br />
                <br />
                <br />
            </div>
        )
}

export default EmailPanel;