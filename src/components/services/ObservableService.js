import { Observable, Subscriber } from "rxjs";

export const getNumber = new Observable(subscriber=>{
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    setTimeout(()=>{
        subscriber.next(4)
        // Subscriber.next()
    }, 1000)
    subscriber.next(5)
    subscriber.complete()
})