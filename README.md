# typescript-issue-export-function-prototype

typescript@3.5.1 generates wrong d.ts for functions whose `prototype` property is explicitly set.

To reproduce this issue:

```bash
yarn
npx tsc
# then you can compare: dist/exception.d.ts and src/exception.ts
```
