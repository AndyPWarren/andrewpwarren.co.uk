---
title:  "Conveyancing Quoter"
description: "System to retrieve a conveyancing quote"
company: "Evident Legal/JS Law"
start: 2016-06-01
end: 2016-09-01
tags: ["HTML", "CSS", "KnockoutJS", "AWS S3"]
published: false
weight: 7
---
I was approached by one of the conveyancing companies in the group. They thought more conveyancing leads could be generated online by driving PPC traffic to a conveyancing quote engine. They needed a simple system that allowed them to edit the fee scales and a UI where customers could retrieve a quote. I used tools non-developers are familiar with to create a CSV of hashed quote key/value pairs, which was converted to JSON for the frontend to consume. The UI gives the customer a simplified visual fee break down and emails the full breakdown, for their record. Designed to be plugged into any site, I chose AWS S3 for its simplicity, reliability and ease of deployment.