describe("A suite", function() {
  beforeEach(function() {
    loadFixtures('filter.html');
  });

  it("contains spec with an expectation", function() {
    expect(testy()).toBe(true);
  });
});
