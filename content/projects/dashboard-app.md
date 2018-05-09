---
title:  "Dashboard App"
description: "Full-stack development of dashboard app for Evident Legal's will writing scheme"
company: "Evident Legal"
start: 2016-01-01
end: 2016-06-01
image: "/img/projects/dashboard-app.png"
tags: ["HTML", "CSS", "LESS", "AngularJS", "NodeJS", "Git", "Docker", "CircleCI", "AWS ECS"]
weight: 2
---
I created a data visualisation tool for a will writing scheme we were launching, at Evident Legal. It offered valuable insight to stakeholders and the marketing team, showing various key performance indicators, so they could make informed decisions on the scheme's success.

It was also used to demonstrate our data collection capabilities to charities in the acquisition stage. This helped us sign six leading charities with the scheme set to generate £500,000 in the first year.

The visual output could be filtered by date range and split by daily, weekly and monthly intervals, so we could track the progress of the scheme. It could also be filtered by channel partner, using a SalesForce integration to view data form channels users. I also included the ability to exclude certain users from the report, if they were used for testing or appeared to be spam. I secured the app using Auth0, which offered a simple token based authorisation with complex management tools and the ability to perform simple role based permissions and resource lockdown.

I built the app using NodeJS on the back-end and AngularJS on the front, allowing me to separate the concerns of the project. DevOps was handled with Docker, Github and CircleCI, for a seamless deployment pipeline and production is handled using AWS Elastic Container Service.