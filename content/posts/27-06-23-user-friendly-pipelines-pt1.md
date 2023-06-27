---
title: "Ultra user-friendly bioinformatics pipelines pt.1"
slug: "Ultra-user-friendly-bioinformatics-pipelines-pt1"
date: 06/25/2023
thumbnail: '/thumbnails/snakemake.png'
tag: snakemake
canonicalUrl: 'https://sanjaycnagi.com/blog/ultra-user-friendly-bioinformatics-pipelines-pt1/'
---

Workflow managers such as Snakemake and Nextflow do wonderful jobs at helping us to build reproducible, user-friendly computational pipelines. 

Typically, these pipelines will run command line tools or scripts, performing some processing and analysis on input files, and writing data, tables and figures to results directories for the user to explore.In general though, and particularly for those who are less familiar with computational biology such as molecular scientists or medical professionals, the results of these genomic analyses can be challenging to interpret. To compound that, bioinformatic pipelines rarely have sufficient documention, if at all. 

In this post, I wanted to share a new interesting approach I've stumbled upon for presenting the results of computational workflows :) 

### Results web-books with Papermill, Notebooks, and Jupyter Book

The approach involves the combination of a few semi-recent developments - in particular - [Papermill](https://github.com/nteract/papermill) and [Jupyter Book](https://jupyterbook.org/en/stable/intro.html).  

Papermill is a tool which allows Jupyter Notebooks to be parameterised and run from the command line - i.e. when we run the notebook, we can inject some parameters/options/arguments. Surprisingly, standard Jupyter Notebooks do not support this - they are intended to be run interactively. This means we can use Jupyter Notebooks in Snakemake/Nextflow pipelines as python scripts.  

<br></br>
<details>
    <summary><em><b>What is a Jupyter Notebook?</b></em></summary>
  
    A Jupyter Notebook is an interactive computing environment that allows you to create and share documents containing live code, visualizations, and explanatory text. For those familiar with R, it is similar to Rmarkdown. It provides a web-based interface where you can write and execute code in different programming languages, typically Python, but also R and more. Jupyter Notebooks enable data analysis, experimentation, and collaboration in a convenient and flexible manner.
</details>
<br></br>

This is useful for a few reasons. Many people (including myself) develop and debug in a Jupyter Notebook, meaning there is no need to convert to and from a python script. It also means that if someone would like to extract a small part of the workflow, its easy to pull out a single notebook and begin analysing their own data. 

But the coolest thing comes when you integrate Jupyter Book. Jupyter Book is an awesome tool which builds html static web-pages from a collection of Jupyter Notebooks, a table of contents, and a configuration file. The Jupyter Notebooks can contain executed code with tables and figures, as well as markdown text. This means we can include our results notebooks for each step of the analysis, with clear descriptions on what the analysis does, and how to interpret the results! Interactive plots can be generated using the awesome plotly and bokeh, giving end-users more opportunity to explore and gain insights into the data, within an environment which feels familiar to us all - a web page!

I and collaborators at UVRI (Trevor Mugoya and Edward Lukyamezi) have recently been exploring this idea in [AmpSeeker](https://github.com/sanjaynagi/AmpSeeker), a workflow we are developing for amplicon sequencing data analysis of any organism.

<br></br>

<figure>
  <img src="/public/results-book.gif" alt="a gif of the AmpSeeker results book"/><br></br>
    <figcaption><center><em>An example of the (draft) AmpSeeker results book. If you like Hindi music or Anime, I'd recommend checking out the user guide placeholder, or the film that its from :) </em></center></figcaption>
</figure>
<br></br>

I hope that others might find this a useful way of working. Exciting as it is, it now means I have the *inviting* task of converting [rna-seq-pop](https://github.com/sanjaynagi/rna-seq-pop) to this way of workflow infrastructure! 

In part 2, we will discuss GUI's for Snakemake workflows, but I'll first need to get that functioning!


```python

```
