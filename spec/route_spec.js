var request = require("request");
var rootPath = "http://localhost:3000/";
var albums;

describe("JSON Routes", function() {
  describe("/albums.json", function() {
    it("returns an array of albums", function(done) {
      request(rootPath + 'albums.json', function(error, response, body) {
        albums = JSON.parse(body);
        expect(albums[0].artist).toBeDefined();
        // expect(true).toBe(true);
        done();
      });
    });
  });

  describe("/albums/<album>.json", function() {
    it("returns an array of tracks", function(done) {
      request(rootPath + 'albums/' + albums[0].title + ".json", function(error, response, body) {
        expect(JSON.parse(body)[0].title).toBeDefined();
        done();
      });
    });
  });
});