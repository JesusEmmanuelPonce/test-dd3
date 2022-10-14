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

                    const normalizeText = word
                                            .normalize('NFD')
                                            .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
                                            .normalize();

                    allWords.push(normalizeText);
                }
            });

            const totalWord = allWords.length
            const randomWord = Math.floor(Math.random() * totalWord);

            return allWords[randomWord];

        }).catch(e => console.log(e))

    return respose;
}