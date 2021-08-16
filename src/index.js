
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return (matrix || []).flatMap((arr, i) => i % 2 ? arr.reverse() : arr); 
}
