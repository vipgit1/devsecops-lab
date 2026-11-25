# Exercise 2: Fix a vulnerable dependency

**Goal:** use the scan result to upgrade two vulnerable packages, and see the findings drop on a pull request.

**Time:** about 25 minutes.

**Before you start:** finish Exercise 1. Your fork must already have the `security` workflow, the `SNYK_TOKEN` secret, and a recent template commit ID in the caller file. This exercise reuses the sample app from Exercise 1 at `exercises/01-adopt-the-pipeline/sample-app/`.

You also need Node.js and npm on your computer, or a GitHub Codespace (open your fork, click **Code → Codespaces → Create codespace**; check your account's free allowance first).

## Ground rules

- The sample app is deliberately vulnerable. Never deploy it.
- Work on a new branch in your fork, and open the pull request inside your fork.

## Steps

1. **Write down your starting point.** Open the PR comment or the run log from Exercise 1. Note how many Open Source findings were reported, and the names of the vulnerable packages.
2. **Find the fix.** In the run log, expand the **Snyk Open Source** step. Each finding says which version fixes it ("This issue was fixed in: ..."). Write down the version for `lodash` and for `minimist`.
3. **Create a branch** in your fork called `fix-dependencies`.
4. **Upgrade the packages.** In a terminal inside your fork's folder:
   ```
   cd exercises/01-adopt-the-pipeline/sample-app
   npm install lodash@latest minimist@latest
   ```
   Check with `git status` that **both** `package.json` and `package-lock.json` changed. Snyk reads the lockfile, so it must be committed too.
5. **Commit and push** the branch, then **open a pull request** into your fork's default branch.
6. **Wait about a minute** for the `security` check, then read the PR.

## Check your work

You are done when all of these are true:

- [ ] The PR changes exactly two files: `package.json` and `package-lock.json`.
- [ ] The **Snyk security summary** comment has a section for the files changed by this PR. Its Open Source row shows far fewer findings than your starting point, ideally none at high or above.
- [ ] In the run log, the **Snyk Open Source** step no longer lists `lodash` or `minimist` as vulnerable, or lists far fewer issues for them.

Snyk's database changes over time, so a low-severity issue may remain. If something remains, read its "fixed in" line and decide whether a further upgrade is worth it.

## Questions to answer

1. Why must the lockfile be committed along with `package.json`?
2. What does "fixed in" tell you, and where did you find it?
3. What would be different if the fix needed a new **major** version of a package?
4. The PR comment shows two sections. Which one reflects your change, and why?

## Notes for the instructor

- As of November 2026, the newest versions I found were `lodash` 4.18.1 and `minimist` 1.2.8. I checked this with `npm audit`, which reported 2 critical issues for the starting versions (`lodash` 4.17.4, `minimist` 1.2.0) and 0 after the upgrade. I have not run this through Snyk, so Snyk's numbers may differ slightly.
- The "files changed" section of the PR comment needs a template commit from after that feature was added. Check that the commit ID you give learners includes it.
- `npm install ...@latest` rewrites the version ranges in `package.json` with a leading `^`. That is expected.
