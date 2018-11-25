export interface Global {
  launches: any[];
  statuses: any[];
  missionTypes: any[];
  agencies: any[];
}

export const globalInitialState: Global = {
  launches: [],
  statuses: [],
  missionTypes: [],
  agencies: []
};
