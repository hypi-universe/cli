import Utils from '../helpers/utils'

export enum Platforms {
  Flutter = 'flutter',
  Reactjs = 'reactjs',
  Angular = 'angular',
  Vuejs = 'vuejs'
}
export default class PlatformService {
  static platformsArray() {
    return Utils.enumToArray(Platforms)
  }
}

