export type RhombusShellNavEntry = RhombusShellNavGroup | RhombusShellNavItem;

export interface RhombusShellNavGroup {
    name: string;
    children: RhombusShellNavEntry[];
}

export interface RhombusShellNavItem {
    name: string;
    route: string;
}
