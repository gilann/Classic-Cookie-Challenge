# Classic-Cookie-Challenge
###### This is the very first challenge as a part of Saturday Coding challenge by Hitesh Choudhary.

###### Video link of the above challenge https://www.youtube.com/watch?v=a4Py6rrf2Dk

JavaScript code for the Classic-Coding-Challenge is written in a very simplier way, so that everyone can understand it.

Showing constructors and methods used in the program:
![alt text](https://github.com/gilann/Classic-Cookie-Challenge/blob/gh-pages/CookieChallenge.PNG "Basic block of program")

## Explaination of the program

Program contains two constructors **Cookie** which creates a cookie object and **Node** which create node or element objects for the cookie.

1. Attributes of Cookie object are 
##### width, which stores width of cookie object
##### height, which stores height of cookie object
##### values, which stores value of elements in 2D array
##### cookie, a 2D array, which stores node or element object corresponding to values

2. Methods of Cookie object are
##### populate, which initializes all the nodes and stores it in cookie array depending on values array
##### findChocoChip, which finds all the different choco-chips and stores their sizes into result array

3. Attributes of Node object are
##### value, which stores value of the Node 0 or 1
##### isChecked, indicates if the node is checked or not, false means not checked and true means checked

4. Methods of Node objects
##### getNeighbours, gets all the neighbours of a node

5. For object creation and to populate and find result   

var cookie1 =  new Cookie(4,4); //create a cookie    

cookie1.populate();             //populate it    

cookie1.findChocoChip();        //find choco-chips   

console.log(result);            //print the result on console   

### To tryout different inputs,
just [click](https://gilann.github.io/Classic-Cookie-Challenge/) here and
go to console.
And type
###cookie1 = new Cookie(width,height, 2DArray);
#### for example:-
### cookie1 = new Cookie(5,5, [[1,0,0,1,0],[1,0,1,0,0],[0,0,1,0,1],[1,0,1,0,1],[1,0,1,1,0]]);
#### then type
### cookie1.populate();

### cookie1.findChocoChip();

### console.log(result); //to see result



