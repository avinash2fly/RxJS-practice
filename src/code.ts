import { Observable } from "rxjs/Observable";

// creating obbservable 
var observable = Observable.create(
    (observer:any)=>{
        observer.next('Hey guys!');
        observer.next('how are you!');
        observer.complete();
        observer.next('This will not send');
    }
);

observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    (complete:any) => addItem('Completed')
    
    
    );

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}