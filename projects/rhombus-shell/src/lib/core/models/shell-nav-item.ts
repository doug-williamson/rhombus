export type RhombusShellNavEntry = RhombusShellNavGroup | RhombusShellNavItem;

export interface RhombusShellNavGroup {
    name: string;
    // children: RhombusShellNavEntry;
    children: RhombusShellNavItem[];
}

export interface RhombusShellNavItem {
    name: string;
    route: string;
}

export interface RhombusShellNavCollection {
  label: string;
  navEntries: RhombusShellNavEntry[];
}
