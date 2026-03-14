import React from 'react';

const CompetitiveProgramming = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "manav_singhla",
      url: "https://leetcode.com/u/manav_singhla/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      stats: "200+ Problems Solved"
    },
    {
      platform: "GeeksforGeeks",
      username: "manavsinghla",
      url: "https://www.geeksforgeeks.org/profile/manavsinhla",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
      stats: "Institutional Rank"
    },
    {
       platform: "HackerRank",
       username: "manavsinghla123",
       url: "https://www.hackerrank.com/profile/manavsinghla123",
       icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
       stats: "2 Star in Problem Solving and C++, Python and Java"
    }
  ];

  return (
    <section id="cp" className="py-20 relative bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text inline-block relative border-b-4 border-light-accent dark:border-dark-accent pb-2">
            Competitive Programming
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My profiles across various competitive programming platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, idx) => (
            <a 
              key={idx} 
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-6 rounded-2xl group hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-light-accent/10 to-transparent dark:from-dark-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-16 h-16 bg-white rounded-full p-2 shadow-md flex items-center justify-center mb-4 z-10 transition-transform group-hover:scale-110">
                <img src={profile.icon} alt={profile.platform} className="max-w-full max-h-full object-contain" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1 z-10">{profile.platform}</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-3 z-10">@{profile.username}</p>
              
              <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700 w-full z-10">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{profile.stats}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
