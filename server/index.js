const path = require("path")
const http = require("http")
const url = require("url")
const fs = require("fs")

require("dotenv").config()

const port = process.env.PORT || 3000

const msgPath = path.join(__dirname, "..", "messages")

const server = http.createServer()

server.on("request", (req, res) => {
    if(req.method == "GET") {
        const q = url.parse(req.url, true).path.replace("/", "")
        if(fs.existsSync(path.join(msgPath, `${q}.txt`))) {
            let data = fs.readFileSync(path.join(msgPath, `${q}.txt`))
            res.writeHead(200, {"Content-Type": "text/plane"})
            res.write(data)
            res.end()
        } else {
            res.writeHead(404, {"Content-Type": "text/plane"})
            res.write("404 not found")
            res.end()
        }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${server.address().port}.`)
})