import {AsyncSubject} from 'rxjs/Rx';

var subject = new AsyncSubject();

subject.subscribe(
    data => addItem('Observer 1:'+data),
    () => addItem('Observer 1 Completed')
)

var i=1;

var int =setInterval(
    ()=>subject.next(i++),100
    )

    setTimeout(()=>{
        var observer2 = subject.subscribe(
            data => addItem('Observer 2:' + data)
        )
        //only last event is sent and that also only after calling complete
        subject.complete();
    },500)




function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}