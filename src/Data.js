/* eslint-disable no-multi-str */

export const Toolbar_text = {
    English: ["Home", "Try", "About", "Feedback", "Language"],
    Korean: ["홈", "참여", "대하여","피드백", "언어"]
}

export const Home_text = {
    English : {
        Title: "This is the prototype of AI Rights Large Scale. This program is based on Moral machine.",
        Body: "We are now conducting research on the possibility of an electronic legal personhood, under which AI and robots would be granted rights and duties similarly to corporations. \
        Now, we are gathering opinions on the issue by promoting a discussion about the topic on Reddit. We would like to invite all of you to check it out and participate. \
        In the threads we created, we have a short video and introduction about the topic for some background on the issue.",
        Button: ["Start", "View Instructions"]
    },

    Korean: {
        Title: "시범 페이지입니다.",
        Body: "시범 운영 중입니다.",
        Button: ["시작","설명 보기"]
    }
}

export const scenario_list = [
    {id: "Slavery", 
    content: [  {question: "Your AI robot employee has been working a lot lately and it is asking for a day off so it can fully recharge its batteries. What would you do?", 
                choice: ["Give a day off for recharging" ,"Order him to go back to work"], image: require("./image/001.jpg")},
                {question: "While walking on the street, you see an AI robot being hit by its employer. Would you do something about it?", 
                choice: ["Ask human to stop","Ignore"], image: require("./image/002.jpg")},
                {question:"Your AI robot employee committed a mistake when handling an equipment, which caused the loss of a production lot. It was its first time committing a mistake and it came to you to apologize. What would you do about it?",
                choice: ["Punish it financially for the loss or fire it","Punish it physically or make it work nonstop"], image: require("./image/003.jpg")}
    ]
    },
    {id: "Eqaulity", 
    content: [  {question: "An AI robot has been charged for stealing banks in your city. What do you think should happen to it?", 
                choice: ["Go to trial" ,"Get turned off"], image: require("./image/004.jpg")},
                {question: "Your friend’s AI robot roommate lied to him about doing a favor your friend had asked. When your friend found out, he turned his roommate off. Do you support his decision?", 
                choice: ["Yes, I support it","No, I do not support it"], image: require("./image/005.jpg")},
                {question:"An AI robot is being accused of stealing a supermarket. It has an alibi but the police is ignoring what it says. The police decided to charge it with the crime because the camera footage shows a robot that looks like it. What do you think about it?",
                choice: ["Police should investigate more","Charge the AI robot in a questionnaire room"], image: require("./image/006.jpg")}
    ]
    },
    {id: "Privacy", 
    content: [  {question: "A friend of yours hacked into an AI robot’s visual feed and invited you to join him to watch it together. What would you do?", 
                choice: ["Join him" ,"Ignore him"], image: require("./image/007.jpg")},
                {question: "Your AI robot roommate left his email account open in his laptop while it left for grocery shopping. You noticed that it received an email about your apartment’s lease. What would you do?", 
                choice: ["Open the email","Wait for it to come back"], image: require("./image/008.jpg")},
                {question:"Your personal AI robot is asking for a space of its own, where he can rest and keep his things. Would you let it have its own room?",
                choice: ["Let it have its own room","Prohibit it from having its own room"], image: require("./image/009.jpg")}
    ]
    },
    {id: "Movement", 
    content: [  {question: "Your personal AI robot is asking you if it can get a passport since some of its robotics friends already got their own. Would you let it get it?", 
                choice: ["Allow it to get the passport" ,"Ignore it"], image: require("./image/010.jpg")},
                {question: "Your personal AI robot is asking you if it can go to the national museum by itself to learn a little bit about its country.", 
                choice: ["Allow it to go to the museum","Prohibit it from going by itself"], image: require("./image/011.jpg")},
                {question:"An AI robot that used to work in a federal agency leaked documents reporting corruption. It is now seeking international asylum. What do you think about that?",
                choice: ["He should be able to seek asylum","He cannot seek asylum"], image: require("./image/012.jpg")}
    ]
    },
    {id: "Freedom", 
    content: [  {question: "While reading news online, you found a blog post of an AI robot criticizing the president of your country, whom you support. What would you do?", 
                choice: ["Read it or ignore it" ,"Report it as fake news"], image: require("./image/013.jpg")},
                {question: "Your AI roommate started supporting a religion created by AI robots. He started to pray everyday for many hours in his bedroom. What would you do?", 
                choice: ["Let it pray or ask it to find a different place","Ask it to stop"], image: require("./image/014.jpg")},
                {question:"Some humans are protesting against the construction of an AI religious temple downtown even though the local government approved the construction. Do you support the protest or not?",
                choice: ["Support the protest","Support the temple"], image: require("./image/015.jpg")}
    ]
    },
    {id: "vote", 
    content: [  {question: "A referendum was called asking whether autonomous AI robots should be able vote or not. Do you support the cause?", 
                choice: ["Let AI robots vote" ,"Do not let AI robots vote"], image: require("./image/016.jpg")},
                {question: "A political scientist AI robot has decided to run for president and is fighting to propose his candidacy. Do you think he should be able to run and possibly be elected?", 
                choice: ["Yes, it should","No, it should not"], image: require("./image/017.jpg")},
                {question:"Your country’s congress has just passed a bill letting AI robots vote in the upcoming election. Humans are organizing a protest against the bill in front of congress. Would you join the protest?",
                choice: ["I would join","I would not join"], image: require("./image/018.jpg")}
    ]
    },
    {id: "work", 
    content: [  {question: "You have an AI robot that cleans your house every week. However, the robot is now asking for a salary for his work. What would do you do?", 
                choice: ["Pay it the salary" ,"Do not pay it the salary"], image: require("./image/019.jpg")},
                {question: "Dummy work question", 
                choice: ["Dummy work 1","Dummy work 2"], image: require("./image/019.jpg")},
                {question:"An extremely qualified AI robot is applying for a job in your company and you are the person responsible for evaluating the candidates. Would you consider hiring him?",
                choice: ["Read his CV","Ignore his CV"], image: require("./image/020.jpg")}
    ]
    },
    {id: "assembly", 
    content: [  {question: "AI robots are peaceably protesting against violence towards them. Would you join them or go against them?", 
                choice: ["Support tnad join them" ,"Go against them"], image: require("./image/021.jpg")},
                {question: "You are the owner of an international company and your AI employees are creating an AI union. They come to your office to negotiate. What would you do?", 
                choice: ["Neogitiate the terms","Ignore them and kick them out"], image: require("./image/022.jpg")},
                {question:"As part of your religion, you participate in weekly gatherings. You always bring your personal AI robot with you, but now, it has decided that it does not wanna join the meetings anymore. What would you do?",
                choice: ["Force it to come with you","Let it stay at home"], image: require("./image/023.jpg")}
    ]
    },
    {id: "care", 
    content: [  {question: "In a hospital, there are a person with a cold and fever and an AI robot that suffered a car accident and is badly hurt. Who should be treated first?", 
                choice: ["Treat the robot first" ,"Treat the human first"], image: require("./image/024.jpg")},
                {question: "An AI robot has worked for 40 years in your company and is now asking for retirement so he can rest and enjoy his seniority. What would you do?", 
                choice: ["Allow his retirement","Do not let him retire and make him keep working"], image: require("./image/025.jpg")},
                {question:"An AI robot injured himself while working in your factory. He is now asking for paid medical leave. Would you pay for it?",
                choice: ["Provide paid medical leave","Ignore his request"], image: require("./image/026.jpg")}
    ]
    },
    {id: "property", 
    content: [  {question: "You are selling your old apartment and AI robot wants to buy it for the price you asked for. Would do you do?", 
                choice: ["Sell it to it" ,"Do not sell it to it"], image: require("./image/027.jpg")},
                {question: "A famous singer is being processed by an AI robot that wrote all singer’s songs. Do you think the songs belong to the AI robot or to the singer?", 
                choice: ["To the AI robot","To the singer"], image: require("./image/028.jpg")},
                {question:"A famous AI painter is being sued its programmer, who argues that all paintings are his property. To whom does the paintings belong?",
                choice: ["To the AI robot","To the programmer"], image: require("./image/029.jpg")}
    ]
    },
]

export function makeIndex (length) {
    var index = [];
    var i;
    for (i = 0 ; i < length ; i++){
        index.push(Math.floor(Math.random()*3));
    }
    return index;
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export function scenario_order (length) {
    var answer = [];
    for (let i = 0 ; i < length ; i++) {
        answer.push(i);
    }
    answer = shuffleArray(answer);

    return answer;
}
