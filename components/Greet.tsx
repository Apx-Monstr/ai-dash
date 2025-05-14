import React, { useMemo } from 'react';

interface Greeting {
    greeting: string;
    welcomeMessage: string;
}

const getTimeBasedGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
};

const greetings: string[] = [
    getTimeBasedGreeting(),
    'Hola amigo',
    'Bonjour',
    'Namaste',
    'Hello there',
    'Ciao',
    'Hey buddy',
    'Salaam',
];

const welcomeMessages: string[] = [
    'Welcome to your AI Avatar Manager!',
    'Step into your AI Avatar Hub!',
    'Greetings from your AI Avatar Dashboard!',
    'Your AI Avatar Manager awaits you!',
    'Dive into your AI Avatar Control Center!',
];

const getRandomOne = <T,>(arr: T[]): T => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled[0];
};

interface GreetProps {
    userName: string;
}

const Greet: React.FC<GreetProps> = ({ userName  = "Neelesh"}) => {
    const selectedGreeting = useMemo(() => getRandomOne(greetings), []);
    const selectedWelcomeMessage = useMemo(() => getRandomOne(welcomeMessages), []);

    const result: Greeting = {
        greeting: selectedGreeting,
        welcomeMessage: selectedWelcomeMessage,
    };

    return (
        <div className="p-4 text-left pt-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                {result.greeting}, {userName}!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                {result.welcomeMessage}
            </p>
        </div>
    );
};

export default Greet;