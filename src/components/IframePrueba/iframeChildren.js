import React, { Component, Fragment, createPortal } from "react";
import ReactDOM from "react-dom";

class Hello extends Component {
  componentDidMount() {
    this.iframeRoot = this.node.contentDocument.body;
    this.forceUpdate();
  }

  render() {
    const { children } = this.props;
    return (
      <iframe width='330px'height='330px' ref={node => (this.node = node)}>
        {this.iframeRoot && ReactDOM.createPortal(children, this.iframeRoot)}
      </iframe>
    );
  }
}

export default Hello;