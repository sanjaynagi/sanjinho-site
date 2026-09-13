import React from 'react';

// Matches a genus (spelled out or abbreviated) followed by a lowercase
// species epithet, and an optional trailing "s.l." / "s.s." qualifier.
const SPECIES_PATTERN =
  /\b(?:Anopheles|An\.|Aedes|Ae\.|Culex|Plasmodium)\s+[a-z]+(?:\s+s\.\s?l\.?|\s+s\.\s?s\.?)?/g;

// Splits a publication/poster title into text and <em> nodes so species
// names (e.g. "Anopheles gambiae", "An. funestus s.l.") render italicised.
export const italicizeSpecies = (title) => {
  const nodes = [];
  let lastIndex = 0;
  let match;

  SPECIES_PATTERN.lastIndex = 0;
  while ((match = SPECIES_PATTERN.exec(title)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(title.slice(lastIndex, match.index));
    }
    nodes.push(<em key={match.index}>{match[0]}</em>);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < title.length) {
    nodes.push(title.slice(lastIndex));
  }

  return nodes;
};
