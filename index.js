module.exports = check
module.exports.author = author

console.log("Welcome to qorncat's package!")

function check() {
    console.log("Package working.")
}

function author() {
    console.log({name: "qorncat",url:"https://github.com/qorncat"})
}
