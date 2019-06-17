const common = require('../controller/common');

test('test getSource', (done) => {
    common.getSource('https://gist.githubusercontent.com/f97/f79730c387cb6bb279b115423ce53ad6/raw/bda7fb8209cf85c85d3d6319d6bd6815f74084e1/empaty')
        .then(data => {
            expect(data).toBe('test api');
            done();
        });
});
