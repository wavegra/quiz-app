'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card } from './ui/card'
import { Progress } from './ui/progress'
import { quizzes } from './quizzes'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select'

const QuizApp = () => {
  const [currentView, setCurrentView] = useState('main')
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [userName, setUserName] = useState('')
  const [answers, setAnswers] = useState([])
  const [progress, setProgress] = useState(0)
  const [subjectSelections, setSubjectSelections] = useState({});
  const [grades, setGrades] = useState({});

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
    console.log('선택된 답변:', answer); // 디버깅용
    const formattedAnswer = selectedQuiz.id === 'mbti-quiz' 
    ? { type: answer } // MBTI의 경우 value 값을 type으로 저장
    : answer; // 성적 입력의 경우 그대로 저장


    const newAnswers = [...answers, formattedAnswer];
    console.log('전체 답변 목록:', newAnswers); // 디버깅용
    setAnswers(newAnswers)
    
    if (newAnswers.length === selectedQuiz.questions.length) {
      setCurrentView('result')
    } else {
      setProgress((newAnswers.length / selectedQuiz.questions.length) * 100)
    }
  }

  const calculateResult = (answers) => {
    if (!selectedQuiz || !answers || answers.length === 0) {
      console.error('퀴즈 또는 답변이 없습니다.');
      return null;
    }
  
    try {
      // MBTI 퀴즈인 경우 직접 퀴즈의 calculateResult 함수 호출
      if (selectedQuiz.id === 'mbti-quiz') {
        const result = selectedQuiz.calculateResult(answers);
        console.log('MBTI 결과:', result); // 디버깅용
        return result;
      }
  
      // 다른 퀴즈의 경우 기존 로직 유지
      const counts = {};
      answers.forEach(answer => {
        counts[answer] = (counts[answer] || 0) + 1;
      });
  
      let maxCount = 0;
      let result = Object.keys(selectedQuiz.results)[0];
  
      Object.entries(counts).forEach(([answer, count]) => {
        if (count > maxCount) {
          maxCount = count;
          result = answer;
        }
      });
  
      return result;
    } catch (error) {
      console.error('결과 계산 중 오류:', error);
      return Object.keys(selectedQuiz.results)[0];
    }
  };

  const resetQuiz = () => {
    setCurrentView('main')
    setSelectedQuiz(null)
    setUserName('')
    setAnswers([])
    setProgress(0)
    setSubjectSelections({})
    setGrades({})
  }

  const renderMain = () => {
    const examQuizzes = quizzes.filter(quiz => quiz.category === 'exam');
    const popularQuizzes = quizzes.filter(quiz => quiz.isPopular).slice(0, 3);
    const normalQuizzes = quizzes.filter(quiz => !quiz.isPopular && quiz.category !== 'exam');
  
    return (
      <>
        <div className="text-center pt-8 pb-4">
          <div className="text-lg mb-2">✨ 내 취향을 찾아! 나를 보여주는</div>
          <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            TEST PLANET
          </div>
          <div className="text-xl">테스트플래닛</div>
        </div>
  
        <div className="space-y-6">
          <div>
            <div className="font-bold text-lg mb-3 pl-1">📚 수험생</div>
            <div className="space-y-4">
              {examQuizzes.map((quiz) => (
                <Card 
                  key={quiz.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer p-5 flex items-center"
                  onClick={() => handleQuizSelect(quiz)}
                >
                  <div className="text-4xl mr-5">{quiz.mainCharacter}</div>
                  <div>
                    <div className="font-bold text-lg mb-1">{quiz.title}</div>
                    <div className="text-gray-600 text-base">{quiz.subtitle}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
  
          <div>
            <div className="font-bold text-lg mb-3 pl-1">🔥 인기</div>
            <div className="space-y-4">
              {popularQuizzes.map((quiz) => (
                <Card 
                  key={quiz.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer p-5 flex items-center"
                  onClick={() => handleQuizSelect(quiz)}
                >
                  <div className="text-4xl mr-5">{quiz.mainCharacter}</div>
                  <div>
                    <div className="font-bold text-lg mb-1">{quiz.title}</div>
                    <div className="text-gray-600 text-base">{quiz.subtitle}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
  
          <div>
            <div className="font-bold text-lg mb-3 pl-1">🎮 일반</div>
            <div className="space-y-4">
              {normalQuizzes.map((quiz) => (
                <Card 
                  key={quiz.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer p-5 flex items-center"
                  onClick={() => handleQuizSelect(quiz)}
                >
                  <div className="text-4xl mr-5">{quiz.mainCharacter}</div>
                  <div>
                    <div className="font-bold text-lg mb-1">{quiz.title}</div>
                    <div className="text-gray-600 text-base">{quiz.subtitle}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }

  const renderNameInput = () => {
    const isYeseul = userName === '홍예슬' || userName === '예슬';
  
    return (
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{selectedQuiz.title}</h2>
          <p className="text-gray-600">{selectedQuiz.subtitle}</p>
        </div>
  
        <form onSubmit={handleNameSubmit} className="space-y-4">
          <Input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="이름을 입력해주세요"
            className="w-full"
          />
  
          {isYeseul && (
            <div className="text-center text-lg font-bold animate-bounce text-pink-500">
              💗 홍예슬 사랑해 💗
            </div>
          )}
  
          <Button 
            type="submit" 
            className="w-full bg-pink-400 hover:bg-pink-500 text-white"
            disabled={!userName.trim()}
          >
            시작하기
          </Button>
        </form>
      </div>
    );
  };
  const renderQuiz = () => {
    if (!selectedQuiz || !selectedQuiz.questions[answers.length]) return null;

    const currentQuestion = selectedQuiz.questions[answers.length];
    const isYeseul = userName === '홍예슬' || userName === '예슬';

    if (currentQuestion.type === 'grades') {
      return renderGradeQuestion(currentQuestion);
    }

    return (
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-md mt-4">
          <div className="text-center mb-6">
            <div className="text-gray-600 text-base mb-4">
              Question {answers.length + 1} of {selectedQuiz.questions.length}
            </div>
            <div className="text-xl font-bold mb-4">{currentQuestion.text}</div>
            
            <div className="space-y-3">
              {currentQuestion.options?.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full bg-white hover:bg-pink-50 text-gray-800 border-2 border-pink-200 p-4"
                >
                  {option.text}
                </Button>
              ))}
            </div>

            {isYeseul && (
              <div className="mt-6 text-pink-500 font-bold animate-bounce">
                💖 홍예슬 사랑해 💖
              </div>
            )}
          </div>

          <div className="mt-4">
            <Progress value={progress} className="bg-pink-100" indicatorclassname="bg-pink-500" />
          </div>
        </div>
      </div>
    );
  };
  

  const renderGradeQuestion = (question) => {
    const isYeseul = userName === '홍예슬' || userName === '예슬';
    
    const isFormValid = () => {
      const hasAllSubjects = Object.keys(question.subjects).every(key => {
        const subject = question.subjects[key];
        if (subject.type === 'single') {
          return grades[key];
        } else if (subject.type === 'select') {
          return subjectSelections[key] && grades[key];
        } else if (subject.type === 'complex') {
          return subjectSelections[`${key}_type`] && subjectSelections[key] && grades[key];
        }
        return false;
      });
      
      const hasValidGrades = Object.keys(grades).every(key => {
        const grade = Number(grades[key]);
        return grade && grade >= 1 && grade <= 9;
      });
      
      return hasAllSubjects && hasValidGrades;
    };
  
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="text-center mb-6">
            <div className="text-gray-600 text-base mb-4">
              Question {answers.length + 1} of {selectedQuiz.questions.length}
            </div>
            <div className="text-xl font-bold mb-6">{question.text}</div>
  
            <div className="space-y-4">
              {Object.entries(question.subjects).map(([key, subject]) => (
                <div key={key} className="space-y-2">
                  <label className="block text-left font-medium">{subject.name}</label>
                  
                  {/* 일반 과목 (국어, 영어 등) */}
                  {subject.type === 'single' && (
                    <Input
                      type="number"
                      min="1"
                      max="9"
                      step="1"
                      value={grades[key] || ''}
                      placeholder="등급 입력 (1-9)"
                      onChange={(e) => {
                        const value = Math.floor(Number(e.target.value));
                        if (!isNaN(value) && value >= 1 && value <= 9) {
                          setGrades(prev => ({
                            ...prev,
                            [key]: value
                          }));
                        }
                      }}
                      className="w-full"
                    />
                  )}
  
                  {/* 수학 선택 */}
                  {subject.type === 'select' && (
                    <div className="space-y-2">
                      <Select
                        value={subjectSelections[key] || ''}
                        onValueChange={(value) => {
                          setSubjectSelections(prev => ({
                            ...prev,
                            [key]: value
                          }));
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="과목 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          {subject.options.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        type="number"
                        min="1"
                        max="9"
                        step="1"
                        value={grades[key] || ''}
                        placeholder="등급 입력 (1-9)"
                        onChange={(e) => {
                          const value = Math.floor(Number(e.target.value));
                          if (!isNaN(value) && value >= 1 && value <= 9) {
                            setGrades(prev => ({
                              ...prev,
                              [key]: value
                            }));
                          }
                        }}
                        className="w-full"
                      />
                    </div>
                  )}
  
                  {/* 탐구 영역 */}
                  {subject.type === 'complex' && (
  <div className="space-y-2">
    <Select
      value={subjectSelections[`${key}_type`] || ''}
      onValueChange={(value) => {
        setSubjectSelections(prev => ({
          ...prev,
          [`${key}_type`]: value,
          [key]: ''
        }));
        setGrades(prev => ({
          ...prev,
          [key]: ''
        }));
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="탐구 영역 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="social">사회탐구</SelectItem>
        <SelectItem value="science">과학탐구</SelectItem>
      </SelectContent>
    </Select>

    {subjectSelections[`${key}_type`] && (
      <Select
        value={subjectSelections[key] || ''}
        onValueChange={(value) => {
          console.log('Selected subject:', value); // 디버깅용
          setSubjectSelections(prev => ({
            ...prev,
            [key]: value
          }));
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="과목 선택" />
        </SelectTrigger>
        <SelectContent>
          {subjectSelections[`${key}_type`] === 'social' ? (
            [
              "생활과 윤리",
              "윤리와 사상",
              "한국지리",
              "세계지리",
              "동아시아사",
              "세계사",
              "정치와 법",
              "경제",
              "사회문화"
            ].map(subject => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))
          ) : (
            [
              "물리학Ⅰ",
              "물리학Ⅱ",
              "화학Ⅰ",
              "화학Ⅱ",
              "생명과학Ⅰ",
              "생명과학Ⅱ",
              "지구과학Ⅰ",
              "지구과학Ⅱ"
            ].map(subject => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    )}

    {subjectSelections[key] && (
      <Input
        type="number"
        min="1"
        max="9"
        step="1"
        value={grades[key] || ''}
        placeholder="등급 입력 (1-9)"
        onChange={(e) => {
          const value = Math.floor(Number(e.target.value));
          if (!isNaN(value) && value >= 1 && value <= 9) {
            setGrades(prev => ({
              ...prev,
              [key]: value
            }));
          }
        }}
        className="w-full"
      />
    )}
  </div>
)}
                </div>
              ))}
            </div>
  
            <Button
              onClick={() => {
                console.log('Current selections:', subjectSelections);
                console.log('Current grades:', grades);
                handleAnswer({
                  subjects: subjectSelections,
                  grades: grades
                });
              }}
              className="w-full mt-6 bg-pink-400 hover:bg-pink-500 text-white"
              disabled={!isFormValid()}
            >
              다음
            </Button>
  
            {isYeseul && (
              <div className="mt-4 text-pink-500 font-bold animate-bounce">
                💖 홍예슬 사랑해 💖
              </div>
            )}
          </div>
  
          <div className="mt-4">
            <Progress value={progress} className="bg-pink-100" indicatorClassName="bg-pink-500" />
          </div>
        </div>
      </div>
    );
  };
  const renderResult = () => {
    try {
      const result = selectedQuiz.calculateResult(answers);
      const isYeseul = userName === '홍예슬' || userName === '예슬';
      
      return (
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg p-5 shadow-md">
            <div className="text-center space-y-4">
              {/* 상단 제목 */}
              <h2 className="text-lg">결과는...</h2>
              
              {/* 이모지 */}
              <div className="text-5xl my-4">
                {selectedQuiz.mainCharacter}
              </div>
  
              {/* 예슬 특별 메시지 */}
              {isYeseul && (
                <div className="space-y-1">
                  <div className="text-base">
                    세상에서 가장 아름다운 <span className="font-bold">예슬님</span>의 결과는
                  </div>
                  <div className="text-lg font-bold animate-bounce">
                    💗 홍예슬 사랑해 💗
                  </div>
                </div>
              )}
              
              {/* MBTI 결과 */}
              <h1 className="text-2xl font-bold">
                자유로운 영혼의 연예인 (ESFP)
              </h1>
  
              {/* 설명문 */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-gray-700 text-base leading-relaxed">
                  {result.description}
                </p>
              </div>
  
              {/* 주요 특성 */}
              <div>
                <h3 className="text-lg font-bold mb-2">주요 특성</h3>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["열정적", "사교적", "낙천적", "즐거움", "자유로움"].map((trait, index) => (
                    <span key={index} className="px-3 py-1 bg-pink-50 text-pink-900 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
  
              {/* 상세 특징 */}
              <div className="text-left">
                <h3 className="text-lg font-bold mb-2">상세 특징</h3>
                <ul className="space-y-1.5 text-base">
                  {result.details?.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* 약점 */}
              <div className="text-left">
                <h3 className="text-lg font-bold mb-2">약점</h3>
                <ul className="space-y-1.5 text-base">
                  {["깊이 있는 계획 부족", "쉽게 지루해함", "장기집중 어려움"].map((weakness, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* 추천 직업 */}
              <div>
                <h3 className="text-lg font-bold mb-2">추천 직업</h3>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["엔터테이너", "이벤트 플래너", "판매직", "관광가이드"].map((career, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-50 text-purple-900 rounded-full text-sm">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
  
              {/* 다시하기 버튼 */}
              <Button 
                onClick={resetQuiz}
                className="w-full bg-pink-400 hover:bg-pink-500 text-white py-2.5 text-base mt-4"
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
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 flex items-center justify-center">
      <div className="w-full max-w-md px-4 py-8">
        {currentView === 'main' && renderMain()}
        {currentView === 'name' && renderNameInput()}
        {currentView === 'quiz' && renderQuiz()}
        {currentView === 'result' && renderResult()}
      </div>
    </div>
  );
};

export default QuizApp;