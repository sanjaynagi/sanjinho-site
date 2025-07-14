---
title: "AnoKin: Using genomics to estimate dispersal in malaria mosquitoes"
shorttitle: "AnoKin: a close-kin mark-recapture study"
slug: anokin-ckmr-dispersal
date: 03/05/2025
thumbnail: '/thumbnails/dispersal.png'
tag: ckmr, dispersal
canonicalUrl: 'https://sanjaycnagi.com/blog/2025-03-05-anokin-ckmr-dispersal/'
---

![anokin logo](/blog/anokin-logo.png)

---

Despite hundreds of years of research, we do not understand how far the malaria mosquito can fly.

This is challenging for many reasons. How can we design a cluster randomised controlled trial (cRCT), without knowing if mosquitoes will fly from a control cluster into an intervention cluster? How can we model the spread of gene drives without knowing how far a single mosquito could transport the drive? 

---

Last year, I was awarded some funding from the [Liverpool School of Tropical Medicine](http://lstmed.ac.uk/) to work on this problem, as part of their [Directors Catalyst Fund](https://www.lstmed.ac.uk/study/research-degrees/director%E2%80%99s-catalyst-fund-0). The idea was to use a genomic approach known as close-kin mark-recapture (CKMR). The method is analogous to traditional mark-release recapture, except rather than marking individuals and releasing them, we use kin to mark each other. We sequence mosquitoes, infer their kinship, and use the distances between kin to estimate how far they disperse. It was first developed in fisheries science, and has many applications; it can be used to investigate dispersal, but also population size as well as survivorship. 

For the last couple of weeks, I have been based in Kisumu, western Kenya, working with Dr Eric Ochomo's team and Brian Polo of the [Kenya Medical Research Institute (KEMRI)](https://www.kemri.go.ke/) to set up the sampling. We are working at Lake Kanyaboli, a site of high malaria transmission that provides a stable habitat for the malaria mosquito *Anopheles funestus* throughout the year. Everything so far is going so well - I am really fortunate to be working with a really awesome team! 😊

#### The AnoKin site

In the spirit of transparency, part of my proposal was to set up a [public-facing website for AnoKin](https://sanjaynagi.github.io/anokin/). The site contains some background to the project, some protocols, and important links for the field team.

In ultimate nerdiness 😎, I've set up a [daily GitHub actions](https://github.com/sanjaynagi/anokin/blob/main/.github/workflows/docs-auto.yml) which downloads the sampling and morphological ID data from the ODK server where we store data. It then runs a jupyter notebook to perform some analysis, and re-builds and re-publishes the [webpage](https://sanjaynagi.github.io/anokin/). 

So far, the sampling is going really well. Numbers are relatively low for Lake Kanyaboli, but this may actually be a positive - sampled mosquitos are probably more likely to be related. Follow along on here and the AnoKin website, where I'll post regular updates as our project attempts to yield new insights into mosquito dispersal.