---
title: Parallelising freebayes with snakemake
shorttitle: Parallelising freebayes with snakemake
slug: parallelising-freebayes-with-snakemake
date: 11/01/2021
thumbnail: '/thumbnails/snakemake.png'
tag: genetics
canonicalUrl: 'https://sanjaycnagi.com/blog/2021-01-11-freebayes-parallel/'
---

[`freebayes`](https://github.com/freebayes/freebayes) is a bayesian haplotype-based variant caller, used widely in genomics. As with many variant callers, it is not readily parallelised, but can be done so by splitting the genome into smaller chunks, calling them separately, and subsequently combining the chunks together.

A wrapper for freebayes, [`freebayes-parallel`](https://github.com/freebayes/freebayes/blob/master/scripts/freebayes-parallel), does exactly this, making use of `gnu-parallel`. However, this approach has a major limitation:

* When a chunk is completed, that cpu core will not move onto the next region until all cores have completed their respective chunk. This is particularly problematic in regions of variable coverage, and so one can attempt to split the genome into regions of roughly equal coverage. Unfortunately, this still results in many cores being unused for substantial periods of time.

I was implementing a `freebayes` variant calling step in a snakemake RNA-Sequencing pipeline I was writing (more on this later), and wanted to parallelise freebayes, without the above limitation. 

To do so, we can write a snakemake rule (below) which runs an [R script](https://github.com/sanjaynagi/rna-seq-ir/blob/master/workflow/scripts/GenerateFreebayesParams.R) to read in the genome index (.fai) file, and output multiple bed files, breaking the genome into chunks of equal size. By using an extra snakemake wildcard, the index of each genome chunk, we can produce, and supply freebayes with different bed files. Finally, after concatenating the vcfs with `bcftools concat` it is also important to stream the output through `vcfuniq`, to ensure there are no duplicate calls at the region overlaps. 

The benefit of this, is that snakemake will automatically run the next job when each chunk is complete, reducing overall computation time as compared with `freebayes-parallel`. Importantly, it also allows us to perform joint, multi-sample calling, which is one of the main benefits of using freebayes in the first place. 


```python
# Read in the desired number of genome chunks from the config.yaml, and arange a sequence 1-n. 
chunks = np.arange(1, config['chunks'])

# Note - in this case the script also produces some other files for Freebayes
rule GenerateFreebayesParams:
    input:
        ref = config['ref']['genome'],
        index = config['ref']['genome'] + ".fai",
        bams = expand("resources/alignments/{sample}.bam", sample=samples)
    output:
        bamlist = "resources/bam.list",
        pops = "resources/populations.tsv",
        regions = expand("resources/regions/genome.{chrom}.region.{i}.bed", chrom=config['chroms'], i = chunks) # bed files 
    log:
        "logs/GenerateFreebayesParams.log"
    params:
        metadata = config['samples'],
        chroms = config['chroms'],
        chunks = config['chunks']
    conda:
        "../envs/diffsnps.yaml"
    script:
        "../scripts/GenerateFreebayesParams.R"
```

*Update - 09/03/2021 - In the beautiful nature of open source software development, I have now written a parallelisation section in the [freebayes documentation](https://github.com/freebayes/freebayes) :)*

I'll leave you with a song I've been enjoying recently. Happy variant calling.

<iframe width="560" height="315" src="https://www.youtube.com/embed/1fBEEANitDY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

