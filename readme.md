## Bugs

* _Running `npm test` occasionally adds import statement `import { test } from 'media-typer';` above the import for `AgeCalculator` in the test file causing tests to not run correctly. Simply delete the line and run tests if they are not working correctly. This could be an issue from my side of things._