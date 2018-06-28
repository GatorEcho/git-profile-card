import React, { Component } from 'react';
import BioPanel from './BioPanel';
import GitPanel from './GitPanel';
import CodePanel from './CodePanel';
import FCCPanel from './FCCPanel';

//Component to display different information based on the selected icon at the bottom.
//Also renders the bottom icons.
//This component is the only one with state, which tells it which type of info to render.

class InfoPanel extends Component{
    static initialState = () => ({
        infoPanel: 'bio',
});

state = InfoPanel.initialState();

renderInfoPanel = (user) => {

//Returns a different component depending on which icon is selected.

    switch(this.state.infoPanel){
        case 'bio':
        return (
            <BioPanel quote={this.props.quote}
            />
        )
        case 'git':
            return(
                <GitPanel repos={this.props.repos}
                          reposURL={'http://github.com/' + this.props.login + '?tab=repositories'}
                          gists={this.props.gists}
                          gistsURL={'http://gist.github.com/' + this.props.login}
                />
            )
        case 'code':
            return (
                <CodePanel languages={this.props.languages}
                />
            )
        case 'fcc':
        return (
            <FCCPanel login={this.props.login}
            />
        )      
        default:
            return(
                <BioPanel quote={this.props.quote}/>
            )
    }
}

selectInfoPanel = (info) =>{
    this.setState(
        {
            infoPanel: info
        }
    )
}

    render(){
        
        return(
            <div>
            {this.renderInfoPanel()} {/* Renders the top portion of the InfoPanel based on state. */}
            <div className='container staticIconContainer'>{/*Renders the bottom static icons */}
                            <div className='row'>
                                <i className='fab fa-git staticIcon col'
                                onMouseEnter={(() => this.selectInfoPanel('git'))}
                                onTouchStart={(() => this.selectInfoPanel('git'))}></i> 

                                <i className='fas fa-quote-right staticIcon col'
                                onMouseEnter={(() => this.selectInfoPanel('bio'))}
                                onTouchStart={(() => this.selectInfoPanel('bio'))}></i>

                                <i className='fas fa-code staticIcon col'
                                onMouseEnter={(() => this.selectInfoPanel('code'))}
                                onTouchStart={(() => this.selectInfoPanel('code'))}></i>

                                {/* <i className='fab fa-twitter staticIcon col'></i>
                                <i className='fab fa-codepen staticIcon col'></i> */}
                            </div>
                            </div>
                            </div>
        )
    }
}

export default InfoPanel;