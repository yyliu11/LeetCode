/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const letterLogs = []
    const digitLogs = []
    
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i].substring(logs[i].indexOf(' ') + 1, logs[i.length])
        const isDigitLog = !isNaN(log[0])
        if (isDigitLog) {
            digitLogs.push(logs[i])
        } else {
            letterLogs.push(logs[i])
        }
    }
    
    letterLogs.sort((a, b) => {
        const firstSpaceA = a.indexOf(' ')
        const firstSpaceB = b.indexOf(' ')
        
        const contentA = a.substring(firstSpaceA + 1, a.length)
        const contentB = b.substring(firstSpaceB + 1, b.length)
        
        if (contentA === contentB) {
            const idA = a.substring(0, firstSpaceA)
            const idB = b.substring(0, firstSpaceB)
            
            if (idA < idB) {
                return -1
            } else if(idA > idB) {
                return 1
            } else {
                return 0
            }
        }
        
        return contentA < contentB ? -1 : 1
    })
    
    return [ ...letterLogs, ...digitLogs]    
};