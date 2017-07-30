exports.domainName = process.env.REST_API;
exports.storageContainer = "https://s3-us-west-2.amazonaws.com/whitelight-quiz-images";
exports.questionContainer = "https://s3-us-west-2.amazonaws.com/whitelight-quiz-questions";
exports.appID = process.env.APP_ID;
exports.adminID = "4818530757899";
exports.website = "https://www.whitelight.social";
exports.scope = "public_profile,email,user_photos,user_posts,user_friends";

exports.gameJSON = {"items":[{"_id":"5946503b9feaa125bc255ae3","updatedAt":"2017-07-30T07:18:56.401Z","createdAt":"2017-06-18T10:04:43.054Z","dom":"<html>\n  <meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\">\n  <script>\n  function onLoad(){\n    var array = [\n      \"THE QUESTION ISN'T WHO'S GOING TO LET ME, IT'S WHO'S GOING TO STOP ME.\",\n      \"WHATEVER DOESN'T KILL ME HAD BETTER START RUNNING.\",\n      \"FORGIVE AND FORGET? I'M NEITHER JESUS NOR DO I HAVE ALZHEIMER'S.\",\n      \"I'M ONLY RESPONSIBLE FOR WHAT I SAY AND NOT FOR WHAT YOU UNDERSTAND.\",\n      \"THROW ME TO THE WOLVES AND I WILL RETURN LEADING THE PACK.\",\n      \"I'D TELL YOU TO GO TO HELL BUT I DON'T WANT TO SEE YOU THERE.\",\n      'OBVIOUSLY, YOU HAVE \"MISTAKE\" ME FOR SOMEBODY WHO GIVES A SHIT'\n    ];\n    \n    var textSelected = array[Math.floor(Math.random() * array.length)];\n    document.getElementsByClassName(\"message\")[0].innerHTML = textSelected;\n  }\n  </script>\n<style>\n\t.bodyClass {\n\t\tbackground-color: #CCCCCC;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t\tfont-family: 'PT Sans', sans-serif;\n\t\toverflow: hidden;\n\t\twidth: 698px;\n\t\theight: 367px;\n\t}\n\t\n\t.divClass {\n\t  background: url(\"https://s3-us-west-2.amazonaws.com/whitelight-quiz-questions/questionImage1500966489570.png\");\n\t  background-repeat: no-repeat;\n\t  background-position: center;\n\t\ttext-align: center;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t\n\t.myImage {\n\t  background: url(\"{facebookData.getMyProfilePicture(200, 200)}\") 50% 50% no-repeat;\n\t  border-radius: 50%;\n\t  height: 200px;\n\t  width: 200px;\n\t  margin: auto;\n\t}\n\t\n\t.myName {\n\t  padding-top: 20px;\n\t  display: inline-block;\n\t  height: 80px;\n\t  font-size: 25px;\n\t  color: white;\n\t}\n\t\n\t.flexItem{\n\t  background-color: rgba(0, 0, 0, 0.5);\n\t  padding: 10px 30px;\n\t  border-radius: 20px\n\t}\n\t\n\t.inlineBlock{\n\t   position: absolute;\n  \t display: inline-block;\n  \t height: 100%;\n  \t width: 448px;\n  \t left: 230px;\n\t}\n\t\n\t.flexDisplay{\n\t  height: 100%;\n\t  margin: auto;\n\t}\n\t\n\t.message{\n\t  display: inline-block;\n\t  position: relative;\n\t  width: 400px;\n\t  font-size: 30px;\n\t  color: white;\n\t  text-align: center;\n\t  -webkit-transform: translate(0%, -50%); \n\t  top: 154px;\n\t }\n\t \n\t .tinted{\n\t    position: absolute;\n\t    top: 50px;\n  \t  height: 100%;\n  \t  width: 250px;\n\t }\n\t \n</style>\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css\" ref=\"stylesheet\">\n\n<body class=\"bodyClass\" onload=\"onLoad()\">\n\t<div class=\"divClass\">\n\t  <div class=\"tinted\">\n  \t    <div class=\"myImage\"></div>\n    \t    <div class=\"myName\">\n      \t    <div class=\"flexItem\">\n      \t      {facebookData.getMyFirstName()}\n      \t    </div>\n    \t    </div>\n  \t    </div>\n\t <div class=\"inlineBlock\">\n\t   <div class=\"border\">\n\t   <div class=\"flexDisplay\">\n  \t   <div class=\"message\">\n  \t     </div>\n\t   </div>\n\t   </div>\n\t </div>\n  </div>\n</body>\n\n</html>","outputText":"<div>\n  <b>{facebookData.getMyFirstName()}</b>, this sentence sums up your personality. One day the people who didn't believe in you will tell everyone how they met you. You are sure in your ways and adamant to prove yourself to the world. \nThis is who you are. Share this with your friends and let them discover which sentence sums up their personality.\n</div>","introImage":"https://s3-us-west-2.amazonaws.com/whitelight-quiz-questions/introImage1500968853910.jpg","title":"Which Sentence sums up Your Personality?","__v":0,"description":"Your personality in a sentence!"},{"_id":"59465e5e9feaa125bc255ae7","updatedAt":"2017-07-30T07:17:12.979Z","createdAt":"2017-06-18T11:05:02.608Z","dom":"<html>\n  <meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\">\n  <script>\n  function onLoad(){\n    var array = [\n      \"Greater love has no one than this: to lay down one's life for one's friends.\",\n      \"If God brings you to it, He will bring you through it.\",\n      \"I am with you and watch over you wherever you go.\",\n      \"Be strong and courageous.\",\n      \"Do not be terriﬁed; do not be discouraged, for the LORD your God will be with you wherever you go.\",\n      \"Greater love has no one than this: to lay down one's life for one's friends.\",\n      'I am with you and watch over you Wherever you go.',\n      \"If God is for us, Who can ever be against us.\",\n      \"Blessed are the pure in heart; for they shall see God.\",\n      \"God didn't bring me this far to leave me.\",\n      \"God sometimes takes us into troubled waters. Not to drown us but to cleanse us.\"\n    ];\n    \n    var textSelected = array[Math.floor(Math.random() * array.length)];\n    document.getElementsByClassName(\"message\")[0].innerHTML = textSelected;\n  }\n  </script>\n<style>\n\t.bodyClass {\n\t\tbackground-color: #CCCCCC;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t\tfont-family: 'PT Sans', sans-serif;\n\t\twidth: 698px;\n\t\theight: 367px;\n\t\toverflow: hidden;\n\t\ttext-align: center;\n\t}\n\t\n\t.divClass {\n\t  background: url(\"https://s3-us-west-2.amazonaws.com/whitelight-quiz-questions/questionImage1500931982570.png\");\n\t  background-repeat: no-repeat;\n\t  background-position: center;\n\t  width: 100%;\n\t  height: 100%;\n\t}\n\t\n\t.myImage {\n\t  background: url(\"{facebookData.getMyProfilePicture(260, 260)}\") 50% 50% no-repeat;\n\t  border-radius: 10px;\n\t  height: 260px;\n\t  width: 260px;\n\t  display: inline-block;\n\t  margin: auto;\n\t  margin-top: 20px;\n\t}\n\t\n\t.myName {\n\t  margin-top: 10px;\n\t  display: inline-block;\n\t  font-size: 25px;\n\t  color: white;\n\t}\n\t\n\t.flexItem{\n\t  background-color: rgba(0, 0, 0, 0.5);\n\t  padding: 10px 30px;\n\t  text-align: center;\n\t  border-radius: 20px\n\t}\n\t\n\t.inlineBlock{\n  \t position: absolute;\n  \t height: 100%;\n  \t width: 300px;\n\t}\n\t\n\t.flexDisplay{\n\t  position: absolute;\n\t  left: 290px;\n\t  height: 70%;\n\t  width: 398px;\n\t}\n\t\n\t.message{\n\t  display: inline-block;\n\t  position: relative;\n\t  top: 144px;\n\t  font-size: 30px;\n\t  width: 320px;\n\t  color: white;\n\t  text-align: center;\n\t  -webkit-transform: translate(0%, -50%); \n\t }\n\t \n</style>\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css\" ref=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=PT+Sans\" rel=\"stylesheet\">\n\n<body class=\"bodyClass\" onload=\"onLoad()\">\n\t<div class=\"divClass\">\n\t  <div class=\"inlineBlock\">\n  \t    <div class=\"myImage\"></div>\n\n  \t  <div class=\"myName\">\n  \t    <div class=\"flexItem\">\n  \t    {facebookData.getMyFirstName()}\n  \t    </div>\n  \t </div>\n\t </div>\n\t   <div class=\"flexDisplay\">\n  \t   <div class=\"message\">\n  \t     </div>\n\t </div>\n  </div>\n</body>\n\n</html>","outputText":"<div>\n  <b>{facebookData.getMyFirstName()}</b>, this is your crazy story and here's what will happen if your wishes turn true and you become invisible.\n</div>","introImage":"https://s3-us-west-2.amazonaws.com/whitelight-quiz-questions/introImage1500931929309.jpg","title":"Which Bible quote Resonates with your Heart?","__v":0,"description":"Find the quote for you"},{"_id":"594682959feaa125bc255aea","updatedAt":"2017-07-30T07:21:30.148Z","createdAt":"2017-06-18T13:39:34.008Z","dom":"<html>\n  <meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\">\n  <script>\n  function onLoad(){\n    var array = [\n      \"He is the one who can make anyone laugh with his incredible sense of humor. He never judges but is always ready to forgive even those who have hurt him. He lives in the moment and is the best friend one could wish for.\",\n      \"He loves deeply and cares without showing. He will pick you up when you fall and help you fly if you want. He is quite perfect.\",\n      \"He is the type of person who would make you laugh till you cry but will also be there every time that you need a shoulder to cry on. He will try to understand you and would never judge you but he will also tell you the harsh truth than comforting you with a lie. He is a friend who makes friendship feel like the beautiful journey that it is.\",\n      \"He cares without showing and he loves without knowing. He is a man's man with his sports and outgoing nature but his sensitive side is equally incredible. His friendship is precious and needs to be earned but if he trusts you he'll go to the world's end to fight for you. He is the type of person who makes one understand what true friendship is.\",\n      \"He is the type of person who would always be there helping you, encouraging you and supporting you in ways you would not even notice. He would care for you without asking anything in return. But he is also the type of person who will keep smiling even when hurt so that. his friends do not worry about him.\",\n      \"He is a dreamer and a warrior. He is the friend who cares and knows you better than anyone else. He would always be there for you and will help you in ways that you would not even know. He may not always show what he feels but he will always know exactly what his friends are feeling. His is a friendship that one can be proud of.\",\n      'He is a warrior for those he loves. He is the nurturer for those he cares about. He is a friend who can always be counted upon and he is the man who speaks his heart. He laughs with his heart and he feels deeply. He is the perfect blend of toughness and sensitivity and there are few that can make you understand friendship like him.',\n      \"He is his own man. He is a dreamer who thinks of beauty and he is a doer who works to excel. He is the fighter who believes in love and he is a lover who believes in trust. He knows his strengths and weaknesses and he listens to his heart that guides him. He is the type of person who makes one understand what true friendship is.\",\n      \"He is the person who feels things deeply. He would never judge as he understands what the other person is going through. He will put himself in your shoes and understand you like no one else does. This is what makes his friendship so incredible. He will live in the moment and make sure that he has his friends by his side, enjoying the ride.\"\n    ];\n    \n    var textSelected = array[Math.floor(Math.random() * array.length)];\n    document.getElementsByClassName(\"message\")[0].innerHTML = textSelected;\n  }\n  </script>\n<style>\n\t.bodyClass {\n\t\tbackground-color: #CCCCCC;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t\toverflow: hidden;\n\t}\n\t\n\t.divClass {\n\t\tposition: absolute;\n\t\twidth: 698px;\n\t\theight: 367px;\n\t}\n\t\n\t.borderOut {\n\t  margin: 20px\n\t}\n\t.myImage{\n\t  content: url(\"{facebookData.getMyProfilePicture(150, 150)}\");\n    border-radius: 50%;\n    border-style: solid;\n    border-width: 5px;\n    vertical-align: middle;\n\t}\n\t.myName{\n\t  display: inline-block;\n\t  text-align: center;\n\t  width: 400px;\n\t  font-size: 35px;\n\t  border-bottom: 5px solid black;\n\t}\n\t\n\t.message{\n\t  position: relative;\n\t  top: -50px;\n\t  font-size: 20px;\n\t  width: 400px;\n\t  margin-left: 180px;\n\t  text-align: center;\n\t}\n</style>\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css\" ref=\"stylesheet\">\n<body class=\"bodyClass\" onload=\"onLoad()\">\n  <div class=\"divClass\">\n    <div class=\"borderOut\">\n      <span class=\"myImage\">\n      </span>\n      <div class=\"myName\">\n        {facebookData.getMyFirstName()}\n      </div>\n      <div class=\"message\">\n      \n      </div>\n</body>\n\n</html>","outputText":"<div style=\"text-align: center\">\n  You're a person of multiple talents and multiple sides. You have multiple facets to your personality and each is better than the other. You're a well-rounded and perfectly balanced person.<br/>Share this post to show the world what you are all about.\n</div>","introImage":"https://s3-us-west-2.amazonaws.com/whitelight-quiz-questions/introImage1500969410661.jpg","title":"What's the perfect description about you?","__v":0,"description":"Description that suits you"},{"_id":"59469b989feaa125bc255aec","updatedAt":"2017-07-30T07:18:19.681Z","createdAt":"2017-06-18T15:26:16.385Z","dom":"<html>\n  <meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\">\n  <script>\n  function onLoad(){\n    var array = [\n      \"Your unwavering belief in humanity despite the pain you have gone through due to the selfishness of the people, is inspiring. People always take note of your unending positive energy that refuses to die despite being hurt several times in the past. People have hurt you but you haven't let that dim your inner radiance.\",\n      \"The way you handle negativity in life is highly commendable. People notice how you maintain your air of dignity and let nobody thrash your self respect. You know how to differentiate between positive criticism and negative backlash. You don't allow people to get to you and it is noticed quite a bit by people.\",\n      \"The moment you speak, it seems like honey dripping straight out of your mouth. The first thing that people notice about you is your polite way of talking, courtesy, hospitality and good mannerism. Everyone who talks to you is enamoured by your sweet voice and graceful nature.\",\n      \"The way you smile lights up a room, the innocence of your mind and purity of your thoughts are the first things people notice about you. It's hard to find a genuinely good people in today's world and your presence only makes others believe that the world isn't a cruel, selfish place.\",\n      \"If only people could see the various colors of your inner mind, people would come to know who you really are. Nobody truly knows who you are because it is so hard to truly understand your multiple moods and diverse avatars. People first notice your unusual quietness but that is just you. You are quiet and dignified by appearance and don't relally open up in the first go.\",\n      \"It isn't hard to miss the sass and badass energy you've got going around you. Your intimidating presence leaves people hiding because they know that nobody can win against you in the battle of ultimate attitude savagery. People are well aware about your boldness and the way you assert yourself.\",\n      'The first thing that makes people stand up and look out for you is your dedication and belief in God. People lose faith in God when things go out of control, but you still fold your hands in prayer until God is forced to listen to your prayers. God loves a stubborn, true heart that refuses to let the world down his ideas.'\n    ];\n    \n    var textSelected = array[Math.floor(Math.random() * array.length)];\n    document.getElementsByClassName(\"message\")[0].innerHTML = textSelected;\n  }\n  </script>\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css\" />\n  <link href=\"https://fonts.googleapis.com/css?family=PT+Sans\" rel=\"stylesheet\">\n<style>\n\t.bodyClass {\n\t\tbackground-color: #584C63;\n\t\toverflow: hidden;\n\t\tfont-family: 'PT Sans', sans-serif;\n\t\twidth: 698px;\n\t\theight: 367px;\n\t\ttext-align: center;\n\t}\n\t\n\t.divClass {\n\t\twidth: 698px;\n\t\theight: 367px;\n\t}\n\t\n\t.imageBG{\n\t  position: absolute;\n\t  top: 0px;\n\t  left: 0px;\n\t  background-color: #ffffff;\n\t  width: 270px;\n\t  height: 100%;\n\t}\n\t\n\t.myImage {\n\t  background: url({facebookData.getMyProfilePicture(250, 250)});\n\t  background-repeat: no-repeat;\n    background-position: center; \n\t  width: 270px;\n\t  height: 300px;\n\t}\n\t\n\t.myName {\n\t  display: inline-block;\n\t  font-size: 30px;\n\t  color: black;\n\t  font-weight: bolder;\n\t  padding: 15px;\n\t}\n\t\n\t.messageDisp{\n\t  position: absolute;\n\t  left: 270px;\n\t  font-size: 24px;\n\t  width: 428px;\n\t  height: 100%;\n\t  color: white;\n\t  font-weight: bold;\n\t  margin: auto;\n\t  text-align: center;\n\t }\n\t \n\t .message{\n\t   display: inline-block;\n\t   position: relative;\n\t   width: 90%;\n\t   top: 184px;\n\t   -webkit-transform: translate(0%, -50%); \n\t }\n\t \n</style>\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css\" ref=\"stylesheet\">\n\n<body class=\"bodyClass\" onload=\"onLoad()\">\n\t<div class=\"divClass\">\n\t  <div class=\"imageBG\">\n  \t  <div class=\"myImage\"></div>\n  \t  <div class=\"myName\">\n  \t    {facebookData.getMyFirstName()}\n  \t  </div>\n    </div>\n\t  <div class=\"messageDisp\">\n  \t    <div class=\"message\">\n\t      </div>\n\t  </div>\n  </div>\n</body>\n\n</html>","outputText":"<div>\n  <b>{facebookData.getMyFirstName()}</b>, through all your experiences in Life you have learnt to hold your own ground, to be prepared for the worst and to experience everything that is happening around you without worrying about what people think and say about you. Your first impression on people is an interesting observation and people who know you , are quite surprised when they come to know about your different moods and diverse sides of your personality. This is what people in general think about your and notice about you in the first place and this is the first impression you cast on people.\n</div>","introImage":"https://whitelight-quiz-questions.s3.amazonaws.com/pexels-photo-260907.jpeg","title":"What do people notice about you first?","__v":0,"description":"Find what people notice about you!!!"},{"_id":"593d4e3c4840bebdd9513987","updatedAt":"2017-07-30T07:21:37.531Z","createdAt":"2017-06-11T14:05:48.914Z","dom":"<html>\n  <meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\">\n    <style>\n        .bodyClass {\n    margin: 0px;\n    padding: 0px;\n    overflow: hidden;\n}\n\n.divClass {\n    background-image: url(\"https://s3-us-west-2.amazonaws.com/whitelight-quiz-questions/questionImage1500856768285.png\");\n    position: absolute;\n    width: 698px;\n    height: 367px;\n    font-family: 'Dancing Script', cursive;\n}\n\n.myDiv {\n    position: absolute;\n    left: 40px;\n    top: 80px;\n}\n\n.friendDiv {\n    position: absolute;\n    right: 40px;\n    top: 80px;\n}\n\n.centerAlign {\n    text-align: center;\n}\n\n.fullWidth{\n  width: 100%;\n  text-align: center;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.fontSize {\n    background-color: rgba(0,0,0,.5);\n    font-size: 20px;\n    display: inline;\n    width: 200px;\n    margin: auto;\n    color: white;\n    padding: 10px 20px;\n    border-radius: 15px;\n    font-family: 'PT Sans', sans-serif;\n}\n\n.heading {\n    color: #5C2C0B;\n    font-size: 65px;\n    width: 300px;\n    margin: auto;\n}\n\n.myImage {\n    background: url(\"{facebookData.getMyProfilePicture(200, 200)}\")50% 50% no-repeat;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    border: 7px solid #5C390E;\n}\n\n.friendImage {\n    background: url(\"{facebookData.getFriendProfilePicture(1, 200, 200)}\") 50% 50% no-repeat;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    border: 7px solid #5C390E;\n}\n    </style>\n    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css\"\n    ref=\"stylesheet\">\n    <link href=\"https://fonts.googleapis.com/css?family=Dancing+Script\" rel=\"stylesheet\">\n    <link href=\"https://fonts.googleapis.com/css?family=PT+Sans\" rel=\"stylesheet\">\n    \n    <body class=\"bodyClass\">\n        <div class=\"divClass\">\n            <div class=\"fullWidth\">\n             <div class=\"heading centerAlign\">\n                Friends forever\n            </div>\n            </div>\n\n            <div class=\"myDiv\">\n                <div class=\"myImage\"></div>\n                <div class=\"fullWidth\">\n                  <div class=\"fontSize centerAlign\">\n                    { facebookData.getMyFirstName() }\n                  </div>\n                </div>\n            </div>\n            <div class=\"friendDiv\">\n                <div class=\"friendImage\"></div>\n                <div class=\"fullWidth\">\n                  <div class=\"fontSize centerAlign\">\n                      {facebookData.getFriendFirstName(1) }\n                  </div>\n                </div>\n            </div>\n        </div>\n    </body>\n\n</html>","outputText":"<div><b>{facebookData.getMyFirstName()}</b> you are sure to be blessed to have <b>{facebookData.getFriendFirstName(1)}</b> as your best friend.</div>","introImage":"https://s3-us-west-2.amazonaws.com/whitelight-quiz-questions/introImage1500969107475.jpg","title":"Who is your best friend?","__v":0,"description":"Find your best friend"},{"_id":"594587149feaa125bc255ada","updatedAt":"2017-07-30T07:19:25.455Z","createdAt":"2017-06-17T19:46:28.327Z","dom":"<html>\n  <meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\">\n  <script>\n  function onLoad(){\n    var array = [\n      \"The most dangerous lies are the ones I tell about myself. I will always peruse the truth and never lie to myself.\",\n      \"Do not chase people. Be you, do your own thing and work hard. The right people who belong in your life will come to you and stay.\",\n      \"Always be grateful. Before I think about how bad my life is take a moment to think about all the other people who have it worse than me.\",\n      \"Always speak the truth that I'm carrying in my heart like hidden treasure. Be silly, be kind and be weird; there's no time for anything else.\",\n      \"Life it too short to stress myself with people who don't even deserve to be an issue in your life.\",\n      \"Perfection is not attainable but only if I peruse perfection will I ever attain excellence. I will never give up and I will never surrender.\",\n      \"If it wasn't for the mistakes I've made I wouldn't be where I am today. Regret nothing I've done, because everything at the end of the day is an education.\",\n      \"None of us are getting out this alive, so please stop treating myself like an afterthought. Eat delicious food, walk in sunshine, swim in the ocean.\"\n    ];\n    \n    var textSelected = array[Math.floor(Math.random() * array.length)];\n    document.getElementsByClassName(\"message\")[0].innerHTML = textSelected;\n  }\n  </script>\n<style>\n\t.bodyClass {\n\t\tbackground-color: #CCCCCC;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t\tfont-family: 'PT Sans', sans-serif;\n\t\toverflow: hidden;\n\t\twidth: 698px;\n\t\theight: 367px;\n\t}\n\t\n\t.divClass {\n\t  background: url(\"https://s3-us-west-2.amazonaws.com/whitelight-quiz-questions/questionImage1500936292069.png\");\n\t  background-repeat: no-repeat;\n\t  background-position: center;\n\t\twidth: 698px;\n\t\theight: 367px;\n\t\ttext-align: center;\n\t}\n\t\n\t.myImage {\n\t  background: url(\"{facebookData.getMyProfilePicture(200, 200)}\") 50% 50% no-repeat;\n\t  border-radius: 50%;\n\t  height: 200px;\n\t  width: 200px;\n\t  margin: auto;\n\t}\n\t\n\t.myName {\n\t  display: inline-block;\n\t  font-size: 25px;\n\t  color: white;\n\t  background-color: rgba(0,0,0,0.5);\n\t  margin: 15px;\n\t  padding:10px 20px;\n\t  border-radius: 20px;\n\t}\n\t\n\t.inlineBlock{\n  \t position: absolute;\n  \t left: 230px;\n  \t height: 100%;\n  \t width: 468px;\n  \t text-align: center;\n\t}\n\t\n\t.message{\n\t  display: block;\n\t  top: 170px;\n\t  left: 207px;\n\t  margin: auto;\n\t  position: relative;\n\t  -webkit-transform: translate(-50%, -50%); \n\t  font-size: 30px;\n\t  width: 423px;\n\t  color: white;\n\t  text-align: center;\n\t }\n\t \n\t .tinted{\n\t    position: absolute;\n  \t  background-color: rgba(255,255,255, 0.2);\n  \t  height: 100%;\n  \t  width: 230px;\n\t }\n\t \n\t .quote{\n\t   color: white;\n\t   font-size: 35px;\n\t   margin-bottom: 10px;\n\t   margin-top: 25px;\n\t   font-family: 'Dancing Script', cursive;\n\t }\n\t \n</style>\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css\" ref=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=Dancing+Script\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/css?family=PT+Sans\" rel=\"stylesheet\">\n\n\n<body class=\"bodyClass\" onload=\"onLoad()\">\n\t<div class=\"divClass\">\n\t  <div class=\"tinted\">\n\t    <div class=\"quote\">Quote for you</div>\n  \t  <div class=\"myImage\"></div>\n  \t  <div class=\"myName\">\n  \t  <div>\n  \t    {facebookData.getMyFirstName()}\n  \t  </div>\n  \t </div>\n\t </div>\n  \t<div class=\"inlineBlock\">\n    \t<div class=\"message\"></div>\n\t  </div>\n  </div>\n</body>\n\n</html>","outputText":"<div>\n    <b>{facebookData.getMyFirstName()}</b>, your life has been an adventure, it’s had its up’s and down’s but that never stopped you from being the person that you embody today. The essence of your great life can be captured in a few eloquent words. Share this with your friends and help them understand you a little better.\n    </div>","introImage":"https://s3-us-west-2.amazonaws.com/whitelight-quiz-questions/introImage1500935951977.jpg","title":"Which quote describes your Life's journey?","__v":0,"description":"Find quote for your journey"}],"count":6};

exports.videoJSON = { "items": [{ "_id": "596d101c07c5d56436054e91", "updatedAt": "2017-07-17T19:29:32.581Z", "createdAt": "2017-07-17T19:29:32.581Z", "videoID": "65rRt33-1U4", "__v": 0 }, { "_id": "596e80b8ba35160c8b1c0d99", "updatedAt": "2017-07-18T21:42:16.107Z", "createdAt": "2017-07-18T21:42:16.107Z", "videoID": "fem5gO6_HKo", "__v": 0 }, { "_id": "596e80ceba35160c8b1c0d9a", "updatedAt": "2017-07-18T21:42:38.967Z", "createdAt": "2017-07-18T21:42:38.967Z", "videoID": "w3qHUeh2D7A", "__v": 0 }, { "_id": "596e80dfba35160c8b1c0d9b", "updatedAt": "2017-07-18T21:42:55.215Z", "createdAt": "2017-07-18T21:42:55.215Z", "videoID": "xwHYeusZNao", "__v": 0 }], "count": 4 }
