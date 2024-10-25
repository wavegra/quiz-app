export function QuizCard({ quiz, onStart }) {
    return (
      <div 
        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        onClick={onStart}
      >
        <div className="flex items-center space-x-4">
          <div className="text-4xl">{quiz.mainCharacter}</div>
          <div>
            <div className="font-bold">{quiz.title}</div>
            <div className="text-gray-600 text-sm">{quiz.subtitle}</div>
          </div>
        </div>
      </div>
    )
  }