// `ratio` is the logo's intrinsic width / height; the software grid shapes each
// tile to it, so wide wordmarks and near-square marks keep their proportions.
// `fullBleed` marks a logo that is a solid block of its own colour, which fills
// its tile edge to edge rather than sitting padded on a plate.
export const SoftwareList = [
  {
    id: '9',
    title: 'ginkgo',
    description: `A scientific workflow orchestrator for data science and bioinformatics, with workflows defined in plain Python`,
    href: 'https://github.com/sanjaynagi/ginkgo',
    logo: '/logos/software/ginkgo.png',
    ratio: 2.09,
  },
  {
    id: '10',
    title: 'tempera',
    description: `A Python package that distills colour from historic paintings into ready-to-use plotting palettes`,
    href: 'https://github.com/sanjaynagi/tempera',
    logo: '/logos/software/tempera.png',
    ratio: 3.04,
  },
  {
    id: '7',
    title: 'AmpSeeker',
    description: `A scalable, reproducible Snakemake pipeline to analyse Illumina amplicon sequencing data`,
    href: 'https://github.com/sanjaynagi/AmpSeeker',
    logo: '/logos/software/ampseeker.png',
    ratio: 1.76,
  },
  {
    id: '6',
    title: 'Selection Atlas',
    description: `A web resource of selection signals in An. gambiae s.l mosquitoes from the Ag1000G project`,
    href: 'https://anopheles-genomic-surveillance.github.io/selection-atlas/',
    logo: '/logos/software/selection-atlas.png',
    ratio: 1.65,
  },
  {
    id: '2',
    title: 'RNA-Seq-Pop',
    description: `A reproducible Snakemake pipeline for RNA-Seq analysis with variant calling and population genomics`,
    href: 'https://github.com/sanjaynagi/rna-seq-pop',
    logo: '/logos/software/rna-seq-pop.png',
    ratio: 2.77,
  },
  {
    id: '3',
    title: 'malariagen_data',
    description: `A Python package to access and analyse data from the Anopheles 1000 genomes project in the cloud`,
    href: 'https://github.com/malariagen/malariagen-data-python',
    logo: '/logos/software/malariagen-data.svg',
    ratio: 3.63,
  },
  {
    id: '4',
    title: 'AnoExpress',
    description: `A Python package for meta-analysis of transcriptomic studies into insecticide resistance in Anopheles`,
    href: 'https://github.com/sanjaynagi/AnoExpress',
    logo: '/logos/software/anoexpress.png',
    ratio: 3.89,
    fullBleed: true,
  },
  {
    id: '5',
    title: 'AnoPrimer',
    description: `A Python package to design primers in Anopheles gambiae and funestus considering genetic variation`,
    href: 'https://github.com/sanjaynagi/AnoPrimer',
    logo: '/logos/software/anoprimer.png',
    ratio: 3.85,
    fullBleed: true,
  },
  {
    id: '8',
    title: 'ancIBD',
    description: `A Python package to identify segments of identity by descent in ancient DNA`,
    href: 'https://github.com/hringbauer/ancIBD',
    logo: '/logos/software/ancibd.png',
    ratio: 1.0,
    fullBleed: true,
  },
];

// Which logos share a row on the software wall, top to bottom.
//
// Row height follows from the membership: a row's tiles divide the width in
// proportion to their shapes, so a row holding fewer (or narrower) logos is a
// taller row, and its logos are drawn larger. Pairing ginkgo with tempera alone
// is what makes those two the largest on the page. Anything not listed here
// falls into a final row of its own.
export const SoftwareRows = [
  ['ginkgo', 'tempera'],
  ['AmpSeeker', 'malariagen_data'],
  ['Selection Atlas', 'RNA-Seq-Pop'],
  ['AnoExpress'],
  ['AnoPrimer', 'ancIBD'],
];
