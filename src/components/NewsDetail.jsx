import React from 'react';
import { useParams } from 'react-router-dom';
import "./layout.css";

// Import or provide the newsData array here
const newsData = [
  {
    id: 1,
    heading: 'Sri Lanka edge out Afghanistan in low-scoring thriller',
    content: "CARDIFF (Reuters) - Sri Lanka survived a woeful batting collapse to beat Afghanistan by 34 runs in a rain-shortened World Cup thriller on Tuesday. The 1996 World Cup champions limped to 201 all out in the 37th over as Afghanistan grabbed nine wickets for 57 runs to give themselves a chance of pulling off a shock win. Afghanistan needed a rain-revised target of just 187 from 41 overs but they failed to gain any momentum in their run chase and completely lost their way after opener Mohammad Shahzad's dismissal in the fifth over led them to losing five wickets for just 23 runs. After Afghanistan were reduced to 57-5, a partnership of 64 by Najibullah Zadran and captain Gulbadin Naib gave them hope. But fast bowler Nuwan Pradeep grabbed two quick wickets before Najibullah was run out by Dimuth Karunaratne for 43. That set up a tense finale as the last two batsmen needed to score another 42 runs to hand Afghanistan their first World Cup win against a test-playing nation. But Sri Lanka made sure that victory did not come at their expense as Lasith Malinga bowled Hamid Hassan with a yorker four balls later. Pradeep was the pick of the Sri Lankan bowlers as he claimed a career best four wickets for 31 runs as Afghanistan were bowled out for 152 in the 33rd over.",
    image: 'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_b2ec3f586d.jpg',
  },
  {
    id: 2,
    heading: 'Wade guides Australia to series-clinching win',
    content: "Australia made heavy weather of a modest chase before beating Sri Lanka by three wickets in the second T20I on Wednesday to take an unassailable 2-0 lead in the three-match series. Chasing 125, world champions Australia struggled against Wanindu Hasaranga's (4-33) spin before Matthew Wade's run-a-ball 26 not out secured a tense victory with 13 balls to spare. Put into bat, Sri Lanka struggled to get going and rode cameos from Charith Asalanka (39) and Kusal Mendis (36) to post a below-par 124-9, barely avoiding being bowled out inside 20 overs. Australia's ploy to open their attack with Glenn Maxwell (2-18) paid off with the off-spinner dismissing opener Danushka Gunathilaka in the first over. Australia were without fast bowler Mitchell Starc who slit the index finger of his bowling hand on his shoe spike during the tourists' 10-wicket win in Tuesday's series opener. His replacement Jhye Richardson (3-26) ensured Australia did not feel Starc's absence and Kane Richardson claimed 4-30 to restrict Sri Lanka. For Australia, captain Aaron Finch (24) began well but Hasaranga rocked their top order and David Warner (21) was run out after a mix-up with Maxwell as their chase threatened to unravel. dismissed Maxwell and Ashton Agar in successive deliveries but Wade calmed Australian nerves and secured victory with a four off Gunathilaka. The teams move to Pallekele for the final T20I, which will be followed by five one-dayers and two Test matches.",
    image: 'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_80ea81f0aa.jpg',
},
{
    id: 3,
    heading: 'Shanaka backs world-class bowling attack to succeed against World Champions',
    content:"Dushmantha Chameera, Lahiru Kumara, Wanindu Hasaranga and Maheesh Theekshana have been part of Sri Lanka’s white-ball set-up for some time and had shown steady growth, producing some outstanding spells. Joining them are Nuwan Thushara and Matheesha Pathirana, whose actions are very similar to Lasith Malinga–the bowling coach (who was a short-format specialist with a sling-arm action) and Kasun Rajitha, a right-arm seamer. Shanaka says Thushara has more control but Pathirana is quick and more difficult to pick with his low-arm action.  Thushara has represented Sri Lanka in two games but Pathirana, hitherto uncapped, made his IPL debut this season for Chennai Super Kings, leaving an early impression when he picked a wicket off his very first ball. Pathirana got figures of 3.1-0-24-2 on debut, earning plaudits from many including his skipper, MS Dhoni. With Chameera assured of his position, the team management will have a tough call to pick Chameera’s partner and it might be a national cap for youngster Pathirana if Sri Lanka looks to bring in that surprise element to the attack. The limited over series which begins on Tuesday runs till June 24 and despite the economic crisis that has crippled the country, people have shown great interest in the series as large numbers queued up to purchase tickets that went on sale yesterday.",
    image: 'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_b2cdd8cbed.jpg',
},
{
    id: 4,
    heading: 'Confident in how our game holds up in these conditions - Hazlewood',
    content: 'Australian fast-bowler Josh Hazlewood said that his team will come into their multi-format tour of Sri Lanka carrying significantly more confidence in handling sub-continental conditions than was present during their previous tour of the island in 2016.Australia suffered a 3-0 whitewash on the Test leg of their 2016 tour but had more success in the limited-overs formats, winning the ODIs 4-1 and the T20I series 2-0. The fast-bowler is coming off a two-month stint in the Indian Premier League, where he and Glenn Maxwell were teammates for the Royal Challengers Bangalore franchise, alongside Sri Lanka’s lead white-ball spinner, Wanindu Hasaranga. Hasaranga enjoyed a successful tournament, where he finished second on the list of highest wicket-takers, and Hazlewood revealed that they had been keeping a close eye on his bowling.    ',
    image: 'https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_8886c6ae16.jpg',
},
  // Add more news articles as needed
];

const NewsDetail = () => {
  const { id } = useParams();
  const selectedNews = newsData.find((news) => news.id === parseInt(id));

  if (!selectedNews) {
    return <div>News not found</div>;
  }

  return (
    <>
    <br />
      <div class="card">
        <div className="imagenwe">
        <img class="card-img-top" src={selectedNews.image} alt="Card image cap" />
        </div>
       
        <div class="card-body">
          <h2>{selectedNews.heading}</h2>
          <p class="card-text">{selectedNews.content}</p>
        </div>
      </div>
    </>

  );
};

export default NewsDetail;