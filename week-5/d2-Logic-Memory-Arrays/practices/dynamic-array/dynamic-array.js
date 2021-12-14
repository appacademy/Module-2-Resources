class DynamicArray {
    constructor(defaultSize = 4) {
        this.length = 0;
        this.capacity = defaultSize;
        this.data = new Array(this.capacity);
        this.data = [];
    }

    read(index) {
        // console.log(this.data);
        // console.log(this.data[index]);
        if (index >= this.length) return undefined;
        return this.data[index];
        // You may not use any built-in JS array functions
    }

    unshift(val) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }

        this.data[0] = val;
        this.length++;
        // You may not use any built-in JS array functions
    }
}

module.exports = DynamicArray;
