---
title: "Ultra user-friendly bioinformatics pipelines pt.1"
slug: "Ultra-user-friendly-bioinformatics-pipelines-pt1"
date: 06/25/2023
thumbnail: '/thumbnails/snakemake.png'
tag: snakemake
canonicalUrl: 'https://sanjaycnagi.com/blog/ultra-user-friendly-bioinformatics-pipelines-pt1/'
---

Workflow managers such as Snakemake and Nextflow are wonderful tools - they allow us to build complex pipelines for processing and analysing genomic data with relative ease.

These pipelines run command line tools or scripts, performing some processing and analysis on input files, and writing data, tables and figures to results directories for the user to explore. In general though, and particularly for those who are less familiar with computational biology such as molecular scientists or medical professionals, the interpreting these genomic analyses can be challenging. To compound that, bioinformatic pipelines rarely have sufficient documention, if at all. 

In this post, I wanted to share a new interesting approach I've stumbled upon for presenting the results of computational workflows :) 

### Results web-books with Papermill, Notebooks, and Jupyter Book

The approach involves the combination of a few semi-recent developments - in particular - [Papermill](https://github.com/nteract/papermill) and [Jupyter Book](https://jupyterbook.org/en/stable/intro.html), combined with Jupyter Notebooks.  

<br></br>
<details>
    <summary><em><b>What is a Jupyter Notebook?</b></em></summary>
  
    It's like a playground for nerds!
</details>

<details>
    <summary><em><b>mmmm, what are they really?</b></em></summary>
  
    Well, a Jupyter Notebook is an interactive computing environment that allows you to create and share documents containing live code, visualizations, and explanatory text. For those familiar with R, it is similar to Rmarkdown. It provides a web-based interface where you can write and execute code in different programming languages, typically Python, but also R and more. Jupyter Notebooks enable data analysis, experimentation, and collaboration in a convenient and flexible manner.
</details>
<br></br>

Papermill is a tool which allows Jupyter Notebooks to be parameterised and run from the command line - i.e. when we run the notebook, we can inject some parameters/options/arguments. Surprisingly, standard Jupyter Notebooks do not support this - they are intended to be run interactively. This means we can use Jupyter Notebooks in workflows directly like python scripts.  

This is useful for a few reasons. Many people (including myself) develop and debug in a Jupyter Notebook, meaning there is no need to convert to and from a python script. It also means that if someone would like to extract a small part of the workflow, its easy to pull out a single notebook and begin analysing their own data. 

But the coolest thing comes when you integrate Jupyter Book. Jupyter Book is an awesome tool which builds html static web-pages from a collection of Jupyter Notebooks, a table of contents, and a configuration file. It's now widely used for building software documentation, such as in [malariagen_data](https://malariagen.github.io/vector-data/ag3/api.html), or the Jupyter Book [docs](https://jupyterbook.org/en/stable/start/example-book.html) themselves!

Importantly, the Jupyter Notebooks can contain executed code with tables and figures, as well as markdown text. This means we can include our results notebooks for each step of the analysis, with clear descriptions on what the analysis does, and how to interpret the results! Interactive plots can be generated using the powerful plotly and bokeh libraries, giving end-users the chance to dive deep into the data, all within the familiar realm of a web page.

I and our collaborators at UVRI, Trevor Mugoya and Edward Lukyamezi, have recently been exploring this idea in [AmpSeeker](https://github.com/sanjaynagi/AmpSeeker), a workflow we are developing for amplicon sequencing data. An example of the results book is shown below.

<br></br>

<figure>
  <img src="/results-book.gif" alt="a gif of the AmpSeeker results book"/><br></br>
    <figcaption><center><em>An example of the (draft) AmpSeeker results book. If you like Hindi music or Anime, I'd recommend checking out the user guide placeholder, or the film that its from :) </em></center></figcaption>
</figure>
<br></br>

I hope that others might find this a useful approach to building workflows. Exciting as it is, it now means I have the task of converting [rna-seq-pop](https://github.com/sanjaynagi/rna-seq-pop) to this wonderful way of workflow infrastructure! Wish me luck!

Stay tuned for part 2, where we delve into the mystical world of GUIs for Snakemake workflows.