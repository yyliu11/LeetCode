
var MyHashMap = function() {
    this.map = [];
};

MyHashMap.prototype.put = function(key, value) {
    this.map[key] = value;
};

MyHashMap.prototype.get = function(key) {
    return this.map[key] === undefined ? -1 : this.map[key];
};

MyHashMap.prototype.remove = function(key) {
    this.map[key] = undefined;
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */