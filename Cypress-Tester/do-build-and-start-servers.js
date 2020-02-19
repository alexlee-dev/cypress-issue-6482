// ! Will do a React Build and start the server for Main-Server (http://localhost:5000) and Outside-Service (http://localhost:6000)

const { exec } = require("child_process");

const execute = command =>
  new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }

      resolve(stdout);
    });
  });

const main = async () => {
  // Do React Build
  console.log("Building React Application");
  await execute("cd .. && cd React-Application && npm run build");
  console.log("React Application built successfully!");

  // Start Main-Server
  console.log("Starting Main Server");
  execute("cd .. && cd Main-Server && npm start");
  console.log("Main Server listening on Port 5000");

  // Start Outside-Service
  console.log("Starting Outside Service");
  execute("cd .. && cd Outside-Service && npm start");
  console.log("Main Server listening on Port 6000");
};

main();
