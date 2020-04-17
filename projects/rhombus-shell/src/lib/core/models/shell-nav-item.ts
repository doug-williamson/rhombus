export type RhombusShellNavEntry = RhombusShellNavGroup | RhombusShellNavItem;

export interface RhombusShellNavGroup {
    name: string;
    children: RhombusShellNavItem[];
}

export interface RhombusShellNavItem {
    name: string;
    route: string;
}
