// Quick test script for answer distribution fixes
// Run with: node test-fixes.js

const { analyzeAnswerDistribution, getRandomQuestions } = require('./lib/questionBank.ts');

// Test the new balance analysis
function testAnswerDistribution() {
  console.log('🧪 Testing Answer Distribution Algorithm\n');
  
  // Test cases with different question counts
  const testCases = [10, 15, 20, 25, 30];
  
  testCases.forEach(count => {
    console.log(`\n📊 Testing ${count} questions:`);
    
    // Generate 3 different quizzes to test consistency  
    for (let trial = 1; trial <= 3; trial++) {
      const questions = getRandomQuestions(count);
      const analysis = analyzeAnswerDistribution(questions);
      
      console.log(`  Trial ${trial}: ${analysis.isBalanced ? '✅' : '⚠️'} Balance Score: ${analysis.balanceScore}/100`);
      console.log(`    Distribution: ${analysis.distribution.map(d => `${d.answer}:${d.percentage}%`).join(', ')}`);
    }
  });
  
  console.log('\n🎯 Test completed! Check that balance scores are consistently >70 and distributions are reasonably even.\n');
}

// Run if called directly
if (require.main === module) {
  testAnswerDistribution();
}