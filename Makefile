TESTS = test/*.test.js
REPORTER = dot

browser: node_modules lib/* components
	@./node_modules/.bin/component-build -s inherits -o .
	@mv build.js super.js

components: node_modules component.json
	@./node_modules/.bin/component-install --dev

build: components lib/*
	@./node_modules/.bin/component-build --dev

test: test-node test-browser

test-node:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require test/bootstrap/node \
		--reporter $(REPORTER) \
		$(TESTS)

test-browser: build
	@./node_modules/karma/bin/karma start \
		--single-run --browsers PhantomJS,Chrome,Firefox

.PHONY: all test clean
