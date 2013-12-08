TESTS = test/*.test.js
REPORTER = dot

browser: node_modules lib/* components
	@./node_modules/.bin/component-build -s inherits -o .
	@mv build.js super.js

components: node_modules component.json
	@./node_modules/.bin/component-install --dev

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(TESTS)

clean:
	rm -f examples/tmp/*

.PHONY: all test clean
