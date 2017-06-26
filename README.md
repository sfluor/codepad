# CodePad

Basic code editor to hack cool things in group.

It's using Ace-Editor (and one of it's [React Adaptation](https://github.com/securingsincity/react-ace)) for the Editor and socket.io for the sync between multiple sessions.

## Setup

- You have to install redis and start it, for example in debian based systems: `apt-get install redis` and `service redis start`