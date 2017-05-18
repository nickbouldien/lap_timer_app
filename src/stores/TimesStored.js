import {EventEmitter} from 'events'
//https://github.com/notch8/learn-javascript-examples/blob/master/08-React/flux-1/src/stores/MenuItems.js


// Import the Dispatcher so we can use it
import Dispatcher from '../dispactchers/Dispatcher'

class TimesStored extends EventEmitter{
  constructor(){
    super()
    this.times = [
      {
        id: 1495149028306,
        name: "4:11:08 PM"
      },
      {
        id: 1495149152282,
        name: "4:11:27 PM"
      }
    ]
  }

  // method to add a new MainCourse, called from `handleActions()`
  addTime(name){
    this.times.push({
      id: new Date().valueOf(),
      name: new Date() // or name???
    })
    this.emit('change')
  }

  // The method we register with the Dispatcher.  It will be called on every eent
  handleActions(action){
    //Only react to the action types we're interested in
    switch(action.type){
      case("CREATE_TIME_ACTION"):{
        // Call an internal method to handle action
        this.addTime(action.name)
        break
      }
      default:{}
    }
  }
}

//Instantiate the store
const timesStored = new TimesStored()

// Register the action handler
Dispatcher.register(timesStored.handleActions.bind(timesStored))

export default timesStored
