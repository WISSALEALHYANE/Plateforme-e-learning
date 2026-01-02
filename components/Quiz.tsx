"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
}

interface QuizProps {
    questions: QuizQuestion[];
}

export default function Quiz({ questions }: QuizProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionSelect = (index: number) => {
        if (showResult) return;
        setSelectedOption(index);
    };

    const handleSubmit = () => {
        if (selectedOption === null) return;

        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setShowResult(true);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setShowResult(false);
        } else {
            // Quiz Finished
        }
    };

    const isLastQuestion = currentQuestion === questions.length - 1;

    return (
        <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
            <div className="mb-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">Quiz</h3>
                <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} / {questions.length}
                </span>
            </div>

            <div className="mb-6">
                <p className="text-lg font-medium mb-4">{questions[currentQuestion].question}</p>
                <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionSelect(index)}
                            className={cn(
                                "p-4 rounded-lg border cursor-pointer transition-all flex justify-between items-center",
                                selectedOption === index
                                    ? "border-accent bg-accent/5"
                                    : "border-border hover:border-accent/50",
                                showResult && index === questions[currentQuestion].correctAnswer && "border-success bg-success/10",
                                showResult && selectedOption === index && selectedOption !== questions[currentQuestion].correctAnswer && "border-destructive bg-destructive/10"
                            )}
                        >
                            <span>{option}</span>
                            {showResult && index === questions[currentQuestion].correctAnswer && (
                                <CheckCircle className="h-5 w-5 text-success" />
                            )}
                            {showResult && selectedOption === index && selectedOption !== questions[currentQuestion].correctAnswer && (
                                <XCircle className="h-5 w-5 text-destructive" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center">
                {showResult ? (
                    <div className="text-sm">
                        {selectedOption === questions[currentQuestion].correctAnswer ? (
                            <span className="text-success font-medium">Bonne réponse !</span>
                        ) : (
                            <span className="text-destructive font-medium">Mauvaise réponse.</span>
                        )}
                        {questions[currentQuestion].explanation && (
                            <p className="mt-1 text-muted-foreground">{questions[currentQuestion].explanation}</p>
                        )}
                    </div>
                ) : (
                    <div></div>
                )}

                {!showResult ? (
                    <Button onClick={handleSubmit} disabled={selectedOption === null}>
                        Valider
                    </Button>
                ) : (
                    <Button onClick={handleNext} disabled={isLastQuestion}>
                        {isLastQuestion ? "Terminé" : "Question suivante"}
                    </Button>
                )}
            </div>

            {isLastQuestion && showResult && (
                <div className="mt-4 pt-4 border-t border-border text-center animate-fade-in">
                    <p className="font-bold text-lg">Score final : {score + (selectedOption === questions[currentQuestion].correctAnswer ? 1 : 0)} / {questions.length}</p>
                </div>
            )}
        </div>
    );
}
