const app = require("./app")
const port = process.env.PORT || 3000

app.get("/", (req, resp) => resp.send("Server is working!"))

app.listen(port, () => console.log("Server running on: ", port))
