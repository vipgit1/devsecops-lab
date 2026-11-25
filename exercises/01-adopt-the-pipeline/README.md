## Check your work

You are done when all of these are true:

- [ ] The **security** check ran on your pull request.
- [ ] A comment titled **Snyk security summary** appeared, and it lists findings for dependencies.
- [ ] In the run log, the **Snyk Open Source** step names two vulnerable packages from `sample-app/package.json`.
- [ ] Optional: run the **security** workflow on your default branch (**Actions → security → Run workflow**), then find the alerts under **Security and quality → Code scanning**.

Pull request results appear on the pull request. The Security tab lists the default branch, so alerts show there only after a run on that branch.
