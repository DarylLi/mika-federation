# Webpack Module Federation Demo

This is to experiment of webpack5's Module Federation of react18 and Vue3

Here is the simple micro frontends architecture;

[Host App](./app-host) &mdash; Host application. Consumes child apps.

[Child React App1](./app-react) &mdash; Remote React application. Expose own components.

[Child React App2](./app-swiper) &mdash; Remote React application. Expose own components with swiper component.

[Child Vue App](./app-vue) &mdash; Remote Cue application. Expose own components with swiper component.

### Install

```shell
# cd each app(eg: app-react)
yarn install
yarn start
yarn build

# start each app's own static server for host-app:

# start app1 server && server on localhost:8101
yarn start-app-react

# start app2 server && server on localhost:8102
yarn start-app-swiper

# start app3 server && server on localhost:8103
yarn start-app-vue

# start host server and server on localhost:8100
yarn start-host

```
