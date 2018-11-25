export enum GlobalActionTypes {
  LoadLaunches = '[Global] LoadLaunches',
  LoadStatuses = '[Global] LoadStatuses',
  LoadMissionTypes = '[Global] LoadMissionTypes',
  LoadAgencies = '[Global] LoadAgencies'
}

export interface Action {
  readonly type: GlobalActionTypes;
  readonly payload: any;
}

export class LoadLaunches implements Action {
  public readonly type = GlobalActionTypes.LoadLaunches;
  constructor(public readonly payload: any[]) {}
}

export class LoadStatuses implements Action {
  public readonly type = GlobalActionTypes.LoadStatuses;
  constructor(public readonly payload: any[]) {}
}

export class LoadMissionTypes implements Action {
  public readonly type = GlobalActionTypes.LoadMissionTypes;
  constructor(public readonly payload: any[]) {}
}

export class LoadAgencies implements Action {
  public readonly type = GlobalActionTypes.LoadAgencies;
  constructor(public readonly payload: any[]) {}
}


export type GlobalActions = LoadLaunches | LoadStatuses | LoadMissionTypes | LoadAgencies;
