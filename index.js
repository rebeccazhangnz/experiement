const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const random = require("random");

const FILE_PATH = "./data.json";

const addCommit = (numberOfCommits) => {
	if (numberOfCommits === 0) return simpleGit().push();
	const x = random.int(0, 27);
	const y = random.int(0, 6);

	const DATE = moment().subtract(180, "d").add(x, "w").add(y, "d").format();

	const data = {
		date: DATE,
	};

	jsonfile.writeFile(FILE_PATH, data, () => {
		simpleGit()
			.add([FILE_PATH])
			.commit(
				DATE,
				{
					"--date": DATE,
				},
				addCommit.bind(this, --numberOfCommits)
			);
	});
};

// addCommit(100);
