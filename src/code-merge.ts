import {Observable} from 'rxjs/Rx';
import { merge } from 'rxjs';


var observable = Observable.create((observer:any)=>{
    observer.next('Hey Guys!')
})

var observable2 = Observable.create((observer:any)=>{
    observer.next('How is it going?')
})


var newObbs = merge(observable,observable2);

newObbs.subscribe(
    (x:any)=> addItem(x)
    )


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}