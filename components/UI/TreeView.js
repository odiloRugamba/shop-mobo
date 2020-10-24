import get from 'lodash.get'
import PropTypes from 'prop-types'
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

function noop() {}

class TreeView extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    renderNode: PropTypes.func.isRequired,
    initialExpanded: PropTypes.bool,
    getCollapsedNodeHeight: PropTypes.func,
    idKey: PropTypes.string,
    childrenKey: PropTypes.string,
    onNodePress: PropTypes.func,
    onNodeLongPress: PropTypes.func,
    isNodeExpanded: PropTypes.func,
    shouldDisableTouchOnLeaf: PropTypes.func
  }

  static defaultProps = {
    initialExpanded: false,
    getCollapsedNodeHeight: () => 20,
    idKey: 'id',
    childrenKey: 'children',
    onNodePress: noop,
    onNodeLongPress: noop,
    isNodeExpanded: noop,
    shouldDisableTouchOnLeaf: () => false
  }

  constructor(props) {
    super(props)

    this.state = this.getInitialState()
  }

  getInitialState = () => {
    return ({expandedNodeKeys: {}, checkedNodeKeys: {}});
  }

  componentDidUpdate(prevProps) {
    const hasDataUpdated = prevProps.data !== this.props.data
    const hasIdKeyUpdated = prevProps.idKey !== this.props.idKey
    const childrenKeyUpdated = prevProps.childrenKey !== this.props.childrenKey

    if (hasDataUpdated || hasIdKeyUpdated || childrenKeyUpdated) {
      this.setState(this.getInitialState())
    }
  }

  hasChildrenNodes = (node) =>{
    return get(node, `${this.props.childrenKey}.length`, 0) > 0;
  }

  isExpanded = (id) => {
    if (this.props.isNodeExpanded !== noop) {
      return this.props.isNodeExpanded(id)
    } else {
      return get(this.state.expandedNodeKeys, id, this.props.initialExpanded)
    }
  }
  updateNodeKeyById = (id, expanded) => {
    return ({
      expandedNodeKeys
    }) => {
      return ({
        expandedNodeKeys: Object.assign({}, expandedNodeKeys, {[id]: expanded})
      })
    }
  }


  collapseNode = (id) => {
    return this.setState(this.updateNodeKeyById(id, false));
  }

  expandNode = (id) => {
    return this.setState(this.updateNodeKeyById(id, true))
  }

  toggleCollapse = (id) => {
    if(this.isExpanded(id) ){
      this.collapseNode(id);
    }
    else{
      this.expandNode(id);
    }
  }

  handleNodePressed = async ({ node, level }) => {
    const nodePressResult = await this.props.onNodePress({ node, level })

    if (nodePressResult !== false && this.hasChildrenNodes(node)) {
      this.toggleCollapse(node[this.props.idKey])
    }
  }

  
  isChecked = (id) => {
    return get(this.state.checkedNodeKeys, id, false);
  }
  updateNodeKeyCheckBoxStatusById = (id, checked) => {
    return ({
      checkedNodeKeys
    }) => {
      return ({
        checkedNodeKeys: Object.assign({}, checkedNodeKeys, {[id]: checked})
      })
    }
  }
  checkNode = (id) => {
    return this.setState(this.updateNodeKeyCheckBoxStatusById(id, false));
  }

  uncheckNode = (id) => {
    return this.setState(this.updateNodeKeyCheckBoxStatusById(id, true))
  }

  toggleCheckbox = (id) => {
    if(this.isChecked(id) ){
      this.checkNode(id);
    }
    else{
      this.uncheckNode(id);
    }
  }

  handleCheckboxPressed = async ({ node, level }) => {
      node.isChecked = !node.isChecked;
      console.log(node);
      this.toggleCheckbox(node[this.props.idKey])
  }


  Node = ({ nodes, level }) => {
    const NodeComponent = this.Node

    return nodes.map((node) => {
      const isExpanded = this.isExpanded(node[this.props.idKey])
      const isChecked = this.isChecked(node[this.props.idKey]);
      const hasChildrenNodes = this.hasChildrenNodes(node)
      const shouldRenderLevel = hasChildrenNodes && isExpanded

      return (
        <View
          key={node[this.props.idKey]}
          style={{
            height: isExpanded
              ? 'auto'
              : 50,
          zIndex: 1,
          overflow: 'hidden',
           marginLeft: ( level != 0 ? 25 + level : 0 )
          }}
        >
          <View style={{
            flexDirection: "row",
            borderWidth: 0.3,
            borderRadius: 5,
            padding: 10,
            borderColor: Colors.primary,
            }}>
            <TouchableOpacity
            onPress={() => this.handleCheckboxPressed({ node, level })}
            style={styles.circle}
            >
              {isChecked ? <View style={styles.checkedCircle}></View> : null}
            </TouchableOpacity>
            <TouchableOpacity
              disabled={this.props.shouldDisableTouchOnLeaf({ node, level })}
              onPress={() => this.handleNodePressed({ node, level })}
              onLongPress={() => this.props.onNodeLongPress({ node, level })}
            >
              {React.createElement(this.props.renderNode, {
                node,
                level,
                isExpanded,
                hasChildrenNodes,
              })}
            </TouchableOpacity>
          </View>
          {shouldRenderLevel && (
            <NodeComponent
              nodes={node[this.props.childrenKey]}
              level={level + 1}
            />
          )}
        </View>
      )
    })
  }

  render() {
    return <this.Node nodes={this.props.data} level={0} />
  }
}
const styles = StyleSheet.create({
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  checkedCircle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    

  },
})
export default TreeView