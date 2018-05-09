---
title:  "Stats Bot"
description: "Slack bot for extracting legacy giving data from Elasticsearch"
company: "Evident Legal"
start: 2016-12-01
end: 2017-01-01
tags: ["NodeJS", "TypeScript", "ES6", "Slack API", "AWS ECS"]
weight: 4
---
After building the distiller, we needed a simple method for creating a report before the visual dashboard was implemented. I created a Slack integration that generates a CSV of the giving data, by flattening the schema in Elasticsearch, so we could see each gift individually. The resulting CSV is then encrypted and uploaded into Slack. I built the app using NodeJS wrapped with Typescript for increased tooling. It's hosted using AWS elastic container service.