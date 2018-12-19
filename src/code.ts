import { Observable } from "rxjs/Observable";

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
}
    
);

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    (complete:any) => addItem('Completed')
);

setTimeout(()=>{
    observer.unsubscribe();
},6001);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}