import { SplitterDockContainer } from "./SplitterDockContainer.js";
import { DockManager } from "./DockManager.js";
import { IDockContainer } from "./interfaces/IDockContainer.js";
export declare class VerticalDockContainer extends SplitterDockContainer {
    constructor(dockManager: DockManager, childContainers: IDockContainer[]);
}
