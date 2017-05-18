import Dispatcher from '../dispatchers/Dispatcher'

export function createTimeAction(name){
  Dispatcher.dispatch({
    type: 'CREATE_TIME_ACTION',
    name: name
  })
}
