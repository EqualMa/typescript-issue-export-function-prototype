# typescript-issue-export-function-prototype

typescript@3.5.1 generates wrong d.ts for functions whose `prototype` property is explicitly set.

To reproduce this issue:

```bash
yarn
npx tsc
# then you can compare: dist/exception.d.ts and src/exception.ts

# switch to branch ts-3.5.3
# re-install dependencies
yarn
# re-compile
npx tsc
# then you will find dist/exception.d.ts is right
```
