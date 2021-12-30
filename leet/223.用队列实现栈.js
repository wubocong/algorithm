var MyStack = function() {
  this.list = [];
  this.stackTop = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.list.push(x);
  this.stackTop = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const size = this.list.length;
  let count = 0;
  while(count < size - 2) {
    this.list.push(this.list.shift());
    count++;
  }
  this.stackTop = this.list.shift();
  this.list.push(this.stackTop);
  return this.list.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.stackTop;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.list.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */