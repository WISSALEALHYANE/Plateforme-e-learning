import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/data/courses";

interface QuizComponentProps {
  quiz: Quiz[];
  courseTitle: string;
}

const QuizComponent = ({ quiz, courseTitle }: QuizComponentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quiz.length).fill(null));

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === quiz[index].correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers(new Array(quiz.length).fill(null));
  };

  const currentQuiz = quiz[currentQuestion];
  const allAnswered = answers.every((answer) => answer !== null);

  if (showResult) {
    const percentage = Math.round((score / quiz.length) * 100);
    return (
      <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
        <div className={`text-6xl mb-4 ${percentage >= 70 ? "text-success" : "text-destructive"}`}>
          {percentage >= 70 ? "🎉" : "📚"}
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {percentage >= 70 ? "Félicitations !" : "Continuez vos efforts !"}
        </h3>
        <p className="text-muted-foreground mb-6">
          Vous avez obtenu <span className="font-bold text-foreground">{score}/{quiz.length}</span> ({percentage}%)
        </p>
        
        <div className="space-y-4 mb-8 text-left">
          {quiz.map((q, index) => (
            <div key={index} className={`p-4 rounded-xl border ${
              answers[index] === q.correctAnswer 
                ? "bg-success/10 border-success/30" 
                : "bg-destructive/10 border-destructive/30"
            }`}>
              <div className="flex items-start gap-3">
                {answers[index] === q.correctAnswer ? (
                  <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-medium text-foreground">{q.question}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Réponse correcte : {q.options[q.correctAnswer]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button onClick={handleReset} variant="accent" size="lg">
          <RotateCcw className="h-4 w-4 mr-2" />
          Recommencer le quiz
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 border border-border/50">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} sur {quiz.length}
        </span>
        <div className="flex gap-1">
          {quiz.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 rounded-full transition-colors ${
                index === currentQuestion
                  ? "bg-accent"
                  : answers[index] !== null
                  ? "bg-primary"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-6">
        {currentQuiz.question}
      </h3>

      <div className="space-y-3 mb-8">
        {currentQuiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            className={`w-full p-4 text-left rounded-xl border transition-all ${
              selectedAnswer === index
                ? "border-accent bg-accent/10"
                : "border-border hover:border-accent/50 hover:bg-muted/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  selectedAnswer === index
                    ? "border-accent bg-accent"
                    : "border-muted-foreground"
                }`}
              >
                {selectedAnswer === index && (
                  <div className="h-2 w-2 rounded-full bg-accent-foreground" />
                )}
              </div>
              <span className="text-foreground">{option}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Précédent
        </Button>

        <div className="flex gap-2">
          {currentQuestion < quiz.length - 1 ? (
            <Button onClick={handleNext} disabled={selectedAnswer === null}>
              Suivant
            </Button>
          ) : (
            <Button
              variant="accent"
              onClick={handleSubmit}
              disabled={!allAnswered}
            >
              Terminer le quiz
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
