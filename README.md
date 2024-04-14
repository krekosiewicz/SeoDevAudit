# SeoDevAudit

## Description/Motivation

This tool is designed to produce SEO audits and store historical data. Since Google Search Console does not support storing archival data and it's impossible to get a report for a specific URL (Google Search Console combines all URLs audits and makes average scores), this tool can help you with that.

In the project I'm currently working on, we started to notice significant drops in SEO rankings (mainly CLS). To address the issue, I wrote a couple of scripts (bash for scraping, js to reduce the dataset, basic Node.js server to serve simple HTML so it's easier to detect what URLs have issues).

Those scripts/solutions are available in `./deprecatedScripts` and eventually will be refactored (then removed) to the project you're currently looking at.

## How to use a demo

The beta version of tool is under production, however, if you want to check main idea, you can jump to `./deprecatedScripts` and use it to produce reports for your website. The reports will be stored in the same directory. Depending on what settings you choose, you can output HTML or just JSON files and then run the Node.js server to see all results in a simple table.

### **Prerequisites:**

**npm install -g lighthouse**

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
