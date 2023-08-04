# SeoDevAudit

## sidenote 
some of informations listed below are temprorary and might be deleted in the future.
At the moment I'm looking for the job/project. My side-intention is share as many details of how I work, so if you're potential employer you get know :)

## Description/Motivation

This tool is designed to produce SEO audits and store historical data. Since Google Search Console does not support storing archival data and it's impossible to get a report for a specific URL (Google Search Console combines all URLs audits and makes average scores), this tool can help you with that.

In the project I'm currently working on, we started to notice significant drops in SEO rankings (mainly CLS). To address the issue, I wrote a couple of scripts (bash for scraping, js to reduce the dataset, basic Node.js server to serve simple HTML so it's easier to detect what URLs have issues).

Those scripts/solutions are available in `./deprecatedScripts` and eventually will be refactored (then removed) to the project you're currently looking at.

## How to use a demo

The beta version of tool is under production, however, if you want to check main idea, you can jump to `./deprecatedScripts` and use it to produce reports for your website. The reports will be stored in the same directory. Depending on what settings you choose, you can output HTML or just JSON files and then run the Node.js server to see all results in a simple table.

### **Prerequisites:**

**you need to have Lighthouse CLI installed**

**Prepare URLs for audit in a text file, as shown in `./deprecatedScripts/config/exampleUrls`**

**Run CLS-audit for mobile:**

```bash

bash lighthouse-cli.sh ./config/exampleUrls.txt

```

**Or run all audits for desktop (also generates HTML):**

```bash

bash lighthouse-cli.sh ./config/exampleUrls.txt --html-output

```

**Simplify/scrap CLS audit from Lighthouse audit:**

```bash

bash report-scraper.sh <report-dir-name-generated-by-previous-script>

```

![img.png](img.png)

**Create/update report.csv:**

```bash

node generateHistoricalReport.js <report-dir-name>/CLS-simplified/

```

**Host simple HTML so you can sort/filter pages that are problematic:**

```bash

node server.js

```

![img_1.png](img_1.png)

## Project status

_The basic project setup/configuration is done, database/backend/frontend works in docker environment, they are able to communicate each other_

_upcoming changes: improve docker configuration, improve of project environments, increase safeness, prepare frontend layout and create form for lighthouse config, write state services in backend with rxjs_

## What will be included in the Beta version

The Beta version will feature a clickable demo accessible to everyone, hosted on a private server.

### Functionalities
* Creation and saving of Lighthouse configurations
* List of saved configurations with selection capability
* Creation/import URL lists for which audits are to be conducted
* List of conducted audits
* Ability to download audits
* If the audit contains an HTML file, the ability to view it in a separate tab
* access to historical reports


## Techstack

### devops/maintanance
* yarn package manager
* docker / docker-compose
* mongodb

### Frontend
* nextjs 13 with typescript, eslint
* jest according with @testing-library/react
* react-hook-form
* recoil
* mui
* selenium or testcafe for e2e (not decided)
* something for seo - build in metadata, maybe json-ld (not decided)

### Backend
* nestjs with typescript, basic eslint
* rxjs
* mongodb

## Definition of Done (DoD) (WIP)

### Setup

- [ ] Managment
    - [ ] setup simple kanban/trello board for better task managment
- [ ] Frontend
  - [ ] prepare figma views for mobile/desktop, define rules for full responsivness
    - [ ] create basic layout
  - [x] setup project 
  - [x] setup docker image
  - [x] setup initial service for api
  - [x] setup recoil
  - [x] setup unit tests
  - [ ] setup e2e test
  - [ ] mui
    - [ ] ensure if styles are properly ssr
    - [ ] optional remove mui as I dont like pre-styled-component libraries :d
- [ ] Backend
  - [x] setup basic project structure
  - [x] setup basic restful api
  - [x] setup basic mongodb connection
  - [ ] take care of proper storing credensials/environments
  - [ ] plan architecture 
- [ ] Devops
  - [ ] setup remote hosting, migrate services to it
    - [ ] setup working demo
  - [x] setup basic dockerization
  - [ ] setup CI
    - [ ] add stages such as unit test 
    - [ ] e2e tests
    - [ ] integration tests
    - [ ] deploy, tagging
    

## Future Plans

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a tincidunt orci, quis cursus orci. Vestibulum quis cursus orci.
