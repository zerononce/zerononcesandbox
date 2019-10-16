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
exec(
  `apollo schema:download --header="Authorization: Bearer ${token}" --endpoint=${URL} graphql-schema.json && apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --includes=src/app/overmind/**/*.ts --tagName=gql --no-addTypename --globalTypesFile=src/app/overmind/graphql-global-types.ts graphql-types`,
  (error, stdout, stderror) => {
    // eslint-disable-next-line
    console.log(stdout);
    // eslint-disable-next-line
    console.log(stderror);
  }
);
