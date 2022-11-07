import getData from "../../utils/getData";

describe('Fetch API', function () {
    beforeEach(() => {
        fetch.resetMocks()
    })

    test('Call Api should return data', () => {
        fetch.mockResponseOnce(JSON.stringify({data: '12345'}))

        getData('https://google.com.ar')
            .then(response => {
                expect(response.data).toEqual("12345")
            })
    })
});