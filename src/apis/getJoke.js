const getJoke = async () => {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (!res.ok) {
            throw new Error(`Failed to fetch joke with status: ${res.status}`)
        }

        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

export default getJoke;