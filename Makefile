.PHONY: run dist cards

dist:
	mkdir -p docs
	touch docs/_config.yml
	npm run dist
	./cachebust.sh

run:
	npm run start

portfolio:
	@echo "downloading latest data"
	@./node_modules/.bin/gsjson 1xyzQima2NzTkX_47pqE9dJ-aLHgNAHaapsU0p0g6xgU portfolio.json
	@echo "downloaded latest data"
	@cp portfolio.json dist/
