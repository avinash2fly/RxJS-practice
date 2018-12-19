import {from} from 'rxjs/Observable/from';
import 'rxjs/add/operator/pluck';


from([
    {
        first:'Gary', last:'Simon', age:34
    },
    {
        first:'Jane', last:'Simon', age:34
    },
    {
        first:'John', last:'Simon', age:34
    },
])

.pluck('first')
.subscribe((x:any)=> addItem(x))

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}