const users = [
    {
      fullName: "Virat Kohli",
      image: "https://cdn.zeebiz.com/sites/default/files/2022/11/05/209096-virat-kohli-7-pti.jpg",
      totalTrophy: "Total trophy=0",
      captainName: "Virat Kohli",
      teamName: "Royal Challengers Bangalore",
      description: "Royal Challengers Bangalore, under the passionate leadership of Virat Kohli, have been one of the most exciting teams in IPL history. Known for their aggressive batting line-up and charismatic players, RCB has consistently thrilled fans season after season. Despite reaching the finals multiple times, the team still chases its first IPL trophy. With Kohli’s fiery energy, an enthusiastic fanbase called the '12th Man Army,' and a squad filled with explosive talent, RCB enters every season with renewed hope. Their journey remains a story of resilience, passion, and the unbreakable spirit of chasing glory year after year."
    },
    {
      fullName: "MS Dhoni",
      image: "https://tse1.mm.bing.net/th?id=OIP.O-H8dvgiIh2IubZ_EXtwrAHaFj&pid=Api&P=0&h=180",
      totalTrophy:  "Total trophy=5",
      captainName: "MS Dhoni",
      teamName: "Chennai Super Kings",
      description: "Chennai Super Kings, under the iconic captaincy of MS Dhoni, have carved their name in IPL history as one of the most successful franchises. Dhoni's calm and tactical approach has made CSK a symbol of consistency and resilience. With five titles to their name, CSK’s yellow army boasts an unmatched loyalty among fans. The team is known for trusting experienced players and creating an atmosphere of unity and trust. Every season, CSK enters the tournament as strong contenders, blending seasoned stars with emerging talents, embodying the true spirit of never giving up under Dhoni's inspiring leadership."
    },
    {
      fullName: "Rohit Sharma",
      image: "https://tse4.mm.bing.net/th?id=OIP.hpYdoJlKYgfiteu0AeyRJAHaEK&pid=Api&P=0&h=180",
      totalTrophy:  "Total trophy=7",
      captainName: "Rohit Sharma",
      teamName: "Mumbai Indians",
      description: "Mumbai Indians, led by the calm and strategic Rohit Sharma, are the most successful franchise in IPL history. With a record five championships, MI has built a legacy of dominance through balanced teams, tactical brilliance, and a strong bench. Their ability to identify and nurture young talent, combined with the presence of world-class stars, sets them apart. Rohit's leadership is marked by his composed decisions under pressure, bringing out the best in his players. Every season, Mumbai Indians set high expectations, playing fearless cricket with a perfect blend of youth and experience, striving for continued excellence."
    },
    {
      fullName: "KL Rahul",
      image: "https://tse2.mm.bing.net/th?id=OIF.j5lFkPe8JewCKfocxn4epw&pid=Api&P=0&h=180",
      totalTrophy:  "Total trophy=0",
      captainName: "KL Rahul",
      teamName: "Lucknow Super Giants",
      description: "Lucknow Super Giants, a new entrant to the IPL, have quickly shown promise under the stylish leadership of KL Rahul. With his composed batting and tactical mind, Rahul has built a team that can compete with the best. LSG focuses on a strong top order, dynamic middle order, and a bowling attack that adapts well to different conditions. Though they are yet to win an IPL title, their consistent performances and fighting spirit have already earned them a loyal fanbase. With young talents and experienced overseas stars, LSG is steadily carving out its identity in the league."
    },
    {
      fullName: "Shreyas Iyer",
      image: "https://tse3.mm.bing.net/th?id=OIP.Ob18u3Kg1Iix-moC8VaV6AHaEK&pid=Api&P=0&h=180",
      totalTrophy:  "Total trophy=1",
      captainName: "Shreyas Iyer",
      teamName: "Kolkata Knight Riders",
      description: "Kolkata Knight Riders, a team with a rich legacy in IPL, have won two championships and are known for their fearless cricket. Under the captaincy of the stylish Shreyas Iyer, KKR is aiming to bring back its golden era. The team boasts of powerful all-rounders, a strong bowling line-up, and explosive openers who can change games single-handedly. With a smart mix of youth and experience, KKR believes in playing dynamic, aggressive cricket. Shreyas Iyer’s calm leadership combined with the team’s never-say-die attitude makes them serious contenders, and they continue to chase another title with full determination."
    },
    {
      fullName: "Sanju Samson",
      image: "https://tse4.mm.bing.net/th?id=OIP.y55qU7oyoEpBK9IhbsIDvQHaEK&pid=Api&P=0&h=180",
      totalTrophy:  "Total trophy=3",
      captainName: "Sanju Samson",
      teamName: "Rajasthan Royals",
      description: "Rajasthan Royals, the first-ever champions of IPL, are known for backing young Indian talents and playing fearless cricket. Led by the stylish and explosive Sanju Samson, the Royals continue to uphold their legacy of nurturing future stars. With a balanced squad featuring world-class players and emerging sensations, RR plays an exciting brand of cricket. Samson’s aggressive yet calm approach gives the team a new edge as they aim to add another title to their name. Every season, Rajasthan Royals fight with heart and determination, aiming to recreate the magic of their historic first triumph in 2008."
    },
    {
      fullName: "David Warner",
      image: "https://tse1.mm.bing.net/th?id=OIP.QHIGX4O8yjv7cNQXK1DA3gHaEK&pid=Api&P=0&h=180",
      totalTrophy: "Total trophy=1",
      captainName: "David Warner",
      teamName: "Delhi Capitals",
      description: "Delhi Capitals, a team known for its youthful energy and exciting talent, are led by the experienced David Warner. Warner’s aggressive mindset and wealth of T20 experience bring a winning mentality to the squad. The Capitals focus on building a strong core of Indian youngsters combined with impactful overseas players. Though they are still hunting for their first IPL title, DC’s consistent performances in recent seasons have made them one of the most exciting sides to watch. With Warner at the helm, Delhi Capitals aim to convert their potential into championship glory and make history."
    },
    {
      fullName: "Hardik Pandya",
      image: "https://tse3.mm.bing.net/th?id=OIP._zwS7HJBx2duQnfDfKRBAAHaFj&pid=Api&P=0&h=180",
      totalTrophy:  "Total trophy=0",
      captainName: "Hardik Pandya",
      teamName: "Gujarat Titans",
      description: "Gujarat Titans scripted a fairytale in their debut IPL season by winning the title under Hardik Pandya’s inspiring leadership. Known for his fearless attitude and all-round skills, Hardik built a team that played with unity and purpose. The Titans blended youth and experience, focusing on team balance rather than star power. Their remarkable debut was not just about winning but about dominating opponents with tactical brilliance. Hardik’s personal performances, along with key contributions from Indian and overseas players, made them a force to reckon with. Gujarat Titans aim to build a dynasty based on this dream start."
    },
    {
      fullName: "Faf du Plessis",
      image: "https://tse2.mm.bing.net/th?id=OIP.QQ9MX4QZ_l5CFirkaLLNaQHaFi&pid=Api&P=0&h=180",
      totalTrophy:  "Total trophy=0",
      captainName: "Faf du Plessis",
      teamName: "Royal Challengers Bangalore",
      description: "Faf du Plessis, the South African legend, took over the leadership of Royal Challengers Bangalore with the mission of bringing their elusive first IPL title. Known for his consistency, calm demeanor, and experience, Faf brings stability to RCB’s explosive line-up. Under his leadership, the team continues to balance flair with composure. With big hitters like Maxwell, solid Indian talents, and a potent bowling attack, RCB remains a formidable force. Faf’s tactical acumen, combined with RCB’s hunger for success, fuels their relentless pursuit of glory. Every season, they carry the hopes of millions dreaming of a title win."
    },
    {
      fullName: "Kane Williamson",
      image: "https://tse3.mm.bing.net/th?id=OIP.747_Q0VqJF4X3b4pf40Z_gHaEz&pid=Api&P=0&h=180",
      totalTrophy:  "Total trophy=2",
      captainName: "Kane Williamson",
      teamName: "Sunrisers Hyderabad",
      description: "Sunrisers Hyderabad, famous for their disciplined bowling and gritty performances, are now under the calm and composed leadership of Kane Williamson. Known for his tactical intelligence and batting class, Williamson brings stability to the side. SRH won their maiden title under David Warner but now aim to rebuild and conquer again. With a squad focusing on young bowlers and dynamic batters, SRH plays a smart, strategic brand of cricket. Kane’s ability to lead by example and adapt to different match situations makes them a dangerous team. They aspire to return to glory under his steady guidance."
    }
  ];
  

  var sum=''
  users.forEach(function(elem){
     sum=sum+`<div class="card">
    <nav>
        <h1>IPL</h1>
        <h1>${elem.totalTrophy}</h1>
    </nav>
    <img src="${elem.image}" alt="">
    
    <h1>${elem.captainName}</h1>
    <h2>${elem.teamName}</h2>
    <p>${elem.description}</p>
    <button>View profile</button>
</div>
`
  })
  main.innerHTML=sum
  