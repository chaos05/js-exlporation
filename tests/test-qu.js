QUnit.test('hello test', function(assert) {
	assert.ok(1 == "1", 'Passed!');
});

var switchProto = {
    isOn: function isOn() {
      return this.state;
    },

    toggle: function toggle() {
      this.state = !this.state;
      return this;
    },

    state: false
  },
  switch1 = Object.create(switchProto),
  switch2 = Object.create(switchProto);

QUnit.test('Object.create', function () {
  QUnit.assert.ok(switch1.isOn(),
    '.toggle() works.'
  );

  QUnit.assert.ok(!switch2.isOn(),
    'instance safe.'
  );
});
