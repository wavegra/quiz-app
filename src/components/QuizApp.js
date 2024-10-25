'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Progress } from './ui/progress'
import { QuizCard } from './ui/QuizCard'
import { quizzes } from './quizzes'


export default function QuizApp() {
  const [currentView, setCurrentView] = useState('main')
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [userName, setUserName] = useState('')
  const [answers, setAnswers] = useState([])
  const [progress, setProgress] = useState(0)

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz)
    setCurrentView('name')
    setProgress(0)
    setAnswers([])
  }

  const handleStartQuiz = () => {
    if (userName.trim()) {
      setCurrentView('quiz')
      setProgress(0)
    }
  }

  const handleAnswer = (answerValue) => {
    const newAnswers = [...answers, answerValue]
    setAnswers(newAnswers)
    const newProgress = (newAnswers.length / selectedQuiz.questions.length) * 100
    setProgress(newProgress)
    
    if (newAnswers.length === selectedQuiz.questions.length) {
      setCurrentView('result')
    }
  }

  const resetQuiz = () => {
    setCurrentView('main')
    setSelectedQuiz(null)
    setAnswers([])
    setUserName('')
    setProgress(0)
  }

  const renderMain = () => (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="font-bold text-xl mb-2">✨ 내 취향을 찾아! 나를 보여주는</div>
        <div className="text-2xl font-bold">MYMY TEST</div>
        <div className="text-xl">마이마이 테스트</div>
      </div>
      
      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <QuizCard
            key={`quiz-${quiz.id}`}
            quiz={quiz}
            onStart={() => handleQuizSelect(quiz)}
          />
        ))}
      </div>
    </div>
  )

  const renderNameInput = () => {
    if (!selectedQuiz) return null;

    return (
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">{selectedQuiz.title}</div>
            <div className="text-6xl mb-4">{selectedQuiz.mainCharacter}</div>
            <div className="font-bold">__의 상태는? 이름을 알려주세요 ▼</div>
            
            <div className="mt-6">
              <Input
                type="text"
                placeholder="이름을 입력해주세요"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="max-w-xs mx-auto text-center"
              />
            </div>

            <Button 
              onClick={handleStartQuiz}
              className="mt-4 w-full max-w-xs bg-pink-400 hover:bg-pink-500 text-white"
            >
              시작하기
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const renderQuiz = () => {
    if (!selectedQuiz || !selectedQuiz.questions[answers.length]) return null;

    const currentQuestion = selectedQuiz.questions[answers.length];

    return (
      <div className="max-w-md mx-auto">
        <div className="fixed top-0 left-0 w-full h-2 bg-gray-200">
          <div 
            className="h-full bg-pink-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md mt-4">
          <div className="text-center mb-6">
            <div className="text-gray-600 text-sm mb-4">
              Question {answers.length + 1} / {selectedQuiz.questions.length}
            </div>
            <div className="text-xl font-bold">{currentQuestion.text}</div>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={`option-${currentQuestion.id}-${index}`}
                className="w-full p-4 text-left border-2 border-pink-200 rounded-lg hover:bg-pink-50 transition-colors"
                onClick={() => handleAnswer(option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderResult = () => {
    if (!selectedQuiz) return null;
  
    try {
      let resultType;
      
      if (selectedQuiz.id === 'mbti-quiz') {
        resultType = selectedQuiz.calculateResult(answers);
      } 
      // 동물, 인터뷰, 상태 테스트인 경우
      else if (['animal-quiz', 'interview-quiz', 'status-quiz'].includes(selectedQuiz.id)) {
        const resultCounts = answers.reduce((acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1;
          return acc;
        }, {});
        resultType = Object.entries(resultCounts)
          .sort(([,a], [,b]) => b - a)[0][0];
      }
      // 다른 퀴즈들의 경우 - 첫번째 답변을 결과로 사용
      else {
        resultType = answers[0] || Object.keys(selectedQuiz.results)[0];
      }
  
      // 결과 타입이 없거나 유효하지 않은 경우
      if (!selectedQuiz.results[resultType]) {
        resultType = Object.keys(selectedQuiz.results)[0];
      }
  
      const resultData = selectedQuiz.results[resultType];
  
      return (
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-center">
              <div className="text-xl font-bold mb-4">결과는...</div>
              <div className="text-6xl mb-6">{selectedQuiz.mainCharacter}</div>
              <div className="text-lg font-bold mb-2">
                {userName}님의 {selectedQuiz.id === 'mbti-quiz' ? 'MBTI' : '결과'}는
              </div>
              <div className="text-2xl font-bold mb-6">
                {resultData.title || resultType}
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="text-gray-600">
                  {resultData.description}
                </div>
                {resultData.traits && (
                  <div className="mt-4">
                    <div className="font-bold mb-2">당신의 특징:</div>
                    <ul className="text-left list-disc list-inside">
                      {resultData.traits.map((trait, index) => (
                        <li key={`trait-${index}`} className="text-gray-600">{trait}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
  
              <Button 
                onClick={resetQuiz}
                className="w-full bg-pink-400 hover:bg-pink-500 text-white"
              >
                다른 테스트 하기
              </Button>
            </div>
          </div>
        </div>
      );
  
    } catch (error) {
      console.error('Result calculation error:', error);
      
      // 안전하게 결과 데이터 확인
      if (!selectedQuiz?.results) {
        return (
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center">
                <div className="text-xl font-bold mb-4">오류가 발생했습니다</div>
                <Button 
                  onClick={resetQuiz}
                  className="w-full bg-pink-400 hover:bg-pink-500 text-white"
                >
                  다시 시도하기
                </Button>
              </div>
            </div>
          </div>
        );
      }
      
      // 기본 결과 사용
      const fallbackType = Object.keys(selectedQuiz.results)[0];
      const resultData = selectedQuiz.results[fallbackType];
    
      return (
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-center">
              <div className="text-xl font-bold mb-4">결과는...</div>
              <div className="text-6xl mb-6">{selectedQuiz.mainCharacter}</div>
              <div className="text-gray-600 mb-6">{resultData.description}</div>
              <Button 
                onClick={resetQuiz}
                className="w-full bg-pink-400 hover:bg-pink-500 text-white"
              >
                다시 테스트하기
              </Button>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4">
      {currentView === 'main' && renderMain()}
      {currentView === 'name' && renderNameInput()}
      {currentView === 'quiz' && renderQuiz()}
      {currentView === 'result' && renderResult()}
    </div>
  )

}
