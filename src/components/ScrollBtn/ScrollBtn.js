import React, { Component } from 'react';
import './scrollBtn';

export class ScrollBtn extends Component {
  state = {
    isShown: false,
    scrollTop: 0,
    scrollToTop: false
  }

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
        this.setState({
          isShown: window.pageYOffset >= 300,
          scrollToTop: (this.state.scrollTop - window.pageYOffset) > 0,
          scrollTop: window.pageYOffset
        }) 
    })
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render(){
    const style = {
      display: this.state.isShown ? 'block' : 'none'
    }

    let classes = 'scrollBtn';
    classes += this.state.scrollToTop ? ' scrollBtn-active' : '';

    return (
      <div className={classes} style={style} onClick={this.scrollToTop}>
        
      </div>
    )
  }
}