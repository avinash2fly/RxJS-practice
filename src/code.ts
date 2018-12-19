import {ReplaySubject} from 'rxjs/Rx';

var subject = new ReplaySubject(30,200);

subject.subscribe(
    data => addItem('Observer 1:'+data),
    err => addItem(err),
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
    })

var observer2 = subject.subscribe(
    data => addItem('Obbserver 2:' + data)
)

subject.next('the second thing has been sent');
subject.next('the third thing has been sent');

observer2.unsubscribe();

subject.next('Final thing has been set');

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}