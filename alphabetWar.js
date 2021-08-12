function alphabetWar(fight) {
    
    let fighters = fight.split("");
    const left =['s', 'b', 'p', 'w'];
    const right =['z', 'd', 'q', 'm'];
    
    let leftScore = 0;
    let rightScore = 0;     
    
    function tallyScore(x) {        
        
        if (left.includes(x)) {
            leftScore += left.indexOf(x) + 1;
        }
        else if (right.includes(x)) {
            rightScore += right.indexOf(x) + 1;
        }
    }
    function checkWin() {
        if (leftScore > rightScore) {
            console.log('Left Side Wins!');
        }        
        else if (leftScore < rightScore) {
            console.log('Right Side Wins!');
        }
        else {
            console.log('Lets\'s fight again!');
        }
    }
    
    fighters.forEach(tallyScore)
    checkWin();
}    

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!