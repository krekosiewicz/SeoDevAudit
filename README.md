# SeoDevAudit

## Description/Motivation

This tool it's designed to produce SEO audits and store historical data. 
Since Google Search Console does not support storing archival data and it's impossible to get report for specific URL (google search console combine all urls audits and makes averege score). 

In the project I'm currently working on, we started to notice significant drops in SEO rankings (mainly CLS)
To at hook resolve the issue, i wrote couple of scripts (bash for scraping, js to reduce dataset, basic nodejs server to serve simple html so it's easier to detect what urls have issues)

Those scripts/solutions are available in ./deprecetedScripts and eventually will be refactored (then removed) to project youre currently looking at.

## Project status, how to use it
The tool is not ready yet, however if you want you can jump to ./deprecetedScripts and use it to produce reports for your website, reports will be stored in the same directory. 
Depend on what settings you will choose you can output html or just json files and then run nodejs.server to see all results in simple table


**prerequisites: you need to have lighthouse CLI installed**

**prepare urls for audit in txt file. as shown in ./deprecetedScripts/config/exampleUrls**

**bash lighthouse-cli.sh ./config/exampleUrls.txt** <- to run cls-audit for mobile

**or**

**bash lighthouse-cli.sh ./config/exampleUrls.txt --html-output** <- to run all audits for desktop, it will also generate html so you can open it in browser

**bash report-scraper.sh <report-dir-name-generated-by-previous-script>** <- it will simplifie/scrap cls audit from lighthouse audit
![img.png](img.png)

**node generateHistoricalReport.js <report-dir-name>/CLS-simplified/** <- it will create/update report.csv

**node server.js** <- it will host simple html so you can sort/filter pages that are problematic. Thanks to know specic url, its much easier to identify SEO issue
![img_1.png](img_1.png)



## What will be included in Beta version



##  Definition of Done (DoD)

### DevOps

- [ ] Placeholder 1
- [ ] Placeholder 2
- [ ] Placeholder 3

### Continuous Integration (CI)

- [ ] Placeholder 1
- [ ] Placeholder 2
- [ ] Placeholder 3

### Server

- [ ] Placeholder 1
- [ ] Placeholder 2
- [ ] Placeholder 3

### Client

- [ ] Placeholder 1
- [ ] Placeholder 2
- [ ] Placeholder 3

### Instruction/Readme

- [ ] Placeholder 1
- [ ] Placeholder 2
- [ ] Placeholder 3


## Future Plans

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a tincidunt orci, quis cursus orci. Vestibulum quis cursus orci.
