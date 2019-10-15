const path = require('path');
const { execSync, exec } = require('child_process');

const isStaging = process.argv.includes('--staging');
const cliLocation = require.resolve('codesandbox');
const URL = `https://codesandbox.${isStaging ? `stream` : `io`}/api/graphql`;

const token = execSync(`node ${cliLocation} token`, {
  env: {
    CODESANDBOX_NODE_ENV: isStaging ? 'development' : 'production',
  },
  cwd: process.cwd(),
})
  .toString()
  .trim();

console.log(`TOKEN: ${token}`);
console.log(`URL: ${URL}`);
console.log(path.resolve());
exec(
  `apollo schema:download --header="Authorization: Bearer ${token}" --endpoint=${URL} graphql-schema.json && apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --includes=src/app/overmind/**/*.ts --tagName=gql --no-addTypename --globalTypesFile=src/app/overmind/graphql-global-types.ts graphql-types`,
  (error, stdout) => {
    console.log(stdout);
  }
);
