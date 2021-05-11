enum Module {
  BACKLOG = 1,
  BLOG = 2,
  DYNATIES = 3,
  LATEST_NEWS = 4,
}

export interface IModule {
  name: string;
  enabled: boolean;
  moduleId: Module;
}
