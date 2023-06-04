const readLine = require("readline")
const clear = require("clear")
const chalk = require("chalk")
const boxen = require("boxen")
const http = require("http")

const rl = readLine.createInterface(process.stdin, process.stdout)

rl.setPrompt("server: ")
rl.prompt()

rl.on("line", line => {
    clear()
    logMessage(line)
    newInterval(line)
    if(line == "q") {
        clear()
        console.log("bye")
        setTimeout(() => {
            clear()
            process.exit(0)
        }, 250)
    }
})

function newInterval(server) {
    setInterval(() => {
        clear()
        logMessage(server)
    }, 1000)
}

function logMessage(server) {
    http.get(`http://${server}`, res => {
        let data = ""
        res.on("data", chunk => {
            data += chunk
        })
        res.on("end", () => {
            console.log(data)
        })
        res.on("error", err => {
            console.log(`Error: ${err.message}`)
        })
    })
}