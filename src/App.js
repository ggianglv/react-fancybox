import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import closeImg from './close.svg'

const TRANSITION_TIME = 0

class App extends Component {
  state = {
    show: false
  }

  show = () => {
    this.setState({
      show: true,
    })
    this.props.onOpen()
  }

  handleClickBox = (event) => {
    if (this.box.contains(event.target)) {
      return
    }
    this.close()
  }

  close = () => {
    this.setState({
      show: false
    })
    this.props.onClose()
  }

  renderThumbnail = () => {
    const {thumbnail, image, defaultThumbnailWidth, defaultThumbnailHeight} = this.props

    if (!thumbnail) {
      return (
        <div onClick={this.show} className="thumbnail">
          <img
            style={{width: defaultThumbnailWidth, height: defaultThumbnailHeight, objectFit: 'cover'}}
            src={image} alt="thumbnail"/>
        </div>
      )
    }

    return (
      <div onClick={this.show} className="thumbnail">
        <img src={thumbnail} alt="thumbnail"/>
      </div>
    )
  }

  render () {
    const {image, caption, animation, showCloseBtn} = this.props

    const imageStyle = {
      maxHeight: window.innerHeight * 0.7
    }

    return (
      <div className="react-fancybox">
        {this.renderThumbnail()}
        <ReactCSSTransitionGroup
          style={{animationDuration: 1000}}
          transitionName={animation}
          transitionEnterTimeout={TRANSITION_TIME}
          transitionLeaveTimeout={TRANSITION_TIME}>
          {this.state.show
            ? (
              <div onClick={this.handleClickBox} className="box">
                <div ref={box => this.box = box} className="image-box">
                  {showCloseBtn && <img onClick={this.close} className="close-btn" src={closeImg} alt="close"/>}
                  <img style={imageStyle} src={image} alt="original"/>
                  {caption && <div className="caption">{caption}</div>}
                </div>
              </div>

            ) : null}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

App.defaultProps = {
  thumbnail: '',
  image: '',
  defaultThumbnailWidth: 300,
  defaultThumbnailHeight: 250,
  caption: '',
  animation: 'fade',
  onOpen: () => {},
  onClose: () => {},
  showCloseBtn: true,
}

App.propTypes = {
  thumbnail: PropTypes.string,
  image: PropTypes.string,
  defaultThumbnailWidth: PropTypes.number,
  defaultThumbnailHeight: PropTypes.number,
  caption: PropTypes.string,
  animation: PropTypes.string,
  animationTime: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  showCloseBtn: PropTypes.bool,
}

export default App