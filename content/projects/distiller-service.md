---
title:  "Distiller Service"
description: "Back-end service for processing Will interview data that allowed us to report legacy giving data to charities"
company: "Evident Legal"
start: 2016-09-01
end: 2017-01-01
image: "/img/projects/distiller.png"
tags: ["Java", "ElasticSearch", "MySQL"]
weight: 3
---
After building the dashboard app, working with the charities to understand their needs, I realised we needed to report with a higher level of granularity. Charities wanted to know exact values for legacy gifts to see if the scheme was making a good return on investment.

I took a ground up approach spec’ing, designing and building a system to deliver this data in real-time. I needed the system to be resilient and stable so I opted for Java and Elasticsearch. The service runs against a replication database in our Rackspace ecosystem, with Elasticsearch hosted in an AWS EC2 instance.

To reduce load on the system the service runs in a 5 minutes digest cycle. If the schema in Elastic needs changing, Distiller can digest the entire dataset in monthly chunks, further reducing memory usage, cutting server expense.