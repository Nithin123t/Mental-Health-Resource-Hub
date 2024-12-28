// Event listener for the send message button
document.getElementById('send-message').addEventListener('click', sendMessage);

// Add event listener for the Enter key in the input field
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage(); // Call the sendMessage function
    }
});


// Data structure to hold responses with descriptions and links
const responses = {
    "exercise": {
        "description": "Exercise is widely known for its physical benefits, but its impact on mental health is just as significant. Regular physical activity is one of the most effective ways to reduce symptoms of anxiety, depression, and stress.",
        "link": "https://www.mentalhealth.gov/basics/what-is-mental-health"
    },
    "mindfulness": {
        "description": "Mindfulness is the practice of being present and fully engaged in the moment, without judgment. It can be cultivated through meditation, breathing exercises, and mindful walking.",
        "link": "https://www.mindful.org/what-is-mindfulness/"
    },
    "depression": {
        "description": "Depression is a common mental health disorder characterized by persistent sadness and a lack of interest or pleasure in previously enjoyed activities. Treatment options include therapy, medication, and lifestyle changes.",
        "link": "https://www.nimh.nih.gov/health/statistics/major-depression"
    },
    "stress relief": {
        "description": "Stress relief techniques include deep breathing exercises, progressive muscle relaxation, and mindfulness practices. These methods can help reduce stress and improve overall well-being.",
        "link": "https://www.apa.org/topics/stress"
    },
    "anxiety": {
        "description": "Anxiety is a feeling of worry, nervousness, or unease about something with an uncertain outcome. It can be managed through various techniques such as cognitive behavioral therapy (CBT), mindfulness exercises, and breathing techniques.",
        "link": "https://www.adaa.org/understanding-anxiety"
    },
    "self-care": {
        "description": "Self-care involves activities and practices that we engage in on a regular basis to reduce stress and enhance our well-being. It includes physical, emotional, and mental health practices.",
        "link": "https://www.psychologytoday.com/us/basics/self-care"
    },
    "cognitive behavioral therapy": {
        "description": "Cognitive Behavioral Therapy (CBT) is a structured, time-limited psychotherapy that focuses on the relationship between thoughts, feelings, and behaviors.",
        "link": "https://www.nimh.nih.gov/health/topics/psychotherapies"
    },
    "meditation": {
        "description": "Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness.",
        "link": "https://www.headspace.com/meditation-101/what-is-meditation"
    },
    "yoga": {
        "description": "Yoga is a physical, mental, and spiritual practice that combines physical postures, breathing exercises, and meditation to promote overall health and well-being.",
        "link": "https://www.yogajournal.com/learn/what-is-yoga"
    },
    "gratitude": {
        "description": "Practicing gratitude involves recognizing and appreciating the positive aspects of life, which can enhance mental well-being and reduce feelings of depression.",
        "link": "https://greatergood.berkeley.edu/article/item/why_gratitude_is_good"
    },
    "sleep hygiene": {
        "description": "Sleep hygiene refers to a series of habits and practices that are necessary to have good nighttime sleep quality and full daytime alertness.",
        "link": "https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html"
    },
    "social support": {
        "description": "Social support involves having friends, family, and community members who provide emotional, informational, and practical assistance.",
        "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5570520/"
    },
    "time management": {
        "description": "Effective time management allows individuals to manage their time effectively, reducing stress and improving productivity.",
        "link": "https://www.mindtools.com/pages/article/newHTE_00.htm"
    },
    "assertiveness": {
        "description": "Assertiveness is the quality of being self-assured and confident without being aggressive. It is an important skill for effective communication.",
        "link": "https://www.verywellmind.com/what-is-assertiveness-2795160"
    },
    "anger management": {
        "description": "Anger management involves techniques and strategies to control and reduce anger responses.",
        "link": "https://www.apa.org/topics/anger/control"
    },
    
    "emotional intelligence": {
        "description": "Emotional intelligence is the ability to understand and manage your own emotions, as well as the emotions of others.",
        "link": "https://www.verywellmind.com/what-is-emotional-intelligence-2795161"
    },
    "positive thinking": {
        "description": "Positive thinking involves focusing on the good in any situation and maintaining an optimistic outlook.",
        "link": "https://www.psychologytoday.com/us/basics/positive-thinking"
    },
    "boundaries": {
        "description": "Setting boundaries is essential for maintaining healthy relationships and ensuring personal well-being.",
        "link": "https://www.verywellmind.com/setting-boundaries-2795163"
    },
    "self-esteem": {
        "description": "Self-esteem refers to the overall sense of personal value or self-worth. It is crucial for mental health and well-being.",
        "link": "https://www.psychologytoday.com/us/basics/self-esteem"
    },
    "mindful eating": {
        "description": "Mindful eating is the practice of being aware of the food you are eating, savoring each bite, and recognizing hunger and fullness cues.",
        "link": "https://www.eatright.org/health/wellness/mindful-eating"
    },
    "journaling": {
        "description": "Journaling is the practice of writing down thoughts, feelings, and experiences to promote self-reflection and emotional processing.",
        "link": "https://www.psychologytoday.com/us/blog/the-meaning-our-minds/201901/the-benefits-journaling"
    },
    "art therapy": {
        "description": "Art therapy uses creative processes to help individuals express themselves and explore their emotions.",
        "link": "https://www.arttherapy.org/about-art-therapy/"
    },
    "music therapy": {
        "description": "Music therapy involves using music to address emotional, cognitive, and social needs.",
        "link": "https://www.musictherapy.org/about/overview/"
    },
    "nature therapy": {
        "description": "Nature therapy, or ecotherapy, involves spending time in nature to improve mental health and well-being.",
        "link": "https://www.psychologytoday.com/us/blog/the-nature-fix/201707/the-benefits-nature-therapy"
    },
    "breathing exercises": {
        "description": "Breathing exercises are techniques that focus on controlling breath to promote relaxation and reduce stress.",
        "link": "https://www.healthline.com/health/breathing-exercises"
    },
    "progressive muscle relaxation": {
        "description": "Progressive muscle relaxation is a technique that involves tensing and then relaxing different muscle groups to reduce physical tension.",
        "link": "https://www.verywellmind.com/progressive-muscle-relaxation-2795164"
    },
    "visualization": {
        "description": "Visualization is a mental technique that involves imagining a peaceful scene or outcome to promote relaxation and reduce anxiety.",
        "link": "https://www.verywellmind.com/what-is-visualization-2795165"
    },
    "self-compassion": {
        "description": "Self-compassion involves treating oneself with kindness and understanding during difficult times.",
        "link": "https://self-compassion.org/"
    },
    "mind-body connection": {
        "description": "The mind-body connection refers to the relationship between a person's thoughts, emotions, and physical health.",
        "link": "https://www.psychologytoday.com/us/basics/mind-body-connection"
    },
    "resilience": {
        "description": "Resilience is the ability to bounce back from adversity, trauma, or stress.",
        "link": "https://www.apa.org/topics/resilience"
    },
    "mental health stigma": {
        "description": "Mental health stigma refers to the negative attitudes and beliefs about mental health conditions that can lead to discrimination.",
        "link": "https://www.nami.org/Your-Journey/Identity-and-Cultural-Dimensions/Mental-Health-Stigma"
    },
    "support groups": {
        "description": "Support groups are gatherings of individuals who share similar experiences and provide mutual support.",
        "link": "https://www.verywellmind.com/support-groups-2795166"
    },
    "therapy": {
        "description": "Therapy is a treatment for mental health issues that involves talking to a trained professional.",
        "link": "https://www.nami.org/About-Mental-Illness/Treatments/Therapy"
    },
    "psychotherapy": {
        "description": "Psychotherapy is a treatment for mental health issues that involves talking to a trained therapist to explore thoughts, feelings, and behaviors.",
        "link": "https://www.nimh.nih.gov/health/topics/psychotherapies"
    },
    "narrative therapy": {
        "description": "Narrative therapy is a form of therapy that focuses on the stories individuals tell about their lives and how these narratives shape their identity.",
        "link": "https://www.narrativetherapycentre.com/"
    },
    "play therapy": {
        "description": "Play therapy is a therapeutic approach that uses play to help children express their feelings and experiences.",
        "link": "https://www.a4pt.org/"
    },
    "family therapy": {
        "description": "Family therapy involves working with families to improve communication and resolve conflicts.",
        "link": "https://www.verywellmind.com/family-therapy-2795167"
    },
    "group therapy": {
        "description": "Group therapy involves a therapist leading a group of individuals to discuss and work through their issues together.",
        "link": "https://www.psychologytoday.com/us/basics/group-therapy"
    },
    "exposure therapy": {
        "description": "Exposure therapy is a psychological treatment that helps individuals confront their fears in a controlled environment.",
        "link": "https://www.adaa.org/understanding-anxiety/treatment/exposure-therapy"
    },
    "dialectical behavior therapy": {
        "description": "Dialectical Behavior Therapy (DBT) is a type of cognitive-behavioral therapy that focuses on teaching skills to manage emotions and improve relationships.",
        "link": "https://www.psychologytoday.com/us/basics/dialectical-behavior-therapy"
    },
    "mindfulness-based stress reduction": {
        "description": "Mindfulness-Based Stress Reduction (MBSR) is a structured program that teaches mindfulness meditation to reduce stress.",
        "link": "https://www.umassmed.edu/cfm/mindfulness-based-programs/mbsr/"
    },
    "self-harm": {
        "description": "Self-harm refers to intentional injury to oneself as a way to cope with emotional pain.",
        "link": "https://www.nami.org/Your-Journey/Individuals-Experiencing-Mental-Illness/Self-Harm"
    },
    "suicidal thoughts": {
        "description": "Suicidal thoughts are thoughts about wanting to end one's life, which require immediate attention and support.",
        "link": "https://suicidepreventionlifeline.org/"
    },
    "mental health resources": {
        "description": "Mental health resources include hotlines, websites, and organizations that provide support and information.",
        "link": "https://www.nami.org/Your-Journey/Getting-Help"
    },
    "crisis intervention": {
        "description": "Crisis intervention involves immediate support and assistance for individuals experiencing a mental health crisis.",
        "link": "https://www.suicidepreventionlifeline.org/"
    },
    "addiction": {
        "description": "Addiction is a complex condition characterized by compulsive substance use despite harmful consequences.",
        "link": "https://www.niaaa.nih.gov/"
    },
    "substance abuse": {
        "description": "Substance abuse refers to the harmful or hazardous use of psychoactive substances, including alcohol and illicit drugs.",
        "link": "https://www.samhsa.gov/find-help/national-helpline"
    },
    "co-occurring disorders": {
        "description": "Co-occurring disorders refer to the presence of both a mental health disorder and a substance use disorder.",
        "link": "https://www.samhsa.gov/find-help/co-occurring-disorders"
    },
    "eating disorders": {
        "description": "Eating disorders are serious conditions related to persistent eating behaviors that negatively impact health, emotions, and quality of life.",
        "link": "https://www.nationaleatingdisorders.org/"
    },
    "bipolar disorder": {
        "description": "Bipolar disorder is a mental health condition characterized by extreme mood swings, including emotional highs (mania) and lows (depression).",
        "link": "https://www.nimh.nih.gov/health/statistics/bipolar-disorder"
    },
    "schizophrenia": {
        "description": "Schizophrenia is a severe mental disorder that affects how a person thinks, feels, and behaves, often characterized by delusions and hallucinations.",
        "link": "https://www.nimh.nih.gov/health/statistics/schizophrenia"
    },
    "obsessive-compulsive disorder": {
        "description": "Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by persistent, unwanted thoughts (obsessions) and repetitive behaviors (compulsions).",
        "link": "https://www.nimh.nih.gov/health/statistics/obsessive-compulsive-disorder"
    },
    "post-traumatic stress disorder": {
        "description": "Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a traumatic event.",
        "link": "https://www.nimh.nih.gov/health/statistics/post-traumatic-stress-disorder"
    },
    "generalized anxiety disorder": {
        "description": "Generalized Anxiety Disorder (GAD) is characterized by excessive, uncontrollable worry about various aspects of life.",
        "link": "https://www.nimh.nih.gov/health/statistics/generalized-anxiety-disorder"
    },
    "social anxiety disorder": {
        "description": "Social Anxiety Disorder is characterized by intense fear or anxiety in social situations, leading to avoidance of such situations.",
        "link": "https://www.nimh.nih.gov/health/statistics/social-anxiety-disorder"
    },
    "phobias": {
        "description": "Phobias are intense, irrational fears of specific objects or situations that lead to avoidance behavior.",
        "link": "https://www.adaa.org/understanding-anxiety/phobias"
    },
    "attention-deficit/hyperactivity disorder": {
        "description": "Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity.",
        "link": "https://www.nimh.nih.gov/health/statistics/adhd"
    },
    "autism spectrum disorder": {
        "description": "Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication and behavior.",
        "link": "https://www.nimh.nih.gov/health/statistics/autism-spectrum-disorder"
    },
    "personality disorders": {
        "description": "Personality disorders are a group of mental health conditions characterized by enduring patterns of behavior, cognition, and inner experience.",
        "link": "https://www.nimh.nih.gov/health/statistics/personality-disorders"
    },
    "dissociative disorders": {
        "description": "Dissociative disorders involve a disconnection between thoughts, identity, consciousness, and memory.",
        "link": "https://www.nimh.nih.gov/health/statistics/dissociative-disorders"
    },
    "seasonal affective disorder": {
        "description": "Seasonal Affective Disorder (SAD) is a type of depression that occurs at a specific time of year, usually in the winter.",
        "link": "https://www.nimh.nih.gov/health/statistics/seasonal-affective-disorder"
    },
    "mental health in children": {
        "description": "Mental health issues can affect children and adolescents, impacting their emotional, social, and academic development.",
        "link": "https://www.nimh.nih.gov/health/statistics/mental-health-in-children"
    },
    "mental health in older adults": {
        "description": "Older adults may face unique mental health challenges, including depression, anxiety, and cognitive decline.",
        "link": "https://www.nimh.nih.gov/health/statistics/mental-health-in-older-adults"
    },
    "mental health and substance use": {
        "description": "The relationship between mental health and substance use is complex, with each potentially exacerbating the other.",
        "link": "https://www.samhsa.gov/find-help/atod"
    },
    "mental health and trauma": {
        "description": "Trauma can have a profound impact on mental health, leading to conditions such as PTSD and depression.",
        "link": "https://www.nimh.nih.gov/health/topics/trauma"
    },
    "mental health and relationships": {
        "description": "Healthy relationships are crucial for mental well-being, while unhealthy relationships can contribute to mental health issues.",
        "link": "https://www.psychologytoday.com/us/basics/relationships"
    },
    "mental health and work": {
        "description": "Workplace stress and mental health issues can significantly impact job performance and overall well-being.",
        "link": "https://www.apa.org/topics/mental-health/workplace"
    },
    "mental health and physical health": {
        "description": "There is a strong connection between mental health and physical health, with each influencing the other.",
        "link": "https://www.cdc.gov/mentalhealth/learn/index.htm"
    },
    "mental health and nutrition": {
        "description": "Nutrition plays a vital role in mental health, with certain diets linked to improved mood and cognitive function.",
        "link": "https://www.psychologytoday.com/us/blog/the-healthy-mind/201901/the-connection-between-nutrition-and-mental-health"
    },
    "mental health and exercise": {
        "description": "Regular physical activity is associated with improved mental health outcomes, including reduced symptoms of anxiety and depression.",
        "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5570530/"
    },
    "mental health and sleep": {
        "description": "Sleep is essential for mental health, and poor sleep can exacerbate mental health issues.",
        "link": "https://www.sleepfoundation.org/mental-health"
    },
    "mental health and technology": {
        "description": "Technology can both positively and negatively impact mental health, influencing social interactions and access to resources.",
        "link": "https://www.psychologytoday.com/us/blog/tech-support/201901/the-impact-technology-mental-health"
    },
    "mental health advocacy": {
        "description": "Advocacy for mental health awareness and resources is crucial for reducing stigma and improving access to care.",
        "link": "https://www.nami.org/Advocacy"
    },
    "mental health policy": {
        "description": "Mental health policy involves the laws and regulations that govern mental health care and services.",
        "link": "https://www.apa.org/advocacy/mental-health"
    },
    "mental health education": {
        "description": "Education about mental health is essential for reducing stigma and promoting understanding of mental health issues.",
        "link": "https://www.mentalhealth.gov/basics/what-is-mental-health"
    },
    "mental health and community": {
        "description": "Community support plays a vital role in mental health, providing resources and social connections.",
        "link": "https://www.nami.org/Your-Journey/Identity-and-Cultural-Dimensions/Community"
    },
    "mental health and spirituality": {
        "description": "Spirituality can be an important aspect of mental health for many individuals, providing a sense of purpose and connection.",
        "link": "https://www.psychologytoday.com/us/blog/the-meaning-our-minds/201901/the-connection-between-spirituality-and-mental-health"
    }
};

// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const messages = document.querySelector('.messages');

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;
    messages.appendChild(userMessage);

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Generate bot response
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');

    // Check for keywords in user input and respond accordingly
    if (responses[userInput]) {
        botMessage.innerHTML = `${responses[userInput].description} <br><a href="${responses[userInput].link}" target="_blank">Learn more</a>`;
    } else {
        botMessage.textContent = "I'm sorry, I don't have information on that topic. Please try asking about exercise, mindfulness, depression, or stress relief.";
    }

    messages.appendChild(botMessage);
    messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
}

// Event listener for the send message button
document.getElementById('send-message').addEventListener('click', sendMessage);

// Add event listener for the Enter key in the input field
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage(); // Call the sendMessage function
    }
});