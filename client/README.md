## Build and deploy the client

The client is written with the view framework React created by facebook, the routing in the application 
is handled by a library named react-router. The client is built with a Fux architecture. And everything 
is put together with npm (dependency management) and gulp as the build tool.

Much of the work is done for you. If you choose to modify the client then just open the /app directory 
and start coding as long as the vagrant machine is up changes trigger a new build on save.

Just run:
$: vagrant up

When you are done with your modifications move all the content in the build folder to your resource 
(static file server) directory and restart the backend with vagrant reload.

Java: /src/main/resources/client
Node: /client

If you mess anything up, just download the original files and replace the content in the resource directory.

#### Links:
React: https://facebook.github.io/react/
React-router: https://github.com/rackt/react-router
Flux: https://facebook.github.io/flux/
