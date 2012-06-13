TESTS = test/*.test.js
REPORTER = dot

make:
	@node support/build

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(TESTS)

clean:
	rm -f examples/tmp/*

.PHONY: all test clean
