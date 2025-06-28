import React, { useContext } from "react";
import Card from "../componant/Card";
import { AppContext } from "../context/AppContext";
import Navbar from "../componant/Navbar";
import Category from "../componant/Category";
import Sentimet from "../componant/Sentimet";

const articles1 = [
  {
    title:
      "Protesters gather in Bangkok to demand Thai prime minister's resignation over leaked Cambodia call",
    description:
      "Hundreds of protesters have gathered in Thailand’s capital demanding the resignation of Prime Minister Paetongtarn Shinawatra.",
    content:
      "BANGKOK (AP) — Hundreds of protesters gathered in Thailand’s capital on Saturday to demand the resignation of Prime Minister Paetongtarn Shinawatra, part of the brewing political turmoil set off by a leaked phone call with former Cambodian Prime Mini... [5546 chars]",
    image:
      "https://dims.apnews.com/dims4/default/257d058/2147483647/strip/true/crop/4787x2693+0+249/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2Fba%2F6899a59bc072aca0b236470d9ee4%2F0ddbabfafbc14242a4545762feb2c71c",
    source: {
      name: "AP News",
      url: "https://apnews.com",
    },
    sentiment: "Neutral",
  },
  {
    title: "Inside Jeff Bezos and Lauren Sanchez’s big wedding day",
    description:
      "Friday’s secretive ceremony at the secluded and historic San Giorgio Maggiore island was the main event of the weekend — and Sanchez’s gown, revealed just after, was a year and a half in the making.",
    content:
      "CNN —\nIt’s been both the most public and secretive wedding of the year.\nOn Friday, the main event of Jeff Bezos and Lauren Sanchez’s three-day-long Venetian extravaganza culminated in a private ceremony held on the secluded, historic San Giorgio Magg... [11612 chars]",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/ap25177637005560-20250628012622193.jpg?c=16x9&q=w_800,c_fill",
    source: {
      name: "CNN",
      url: "https://www.cnn.com",
    },
    sentiment: "Neutral",
  },
  {
    title: "Canadian businesses seek certainty in US tariff war",
    description:
      "Intense US-Canada negotiations for a potential new trade and security deal have hit a snag ahead of a mid-July deadline.",
    content:
      "'In business, indecision is killer' - Canadian firms seek certainty in tariff war\n5 hours ago Share Save Ali Abbas Ahmadi BBC News, Toronto Share Save\nGetty Images\nDeal or no deal, what Wes Love wants is certainty. His Toronto-area business, Taurus C... [5576 chars]",
    image:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1044/live/d55a6c20-5399-11f0-b89f-af34225ed6df.jpg",
    source: {
      name: "BBC",
      url: "https://www.bbc.com",
    },
    sentiment: "Neutral",
  },
  {
    title: "Cardinals 5-0 Guardians (Jun 27, 2025) Game Recap",
    description:
      "Expert recap and game analysis of the St. Louis Cardinals vs. Cleveland Guardians MLB game from June 27, 2025 on ESPN.",
    content:
      "CLEVELAND -- — Sonny Gray allowed only one hit and struck out a season-high 11 for his first complete game since 2017 as the St. Louis Cardinals defeated the Cleveland Guardians 5-0 on Friday night.\nAlec Burleson and Pedro Pagés homered, and Nolan Ar... [1442 chars]",
    image:
      "http://s.espncdn.com/stitcher/sports/baseball/mlb/events/401696130.png?templateId=espn.com.share.1",
    source: {
      name: "ESPN",
      url: "https://www.espn.com",
    },
    sentiment: "Negative",
  },
  {
    title: "Supreme Court Sides With Trump in Birthright Citizenship Case",
    description:
      "The Supreme Court ruled that lower courts cannot issue nationwide injunctions on executive orders, like Trump's attack on birthright citizenship.",
    content:
      "The Supreme Court ruled on Friday that lower federal courts should not have the power to issue nationwide injunctions blocking presidential orders — no matter how obviously unconstitutional such an order may be.\nThe decision is a monumental gift to D... [4321 chars]",
    image:
      "https://www.rollingstone.com/wp-content/uploads/2025/06/Birthright-Citizenship-Case.jpg?crop=0px%2C185px%2C1800px%2C1014px&resize=1600%2C900",
    source: {
      name: "Rolling Stone",
      url: "https://www.rollingstone.com",
    },
    sentiment: "Neutral",
  },
  {
    title:
      "Lauren Sánchez’s huge social media statement: Wipes old Instagram posts, shares pics from wedding with Jeff Bezos",
    description:
      "Jeff Bezos and Lauren Sánchez married in a star-studded wedding ceremony in Italy’s Venice with several A-list celebrities as their guests. | Trending",
    content:
      "Lauren Sánchez, who exchanged vows with Amazon titan Jeff Bezos in Venice, Italy, has made a huge social media statement by wiping away her old posts, leaving only two shares containing a series of pictures. In addition, she also changed her last nam... [1941 chars]",
    image:
      "https://www.hindustantimes.com/ht-img/img/2025/06/28/1600x900/Jeff_Bezos_Lauren_Sanchez_Instagram_Married_Venice_1751071649084_1751071657107.jpg",
    source: {
      name: "Hindustan Times",
      url: "https://www.hindustantimes.com",
    },
    sentiment: "Positive",
  },
  {
    title:
      "US Senate votes down resolution to restrict Trump from escalating Iran war",
    description:
      "Democratic effort fails in mostly partisan vote, hours after US president says he would consider more bombing",
    content:
      "Senate Democrats failed on Friday to get a war-powers resolution passed to limit Donald Trump’s ability to single-handedly escalate the war with Iran. The resolution, “to direct the removal of United States Armed Forces from hostilities against the I... [2361 chars]",
    image:
      "https://i.guim.co.uk/img/media/6cf53ae7e3e47759e5432ac902991a012072d5d3/33_0_4167_3333/master/4167.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b2739f28e51c967ebc27454dd1b95984",
    source: {
      name: "The Guardian",
      url: "https://www.theguardian.com",
    },
    sentiment: "Negative",
  },
  {
    title:
      "Trump news at a glance: president boasts of ‘monumental’ win after supreme court curtails power of federal judges",
    description:
      "Justices’ decision set to impact Trump move to limit birthright citizenship – key US politics stories from Friday 27 June at a glance",
    content:
      "Donald Trump has hailed a supreme court decision to limit federal judges’ powers to block his orders on a nationwide basis as a “monumental victory” and vowed to “promptly file to proceed” with key policies – including banning birthright citizenship.... [890 chars]",
    image:
      "https://i.guim.co.uk/img/media/5964bad889ffb3ff52a5f384f9e1e32aa7ed9651/921_0_4605_3684/master/4605.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=07859119e42a1aead00cbb3c8f9f6c4a",
    source: {
      name: "The Guardian",
      url: "https://www.theguardian.com",
    },
    sentiment: "Positive",
  },
  {
    title:
      "What is birthright citizenship and what happens after SCOTUS ruling? : NPR",
    description:
      "Within two hours of a Supreme Court ruling that limits the ability of federal courts to impose universal injunctions, lawyers for immigrant rights groups filed a class action lawsuit on behalf of their clients.",
    content:
      "What is birthright citizenship and what happens after the Supreme Court ruling?\ntoggle caption Alex Wroblewski/AFP via Getty Images\nAfter the Supreme Court issued a ruling that limits the ability of federal judges to issue universal injunctions — but... [6116 chars]",
    image:
      "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5780x3251+0+445/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F48%2F93%2Fee3925c9464ba19a1f44773599e2%2Fgettyimages-2221594152.jpg",
    source: {
      name: "NPR",
      url: "https://www.npr.org",
    },
    sentiment: "Neutral",
  },
  {
    title:
      "Amazon, Google, Meta, and Uber hit with $2 billion retroactive tax bill",
    description: "The money is due at the end of the month.",
    content:
      "President Donald Trump said Friday that he’s suspending trade talks with Canada over its plans to continue with its tax on technology firms, which he called “a direct and blatant attack on our country.”\nTrump, in a post on his social media network, s... [4032 chars]",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2025/06/AP25178604454210-e1751069581457.jpg?resize=1200,600",
    source: {
      name: "Fortune",
      url: "https://fortune.com",
    },
    sentiment: "Neutral",
  },
];

const NewsMain = () => {
  const { loading, filteredArticles } = useContext(AppContext);

  return (
    <div className="min-h-screen  p-6">
      <Navbar />
      <Category />
      <Sentimet />

      {loading ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-4 text-xl font-medium text-gray-700 animate-pulse">
            📰 Loading the latest headlines,It may takes time...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0
            ? filteredArticles.map((article, index) => (
                <Card key={index} article={article} />
              ))
            : articles1.map((article, index) => (
                <Card key={index} article={article} />
              ))}
        </div>
      )}
    </div>
  );
};

export default NewsMain;
