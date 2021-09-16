/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var output = [];
    var obj = {};
  
    for (var i = 0; i < cpdomains.length; i++){
        var separateDomain = (str)=>{
            var arr = str.split(' ');
            var count = Number(arr[0]);
            var domains = arr[1].split('.');
            var lastIndex = domains.length - 1;
            if (obj[domains[lastIndex]]){
              obj[domains[lastIndex]] += count  
            }else{
               obj[domains[lastIndex]] = count 
            }
            if(obj[domains[lastIndex - 1] + '.' + domains[lastIndex]]){
                obj[domains[lastIndex - 1] + '.' + domains[lastIndex]] += count;
            }else{
                obj[domains[lastIndex - 1] + '.' + domains[lastIndex]] = count;
            }
            if(domains[lastIndex -2]){
                if(obj[arr[1]]){
                    obj[arr[1]] += count;
                }else{
                    obj[arr[1]] = count;
                }
            }
        };
        separateDomain(cpdomains[i])
    }
    for(var key in obj){
        output.push(obj[key].toString() + ' ' + key)
    }
    return output;
};