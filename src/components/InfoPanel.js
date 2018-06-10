import React, { Component } from 'react';
import BioPanel from './BioPanel';
import GitPanel from './GitPanel';

class InfoPanel extends Component{
    static initialState = () => ({
        infoPanel: 'bio',
});

state = InfoPanel.initialState();

renderInfoPanel = (user) => {
    switch(this.state.infoPanel){
        case 'bio':
        return (
            <BioPanel bio={this.props.bio}
            />
        )
        case 'git':
            return(
                <GitPanel repos={this.props.repos}
                          reposURL={'http://github.com/' + this.props.login + '?tab=repositories'}
                          gists={this.props.gists}
                          gistsURL={this.props.gists_url}
                />
            )      
        default:
            return(
                <BioPanel bio={this.props.bio}/>
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
            {this.renderInfoPanel()}
            <div className='container-fluid'>
                            <div className='row'>
                                <a  href={this.props.url} target="_blank"><i className='fab fa-git staticIcon col'
                                                                       onMouseEnter={(info => this.selectInfoPanel('git'))}
                                                                       onTouchStart={(info => this.selectInfoPanel('git'))}
                                                                       onMouseLeave={(info => this.selectInfoPanel('bio'))}></i></a>
                                <i className='fas fa-envelope staticIcon col'></i>
                                <i className='fab fa-free-code-camp staticIcon col'></i>
                                <i className='fab fa-twitter staticIcon col'></i>
                                <i className='fab fa-codepen staticIcon col'></i>
                            </div>
                            </div>
                            </div>
        )
    }
}

export default InfoPanel;