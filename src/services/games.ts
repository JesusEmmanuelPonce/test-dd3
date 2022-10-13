export const getWord = () => {

    const respose = fetch("words.txt")
        .then(res => {
            return res.text()
        })
        .then(data => {

            const words = data.split("\n")

            let allWords: string[] = [] ;

            words.forEach(word => {
                if(word.length === 5) {
                    allWords.push(word);
                }
            });

            const totalWord = allWords.length
            const randomWord = Math.floor(Math.random() * totalWord);

            return allWords[randomWord];

        }).catch(e => console.log(e))

    return respose;
}