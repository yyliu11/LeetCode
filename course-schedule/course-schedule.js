/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let matrix = [];
    let indegree = [];

    for(let i = 0; i < numCourses; i++) {
        matrix[i] = [];
        indegree[i] = 0;
        for(let j = 0; j < numCourses; j++) {
            matrix[i][j] = 0;
        }
    }
    
    for (let i=0; i<prerequisites.length; i++) {
        let ready = prerequisites[i][0];
        let pre = prerequisites[i][1];
        
        if (matrix[pre][ready] == 0)
            indegree[ready]++; 
        matrix[pre][ready] = 1;
    }
    
    let queue = [];
    
    for(let i = 0; i < indegree.length; i++) {
        if(indegree[i] === 0) {
            queue.push(i);
        }
    }
    let count = 0;
    while(queue.length != 0) {
        let curr = queue.shift();
        count ++;
        for(let i = 0; i < numCourses; i++) {
            if(matrix[curr][i] === 1) {
                if(--indegree[i] === 0) {
                    queue.push(i);
                }
                
            }
        }
    }
    return count === numCourses;
};