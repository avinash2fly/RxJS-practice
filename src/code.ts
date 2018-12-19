// import { Observable } from "rxjs/Observable";
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/share';
// import { share } from "rxjs/operators";

// creating obbservable 
var observable = Observable.create(
    (observer:any)=>{
        try{
        
            observer.next('Hey guys!');
            observer.next('how are you!');
            setInterval(()=>{
                observer.next('I am good!');
            },2000)
        }
    catch(err){
        observer.error(err);
    }
}).share();

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    (complete:any) => addItem('Completed')
);



// var observer2 = observable.subscribe(
//     (x:any) => addItem(x)
// );

// // adding observer2 as child of observer
// observer.add(observer2);

//observer.remove(observer2); <-- to remove observer

setTimeout(()=>{
    //observer.unsubscribe();

    var observer2 = observable.subscribe(
        (x:any)=> addItem('Subscriber 2:' + x)
    )
},1000);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}