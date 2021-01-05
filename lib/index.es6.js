import innet from 'innet';

function portal(target, parent, plugins, plugin) {
    innet(target.children, target.props.parent, plugins, plugin);
}

export default portal;
