import Utils from '../helpers/utils'

export enum Platforms {
  Flutter = 'flutter',
  Reactjs = 'reactjs',
  Angular = 'angular',
}
export default class PlatformService {
  static platformsArray() {
    return Utils.enumToArray(Platforms)
  }
}

