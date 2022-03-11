import Head from 'next/head';

const About = () => {
    return (
        <>
        <Head>
            <title>About Mikael Sjövind</title>
            <meta name="description" content="Mikael Sjövind, digital creator from Gothenburg" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <article className="max-w-screen-sm mx-auto my-12 prose px-6">
            <h1 className="font-bold leading-tight text-gray-900 text-3xl">About Mikael Sjövind</h1>
            <p>Digital creator from Gothenburg, Sweden, who love to carry the vision of digital products and see them come to life.</p>
            <ul>
                <li>I feel really motivated when I work in a team 👥 with highly talented people.</li>
                <li>I want my work to matter for future generations and would like to work on a product which brings real and sustainable value 🌎</li>
                <li>I've had many roles over the years but I focus on the role of an digial architect 🎯 as this role utilizes all my skills to it's maximum capacity and I get to satisfy my personal characteristics.</li>
            </ul>
            <p>I am what they call a "blue" person. I get the oxytocin flowing by analyzing and organizing stuff. I love to solve problems by breaking them down into small pieces 🧩 and I turn to my Apple Pencil ✍🏻 to visualize my thoughts for my self and others.</p>
            <p>I do proper research to strengthen my decisions as I'm not too keen on takings risks, unless they are seen as experiments 🧪. I also love to have room for deep thinking 🤔 and rather not spend time exposed to ad-hoc communications.</p>
        </article>
        </>
    );
}

export default About;