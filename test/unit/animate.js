QUnit.asyncTest("Animate height 0 (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have been triggered");
    })
    .bind('show', function() {
      ok(false, "Show event shoudln't have triggered");
    })
    .animate({ height: 0 }, start);
});
           
QUnit.asyncTest("Animate height hide (hide)", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "height hide is an action");
      equal(e_args.fatal, false, "height hide does not destroy element");
    })
    .bind('show', function(event, e_args) {
      ok(false, "Show event shouldn't have triggered");
    })
    .animate({ height: "hide" }, start);
});

QUnit.asyncTest("Animate height show (show)", function(assert) {
  expect(2);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "height show is an action");
    })
    .bind('hide', function(event, e_args) {
      ok(false, "Hide event shouldn't have triggered");
    })
    .animate({ height: "show" }, start);
});

QUnit.asyncTest("Animate height toggle off (hide)", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "height toggle off is an action");
      equal(e_args.fatal, false, "height toggle off does not destroy element");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .animate({ height: "toggle" }, start);
});

QUnit.asyncTest("Animate height toggle on (show)", function(assert) {
  expect(2);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "height toggle on is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .animate({ height: "toggle" }, start);
});

QUnit.asyncTest("Animate opacity 0 (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have been triggered!");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have been triggered");
    })
    .animate({ opacity: 0 }, start);
});
           
QUnit.asyncTest("Animate opacity hide (hide)", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "opacity hide is an action");
      equal(e_args.fatal, false, "opacity hide does not destroy element");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have been triggered");
    })
    .animate({ opacity: "hide" }, start);
});

QUnit.asyncTest("Animate opacity show (show)", function(assert) {
  expect(2);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "opacity show is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .animate({ opacity: "show" }, start);
});

QUnit.asyncTest("Animate opacity toggle off (hide)", function(assert) {
  expect(3);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "opacity toggle off is an action");
      equal(e_args.fatal, false, "opacity toggle off does not destroy element");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .animate({ opacity: "toggle" }, start);
});

QUnit.asyncTest("Animate opacity toggle on (show)", function(assert) {
  expect(2);
  $('<div style="display: none;"></div>')
    .appendTo("#qunit-fixture")
    .bind('show', function(event, e_args) {
      ok(true, "Event triggered");
      equal(e_args.type, "action", "opacity toggle on is an action");
    })
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have triggered");
    })
    .animate({ opacity: "toggle" }, start);
});

QUnit.asyncTest("Animate opacity 0.3 (no event)", function(assert) {
  expect(0);
  $("<div></div>")
    .appendTo("#qunit-fixture")
    .bind('hide', function() {
      ok(false, "Hide event shouldn't have been triggered");
    })
    .bind('show', function() {
      ok(false, "Show event shouldn't have triggered");
    })
    .animate({ opacity: 0.3 }, start);
});