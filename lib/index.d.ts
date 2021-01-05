import { Plugins, Children, Parent, DefaultPlugin } from 'innet';
interface Portal {
    type: typeof portal;
    children: Children;
    props: {
        parent: HTMLElement;
    };
}
declare function portal(target: Portal, parent: Parent, plugins: Plugins, plugin: DefaultPlugin): void;
export default portal;
export { Portal };
