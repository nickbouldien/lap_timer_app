import Dispatcher from '../dispatchers/Dispatcher'

export function deleteTimeAction(id){
  Dispatcher.dispatch({
    type: 'DELETE_TIME_ACTION',
    id: id //???
  })
}
