import innet, {Plugins, Children, Parent, DefaultPlugin} from 'innet'

interface Portal {
  type: typeof portal
  children: Children
  props: {
    parent: HTMLElement
  }
}

function portal (target: Portal, parent: Parent, plugins: Plugins, plugin: DefaultPlugin) {
  innet(target.children, target.props.parent, plugins, plugin)
}

export default portal

export {
  Portal
}
