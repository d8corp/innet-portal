import innet, {TPluginsObject, Parent, DefaultPlugin} from 'innet'

function portal (target, parent: Parent, plugins: TPluginsObject, plugin: DefaultPlugin) {
  innet(target.children, target.props.parent, plugins, plugin)
}

export default portal
