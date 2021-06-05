export type RhShellNavEntry = RhShellNavGroup | RhShellNavItem;

export interface RhShellNavGroup {
    name: string;
    // children: RhShellNavEntry;
    children: RhShellNavItem[];
}

export interface RhShellNavItem {
    name: string;
    route: string;
}

export interface RhShellNavCollection {
  label: string;
  navEntries: RhShellNavEntry[];
}
