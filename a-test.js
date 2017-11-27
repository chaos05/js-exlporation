var highPass = function highPass(number, cutoff) {
    if (number >= cutoff) {
      return true;
    } else {
      return false;
    }
  },

  lowPass = function lowPass(number, cutoff) {
    if (number <= cutoff) {
      return true;
    } else {
      return false;
    }
  };

QUnit.module('Filter Examples');

QUnit.test('highPass', function(assert) {
  assert.ok(!highPass(2, 5), 'Lower values should not pass.');
  assert.ok(highPass(8, 5), 'Higher values should pass.');
  assert.equal(highPass(3, 3), true, 'Equal values should pass.');
});

QUnit.test('lowPass', function(assert) {
	assert.ok(lowPass(2, 5), 'Lower values should pass.');
	assert.ok(!lowPass(8, 5), 'Higher values should not pass.');
	assert.equal(lowPass(5, 5), true, 'Equal values should pass');
});
// QUnit.test('highPass', function () {
  
  //assert.ok(!highPass(2, 5), 'Lower values should not pass.');
  //ok(!highPass(2, 5), 'Lower values should not pass.');
  // ok(highPass(8, 5), 'Higher values should pass.');
// });

// QUnit.test('lowPass', function () {
//   ok(lowPass(2, 5), 'Lower values should pass.'); // Fails
//   ok(!lowPass(8, 5),
//     'Higher values should not pass.'); // Fails
// });

