// import { Observable } from "rxjs/Observable";
// fix for .share() is not a function
import {Observable} from 'rxjs/Rx';
import {fromEvent} from 'rxjs/Observable/fromEvent';

//hot observables
var observable = fromEvent(document,'mousemove');

setTimeout(()=>{
    var subscription = observable.subscribe(
        (x:any)=>addItem(x)
    )
},2000);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}