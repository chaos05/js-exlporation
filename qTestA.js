var highPass = function highPass(number, cutoff) {
    if (number >= cutoff) {
      return true;
    } else {
      return false;
    }
  },

  lowPass = function lowPass(number, cutoff) {
    if (number >= cutoff) {
      return true;
    } else {
      return false;
    }
  };


test('highPass', function () {
  ok(!highPass(2, 5), 'Lower values should not pass.');
  ok(highPass(8, 5), 'Higher values should pass.');
});

test('lowPass', function () {
  ok(lowPass(2, 5), 'Lower values should pass.'); // Fails
  ok(!lowPass(8, 5),
    'Higher values should not pass.'); // Fails
});