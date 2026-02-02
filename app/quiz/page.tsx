'use client';

import { useState, useCallback } from 'react';
import { 
  UNIT_NAMES, 
  getRandomQuestions, 
  getQuestionCountByUnit,
  getTotalQuestionCount,
  analyzeAnswerDistribution,
  Question 
} from '@/lib/questionBank';

export default function QuizGenerator() {
  const [selectedUnits, setSelectedUnits] = useState<number[]>([]);
  const [questionCount, setQuestionCount] = useState(10);
  const [difficulty, setDifficulty] = useState<'all' | 'basic' | 'intermediate' | 'advanced'>('all');
  const [includeCSAReferences, setIncludeCSAReferences] = useState(true);
  const [includeAnswerKey, setIncludeAnswerKey] = useState(true);
  const [generatedQuiz, setGeneratedQuiz] = useState<Question[] | null>(null);
  const [quizTitle, setQuizTitle] = useState('CSA B149.1-25 Practice Quiz');
  const [isGenerating, setIsGenerating] = useState(false);

  const questionCounts = getQuestionCountByUnit();
  const totalQuestions = getTotalQuestionCount();

  const toggleUnit = (unit: number) => {
    setSelectedUnits(prev => 
      prev.includes(unit) 
        ? prev.filter(u => u !== unit)
        : [...prev, unit]
    );
  };

  const selectAllUnits = () => {
    setSelectedUnits(Array.from({ length: 24 }, (_, i) => i + 1));
  };

  const clearAllUnits = () => {
    setSelectedUnits([]);
  };

  const selectG3Units = () => {
    // G3 (Units 1-9)
    setSelectedUnits([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  };

  const selectG2Units = () => {
    // G2 (Units 10-24)
    setSelectedUnits([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
  };

  const getAvailableQuestionCount = useCallback(() => {
    const units = selectedUnits.length > 0 ? selectedUnits : Array.from({ length: 24 }, (_, i) => i + 1);
    return units.reduce((sum, unit) => sum + (questionCounts[unit] || 0), 0);
  }, [selectedUnits, questionCounts]);

  const generateQuiz = () => {
    setIsGenerating(true);
    const difficultyFilter = difficulty === 'all' ? undefined : difficulty;
    const units = selectedUnits.length > 0 ? selectedUnits : undefined;
    const questions = getRandomQuestions(questionCount, units, difficultyFilter);
    setGeneratedQuiz(questions);
    setIsGenerating(false);
  };

  const generatePDF = () => {
    if (!generatedQuiz || generatedQuiz.length === 0) return;

    // Create printable HTML content for PDF
    const content = `
<!DOCTYPE html>
<html>
<head>
  <title>${quizTitle}</title>
  <style>
    @media print {
      @page { margin: 0.75in; }
      .no-print { display: none !important; }
      .page-break { page-break-before: always; }
    }
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 8.5in;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      border-bottom: 2px solid #FF8500;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #FF8500;
      margin: 0 0 10px 0;
    }
    .header p {
      color: #666;
      margin: 5px 0;
    }
    .question {
      margin-bottom: 30px;
      page-break-inside: avoid;
    }
    .question-number {
      font-weight: bold;
      color: #FF8500;
    }
    .question-text {
      font-weight: 500;
      margin: 10px 0;
    }
    .options {
      margin-left: 20px;
    }
    .option {
      margin: 8px 0;
      display: flex;
      align-items: flex-start;
    }
    .option-letter {
      min-width: 30px;
      font-weight: bold;
    }
    ${includeCSAReferences ? `.csa-ref {
      font-size: 0.85em;
      color: #0066CC;
      margin-top: 5px;
      font-style: italic;
    }` : ''}
    .answer-key {
      margin-top: 50px;
      padding-top: 30px;
      border-top: 2px solid #FF8500;
    }
    .answer-key h2 {
      color: #FF8500;
    }
    .answer-item {
      margin: 10px 0;
    }
    .answer-correct {
      color: #22c55e;
      font-weight: bold;
    }
    .reasoning {
      font-size: 0.9em;
      color: #666;
      margin-left: 30px;
    }
    .footer {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      text-align: center;
      font-size: 0.85em;
      color: #666;
    }
    .footer-line {
      border-top: 1px solid #999;
      margin: 10px auto;
      width: 80%;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>${quizTitle}</h1>
    <p>CSA B149.1-25 8th Edition Compliant</p>
    <p>${generatedQuiz.length} Questions | ${selectedUnits.length > 0 ? `Units: ${selectedUnits.sort((a,b) => a-b).join(', ')}` : 'All Units'} | Difficulty: ${difficulty === 'all' ? 'Mixed' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</p>
    <p>Name: ___________________________ Date: _______________</p>
  </div>

  ${generatedQuiz.map((q, idx) => `
    <div class="question">
      <div class="question-number">Question ${idx + 1} (Unit ${q.unit} - ${q.unitName})</div>
      <div class="question-text">${q.question}</div>
      <div class="options">
        ${q.options.map((opt, optIdx) => `
          <div class="option">
            <span class="option-letter">${String.fromCharCode(65 + optIdx)}.</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      ${includeCSAReferences && !includeAnswerKey ? `<div class="csa-ref">${q.csaReference}</div>` : ''}
    </div>
  `).join('')}

  ${includeAnswerKey ? `
    <div class="answer-key page-break">
      <h2>Answer Key</h2>
      ${generatedQuiz.map((q, idx) => `
        <div class="answer-item">
          <strong>Q${idx + 1}:</strong> 
          <span class="answer-correct">${String.fromCharCode(65 + q.correct)} - ${q.options[q.correct]}</span>
          <div class="reasoning">${q.reasoning}</div>
          ${includeCSAReferences ? `<div class="csa-ref" style="margin-left: 30px;">${q.csaReference}</div>` : ''}
        </div>
      `).join('')}
    </div>
  ` : ''}

  <div class="footer">
    <div class="footer-line"></div>
    <p>© ${new Date().getFullYear()} Mike Kapin | Personal Professional Educational Resources</p>
    <p>This material is the intellectual property of the author and may not be reproduced, distributed, or used without express written permission.</p>
    <div class="footer-line"></div>
  </div>
</body>
</html>
    `;

    // Open in new window for printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(content);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  const generateHTML = () => {
    if (!generatedQuiz || generatedQuiz.length === 0) return;

    const content = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${quizTitle} - Instructor Version</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #1a1a1a;
      color: #e5e5e5;
      line-height: 1.6;
      padding: 20px;
      max-width: 900px;
      margin: 0 auto;
    }
    .header {
      text-align: center;
      padding: 30px;
      background: #2d2d2d;
      border-radius: 12px;
      margin-bottom: 30px;
      border: 1px solid #FF8500;
    }
    .header h1 {
      color: #FF8500;
      margin: 0 0 10px 0;
    }
    .header p { color: #999; margin: 5px 0; }
    .instructor-badge {
      display: inline-block;
      background: #FF8500;
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.9em;
      margin-top: 10px;
    }
    .question {
      background: #2d2d2d;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      border: 1px solid #404040;
    }
    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    .question-number {
      color: #FF8500;
      font-weight: bold;
      font-size: 1.1em;
    }
    .unit-badge {
      background: #0066CC;
      color: white;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.85em;
    }
    .difficulty-badge {
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.75em;
      text-transform: uppercase;
    }
    .difficulty-basic { background: #22c55e; color: white; }
    .difficulty-intermediate { background: #f59e0b; color: white; }
    .difficulty-advanced { background: #ef4444; color: white; }
    .question-text {
      font-size: 1.05em;
      margin-bottom: 15px;
      color: #fff;
    }
    .options { margin: 15px 0; }
    .option {
      padding: 12px 15px;
      margin: 8px 0;
      background: #1a1a1a;
      border-radius: 8px;
      border: 2px solid transparent;
      display: flex;
      align-items: flex-start;
      transition: all 0.2s;
    }
    .option.correct {
      border-color: #22c55e;
      background: rgba(34, 197, 94, 0.1);
    }
    .option-letter {
      font-weight: bold;
      color: #FF8500;
      margin-right: 12px;
      min-width: 25px;
    }
    .correct-indicator {
      margin-left: auto;
      color: #22c55e;
      font-weight: bold;
    }
    .reasoning {
      background: #1a1a1a;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
      border-left: 4px solid #FF8500;
    }
    .reasoning-title {
      color: #FF8500;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .csa-reference {
      color: #0066CC;
      font-size: 0.9em;
      margin-top: 10px;
      font-style: italic;
    }
    .footer {
      text-align: center;
      padding: 30px;
      margin-top: 40px;
      border-top: 1px solid #404040;
      color: #666;
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      margin-bottom: 30px;
    }
    .stat-card {
      background: #2d2d2d;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
    }
    .stat-value {
      font-size: 1.5em;
      font-weight: bold;
      color: #FF8500;
    }
    .stat-label {
      color: #999;
      font-size: 0.85em;
    }
    .toggle-answers {
      background: #FF8500;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1em;
      margin: 20px auto;
      display: block;
    }
    .toggle-answers:hover { background: #e6730e; }
    .hidden { display: none !important; }
  </style>
</head>
<body>
  <div class="header">
    <h1>${quizTitle}</h1>
    <div class="instructor-badge">📋 Instructor Version</div>
    <p>CSA B149.1-25 8th Edition Compliant</p>
    <p>${generatedQuiz.length} Questions | ${selectedUnits.length > 0 ? `Units: ${selectedUnits.sort((a,b) => a-b).join(', ')}` : 'All Units'}</p>
  </div>

  <div class="stats">
    <div class="stat-card">
      <div class="stat-value">${generatedQuiz.length}</div>
      <div class="stat-label">Total Questions</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${generatedQuiz.filter(q => q.difficulty === 'basic').length}</div>
      <div class="stat-label">Basic</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${generatedQuiz.filter(q => q.difficulty === 'intermediate').length}</div>
      <div class="stat-label">Intermediate</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${generatedQuiz.filter(q => q.difficulty === 'advanced').length}</div>
      <div class="stat-label">Advanced</div>
    </div>
  </div>

  <button class="toggle-answers" onclick="toggleAnswers()">Toggle Answer Visibility</button>

  ${generatedQuiz.map((q, idx) => `
    <div class="question">
      <div class="question-header">
        <span class="question-number">Question ${idx + 1}</span>
        <span class="unit-badge">Unit ${q.unit}</span>
        <span class="difficulty-badge difficulty-${q.difficulty}">${q.difficulty}</span>
      </div>
      <div class="question-text">${q.question}</div>
      <div class="options">
        ${q.options.map((opt, optIdx) => `
          <div class="option ${optIdx === q.correct ? 'correct' : ''}">
            <span class="option-letter">${String.fromCharCode(65 + optIdx)}.</span>
            <span>${opt}</span>
            ${optIdx === q.correct ? '<span class="correct-indicator answer-content">✓ CORRECT</span>' : ''}
          </div>
        `).join('')}
      </div>
      <div class="reasoning answer-content">
        <div class="reasoning-title">💡 Explanation</div>
        <p>${q.reasoning}</p>
        <div class="csa-reference">📖 ${q.csaReference}</div>
      </div>
    </div>
  `).join('')}

  <div class="footer">
    <p>© ${new Date().getFullYear()} Mike Kapin | Personal Professional Educational Resources</p>
    <p>This material is the intellectual property of the author and may not be reproduced, distributed, or used without express written permission.</p>
  </div>

  <script>
    let answersVisible = true;
    function toggleAnswers() {
      answersVisible = !answersVisible;
      document.querySelectorAll('.answer-content').forEach(el => {
        el.classList.toggle('hidden', !answersVisible);
      });
      document.querySelectorAll('.option.correct').forEach(el => {
        el.style.borderColor = answersVisible ? '#22c55e' : 'transparent';
        el.style.background = answersVisible ? 'rgba(34, 197, 94, 0.1)' : '#1a1a1a';
      });
    }
  </script>
</body>
</html>
    `;

    // Download as HTML file
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${quizTitle.replace(/\s+/g, '_')}_Instructor.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-accent-orange mb-4">
          Quiz Generator
        </h1>
        <p className="text-xl text-brand-text-secondary mb-4">
          Create custom quizzes from the CSA B149.1-25 question bank
        </p>
        <div className="inline-flex items-center space-x-2 bg-brand-accent-orange/10 text-brand-accent-orange px-4 py-2 rounded-lg text-sm">
          <span>📚 {totalQuestions} Questions Available</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quiz Title */}
          <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-brand-text-primary mb-4">Quiz Title</h2>
            <input
              type="text"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              className="w-full bg-brand-bg-tertiary border border-brand-border rounded-lg px-4 py-3 text-brand-text-primary focus:outline-none focus:border-brand-accent-orange"
              placeholder="Enter quiz title..."
            />
          </div>

          {/* Unit Selection */}
          <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-brand-text-primary">Select Units</h2>
              <div className="flex gap-2">
                <button
                  onClick={selectAllUnits}
                  className="px-3 py-1 text-sm bg-brand-bg-tertiary hover:bg-brand-bg-hover rounded-lg text-brand-text-secondary transition"
                >
                  All
                </button>
                <button
                  onClick={selectG3Units}
                  className="px-3 py-1 text-sm bg-brand-bg-tertiary hover:bg-brand-bg-hover rounded-lg text-brand-text-secondary transition"
                >
                  G3 (1-9)
                </button>
                <button
                  onClick={selectG2Units}
                  className="px-3 py-1 text-sm bg-brand-bg-tertiary hover:bg-brand-bg-hover rounded-lg text-brand-text-secondary transition"
                >
                  G2 (10-24)
                </button>
                <button
                  onClick={clearAllUnits}
                  className="px-3 py-1 text-sm bg-brand-bg-tertiary hover:bg-brand-bg-hover rounded-lg text-brand-text-secondary transition"
                >
                  Clear
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {Object.entries(UNIT_NAMES).map(([num, name]) => {
                const unitNum = parseInt(num);
                const count = questionCounts[unitNum] || 0;
                const isSelected = selectedUnits.includes(unitNum);
                return (
                  <button
                    key={unitNum}
                    onClick={() => toggleUnit(unitNum)}
                    className={`p-3 rounded-lg text-left text-sm transition border ${
                      isSelected
                        ? 'bg-brand-accent-orange/20 border-brand-accent-orange text-brand-text-primary'
                        : 'bg-brand-bg-tertiary border-transparent hover:bg-brand-bg-hover text-brand-text-secondary'
                    }`}
                  >
                    <div className="font-semibold">Unit {unitNum}</div>
                    <div className="text-xs truncate">{name}</div>
                    <div className="text-xs mt-1 opacity-70">{count} Q</div>
                  </button>
                );
              })}
            </div>
            {selectedUnits.length > 0 && (
              <p className="mt-4 text-sm text-brand-text-secondary">
                Selected: {selectedUnits.length} units ({getAvailableQuestionCount()} questions available)
              </p>
            )}
          </div>

          {/* Options */}
          <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-brand-text-primary mb-4">Quiz Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Question Count */}
              <div>
                <label className="block text-brand-text-secondary mb-2">Number of Questions</label>
                <input
                  type="number"
                  min="1"
                  max={getAvailableQuestionCount()}
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Math.min(parseInt(e.target.value) || 1, getAvailableQuestionCount()))}
                  className="w-full bg-brand-bg-tertiary border border-brand-border rounded-lg px-4 py-3 text-brand-text-primary focus:outline-none focus:border-brand-accent-orange"
                />
                <p className="text-xs text-brand-text-tertiary mt-1">
                  Max: {getAvailableQuestionCount()} questions
                </p>
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-brand-text-secondary mb-2">Difficulty Level</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as 'all' | 'basic' | 'intermediate' | 'advanced')}
                  className="w-full bg-brand-bg-tertiary border border-brand-border rounded-lg px-4 py-3 text-brand-text-primary focus:outline-none focus:border-brand-accent-orange"
                >
                  <option value="all">All Difficulties</option>
                  <option value="basic">Basic Only</option>
                  <option value="intermediate">Intermediate Only</option>
                  <option value="advanced">Advanced Only</option>
                </select>
              </div>

              {/* CSA References */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="csaRefs"
                  checked={includeCSAReferences}
                  onChange={(e) => setIncludeCSAReferences(e.target.checked)}
                  className="w-5 h-5 rounded border-brand-border bg-brand-bg-tertiary text-brand-accent-orange focus:ring-brand-accent-orange"
                />
                <label htmlFor="csaRefs" className="ml-3 text-brand-text-secondary">
                  Include CSA Code References
                </label>
              </div>

              {/* Answer Key */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="answerKey"
                  checked={includeAnswerKey}
                  onChange={(e) => setIncludeAnswerKey(e.target.checked)}
                  className="w-5 h-5 rounded border-brand-border bg-brand-bg-tertiary text-brand-accent-orange focus:ring-brand-accent-orange"
                />
                <label htmlFor="answerKey" className="ml-3 text-brand-text-secondary">
                  Include Answer Key in PDF
                </label>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateQuiz}
            disabled={isGenerating}
            className="w-full py-4 bg-brand-accent-orange hover:bg-brand-accent-orange-hover text-white font-semibold rounded-lg transition text-lg disabled:opacity-50"
          >
            {isGenerating ? 'Generating...' : '🎲 Generate Quiz'}
          </button>
        </div>

        {/* Preview/Export Panel */}
        <div className="space-y-6">
          <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-6 sticky top-24">
            <h2 className="text-lg font-semibold text-brand-text-primary mb-4">Generated Quiz</h2>
            
            {generatedQuiz ? (
              <div className="space-y-4">
                <div className="bg-brand-bg-tertiary rounded-lg p-4">
                  <p className="text-brand-accent-orange font-semibold">{quizTitle}</p>
                  <p className="text-sm text-brand-text-secondary mt-1">
                    {generatedQuiz.length} questions generated
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                      Basic: {generatedQuiz.filter(q => q.difficulty === 'basic').length}
                    </span>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                      Inter: {generatedQuiz.filter(q => q.difficulty === 'intermediate').length}
                    </span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                      Adv: {generatedQuiz.filter(q => q.difficulty === 'advanced').length}
                    </span>
                  </div>
                </div>

                {/* Answer Distribution Analysis */}
                {(() => {
                  const analysis = analyzeAnswerDistribution(generatedQuiz);
                  return (
                    <div className="bg-brand-bg-tertiary rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-brand-text-primary text-sm">📊 Answer Distribution</p>
                        <span className={`text-xs px-2 py-1 rounded ${
                          analysis.isBalanced 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {analysis.isBalanced ? '✓ Balanced' : '⚠ Check Balance'} ({analysis.balanceScore}/100)
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-xs">
                        {analysis.distribution.map(({ answer, count, percentage }) => (
                          <div key={answer} className="text-center">
                            <div className={`rounded px-1 py-1 ${
                              percentage >= 15 && percentage <= 35
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              <div className="font-bold">{answer}</div>
                              <div>{count} ({percentage}%)</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {!analysis.isBalanced && (
                        <p className="text-xs text-brand-text-tertiary mt-2">
                          💡 Tip: Try generating again for better balance, or increase question count
                        </p>
                      )}
                    </div>
                  );
                })()}

                {/* Export Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={generatePDF}
                    className="w-full py-3 bg-brand-accent-blue hover:bg-brand-accent-blue-hover text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
                  >
                    📄 Download PDF (Print)
                  </button>
                  <button
                    onClick={generateHTML}
                    className="w-full py-3 bg-brand-bg-tertiary hover:bg-brand-bg-hover text-brand-text-primary font-semibold rounded-lg transition border border-brand-border flex items-center justify-center gap-2"
                  >
                    📋 Download HTML (Instructor)
                  </button>
                </div>

                {/* Preview */}
                <div className="max-h-96 overflow-y-auto space-y-2">
                  {generatedQuiz.slice(0, 5).map((q, idx) => (
                    <div key={q.id} className="bg-brand-bg-tertiary rounded-lg p-3 text-sm">
                      <div className="flex justify-between items-start">
                        <span className="text-brand-accent-orange font-semibold">Q{idx + 1}</span>
                        <span className="text-xs text-brand-text-tertiary">Unit {q.unit}</span>
                      </div>
                      <p className="text-brand-text-secondary mt-1 line-clamp-2">{q.question}</p>
                    </div>
                  ))}
                  {generatedQuiz.length > 5 && (
                    <p className="text-center text-brand-text-tertiary text-sm">
                      +{generatedQuiz.length - 5} more questions...
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center text-brand-text-secondary py-8">
                <p className="text-4xl mb-4">📝</p>
                <p>Configure options and click Generate Quiz</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-12 bg-brand-bg-secondary border border-brand-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-brand-text-primary mb-3">📚 About This Quiz Generator</h3>
        <div className="grid md:grid-cols-2 gap-4 text-brand-text-secondary text-sm">
          <div>
            <p className="mb-2">✓ All questions aligned to CSA B149.1-25 (8th Edition)</p>
            <p className="mb-2">✓ Covers all 24 CSA Units for G2 and G3 certification</p>
            <p className="mb-2">✓ Three difficulty levels: Basic, Intermediate, Advanced</p>
          </div>
          <div>
            <p className="mb-2">✓ PDF format for student printouts and tests</p>
            <p className="mb-2">✓ HTML format for instructor review with answer key</p>
            <p className="mb-2">✓ CSA code references included for study</p>
          </div>
        </div>
      </div>
    </div>
  );
}