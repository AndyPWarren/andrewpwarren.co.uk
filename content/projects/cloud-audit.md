---
title:  "File Sharing Audit System"
description: "A system for reporting key metrics about our file sharing service"
company: "SpectraKey"
start: 2017-07-01
end: 2017-08-01
tags: ["NodeJS", "Prometheus", "Kubernetes"]
---
I developed a system for reporting storage metrics from our NextCloud file sharing deployment, enabling us to effectively manage billing and storage limits and manage the health of the deployment. I built a NodeJS application which polled the storage directory returning a format which Prometheus could scrape. We could then query the data set for a particular group's storage usage, using Grafana to present the data visually. 
