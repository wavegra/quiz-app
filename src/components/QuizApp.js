'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Progress } from './ui/progress'
import { QuizCard } from './ui/QuizCard'
import { quizzes } from './quizzes'

const QuizApp = () => {
  const [currentView, setCurrentView] = useState('main')
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [userName, setUserName] = useState('')
  const [answers, setAnswers] = useState([])
  const [progress, setProgress] = useState(0)

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz)
    setCurrentView('name')
  }

  const handleNameSubmit = (e) => {
    e.preventDefault()
    if (userName.trim()) {
      setCurrentView('quiz')
      setAnswers([])
      setProgress(0)
    }
  }

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    
    if (newAnswers.length === selectedQuiz.questions.length) {
      setCurrentView('result')
    } else {
      setProgress((newAnswers.length / selectedQuiz.questions.length) * 100)
    }
  }

  const calculateResult = (answers) => {
    // 퀴즈나 답변이 없는 경우 체크
    if (!selectedQuiz || !answers || answers.length === 0) {
      console.error('퀴즈 또는 답변이 없습니다.');
      return null;
    }

    try {
      // 퀴즈에 calculateResult 함수가 있는 경우 해당 함수 사용
      if (typeof selectedQuiz.calculateResult === 'function') {
        return selectedQuiz.calculateResult(answers);
      }

      // 퀴즈에 calculateResult 함수가 없는 경우 기본 계산 로직 사용
      const counts = {};
      answers.forEach(answer => {
        counts[answer] = (counts[answer] || 0) + 1;
      });

      // 가장 많이 선택된 답변을 결과로 사용
      let maxCount = 0;
      let result = Object.keys(selectedQuiz.results)[0]; // 기본값으로 첫 번째 결과 사용

      Object.entries(counts).forEach(([answer, count]) => {
        if (count > maxCount) {
          maxCount = count;
          result = answer;
        }
      });

      // 결과가 유효한지 확인
      if (!selectedQuiz.results[result]) {
        console.error('유효하지 않은 결과:', result);
        result = Object.keys(selectedQuiz.results)[0]; // 폴백으로 첫 번째 결과 사용
      }

      return result;
    } catch (error) {
      console.error('결과 계산 중 오류:', error);
      return Object.keys(selectedQuiz.results)[0]; // 에러 발생 시 첫 번째 결과 반환
    }
  }

  const resetQuiz = () => {
    setCurrentView('main')
    setSelectedQuiz(null)
    setUserName('')
    setAnswers([])
    setProgress(0)
  }

  const renderMain = () => (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="font-bold text-xl mb-2">✨ 내 취향을 찾아! 나를 보여주는</div>
        <div className="text-2xl font-bold">TEST PLANET</div>
        <div className="text-xl">테스트플래닛</div>
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
              onClick={handleNameSubmit}
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
      // MBTI 퀴즈인 경우 직접 퀴즈의 calculateResult 함수 사용
      const result = selectedQuiz.calculateResult(answers);
      
      return (
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-center">
              <div className="text-xl font-bold mb-4">결과는...</div>
              <div className="text-6xl mb-6">{selectedQuiz.mainCharacter}</div>
              <div className="text-lg font-bold mb-2">
                {userName}님의 결과는
              </div>
              
              <div className="text-2xl font-bold mb-6">
                {result.title}
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="text-gray-600">
                  {result.description}
                </div>
              </div>
  
              {/* MBTI 결과 추가 정보 표시 */}
              {result.traits && (
                <div className="mb-6">
                  <div className="font-bold mb-2">주요 특성</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {result.traits.map((trait, index) => (
                      <span key={index} className="px-3 py-1 bg-pink-100 rounded-full text-sm">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              )}
  
              {result.details && (
                <div className="mb-6 text-left">
                  <div className="font-bold mb-2">상세 특징</div>
                  <ul className="list-disc pl-5 space-y-2">
                    {result.details.map((detail, index) => (
                      <li key={index} className="text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 약점 섹션 추가 */}
              {result.weaknesses && (
                <div className="mb-6 text-left">
                  <div className="font-bold mb-2">약점</div>
                  <ul className="list-disc pl-5 space-y-2">
                    {result.weaknesses.map((weakness, index) => (
                      <li key={index} className="text-gray-600">{weakness}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 추천 직업 섹션 추가 */}
              {result.careerPaths && (
                <div className="mb-6">
                  <div className="font-bold mb-2">추천 직업</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {result.careerPaths.map((career, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              )}
  
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
    } catch (error) {
      console.error('Result rendering error:', error);
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="max-w-md mx-auto p-4">
        {currentView === 'main' && renderMain()}
        {currentView === 'name' && renderNameInput()}
        {currentView === 'quiz' && renderQuiz()}
        {currentView === 'result' && renderResult()}
      </div>
    </div>
  )
}

export default QuizApp
  