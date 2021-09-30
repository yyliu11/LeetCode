/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    let teams_point = {};
    let LENGTH = votes[0].length;
    
    for(let i=0; i < votes.length; i++){
        let teams = votes[i];
        for(let rank =0; rank < LENGTH; rank++){
             let team = teams[rank];
            if(i===0){
                teams_point[team] = Array.from(new Array(LENGTH), () => 0)
            }
            teams_point[team][rank]++;
        }
    }
    
   return String(Object.keys(teams_point).sort((a,b)=> {
        for(let i = 0; i < LENGTH; i++){
            if(teams_point[a][i] > teams_point[b][i]) return -1;
            if(teams_point[a][i] < teams_point[b][i]) return 1;
        }
        return a < b ? -1 : 1;
    })).replace(/,/g,'');

};