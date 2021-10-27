
var Trie = function() {
    this.children = {};
    this.exist = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let root = this.children;
    for(let l of word){
        if(!root[l]){
            root[l] = new Trie()
        }
        root = root[l]
    }
    root.exist = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let root = this.children;
    for(let c of word){
        if(root[c]){
            root = root[c]
        }else{ return false; }
    }
    return root.exist;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let root = this.children;
    for(let c of prefix){
        if(root[c]){
            root = root[c]
        }else{ return false; } 
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */