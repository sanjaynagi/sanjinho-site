---
title: "Ultra user-friendly bioinformatics pipelines pt.1"
slug: "Ultra-user-friendly-bioinformatics-pipelines-pt1"
date: 06/25/2023
thumbnail: '/thumbnails/snakemake.png'
tag: snakemake
canonicalUrl: 'https://sanjaycnagi.com/blog/ultra-user-friendly-bioinformatics-pipelines-pt1/'
---

Workflow managers such as [Snakemake](https://snakemake.github.io/) and [Nextflow](https://www.nextflow.io/) are wonderful tools - they allow us to build complex pipelines to reproducibly analyse genomic data with relative ease. These workflows run command line tools or scripts, performing some processing and analysis on input data, and writing outputs, tables and figures to results directories for the user to explore. Interpreting these genomic analyses, however, can be challenging, particularly for those who are less familiar with computational biology. To compound that, bioinformatic pipelines rarely have sufficient documentation, if at all. 

In this post, I wanted to share an interesting approach I've been using to present the results of computational workflows :) 

**Results web-books with Papermill, Notebooks, and Jupyter Book**

The approach involves the combination of a few semi-recent developments - in particular - [Papermill](https://github.com/nteract/papermill) and [Jupyter Book](https://jupyterbook.org/en/stable/intro.html), combined with Jupyter Notebooks.  

<details>
    <summary><em><b>What is a Jupyter Notebook?</b></em></summary>
  
    A Jupyter Notebook is an interactive computing environment that allows you to create and share documents containing live code, visualizations, and explanatory text. For those familiar with R, it is similar to R Markdown. It provides a web-based interface where you can write and execute code, typically Python. Jupyter Notebooks enable data analysis, experimentation, and collaboration in a convenient and flexible manner.
</details>

Papermill is a tool which allows Jupyter Notebooks to be parameterised and run from the command line - when we run the notebook, we can pass through some parameters. Surprisingly, standard Jupyter Notebooks do not support this - they are intended to be run interactively, cell by cell. Papermill means we can use Jupyter Notebooks in workflows directly like python scripts, and store the executed notebooks as outputs.

This is useful for a few reasons... 

Many people develop and debug in a Jupyter Notebook, and so this approach removes the need to convert to and from python scripts, saving valuable developer time. It also means that if you would like to perform a specific part of the analysis, it's easy to pull out a single notebook and apply it to your data. 

But the coolest thing comes when you integrate Jupyter Book. Jupyter Book is an awesome tool which builds html web pages from a collection of Jupyter Notebooks, a table of contents, and a configuration file. It's now widely used for building software documentation, such as in [malariagen_data](https://malariagen.github.io/vector-data/ag3/api.html), or the [Jupyter Book docs](https://jupyterbook.org/en/stable/start/example-book.html) themselves! Importantly, the Jupyter Notebooks can contain executed code with tables and figures, as well as markdown text. This means we can include our results notebooks for each step of the analysis, with clear descriptions on what the analysis does, and how to interpret the results! Interactive plots can be generated using the powerful plotly and bokeh libraries, giving end-users the chance to dive deep into the data, all within the familiar realm of a web page.

I and our collaborators at UVRI, Trevor Mugoya and Edward Lukyamezi, have recently been exploring this idea in [AmpSeeker](https://github.com/sanjaynagi/AmpSeeker), a workflow we are developing for amplicon sequencing data. I must say, it feels really nice to be able to browse all the analyses in one place. An example of the results book is shown below. 

<figure>
    <div align="center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mt-AZeYz50k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div> 
    <figcaption><em>An example of the (draft) AmpSeeker results book. If you like Hindi music or Anime, I'd recommend checking out the user guide placeholder, or the film that it's from :) </em></figcaption>
</figure>

I hope that others might find this a useful approach to building workflows. Exciting as it is, it now means I have the task of converting [rna-seq-pop](https://github.com/sanjaynagi/rna-seq-pop) to this way of workflow infrastructure! Wish me luck!

Stay tuned for part 2, where we delve into the mystical world of GUIs for Snakemake workflows.
