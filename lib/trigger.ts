import Subject from "./subject"
import Observer from "./observer"

type ListenData = [string|Object, Function]

type TriggerData = string|Object

const trigger = function (events:TriggerData[], listens:ListenData[]) {
    var observer = new Observer
    var subject  = new Subject
    listens.forEach((listenData) => {
        let listenEvent    = listenData[0]
        let listenCallback = listenData[1]
        observer.listenTo(subject, listenEvent, listenCallback)
    })

    events.forEach(event => {
        subject.trigger(event)
    })
}

export default trigger
