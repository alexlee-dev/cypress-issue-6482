// ! Will install all packages

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
  // Install Cypress-Tester modules
  console.log("Installing modules for Cypress-Tester");
  await execute("npm install");
  console.log("Cypress-Tester modules installed.");

  // Install Main-Server modules
  console.log("Installing modules for Main-Server");
  await execute("cd .. && cd Main-Server && npm install");
  console.log("Main-Server modules installed.");

  // Install Outside-Service modules
  console.log("Installing modules for Outside-Service");
  await execute("cd .. && cd Outside-Service && npm install");
  console.log("Outside-Service modules installed.");

  // Install React-Application modules
  console.log("Installing modules for React-Application");
  await execute("cd .. && cd React-Application && npm install");
  console.log("React-Application modules installed.");
};

main();
