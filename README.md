# Polaris GitHub Action

The Polaris GitHub Action provides a simple approach for adding Polaris SAST scans to your GitHub workflows. The
action has the ability to run a scan, and provide feedback to developers as part of their pull request. 

## Quick Start

To get started, you can include the template in your pipelines by referencing it as a GitHub Action.
Replace `<version>` with the version of the template you would like to use. You can use `master` to reference the latest version,
but be advised that this is dangerous as it may introduce changes that disrupt your pipeline.

To start using this action, add the following step to your existing GitHub workflow. This enables assumes the specified
Coverity credentials and some reasonable options, which are described in depth in following sections:

```
name: polaris

on:
  push:
    branches: [master, main]
  pull_request:
    branches: [master, main]

jobs:
  ubuntu:
    name: polaris / ubuntu
    runs-on: ubuntu-latest

    env:
      SECURITY_GATE_FILTERS: '{ "severity": ["High", "Medium"] }'

    steps:
      - name: Clone repo
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Synopsys Polaris (Full Analysis)
        uses: karankohli-cf/polaris-report-action@master
        with:
          polaris-url: ${{ secrets.POLARIS_URL }}
          polaris-access-token: ${{ secrets.POLARIS_ACCESS_TOKEN }}
          debug: true
          generate-sarif: true
          polaris-command: analyze -w
          # Include the security gate filters - what should cause a policy failure
          security-gate-filters: ${{ env.SECURITY_GATE_FILTERS }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
```