import Dispatcher from '../dispatchers/Dispatcher'

export function createTimeAction(){
  Dispatcher.dispatch({
    type: 'CREATE_TIME_ACTION',
    name: new Date().toLocaleTimeString()
  })
}
