# message-board-js
just a random idea i head to make a terminal based "message of the day" board

## how to use
run npm i to install required packages

run `node server` from the projects root to start the server (you can configure env variable PORT in .env to set a port or let the system choose a free one).

create `<message name>.txt` in messages folder containing the messages

run as many clients as you wish with `node client` and enter `<server ip>:<server port>/<message name>` into the prompt to connect.

example commands to show message "test" on local machines terminal:

add file test.txt and insert content (example: "test")
```sh
cd message-board-js
node server
```
in a new terminal session for the client run:
```sh
cd message-board-js
node client
127.0.0.0:3000/text
```

replace 3000 with your servers port.
