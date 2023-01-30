import React from 'react';
import { SAMPLE_PARAGRAPHS } from "../../Data/SAMPLE_PARAGRAPHS";
import Nav from '../NavBar/Nav';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import './App.css';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const TotalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/50";
const DefaultState = {
    selectedParagraph: "",
    timerstarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: []
}

class App extends React.Component {
    state = DefaultState

    fetchNewParagraphFallback = () => {
        const data =
            SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
            ];

        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });

        // Update the testInfo in state
        this.setState({
            ...DefaultState,
            selectedParagraph: data,
            testInfo,
        });
    };

    fetchNewParagraph = () => {
        fetch(serviceUrl)
            .then(res => res.text())
            .then(data => {
                console.log(data)
                const selectedParagraphArray = data.split("");
                const testInfo = selectedParagraphArray.map(selectedLetter => {
                    return {
                        testLetter: selectedLetter,
                        status: 'notAttempted',
                    }
                })
                this.setState({ ...DefaultState, testInfo, selectedParagraph: data })
            })
    }

    componentDidMount() {
        // this.fetchNewParagraph();
        this.fetchNewParagraphFallback();
    }
    // startAgain = () => this.fetchNewParagraph();
    startAgain = () => this.fetchNewParagraphFallback();

    startTimer = () => {
        this.setState({ timerstarted: true });
        const timer = setInterval(() => {

            if (this.state.timeRemaining > 0) {
                const timespent = TotalTime - this.state.timeRemaining;
                const wpm = timespent > 0 ? (this.state.words / timespent) * TotalTime : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1, wpm: parseInt(wpm),
                })

            }
            else {
                clearInterval(timer);
            }
        }, 1000)
    }


    handleUserInput = (inputValue) => {
        if (!this.state.timerstarted) this.startTimer();
        /**
         * 1. Handle the underflow case - all characters should be shown as not-attempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace case
         *      - Mark the [index+1] element as notAttempted
         *        (irrespective of whether the index is less than zero)
         *      - But, don't forget to check for the overflow here
         *        (index + 1 -> out of bound, when index === length-1)
         * 4. Update the status in test info
         *      1. Find out the last character in the inputValue and it's index
         *      2. Check if the character at same index in testInfo (state) matches
         *      3. Yes -> Correct
         *         No  -> Incorrect (Mistake++)
         * 5. Irrespective of the case, characters, words and wpm can be updated
         */

        const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;

        if (index < 0) {
            //if user backspace, then 0th index will be notAttempted 
            //and rest will be selected

            this.setState({
                //Here, we are appending the character and setting its
                //status as notAttempted then adding remaining testInfo
                //while slicing the character added
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters,
                words,
            });
            return;
        }

        //overflow case
        if (index >= this.state.selectedParagraph.length) {
            this.setState({ characters, words, });
            return;
        }

        //3rd logic
        //make a copy of testInfo
        const testInfo = this.state.testInfo;
        //if not an overflow case:
        if (!(index === this.state.selectedParagraph.length - 1))
            testInfo[index + 1].status = "notAttempted";

        //check for the correct typed letter
        const iscorrect = inputValue[index] === testInfo[index].testLetter;

        //update the testInfo
        testInfo[index].status = iscorrect ? "correct" : "incorrect";

        //update the state
        this.setState({
            testInfo,
            characters,
            words,
        });
        console.log(inputValue[index] + "===" + testInfo[index].testLetter + "-" + iscorrect)
    };



    render() {
        // fetch(serviceUrl)
        //     .then(res => res.text())
        //     .then(data => {
        //         console.log("info=", data);
        //     })
        return (
            <div className="app">

                <Nav />
                <Landing />
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timerstarted={this.state.timerstarted}
                    timeRemaining={this.state.timeRemaining}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />
                <Footer />

            </div>
        )
    }
}

export default App