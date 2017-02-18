import React from 'react';
class Fancybox extends React.Component {
  constructor() {
    super();
    this.state = {
      showBox: false,
    };
  }

  showBox(event) {
    event.preventDefault();
    this.setState({
      showBox: true,
    });
  }

  onBoxClick(event) {
    event.preventDefault();
    if (event.target != this.refs.imageInBox) {
      this.setState({
        showBox: false,
      });
    }
  }

  render() {
    let box = '';
    if (this.state.showBox) {
      box = (
        <div onClick={this.onBoxClick.bind(this)} ref='box' className='fancy-box'>
          <img ref='imageInBox' src={this.props.imageUrl}/>
          <div>{this.props.caption}</div>
        </div>
      );
    }
    return (
      <div>
        <img onClick={this.showBox.bind(this)} src={this.props.imageUrl} className={this.props.imageClassName}/>
        {box}
      </div>
    );
  }
}

Fancybox.propTypes = {
	caption: React.PropTypes.string,
  imageClassName: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
};

Fancybox.defaultProps = {
  caption: '',
  imageClassName: 'fancybox-img',
  imageUrl: '',
};

export default Fancybox;
