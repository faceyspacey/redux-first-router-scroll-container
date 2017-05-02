// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import warning from 'warning'
import { scrollBehavior } from 'redux-first-router'

type Props = {
  scrollKey: string,
  shouldUpdateScroll?: (Object, Object) => boolean | string | Array<number>
}

const __DEV__ = process.env.NODE_ENV !== 'production'

export default class ScrollContainer extends React.Component {
  props: Props

  constructor(props, context) {
    super(props, context)

    // We don't re-register if the scroll key changes, so make sure we
    // unregister with the initial scroll key just in case the user changes it.
    this.scrollKey = props.scrollKey
  }

  componentDidMount() {
    scrollBehavior().setPrevKey()

    scrollBehavior().registerElement(
      this.props.scrollKey,
      ReactDOM.findDOMNode(this), // eslint-disable-line react/no-find-dom-node
      this.props.shouldUpdateScroll && this.shouldUpdateScroll
    )

    // Only keep around the current DOM node in development, as this is only
    // for emitting the appropriate warning.
    if (__DEV__) {
      this.domNode = ReactDOM.findDOMNode(this) // eslint-disable-line react/no-find-dom-node
    }
  }

  componentWillReceiveProps(nextProps) {
    warning(
      nextProps.scrollKey === this.props.scrollKey,
      '<ScrollContainer> does not support changing scrollKey.'
    )
  }

  componentDidUpdate() {
    if (__DEV__) {
      const prevDomNode = this.domNode
      this.domNode = ReactDOM.findDOMNode(this) // eslint-disable-line react/no-find-dom-node

      warning(
        this.domNode === prevDomNode,
        '<ScrollContainer> does not support changing DOM node.'
      )
    }
  }

  componentWillUnmount() {
    scrollBehavior().unregisterElement(this.scrollKey)
  }

  shouldUpdateScroll = (prevLocationState, locationState) => {
    const shouldUpdateScroll = this.props.shouldUpdateScroll

    return shouldUpdateScroll.call(
      scrollBehavior(),
      prevLocationState,
      locationState
    )
  }

  render() {
    return this.props.children
  }
}
