import React from "react";
import { SimpleGrid } from "@chakra-ui/layout";

import PartyCard from "./partyCard/PartyCard";

const PARTY_INFO = [
  {
    name: "Liberal Party",
    color: "#BC0817",
    endColor: "#FFDDE1",
    theme: "red",
    picture:
      "https://www.cas2021.com/binaries/large/content/gallery/cassummit-en/content-afbeeldingen/headliners/justin-trudeau.jpg",
  },
  {
    name: "Conservative Party",
    color: "#0C499C",
    endColor: "#DDE6FF",
    theme: "blue",
    picture:
      "https://www.macleans.ca/wp-content/uploads/2021/09/CP132674171.jpg",
  },
  {
    name: "New Democratic Party",
    color: "#FA5D26",
    endColor: "#FFEADD",
    theme: "orange",
    picture:
      "https://pbs.twimg.com/profile_images/1420760389294252043/WMEcxJiA.jpg",
  },
  {
    name: "Bloc Québécois Party",
    color: "#0E8DAA",
    endColor: "#DDF5FF",
    theme: "cyan",
    picture:
      "https://mobile-img.lpcdn.ca/lpca/924x/r3996/291e97a5-c6a5-11ea-b8ad-02fe89184577.jpg",
  },
  {
    name: "Green Party",
    color: "#338C29",
    endColor: "#C8E5C7",
    theme: "green",
    picture:
      "https://i.cbc.ca/1.6109291.1626778012!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/green-leader-20210719.jpg",
  },
  {
    name: "People's Party of Canada",
    color: "#4A3389",
    endColor: "#EBDDFF",
    theme: "purple",
    picture:
      "https://muskokaradio.com/image.php?width=600&height=600&cropratio=1:1&image=/media/jacob/maxime_bernier.jpg",
  },
];

const Parties = ({ results, search, show }) => {
  return (
    <div>
      <SimpleGrid columns={3} spacing={5}>
        {PARTY_INFO.map((party, index) => (
          <PartyCard
            key={party.name}
            result={results ? results[index] : null}
            name={party.name}
            color={party.color}
            endColor={party.endColor}
            theme={party.theme}
            picture={party.picture}
            search={search ? search : ""}
            show={show}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Parties;
