'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'

export default function QuizApp() {
  const [currentView, setCurrentView] = useState('main')
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [userName, setUserName] = useState('')
  const [answers, setAnswers] = useState([])
  const [progress, setProgress] = useState(0)

  const quizTypes = [
    {
      id: 1,
      title: "마이인터뷰테스트",
      subtitle: "나는 어떤 사람일까?",
      imageSrc: "/api/placeholder/150/150",
      mainCharacter: "🐻",
      questions: [
        {
          id: 1,
          text: "이번 주 로또 1등 당첨자가 30억을 받았다고 한다",
          options: [
            { text: "와 30억이면 뭐부터 실시 일마정도 줘지", value: "active" },
            { text: "와 30억이면 진짜 부럽다고 생각", value: "passive" }
          ]
        },
        {
          id: 2,
          text: "혼자 여행을 떠나보니",
          options: [
            { text: "새로운 기분이지만 텐션이 떨어진다", value: "social" },
            { text: "혼자 여행이 이렇게 좋은거구나 생각한다", value: "individual" }
          ]
        },
        {
          id: 3,
          text: "친구가 고민을 이야기할 때",
          options: [
            { text: "직설적으로 답을 찾아준다", value: "direct" },
            { text: "공감하면서 들어준다", value: "empathetic" }
          ]
        },
        {
          id: 4,
          text: "여행지에서 맛집을 발견했을 때",
          options: [
            { text: "SNS에 바로 공유한다", value: "sharing" },
            { text: "나만 알고 있는다", value: "private" }
          ]
        },
        {
          id: 5,
          text: "주변 사람들이 보는 나는?",
          options: [
            { text: "활발하고 재미있는 사람", value: "outgoing" },
            { text: "차분하고 신중한 사람", value: "calm" }
          ]
        }
      ],
      results: {
        active: {
          title: "활동적인 에너자이저",
          description: "당신은 언제나 에너지가 넘치고 새로운 것을 찾아다니는 활력형이에요!"
        },
        passive: {
          title: "신중한 계획가",
          description: "당신은 모든 일을 꼼꼼하게 계획하고 진행하는 신중형이에요!"
        }
      }
    },
    {
      id: 2,
      title: "요즘 내 상태 테스트",
      subtitle: "당신의 현재 상태는?",
      imageSrc: "/api/placeholder/150/150",
      mainCharacter: "🐧",
      questions: [
        {
          id: 1,
          text: "요즘 나의 에너지 레벨은?",
          options: [
            { text: "넘치는 에너지! 할 일이 많아도 즐겁다", value: "high" },
            { text: "적당히 편안한 상태를 유지중", value: "medium" }
          ]
        },
        {
          id: 2,
          text: "일할 때 나의 모습은?",
          options: [
            { text: "계획적으로 천천히 진행한다", value: "planned" },
            { text: "몰입해서 빠르게 처리한다", value: "intense" }
          ]
        },
        {
          id: 3,
          text: "휴식시간에 주로 하는 것은?",
          options: [
            { text: "친구들과 수다 떨기", value: "social" },
            { text: "혼자만의 시간 보내기", value: "alone" }
          ]
        },
        {
          id: 4,
          text: "스트레스 받을 때 나는?",
          options: [
            { text: "운동이나 활동으로 해소한다", value: "active" },
            { text: "음악 듣기나 명상으로 풀어낸다", value: "calm" }
          ]
        },
        {
          id: 5,
          text: "최근 가장 자주 하는 생각은?",
          options: [
            { text: "더 나은 미래를 위한 계획", value: "future" },
            { text: "현재의 순간을 즐기는 것", value: "present" }
          ]
        }
      ],
      results: {
        high: {
          title: "에너지 넘치는 활력파",
          description: "당신은 지금 매우 건강하고 활기찬 상태입니다!"
        },
        medium: {
          title: "안정적인 밸런서",
          description: "당신은 지금 균형잡힌 편안한 상태를 유지하고 있어요!"
        }
      }
    }
  ]

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz)
    setCurrentView('name')
    setProgress(0)
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

  const renderMain = () => (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="font-bold text-xl mb-2">✨ 내 취향을 찾아! 나를 보여주는</div>
        <div className="text-2xl font-bold">MYMY TEST</div>
        <div className="text-xl">마이마이 테스트</div>
      </div>
      
      <div className="space-y-4">
        {quizTypes.map((quiz) => (
          <div 
            key={quiz.id}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleQuizSelect(quiz)}
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{quiz.mainCharacter}</div>
              <div>
                <div className="font-bold">{quiz.title}</div>
                <div className="text-gray-600 text-sm">{quiz.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderNameInput = () => (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">{selectedQuiz?.title}</div>
          <div className="text-6xl mb-4">{selectedQuiz?.mainCharacter}</div>
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
            onClick={() => userName.trim() && setCurrentView('quiz')}
            className="mt-4 w-full max-w-xs bg-pink-400 hover:bg-pink-500 text-white"
          >
            시작하기
          </Button>
        </div>
      </div>
    </div>
  )

  const renderQuiz = () => {
    if (!selectedQuiz || !selectedQuiz.questions[answers.length]) return null

    const currentQuestion = selectedQuiz.questions[answers.length]

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
            <div className="text-gray-600 text-sm mb-4">Question {answers.length + 1}</div>
            <div className="text-xl font-bold">{currentQuestion.text}</div>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
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
    if (!selectedQuiz) return null

    const mainAnswer = answers[0] // 간단한 예시로 첫 번째 답변을 기준으로 결과 결정
    const resultData = selectedQuiz.results[mainAnswer]

    return (
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="text-center">
            <div className="text-xl font-bold mb-4">결과는...</div>
            <div className="text-6xl mb-6">{selectedQuiz.mainCharacter}</div>
            <div className="text-lg font-bold mb-2">{userName}님의 상태는</div>
            <div className="text-2xl font-bold mb-6">{resultData.title}</div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-gray-600">
                {resultData.description}
              </div>
            </div>

            <Button 
              onClick={() => {
                setCurrentView('main')
                setSelectedQuiz(null)
                setAnswers([])
                setUserName('')
                setProgress(0)
              }}
              className="w-full bg-pink-400 hover:bg-pink-500 text-white"
            >
              다른 테스트 하기
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4">
      {currentView === 'main' && renderMain()}
      {currentView === 'name' && renderNameInput()}
      {currentView === 'quiz' && renderQuiz()}
      {currentView === 'result' && renderResult()}
    </div>
  )
}