/**
 *  Question 3
 * #### Problem: Event Emitter
 * Implement a simple `EventEmitter` class that supports `on`, `off`, and `emit` methods.

 */



class EventEmitter{
    constructor(){
        this.eventsListened = {

        }
    }

    on(event , handler){
           if(this.eventsListened[event]) { this.eventsListened[event].push(handler)}
           else {  
            this.eventsListened[event] = [handler]

            }
    }

    off(event, handler){
        if(this.eventsListened[event]){
            console.log("event given", event, this.eventsListened[event])
            const evInd = this.eventsListened[event].findIndex(currEv => currEv === handler)
           if (evInd >= 0) this.eventsListened[event].splice(evInd, 1)
        }

    }
    emit(eventName, data){
        this.eventsListened[eventName]?.forEach(eventHandler => {
            eventHandler(data)
        })
    }

    }



    const emitter = new EventEmitter();
const handler = (msg) => console.log(msg);

emitter.on('event', handler);
emitter.emit('event', 'Hello World!'); // Output: Hello World!
emitter.off('event', handler);
emitter.emit('event', 'Hello again?'); // No output
