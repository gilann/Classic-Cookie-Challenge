var result = [];
var k=-1;
//Constructor to create a Cookie object
function Cookie(width, height, array){
    this.width=width;
    this.height=height;
    this.cookie =[];
    this.values = array;
    
}
//Constructor to create elements(nodes) of a Cookie
function Node(val,i,j){
    this.value = val;
    this.isChecked = false;
    this.i=i;
    this.j=j;
}
//Cookie method to add elements(nodes) to Cookie object
Cookie.prototype.populate = function(){
    for(i=0; i<this.height; i++){
        this.cookie[i] = [];
        for(j=0; j<this.width; j++){
            this.cookie[i][j] = new Node(this.values[i][j], i, j);
        }
    }
}
//Cookie method which find all the different Choco-Chips with its size and store it in result array
Cookie.prototype.findChocoChip= function(){
    result = [];
    k=-1;
    for(i=0; i<this.height; i++){
        for(j=0; j<this.width; j++){
            if(!this.cookie[i][j].isChecked&&this.cookie[i][j].value==1){
                this.cookie[i][j].isChecked=true;
                k++;
                result[k]=1;
                if((i>0)){
                    result[k] = result[k]+ this.cookie[i-1][j].getNeighbours();
                }
                if(i<(this.height-1)){
                     result[k] = result[k]+ this.cookie[i+1][j].getNeighbours();
                }
                if(j>0){
                    result[k] = result[k]+ this.cookie[i][j-1].getNeighbours();
                }
                if(j<(this.width-1)){
                    result[k] = result[k]+ this.cookie[i][j+1].getNeighbours();
                }
            }
        }
    }
}
//Node method to get all the neighbors of a node
Node.prototype.getNeighbours = function(){
    if(!this.isChecked&&this.value==1){
       this.isChecked=true;
       //if the element is at centre, it will have four neighbors
       if((this.i>0)&&(this.i<cookie1.height-1)&&(this.j>0)&&(this.j<cookie1.width-1)){
        return 1+ cookie1.cookie[this.i-1][this.j].getNeighbours()+
        cookie1.cookie[this.i+1][this.j].getNeighbours()+
        cookie1.cookie[this.i][this.j-1].getNeighbours()+
        cookie1.cookie[this.i][this.j+1].getNeighbours();
    }
    //if the element is at top-left corner, it will have two neighbors
    else if((this.i==0)&&(this.j==0)){
        return 1+ cookie1.cookie[this.i+1][this.j].getNeighbours()+
        cookie1.cookie[this.i][this.j+1].getNeighbours();
    }
    //if the element is at top-right corner, it will have two neighbors
    else if(this.i==0&&this.j==cookie1.width-1){
        return 1+cookie1.cookie[this.i+1][this.j].getNeighbours()+
        cookie1.cookie[this.i][this.j-1].getNeighbours();
    }
    //if the element is at buttom-left corner, it will have two neighbors
    else if(this.j==0&&this.i==cookie1.height-1){
        return 1+cookie1.cookie[this.i-1][this.j].getNeighbours()+
        cookie1.cookie[this.i][this.j+1].getNeighbours();
    }
    //if the element is at buttom-right corner, it will have two neighbors
    else if(this.i==cookie1.height-1&&this.j==cookie1.width-1){
        return 1+cookie1.cookie[this.i-1][this.j].getNeighbours()+
        cookie1.cookie[this.i][this.j-1].getNeighbours();
    }
    //if the element is at top, it will have three neighbors
    else if(this.i==0){
        return 1+ 
        cookie1.cookie[this.i+1][this.j].getNeighbours()+
        cookie1.cookie[this.i][this.j-1].getNeighbours()+
        cookie1.cookie[this.i][this.j+1].getNeighbours();
    }
    //if the element is at left, it will have three neighbors
    else if(this.j==0){
        return 1+ cookie1.cookie[this.i-1][this.j].getNeighbours()+
        cookie1.cookie[this.i+1][this.j].getNeighbours()+
        cookie1.cookie[this.i][this.j+1].getNeighbours();
    }
    //if the element is at buttom, it will have three neighbors
    else if(this.i==cookie1.height-1){
        return 1+ cookie1.cookie[this.i-1][this.j].getNeighbours()+
        cookie1.cookie[this.i][this.j-1].getNeighbours()+
        cookie1.cookie[this.i][this.j+1].getNeighbours();
    }
    //if the element is at right, it will have three neighbors
    else if(this.j==cookie1.width-1){
        return 1+ cookie1.cookie[this.i-1][this.j].getNeighbours()+
        cookie1.cookie[this.i+1][this.j].getNeighbours()+
        cookie1.cookie[this.i][this.j-1].getNeighbours();
    }
    }
    else{
        return 0;
    }
}
var cookie1 =  new Cookie(5,5, [[1,0,0,1,0],[1,0,1,0,0],[0,0,1,0,1],[1,0,1,0,1],[1,0,1,1,0]]); //create a cookie
cookie1.populate();             //populate it
cookie1.findChocoChip();        //find choco-chips
console.log(result);            //print the result on console
