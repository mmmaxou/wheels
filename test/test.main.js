let assert = chai.assert

describe('General Tests', function () {
  it('Should create a global variable named Voice', function () {
    assert.isObject(Voice)
  })
})

describe('Links detection', function () {
  it('should create an array', function () {
    assert.isArray(Voice.links)
  })
  it('fill the array with all links in the page with [data-voice]=true', function () {
    assert.lengthOf(Voice.links, 1)
  })
});

describe('Voice recognition', function () {
  describe('Chrome', function () {
    it('should detect if the browser have voice recognition', function () {
      assert.isBoolean(Voice.hasVoiceDetection)
    })
    it('should trigger voice detection', function () {

    })
  })
});
